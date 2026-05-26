import { useEffect, useState } from "react";

import axios from "axios";

import PasienCard from "../components/PasienCard";
import Chart from "../components/Chart";

import { Users, Activity, Bed, HeartPulse } from "lucide-react";

import "../styles/DashboardPageStyle.css";
import "../styles/DashboardText.css";

export default function DashboardPage() {
  const [dashboard, setDashboard] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/data-harian",
        );

        setDashboard(response.data.data);
      } catch (error) {
        setError("Gagal mengambil data");

        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <div className="dashboard-page">
        <div className="dashboard-header">
          <div className="skeleton skeleton-title"></div>
          <div className="skeleton skeleton-subtitle"></div>
        </div>

        <div className="dashboard-grid">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="card-skeleton">
              <div className="skeleton skeleton-icon"></div>

              <div className="skeleton-content">
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-number"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <p>Hospital Analytics</p>

        <h1>RSU. Tumpaan Medical Center</h1>
      </div>

      <div className="dashboard-grid">
        <PasienCard
          title="Total Pasien"
          value={dashboard?.total_pasien}
          icon={<Users />}
        />

        <PasienCard
          title="IGD"
          value={dashboard?.total_igd}
          icon={<HeartPulse />}
        />

        <PasienCard
          title="Rawat Jalan"
          value={dashboard?.total_ralan}
          icon={<Activity />}
        />

        <PasienCard
          title="Rawat Inap"
          value={dashboard?.total_Ranap}
          icon={<Bed />}
        />
      </div>
      <Chart />
    </div>
  );
}
