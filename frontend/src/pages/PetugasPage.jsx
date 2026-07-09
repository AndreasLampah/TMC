import { useEffect, useState, useRef } from "react";
import { Search, UserRound, UserX, Loader2 } from "lucide-react";

import axiosInstance from "../utils/axiosInstance";
import "../styles/PetugasPage.css";

export default function PetugasPage() {
  const [petugas, setPetugas] = useState([]);
  const [query, setQuery] = useState("");

  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const inputRef = useRef(null);

  const getAllPetugas = async () => {
    try {
      setStatus("loading");

      const response = await axiosInstance.get("api/petugas");

      setPetugas(response.data.data || []);

      setStatus("found");
    } catch (error) {
      setErrorMsg(
        error.response?.data?.message || "Gagal mengambil data petugas",
      );

      setStatus("error");
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getAllPetugas();
  }, []);

  useEffect(() => {
    const namaPetugas = query.trim();

    let cancelled = false;

    const delay = setTimeout(async () => {
      if (!namaPetugas) {
        getAllPetugas();

        return;
      }

      if (namaPetugas.length < 3) {
        setPetugas([]);

        setStatus("empty");

        setErrorMsg("Masukkan minimal 3 karakter nama petugas");

        return;
      }

      setStatus("loading");

      try {
        const response = await axiosInstance.post("api/search-petugas", {
          namaPetugas,
        });

        if (!cancelled) {
          setPetugas(response.data.data || []);

          setStatus("found");
        }
      } catch (error) {
        if (!cancelled) {
          setPetugas([]);

          if (error.response?.status === 404) {
            setErrorMsg("Petugas tidak ditemukan");

            setStatus("empty");
          } else {
            setErrorMsg(
              error.response?.data?.message || "Gagal mencari petugas",
            );

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

  return (
    <div className="dashboard-page">
      {/* Banner */}

      <div className="system-banner">
        <div className="system-banner-content">
          <div className="pulse-indicator">
            <span className="ring" />
            <span className="core" />
          </div>

          <div>
            <h3>Monitoring Petugas Rumah Sakit</h3>

            <p>Data petugas SIMRS terintegrasi</p>
          </div>
        </div>
      </div>

      {/* Header */}

      <div className="dashboard-header">
        <span className="eyebrow">Manajemen SDM</span>

        <h1>Data Petugas</h1>
      </div>

      {/* Search */}

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

      {/* Empty */}

      {status === "empty" && (
        <div className="petugas-state">
          <UserX size={44} />

          <p>{errorMsg}</p>
        </div>
      )}

      {status === "error" && (
        <div className="petugas-state error">
          <UserX size={44} />

          <p>{errorMsg}</p>
        </div>
      )}

      {/* Table */}

      {petugas.length > 0 && (
        <section className="dashboard-section">
          <h2 className="section-title">Daftar Petugas</h2>

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
                  <tr key={index}>
                    <td>{index + 1}</td>

                    <td>
                      <span className="petugas-badge">
                        <UserRound size={14} />

                        {item.nip || "-"}
                      </span>
                    </td>

                    <td className="nama-petugas">
                      {item.nama || item.nama || "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}
