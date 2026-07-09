import { useState, useRef, useEffect } from "react";
import { Search, BedDouble, UserX, Loader2 } from "lucide-react";
import axiosInstance from "../utils/axiosInstance";
import "../styles/RanapPage.css";

// highlight teks yang match query
function Highlight({ text, query }) {
  if (!query.trim()) return text;
  const regex = new RegExp(
    `(${query.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
    "gi",
  );
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="ranap-highlight">
        {part}
      </mark>
    ) : (
      part
    ),
  );
}

export default function RanapPage() {
  const [query, setQuery] = useState("");
  const [pasien, setPasien] = useState([]);
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const nama = query.trim();
    let cancelled = false;

    const delay = setTimeout(async () => {
      if (!nama) {
        if (!cancelled) {
          setPasien([]);
          setStatus("idle");
          setErrorMsg("");
        }

        return;
      }

      // minimal 3 karakter
      if (nama.length < 3) {
        if (!cancelled) {
          setPasien([]);
          setStatus("idle");
          setErrorMsg("Masukkan minimal 3 karakter nama pasien.");
        }

        return;
      }

      if (!cancelled) {
        setStatus("loading");
      }

      try {
        const res = await axiosInstance.post("/ranap/filter", {
          namaPasien: nama,
        });

        if (!cancelled) {
          setPasien(res.data.data);
          setStatus("found");
        }
      } catch (err) {
        if (!cancelled) {
          const msg = err.response?.data?.message;

          setPasien([]);

          if (err.response?.status === 404) {
            setErrorMsg(msg || "Pasien tidak ditemukan.");

            setStatus("empty");
          } else {
            setErrorMsg(msg || "Gagal mengambil data. Coba lagi.");

            setStatus("error");
          }
        }
      }
    }, 400);

    return () => {
      cancelled = true;
      clearTimeout(delay);
    };
  }, [query]);

  const handleClear = () => {
    setQuery("");
    inputRef.current?.focus();
  };

  const showTable = pasien.length > 0;

  return (
    <div className="ranap-page">
      {/* Header */}
      <div className="ranap-header">
        <p className="eyebrow">Rawat Inap</p>
        <h1>Pasien Rawat Inap</h1>
        <p>
          Cari pasien yang sedang menjalani rawat inap di RSU Tumpaan Medical
          Center
        </p>
      </div>

      {/* Search */}
      <div className="ranap-search-bar">
        <div className="ranap-input-wrap">
          <Search className="ranap-input-icon" size={17} />
          <input
            ref={inputRef}
            type="text"
            placeholder="Nama pasien..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="ranap-input"
            autoComplete="off"
            autoFocus
          />
          {status === "loading" && (
            <Loader2 size={15} className="ranap-input-spinner" />
          )}
          {query && status !== "loading" && (
            <button
              type="button"
              className="ranap-clear-btn"
              onClick={handleClear}
              aria-label="Hapus pencarian"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Empty states — hanya tampil kalau tabel tidak ada */}
      {!showTable && status === "idle" && (
        <div className="ranap-state">
          <BedDouble size={44} />
          <p>Masukkan nama pasien untuk memulai pencarian</p>
        </div>
      )}

      {!showTable && status === "loading" && (
        <div className="ranap-state">
          <Loader2
            size={40}
            className="ranap-spinner"
            style={{ opacity: 0.5 }}
          />
          <p>Mencari data pasien...</p>
        </div>
      )}

      {!showTable && status === "empty" && (
        <div className="ranap-state">
          <UserX size={44} />
          <p>{errorMsg}</p>
        </div>
      )}

      {!showTable && status === "error" && (
        <div className="ranap-state is-error">
          <UserX size={44} />
          <p>{errorMsg}</p>
        </div>
      )}

      {/* Tabel — tetap tampil saat loading, cukup fade */}
      {showTable && (
        <div
          className={`ranap-table-section ${status === "loading" ? "ranap-table-fading" : ""}`}
        >
          <p className="ranap-result-label">
            Ditemukan <strong>{pasien.length} pasien</strong> aktif rawat inap
          </p>
          <div className="ranap-table-wrap">
            <table className="ranap-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>No. Rawat</th>
                  <th>No. RM</th>
                  <th>Nama Pasien</th>
                  <th>Kode Kamar</th>
                  <th>Tgl Masuk</th>
                  <th>Jam Masuk</th>
                </tr>
              </thead>
              <tbody>
                {pasien.map((p, i) => (
                  <tr key={p.nomor_rawat ?? i}>
                    <td className="ranap-td-num">{i + 1}</td>
                    <td>
                      <span className="ranap-badge">{p.nomor_rawat}</span>
                    </td>
                    <td>{p.nomor_rekam_medis}</td>
                    <td className="ranap-td-nama">
                      <Highlight text={p.nama_pasien} query={query} />
                    </td>
                    <td>{p.kd_kamar}</td>
                    <td>{formatDate(p.tgl_masuk)}</td>
                    <td>{p.jam_masuk ?? "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

function formatDate(val) {
  if (!val) return "-";
  const d = new Date(val);
  if (isNaN(d)) return val;
  return d.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
