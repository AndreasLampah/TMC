import {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
  Fragment,
} from "react";
import axios from "axios";
import axiosInstance from "../utils/axiosInstance";
import "../styles/AttendancePage.css";

// jam batas dianggap "Terlambat".
const LATE_THRESHOLD = "08:00";

/* ==========================================
   HELPERS
========================================== */

const useDebouncedValue = (value, delay = 400) => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
};

const todayISO = () => new Date().toISOString().slice(0, 10);

const timeOnly = (checktime) => {
  if (!checktime) return null;
  const parts = checktime.split(" ");
  return parts[1] ? parts[1].slice(0, 5) : null;
};

const highlightMatch = (text, query) => {
  if (!query || !text) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;

  return (
    <>
      {text.slice(0, idx)}
      <mark>{text.slice(idx, idx + query.length)}</mark>
      {text.slice(idx + query.length)}
    </>
  );
};

const groupByEmployee = (rawLogs) => {
  const map = new Map();

  for (const log of rawLogs) {
    const key = log.USERID;
    if (!map.has(key)) {
      map.set(key, {
        userId: log.USERID,
        name: log.Name,
        badge: log.Badgenumber,
        allChecks: [],
      });
    }
    map.get(key).allChecks.push(log);
  }

  return Array.from(map.values())
    .map((emp) => {
      const sorted = [...emp.allChecks].sort((a, b) =>
        a.CHECKTIME.localeCompare(b.CHECKTIME),
      );

      const checkIns = sorted.filter((c) => c.CHECKTYPE === "I");
      const checkOuts = sorted.filter((c) => c.CHECKTYPE === "O");

      const jamMasuk = checkIns.length ? timeOnly(checkIns[0].CHECKTIME) : null;
      const jamKeluar = checkOuts.length
        ? timeOnly(checkOuts[checkOuts.length - 1].CHECKTIME)
        : null;

      const belumCheckout = Boolean(jamMasuk) && !jamKeluar;
      const terlambat = Boolean(jamMasuk) && jamMasuk > LATE_THRESHOLD;

      let statusLabel = "Hadir";
      let statusClass = "status-hadir";
      if (terlambat) {
        statusLabel = "Terlambat";
        statusClass = "status-terlambat";
      } else if (!jamMasuk) {
        statusLabel = "Tanpa Scan Masuk";
        statusClass = "status-tidak-hadir";
      }

      return {
        ...emp,
        allChecks: sorted,
        jamMasuk,
        jamKeluar,
        belumCheckout,
        statusLabel,
        statusClass,
      };
    })
    .sort((a, b) => (a.name || "").localeCompare(b.name || ""));
};

/* ==========================================
   ICONS
========================================== */

const IconCalendarOff = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7" />
    <path d="M16 2v4M8 2v4M3 10h18" />
    <path d="m17 17 4 4m0-4-4 4" />
  </svg>
);

const IconUsers = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconClock = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const IconAlert = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <path d="M12 9v4M12 17h.01" />
  </svg>
);

const IconChevron = ({ open }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      transform: open ? "rotate(90deg)" : "rotate(0deg)",
      transition: "transform 0.15s ease",
    }}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

/* ==========================================
   PAGE
========================================== */

const AttendancePage = () => {
  const [date, setDate] = useState(todayISO());
  const [searchInput, setSearchInput] = useState("");
  const debouncedSearch = useDebouncedValue(searchInput, 350);

  const [rawLogs, setRawLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [emptyMessage, setEmptyMessage] = useState("");
  const [expandedId, setExpandedId] = useState(null);

  const abortRef = useRef(null);

  const fetchAttendance = useCallback(async (targetDate) => {
    if (abortRef.current) abortRef.current.abort("superseded by new request");
    const controller = new AbortController();
    abortRef.current = controller;

    setLoading(true);
    setError(null);

    try {
      const res = await axiosInstance.get("/api/presensi", {
        params: targetDate ? { date: targetDate } : undefined,
        signal: controller.signal,
      });

      if (typeof res.data === "string") {
        throw new Error(
          "Server tidak mengembalikan JSON — cek VITE_API_URL / proxy ke backend Express.",
        );
      }

      const json = res.data;

      if (!json.success) {
        throw new Error(json.message || "Gagal mengambil data presensi");
      }

      setRawLogs(json.data || []);
      setEmptyMessage(json.data.length === 0 ? json.message : "");
    } catch (err) {
      if (axios.isCancel(err) || err.code === "ERR_CANCELED") return;

      const message =
        err.response?.data?.message ||
        err.message ||
        "Terjadi kesalahan pada server";
      setError(message);
      setRawLogs([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchAttendance(date);
    return () => abortRef.current?.abort("component unmounted / date changed");
  }, [date, fetchAttendance]);

  const employees = useMemo(() => groupByEmployee(rawLogs), [rawLogs]);

  const filteredEmployees = useMemo(() => {
    if (!debouncedSearch.trim()) return employees;
    const q = debouncedSearch.trim().toLowerCase();
    return employees.filter(
      (e) =>
        (e.name || "").toLowerCase().includes(q) ||
        String(e.badge || "")
          .toLowerCase()
          .includes(q),
    );
  }, [employees, debouncedSearch]);

  const summary = useMemo(() => {
    const tepatWaktu = employees.filter(
      (e) => e.statusClass === "status-hadir",
    ).length;
    const terlambat = employees.filter(
      (e) => e.statusClass === "status-terlambat",
    ).length;
    const belumCheckout = employees.filter((e) => e.belumCheckout).length;
    return { total: employees.length, tepatWaktu, terlambat, belumCheckout };
  }, [employees]);

  const handleReset = () => {
    setDate(todayISO());
    setSearchInput("");
    setExpandedId(null);
  };

  const toggleExpand = (userId) => {
    setExpandedId((prev) => (prev === userId ? null : userId));
  };

  return (
    <div className="attendance-page">
      {error && (
        <div className="connection-error">
          <span className="dot" />
          {error}
        </div>
      )}

      <div className="dashboard-header">
        <span className="eyebrow">SIMRS &middot; Kepegawaian</span>
        <h1>Presensi Pegawai</h1>
      </div>

      {/* ---- toolbar ---- */}
      <div className="attendance-toolbar">
        <div className="attendance-field">
          <label htmlFor="attendance-date">Tanggal</label>
          <input
            id="attendance-date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="attendance-field search-field">
          <label htmlFor="attendance-search">Cari nama / no. badge</label>
          <input
            id="attendance-search"
            type="text"
            placeholder="Ketik nama atau nomor badge..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="attendance-reset-btn"
          onClick={handleReset}
        >
          Reset filter
        </button>
      </div>

      {/* ---- summary cards ---- */}
      <div className="attendance-summary">
        <div className="pasien-card">
          <div className="icon-wrap">
            <IconUsers />
          </div>
          <div className="info">
            <span className="title">Total Pegawai Presensi</span>
            <span className="value">{loading ? "-" : summary.total}</span>
          </div>
        </div>

        <div className="pasien-card">
          <div className="icon-wrap">
            <IconClock />
          </div>
          <div className="info">
            <span className="title">Tepat Waktu</span>
            <span className="value">{loading ? "-" : summary.tepatWaktu}</span>
          </div>
        </div>

        <div className="pasien-card variant-poli">
          <div className="icon-wrap">
            <IconAlert />
          </div>
          <div className="info">
            <span className="title">Terlambat</span>
            <span className="value">{loading ? "-" : summary.terlambat}</span>
          </div>
        </div>

        <div className="pasien-card variant-vital">
          <div className="icon-wrap">
            <IconCalendarOff />
          </div>
          <div className="info">
            <span className="title">Belum Checkout</span>
            <span className="value">
              {loading ? "-" : summary.belumCheckout}
            </span>
          </div>
        </div>
      </div>

      {/* ---- table ---- */}
      <div className="dashboard-section">
        <div className="section-title">Daftar Presensi</div>

        <div className="attendance-table-card">
          {loading ? (
            <table className="attendance-table">
              <thead>
                <tr>
                  <th />
                  <th>Nama</th>
                  <th>Badge</th>
                  <th>Jam Masuk</th>
                  <th>Jam Keluar</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 6 }).map((_, i) => (
                  <tr className="attendance-skel-row" key={i}>
                    <td>
                      <div
                        className="skeleton attendance-skel-bar"
                        style={{ width: "16px" }}
                      />
                    </td>
                    <td>
                      <div
                        className="skeleton attendance-skel-bar"
                        style={{ width: "70%" }}
                      />
                    </td>
                    <td>
                      <div
                        className="skeleton attendance-skel-bar"
                        style={{ width: "40px" }}
                      />
                    </td>
                    <td>
                      <div
                        className="skeleton attendance-skel-bar"
                        style={{ width: "40px" }}
                      />
                    </td>
                    <td>
                      <div
                        className="skeleton attendance-skel-bar"
                        style={{ width: "40px" }}
                      />
                    </td>
                    <td>
                      <div
                        className="skeleton attendance-skel-bar"
                        style={{ width: "80px" }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : filteredEmployees.length === 0 ? (
            <div className="attendance-empty">
              <div className="icon-wrap">
                <IconCalendarOff />
              </div>
              <h4>Tidak ada data presensi</h4>
              <p>
                {debouncedSearch
                  ? `Tidak ditemukan hasil untuk "${debouncedSearch}" pada ${date}.`
                  : emptyMessage ||
                    `Belum ada presensi tercatat untuk tanggal ${date}.`}
              </p>
            </div>
          ) : (
            <table className="attendance-table">
              <thead>
                <tr>
                  <th />
                  <th>Nama</th>
                  <th>Badge</th>
                  <th>Jam Masuk</th>
                  <th>Jam Keluar</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map((emp) => {
                  const isOpen = expandedId === emp.userId;
                  return (
                    <Fragment key={emp.userId}>
                      <tr
                        onClick={() => toggleExpand(emp.userId)}
                        style={{ cursor: "pointer" }}
                      >
                        <td style={{ width: 24 }}>
                          <IconChevron open={isOpen} />
                        </td>
                        <td className="attendance-name">
                          {highlightMatch(emp.name, debouncedSearch)}
                        </td>
                        <td className="attendance-unit">
                          {highlightMatch(String(emp.badge), debouncedSearch)}
                        </td>
                        <td>{emp.jamMasuk || "-"}</td>
                        <td>
                          {emp.jamKeluar ||
                            (emp.belumCheckout ? "Belum keluar" : "-")}
                        </td>
                        <td>
                          <span className={`status-badge ${emp.statusClass}`}>
                            {emp.statusLabel}
                          </span>
                        </td>
                      </tr>

                      {isOpen && (
                        <tr>
                          <td />
                          <td colSpan={5} style={{ padding: "0 20px 16px" }}>
                            <div className="attendance-raw-log">
                              {emp.allChecks.map((c, i) => (
                                <span key={i} className="attendance-raw-chip">
                                  {c.CHECKTYPE === "I" ? "Masuk" : "Keluar"}{" "}
                                  &middot; {timeOnly(c.CHECKTIME)}
                                </span>
                              ))}
                            </div>
                          </td>
                        </tr>
                      )}
                    </Fragment>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default AttendancePage;
