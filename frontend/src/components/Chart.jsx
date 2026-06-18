import { useEffect, useState } from "react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import "../styles/Chart.css";

export default function ChartPasien() {
  const [chartData, setChartData] = useState([]);
  const [totalToday, setTotalToday] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const controller = new AbortController();

        const timeout = setTimeout(() => {
          controller.abort();
        }, 10000);

        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/grafik`,
          {
            signal: controller.signal,
          },
        );

        clearTimeout(timeout);

        const result = await response.json();

        if (result.success) {
          setChartData(result.data || []);
          setTotalToday(result.totalToday || 0);
        }
      } catch (error) {
        console.error("Failed to fetch chart data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const renderChartContent = () => {
    if (loading) {
      return <div className="chart-skeleton">Loading chart...</div>;
    }

    if (!chartData.length) {
      return (
        <div className="chart-empty">
          <div className="chart-empty-icon">📊</div>

          <h3>Belum ada data pasien</h3>

          <p>Data grafik akan muncul ketika terdapat registrasi pasien.</p>
        </div>
      );
    }

    return (
      <ResponsiveContainer width="100%" height={420}>
        <AreaChart
          data={chartData}
          margin={{
            top: 20,
            right: 20,
            left: 20,
            bottom: 20,
          }}
        >
          <defs>
            <linearGradient id="patientGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2563eb" stopOpacity={0.25} />

              <stop offset="100%" stopColor="#2563eb" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" opacity={0.15} />

          <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            tickMargin={30}
            tickFormatter={(value) => {
              const date = new Date(value);

              return date.toLocaleDateString("id-ID", {
                day: "numeric",
                month: "short",
              });
            }}
          />

          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={12}
            width={60}
            tickFormatter={(value) => value.toLocaleString("id-ID")}
          />

          <Tooltip
            contentStyle={{
              borderRadius: "12px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 8px 24px rgba(0,0,0,.08)",
            }}
          />

          <Area
            type="monotone"
            dataKey="total"
            stroke="none"
            fill="url(#patientGradient)"
          />

          <Line
            type="monotone"
            dataKey="total"
            stroke="#2563eb"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 6 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  };

  return (
    <div className="chart-container">
      <div className="chart-header">
        <div>
          <h2>Tren Kunjungan Pasien</h2>

          <p>Jumlah pasien dalam 7 hari terakhir</p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
          }}
        >
          <div className="analytics-card">
            <span>Total Hari Ini</span>

            <h2>{totalToday.toLocaleString("id-ID")}</h2>

            <small>Realtime</small>
          </div>
        </div>
      </div>

      <div className="chart-wrapper">{renderChartContent()}</div>
    </div>
  );
}
