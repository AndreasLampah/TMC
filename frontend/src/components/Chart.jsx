import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import "../styles/Chart.css";

const ChartPasien = () => {
  const [chartData, setChartData] = useState([]);
  const [totalToday, setTotalToday] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/grafik");
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
  }, []);

  const renderChartContent = () => {
    if (loading) {
      return <div className="chart-skeleton" />;
    }

    if (!chartData.length) {
      return (
        <div className="chart-empty">
          <div className="chart-empty-icon">📊</div>
          <h3>No patient data available</h3>
          <p>Data akan muncul ketika ada registrasi pasien</p>
        </div>
      );
    }

    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="total"
            stroke="#4f46e5"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  };

  return (
    <div className="chart-container">
      {/* HEADER (always consistent) */}
      <div className="chart-header">
        <div>
          <h1>Patient Analytics</h1>
          <p>Monitoring pasien 7 hari terakhir</p>
        </div>

        <div className="analytics-card">
          <span>Total Hari Ini</span>
          <h2>{totalToday}</h2>
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="chart-wrapper">{renderChartContent()}</div>
    </div>
  );
};

export default ChartPasien;
