import { useEffect, useState, useCallback } from "react";
import axiosInstance from "../utils/axiosInstance";

const STATUS_LABEL = {
  KOSONG: "Kosong",
  TERISI: "Terisi",
  DIBERSIHKAN: "Dibersihkan",
  DIPESAN: "Dipesan",
  PERBAIKAN: "Perbaikan",
};

const STATUS_VARIANT = {
  KOSONG: "accent",
  TERISI: "vital",
  DIBERSIHKAN: "lab",
  DIPESAN: "poli",
  PERBAIKAN: "vital",
};

const KELAS_LABEL = {
  KELAS_1: "Kelas 1",
  KELAS_2: "Kelas 2",
  KELAS_3: "Kelas 3",
  KELAS_VIP: "VIP",
  KELAS_VVIP: "VVIP",
};

function StatusBadge({ status }) {
  const variant = STATUS_VARIANT[status] || "accent";
  return (
    <span className={`status-badge status-badge-${variant}`}>
      {STATUS_LABEL[status] || status}
    </span>
  );
}

function SummarySkeleton() {
  return (
    <div className="dashboard-grid-main">
      {Array.from({ length: 4 }).map((_, i) => (
        <div className="card-skeleton" key={i}>
          <div className="skeleton skeleton-icon" />
          <div className="skeleton-content">
            <div className="skeleton skeleton-text" />
            <div className="skeleton skeleton-number" />
          </div>
        </div>
      ))}
    </div>
  );
}

function BreakdownSkeleton() {
  return (
    <div className="chart-container">
      <div className="skeleton skeleton-title" />
      <div className="skeleton skeleton-subtitle" style={{ marginTop: 12 }} />
    </div>
  );
}

const IconBed = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 18v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7" />
    <path d="M3 18h18" />
    <path d="M5 9V6a2 2 0 0 1 2-2h3" />
    <circle cx="8" cy="12" r="1" fill="currentColor" />
  </svg>
);
const IconCheck = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
const IconUser = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
  </svg>
);
const IconGauge = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 15 16 9" />
    <path d="M3 18a9 9 0 1 1 18 0" />
  </svg>
);

export default function BedPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastSync, setLastSync] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setError(null);

      const res = await axiosInstance.get("/api/bed");

      if (res.data?.success) {
        setData(res.data.data);
        setLastSync(new Date());
      } else {
        setError(res.data?.message || "Gagal mengambil data monitoring bed");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Tidak dapat terhubung ke server",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchData();
    const interval = setInterval(fetchData, 30000); // auto refresh 30 detik
    return () => clearInterval(interval);
  }, [fetchData]);

  const summary = data?.summary;

  return (
    <div className="dashboard-page">
      {error && (
        <div className="connection-error">
          <span className="dot" />
          {error}
        </div>
      )}

      <div className="system-banner">
        <div className="system-banner-content">
          <div className="pulse-indicator">
            <span className="ring" />
            <span className="core" />
          </div>
          <div>
            <h3>Monitoring Bed Real-time</h3>
            <p>Status ketersediaan tempat tidur seluruh bangsal</p>
          </div>
        </div>
        <div className="sync-info">
          <span>Terakhir Sinkron</span>
          <strong>
            {lastSync
              ? lastSync.toLocaleTimeString("id-ID", {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })
              : "-"}
          </strong>
        </div>
      </div>

      <div className="dashboard-header">
        <div className="eyebrow">Manajemen Rawat Inap</div>
        <h1>Monitoring Bed</h1>
      </div>

      <div className="dashboard-section">
        <div className="section-title">Ringkasan</div>
        {loading ? (
          <SummarySkeleton />
        ) : (
          <div className="dashboard-grid-main">
            <div className="pasien-card">
              <div className="icon-wrap">
                <IconBed />
              </div>
              <div className="info">
                <span className="title">Total Tempat Tidur</span>
                <span className="value">{summary?.totalTempatTidur ?? 0}</span>
              </div>
            </div>

            <div className="pasien-card variant-vital">
              <div className="icon-wrap">
                <IconUser />
              </div>
              <div className="info">
                <span className="title">Terisi</span>
                <span className="value">{summary?.jumlahTerisi ?? 0}</span>
              </div>
            </div>

            <div className="pasien-card">
              <div className="icon-wrap">
                <IconCheck />
              </div>
              <div className="info">
                <span className="title">Kosong</span>
                <span className="value">{summary?.jumlahKosong ?? 0}</span>
              </div>
            </div>

            <div className="pasien-card variant-poli">
              <div className="icon-wrap">
                <IconGauge />
              </div>
              <div className="info">
                <span className="title">BOR (Bed Occupancy Rate)</span>
                <span className="value">{summary?.bor ?? 0}%</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="dashboard-section">
        <div className="section-title">Status Lainnya</div>
        {loading ? (
          <SummarySkeleton />
        ) : (
          <div className="dashboard-grid-lab">
            <div className="pasien-card variant-lab">
              <div className="info">
                <span className="title">Dibersihkan</span>
                <span className="value">{summary?.jumlahDibersihkan ?? 0}</span>
              </div>
            </div>
            <div className="pasien-card variant-poli">
              <div className="info">
                <span className="title">Dipesan</span>
                <span className="value">{summary?.jumlahDipesan ?? 0}</span>
              </div>
            </div>
            <div className="pasien-card variant-vital">
              <div className="info">
                <span className="title">Perbaikan</span>
                <span className="value">{summary?.jumlahPerbaikan ?? 0}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="dashboard-section">
        <div className="section-title">Distribusi Kelas</div>
        {loading ? (
          <BreakdownSkeleton />
        ) : (
          <div className="chart-container">
            <BreakdownBars
              items={data.ringkasanKelas}
              keyName="kelas"
              labelMap={KELAS_LABEL}
            />
          </div>
        )}
      </div>

      <div className="dashboard-section">
        <div className="section-title">Distribusi Bangsal</div>
        {loading ? (
          <BreakdownSkeleton />
        ) : (
          <div className="chart-container">
            <BreakdownBars
              items={data.ringkasanKodeBangsal}
              keyName="kdBangsal"
            />
          </div>
        )}
      </div>

      <div className="dashboard-section">
        <div className="section-title">Kamar Terbaru</div>
        <div
          className="chart-container"
          style={{ padding: 0, overflowX: "auto" }}
        >
          {loading ? (
            <div style={{ padding: 24 }}>
              <div className="skeleton skeleton-subtitle" />
            </div>
          ) : (
            <table className="bed-table">
              <thead>
                <tr>
                  <th>Kode Kamar</th>
                  <th>Bangsal</th>
                  <th>Kelas</th>
                  <th>Tarif</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {data.kamarTerbaru.map((kamar) => (
                  <tr key={kamar.kdKamar}>
                    <td>{kamar.kdKamar}</td>
                    <td>{kamar.kdBangsal}</td>
                    <td>{KELAS_LABEL[kamar.kelas] || kamar.kelas}</td>
                    <td>
                      Rp {Number(kamar.tarifKamar).toLocaleString("id-ID")}
                    </td>
                    <td>
                      <StatusBadge status={kamar.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

function BreakdownBars({ items, keyName, labelMap }) {
  const total = items.reduce((sum, item) => sum + item._count[keyName], 0) || 1;

  return (
    <div className="breakdown-list">
      {items
        .slice()
        .sort((a, b) => b._count[keyName] - a._count[keyName])
        .map((item) => {
          const count = item._count[keyName];
          const pct = Math.round((count / total) * 100);
          const label = labelMap?.[item[keyName]] || item[keyName];
          return (
            <div className="breakdown-row" key={item[keyName]}>
              <div className="breakdown-row-top">
                <span className="breakdown-label">{label}</span>
                <span className="breakdown-count">{count}</span>
              </div>
              <div className="breakdown-track">
                <div className="breakdown-fill" style={{ width: `${pct}%` }} />
              </div>
            </div>
          );
        })}
    </div>
  );
}
