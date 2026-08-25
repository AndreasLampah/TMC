import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../styles/Chart.css";

// Sesuaikan endpoint ini dengan route asli kamu untuk data grafik
const CHART_ENDPOINT = "/api/grafik";
const POLL_INTERVAL_MS = 30000;

function formatDateLabel(dateStr) {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    weekday: "short",
    day: "numeric",
  });
}

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="chart-tooltip">
      <p className="chart-tooltip-date">{formatDateLabel(label)}</p>
      <p className="chart-tooltip-value">{payload[0].value} pasien</p>
    </div>
  );
}

export default function Chart() {
  const [data, setData] = useState([]);
  const [totalToday, setTotalToday] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const fetchChart = async () => {
      try {
        const res = await axiosInstance.get(CHART_ENDPOINT);
        if (!isMounted) return;
        setData(res.data.data);
        setTotalToday(res.data.totalToday);
        setError("");
      } catch (err) {
        if (!isMounted) return;
        setError("Gagal memuat grafik kunjungan");
        console.error(err)
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchChart();
    const interval = setInterval(fetchChart, POLL_INTERVAL_MS);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="chart-card">
      <div className="chart-card-head">
        <div>
          <span className="chart-eyebrow">Telemetri</span>
          <h3 className="chart-title">Tren Kunjungan · 7 Hari</h3>
        </div>
        <div className="chart-readout">
          <span className="chart-live-dot" aria-hidden="true" />
          <span className="chart-readout-value">{loading ? "—" : totalToday}</span>
          <span className="chart-readout-label">hari ini</span>
        </div>
      </div>

      {error && <p className="chart-error">{error}</p>}

      {loading ? (
        <div className="chart-skeleton" />
      ) : (
        <ResponsiveContainer width="100%" height={210}>
          <AreaChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
            <defs>
              <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--signal-teal)" stopOpacity={0.32} />
                <stop offset="100%" stopColor="var(--signal-teal)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="var(--border-line)" strokeDasharray="3 4" />
            <XAxis
              dataKey="date"
              tickFormatter={formatDateLabel}
              tick={{ fontSize: 11, fill: "var(--text-faint)", fontFamily: "var(--font-mono)" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              allowDecimals={false}
              tick={{ fontSize: 11, fill: "var(--text-faint)", fontFamily: "var(--font-mono)" }}
              axisLine={false}
              tickLine={false}
              width={30}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="total"
              stroke="var(--signal-teal)"
              strokeWidth={2}
              fill="url(#chartFill)"
              dot={false}
              activeDot={{ r: 4, fill: "var(--signal-teal)", stroke: "var(--bg-surface)", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}