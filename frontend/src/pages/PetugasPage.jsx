import { useEffect, useState, useRef, useCallback } from "react";
import { Search, UserRound, UserX, Loader2 } from "lucide-react";

import axiosInstance from "../utils/axiosInstance";
import "../styles/PetugasPage.css";

export default function PetugasPage() {
  const [petugas, setPetugas] = useState([]);

  const [pagination, setPagination] = useState({
    currentPage: 1,
    limit: 30,
    totalData: 0,
    totalPage: 1,
  });

  const [page, setPage] = useState(1);

  const [query, setQuery] = useState("");

  const [status, setStatus] = useState("idle");

  const [errorMsg, setErrorMsg] = useState("");

  const inputRef = useRef(null);

  // =========================
  // GET ALL PETUGAS
  // =========================

  const getAllPetugas = useCallback(async (currentPage = 1) => {
    try {
      setStatus("loading");

      const response = await axiosInstance.get(
        `/api/petugas?page=${currentPage}&limit=30`,
      );

      const result = response.data.data;

      setPetugas(result.data || []);

      setPagination(result.pagination);

      setStatus("found");
    } catch (error) {
      setPetugas([]);

      setErrorMsg(
        error.response?.data?.message || "Gagal mengambil data petugas",
      );

      setStatus("error");
    }
  }, []);

  // =========================
  // PAGINATION
  // =========================

  useEffect(() => {
    if (!query.trim()) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      getAllPetugas(page);
    }
  }, [page, query, getAllPetugas]);

  // =========================
  // SEARCH
  // =========================

  useEffect(() => {
    const keyword = query.trim();

    let cancelled = false;

    const delay = setTimeout(async () => {
      if (!keyword) {
        setPage(1);

        return;
      }

      if (keyword.length < 3) {
        setPetugas([]);

        setPagination({
          currentPage: 1,

          limit: 30,

          totalData: 0,

          totalPage: 1,
        });

        setErrorMsg("Masukkan minimal 3 karakter nama petugas");

        setStatus("empty");

        return;
      }

      try {
        setStatus("loading");

        const response = await axiosInstance.post(
          "/api/search-petugas?page=1&limit=30",

          {
            namaPetugas: keyword,
          },
        );

        if (!cancelled) {
          const result = response.data.data;

          setPetugas(result.data || []);

          setPagination(result.pagination);

          setStatus("found");
        }
      } catch (error) {
        if (!cancelled) {
          setPetugas([]);

          setPagination({
            currentPage: 1,

            limit: 30,

            totalData: 0,

            totalPage: 1,
          });

          setErrorMsg(
            error.response?.data?.message || "Petugas tidak ditemukan",
          );

          setStatus("empty");
        }
      }
    }, 400);

    return () => {
      cancelled = true;

      clearTimeout(delay);
    };
  }, [query]);

  // =========================
  // CLEAR SEARCH
  // =========================

  const handleClear = () => {
    setQuery("");

    setPage(1);

    setErrorMsg("");

    inputRef.current?.focus();
  };

  return (
    <div className="dashboard-page">
      {/* SEARCH */}

      <section className="dashboard-section">
        <h2 className="section-title">Pencarian Petugas</h2>

        <div className="petugas-search">
          <Search size={18} />

          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari nama petugas..."
          />

          {status === "loading" && <Loader2 size={18} className="spin" />}

          {query && status !== "loading" && (
            <button onClick={handleClear}>×</button>
          )}
        </div>
      </section>

      {/* ERROR / EMPTY MESSAGE */}

      {(status === "error" || status === "empty") && (
        <div className="petugas-state">
          <UserX size={44} />

          <p>{errorMsg}</p>
        </div>
      )}

      {/* TABLE */}

      <section className="dashboard-section">
        <h2 className="section-title">Daftar Petugas</h2>

        {petugas.length > 0 ? (
          <div className="petugas-table-wrapper">
            <table className="petugas-table">
              <thead>
                <tr>
                  <th>#</th>

                  <th>NIP</th>

                  <th>Nama Petugas</th>
                </tr>
              </thead>

              <tbody>
                {petugas.map((item, index) => (
                  <tr key={item.nip}>
                    <td>
                      {(pagination.currentPage - 1) * pagination.limit +
                        index +
                        1}
                    </td>

                    <td>
                      <span className="petugas-badge">
                        <UserRound size={14} />

                        {item.nip || "-"}
                      </span>
                    </td>

                    <td className="nama-petugas">{item.nama || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          status !== "empty" && (
            <div className="petugas-state">
              <UserX size={44} />

              <p>Data tidak tersedia</p>
            </div>
          )
        )}

        {/* PAGINATION */}

        <div className="pagination">
          <button
            disabled={pagination.currentPage <= 1}
            onClick={() => setPage(page - 1)}
          >
            Previous
          </button>

          <span>
            Page {pagination.currentPage}
            {" / "}
            {pagination.totalPage}
          </span>

          <button
            disabled={pagination.currentPage >= pagination.totalPage}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
}
