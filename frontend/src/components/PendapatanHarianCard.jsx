import { useCallback, useEffect, useRef, useState } from "react";
import { Wallet, TrendingUp, TrendingDown, RefreshCw, AlertCircle } from "lucide-react";
import axiosInstance from "../utils/axiosInstance";
import "../styles/PendapatanHarianCard.css";

const REFRESH_INTERVAL = 30000;

const INITIAL_DATA = { rawatJalan: 0, rawatInap: 0, total: 0 };

export default function PendapatanHarianCard() {
  const [data, setData] = useState(INITIAL_DATA);
  const [previousTotal, setPreviousTotal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(null);
  const isFirstLoad = useRef(true);
  const dataRef = useRef(INITIAL_DATA);

  const fetchPendapatan = useCallback(async () => {
    try {
      const response = await axiosInstance.get("/api/pendapatan-harian");
      const result = response.data?.data ?? INITIAL_DATA;

      if (!isFirstLoad.current) {
        setPreviousTotal(dataRef.current.total);
      }

      dataRef.current = result;
      setData(result);
      setError(false);
      setLastUpdate(new Date());
    } catch (err) {
      console.error("Pendapatan Error:", err);
      setError(true);
    } finally {
      setLoading(false);
      isFirstLoad.current = false;
    }
  }, []);

  useEffect(() => {
    fetchPendapatan();

    const interval = setInterval(fetchPendapatan, REFRESH_INTERVAL);

    return () => clearInterval(interval);
  }, [fetchPendapatan]);

  const formatRupiah = (value) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(value);

  const trend =
    previousTotal !== null && previousTotal !== 0
      ? ((data.total - previousTotal) / previousTotal) * 100
      : null;

  return (
    <div className={`pendapatan-card ${error ? "is-error" : ""}`}>
      <div className="pendapatan-card-glow" />

      <div className="pendapatan-card-header">
        <div className="pendapatan-card-icon">
          <Wallet size={20} />
        </div>

        <div className="pendapatan-card-heading">
          <p className="pendapatan-card-label">Pendapatan Hari ini</p>
          <span className="pendapatan-card-description">
            Total pendapatan hari ini
          </span>
        </div>

        {!loading && (
          <button
            type="button"
            className="pendapatan-card-refresh"
            onClick={fetchPendapatan}
            aria-label="Muat ulang pendapatan"
          >
            <RefreshCw size={14} />
          </button>
        )}
      </div>

      <div className="pendapatan-card-body">
        {loading ? (
          <div className="pendapatan-skeleton" />
        ) : error ? (
          <div className="pendapatan-card-error">
            <AlertCircle size={16} />
            <span>Gagal memuat data</span>
          </div>
        ) : (
          <div className="pendapatan-card-value-row">
            <h3 className="pendapatan-card-value">{formatRupiah(data.total)}</h3>

            {trend !== null && Math.abs(trend) >= 0.1 && (
              <span
                className={`pendapatan-card-trend ${
                  trend >= 0 ? "is-up" : "is-down"
                }`}
              >
                {trend >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                {Math.abs(trend).toFixed(1)}%
              </span>
            )}
          </div>
        )}
      </div>

      {!loading && !error && (
        <div className="pendapatan-card-breakdown">
          <div className="pendapatan-card-breakdown-item">
            <span className="pendapatan-card-breakdown-label">Rawat Jalan</span>
            <span className="pendapatan-card-breakdown-value">
              {formatRupiah(data.rawatJalan)}
            </span>
          </div>
          <div className="pendapatan-card-breakdown-item">
            <span className="pendapatan-card-breakdown-label">Rawat Inap</span>
            <span className="pendapatan-card-breakdown-value">
              {formatRupiah(data.rawatInap)}
            </span>
          </div>
        </div>
      )}

      <div className="pendapatan-card-footer">
        <span className="pulse-dot" />
        <span>
          {lastUpdate
            ? `Diperbarui ${lastUpdate.toLocaleTimeString("id-ID", {
                hour: "2-digit",
                minute: "2-digit",
              })} WIB`
            : "Memuat..."}
        </span>
      </div>
    </div>
  );
}