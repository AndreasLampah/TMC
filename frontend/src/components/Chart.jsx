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
          setChartData(result.data);
          setTotalToday(result.totalToday);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="chart-loading">Loading Dashboard...</div>;
  }

  return (
    <div className="chart-container">
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

      <div className="chart-wrapper">
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
              strokeWidth={4}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartPasien;
