import { useEffect, useState, useCallback } from "react";
import axiosInstance from "../utils/axiosInstance";

import {
  Search,
  X,
  Loader2,
  ChevronLeft,
  ChevronRight,
  UserRound,
  Users,
} from "lucide-react";

import "../styles/PetugasPage.css";

const highlightMatch = (text, query) => {
  if (!query.trim()) return text;

  const parts = text.split(new RegExp(`(${query})`, "gi"));

  return parts.map((part, index) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark key={index} className="petugas-highlight">
        {part}
      </mark>
    ) : (
      part
    ),
  );
};

export default function PetugasPage() {
  const [petugas, setPetugas] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [page, setPage] = useState(1);

  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  const [loading, setLoading] = useState(true);
  const [searching, setSearching] = useState(false);
  const [error, setError] = useState("");
  const [connected, setConnected] = useState(true);

  // Derived, bukan state — dihitung langsung dari query saat render
  const isSearchMode = query.trim().length > 0;

  // Ambil data petugas dengan pagination
  const fetchPetugas = useCallback(async (targetPage) => {
    setLoading(true);
    setError("");

    try {
      const response = await axiosInstance.get("/api/petugas", {
        params: { page: targetPage, limit: 30 },
      });

      setPetugas(response.data.data.data);
      setPagination(response.data.data.pagination);
      setConnected(true);
    } catch (err) {
      console.error("Petugas Error:", err);

      setConnected(false);
      setError(
        !navigator.onLine ? "Internet terputus" : "Koneksi ke server terputus",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  // Cari petugas berdasarkan nama
  const searchPetugas = useCallback(async (namaPetugas) => {
    setSearching(true);
    setError("");

    try {
      const response = await axiosInstance.post("/api/search-petugas", {
        namaPetugas,
      });

      setPetugas(response.data.data);
      setConnected(true);
    } catch (err) {
      console.error("Search Petugas Error:", err);

      setPetugas([]);

      if (!navigator.onLine) {
        setConnected(false);
        setError("Internet terputus");
      } else {
        // 404/error dari backend saat data tidak ditemukan
        setConnected(true);
        setError(
          err.response?.data?.message ||
            `Petugas "${namaPetugas}" tidak ditemukan`,
        );
      }
    } finally {
      setSearching(false);
      setLoading(false);
    }
  }, []);

  // Efek untuk load awal & perpindahan halaman (hanya saat tidak sedang mencari).
  // Ini pola fetch-on-dependency-change standar; setLoading/setError di dalam
  // fetchPetugas berjalan sebelum `await` sehingga dianggap "synchronous" oleh
  // rule set-state-in-effect, padahal ini memang perilaku loading state yang
  // diinginkan (bukan derived state yang seharusnya dihitung saat render).
  useEffect(() => {
    if (isSearchMode) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchPetugas(page);
  }, [page, isSearchMode, fetchPetugas]);

  // Debounce nilai query -> hanya setState di dalam callback setTimeout,
  // jadi tidak berjalan synchronous di badan effect.
  useEffect(() => {
    const trimmed = query.trim();

    if (!trimmed) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDebouncedQuery("");
      return;
    }

    const timer = setTimeout(() => {
      setDebouncedQuery(trimmed);
    }, 400);

    return () => clearTimeout(timer);
  }, [query]);

  // Jalankan pencarian saat debouncedQuery berubah
  useEffect(() => {
    if (!debouncedQuery) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    searchPetugas(debouncedQuery);
  }, [debouncedQuery, searchPetugas]);

  const handleClearSearch = () => {
    setQuery("");
    setDebouncedQuery("");
    setError("");
  };

  const handlePrevPage = () => {
    if (pagination && pagination.currentPage > 1) {
      setPage(pagination.currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (pagination && pagination.currentPage < pagination.totalPage) {
      setPage(pagination.currentPage + 1);
    }
  };

  const isBusy = loading || searching;
  const showSkeleton = loading && petugas.length === 0 && !isSearchMode;

  return (
    <div className="petugas-page">
      {!connected && (
        <div className="connection-error">
          <span className="dot"></span>
          {error}
        </div>
      )}

      <div className="petugas-header">
        <span className="eyebrow">Manajemen SDM</span>
        <h1>Data Petugas</h1>
      </div>

      <div className="petugas-search">
        <Search size={18} />
        <input
          type="text"
          placeholder="Cari nama petugas..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {searching && <Loader2 size={18} className="spin" />}
        {!searching && query && (
          <button onClick={handleClearSearch} aria-label="Bersihkan pencarian">
            <X size={18} />
          </button>
        )}
      </div>

      {showSkeleton ? (
        <div className="petugas-table-wrapper">
          <table className="petugas-table">
            <thead>
              <tr>
                <th>NIP</th>
                <th>Nama</th>
                <th>Jabatan</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(8)].map((_, index) => (
                <tr key={index}>
                  <td>
                    <div className="skeleton skeleton-text"></div>
                  </td>
                  <td>
                    <div className="skeleton skeleton-text"></div>
                  </td>
                  <td>
                    <div className="skeleton skeleton-text"></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : error && connected && petugas.length === 0 ? (
        <div className="petugas-state error">
          <UserRound size={32} />
          <p>{error}</p>
        </div>
      ) : petugas.length === 0 ? (
        <div className="petugas-state">
          <Users size={32} />
          <p>Belum ada data petugas</p>
        </div>
      ) : (
        <div
          className="petugas-table-wrapper"
          style={{ opacity: isBusy ? 0.5 : 1, transition: "opacity 0.2s ease" }}
        >
          <table className="petugas-table">
            <thead>
              <tr>
                <th>NIP</th>
                <th>Nama</th>
                <th>Jabatan</th>
              </tr>
            </thead>
            <tbody>
              {petugas.map((item) => (
                <tr key={item.nip}>
                  <td>{item.nip}</td>
                  <td className="nama-petugas">
                    {highlightMatch(item.nama, query)}
                  </td>
                  <td>
                    {item.kdJbtn ? (
                      <span className="petugas-badge">{item.kdJbtn}</span>
                    ) : (
                      "-"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {!isSearchMode && pagination && pagination.totalPage > 1 && (
        <div className="pagination">
          <button
            onClick={handlePrevPage}
            disabled={pagination.currentPage <= 1 || loading}
          >
            <ChevronLeft size={16} />
            Sebelumnya
          </button>
          <span>
            Halaman {pagination.currentPage} dari {pagination.totalPage}
          </span>
          <button
            onClick={handleNextPage}
            disabled={pagination.currentPage >= pagination.totalPage || loading}
          >
            Selanjutnya
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
