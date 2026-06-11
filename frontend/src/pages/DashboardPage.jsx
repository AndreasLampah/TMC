import { useEffect, useState } from "react";

import axios from "axios";

import PasienCard from "../components/PasienCard";
import Chart from "../components/Chart";

import {
  Users,
  Activity,
  Bed,
  HeartPulse,
  FlaskConical,
  Microscope,
  Bug,
} from "lucide-react";

import "../styles/DashboardPageStyle.css";
import "../styles/DashboardText.css";

export default function DashboardPage() {
  const [dashboard, setDashboard] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        // rsutmc ganti ke localhost:3000 untuk develop
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

    const interval = setInterval(() => {
      fetchDashboard();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="dashboard-page">
        <div className="dashboard-header">
          <div className="skeleton skeleton-title"></div>
          <div className="skeleton skeleton-subtitle"></div>
        </div>

        <div className="dashboard-grid">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
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

      {/* KPI Utama */}
      <section className="dashboard-section">
        <h2 className="section-title">Ringkasan Pasien</h2>

        <div className="dashboard-grid-main">
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
            value={dashboard?.total_ranap}
            icon={<Bed />}
          />
        </div>
      </section>

      {/* Grafik */}
      <section className="dashboard-section">
        <h2 className="section-title">Tren Kunjungan</h2>

        <Chart />
      </section>

      {/* Laboratorium */}
      <section className="dashboard-section">
        <h2 className="section-title">Laboratorium</h2>

        <div className="dashboard-grid-lab">
          <PasienCard
            title="Lab Ralan"
            value={dashboard?.total_laboratorium_ralan}
            icon={<FlaskConical />}
          />

          <PasienCard
            title="Lab Ranap"
            value={dashboard?.total_laboratorium_ranap}
            icon={<FlaskConical />}
          />

          <PasienCard
            title="Lab PK"
            value={dashboard?.total_laboratorium_pk}
            icon={<FlaskConical />}
          />

          <PasienCard
            title="Lab PA"
            value={dashboard?.total_laboratorium_pa}
            icon={<Microscope />}
          />

          <PasienCard
            title="Lab MB"
            value={dashboard?.total_laboratorium_mb}
            icon={<Bug />}
          />

          <PasienCard
            title=" Gawat Darurat"
            value={dashboard?.total_gawat_darurat}
            icon={<Bug />}
          />

          <PasienCard
            title=" Poli Penyakit Dalam"
            value={dashboard?.total_penyakit_dalam}
            icon={<Bug />}
          />

          <PasienCard
            title=" Poli Pediatri / Anak"
            value={dashboard?.total_pediatri_anak}
            icon={<Bug />}
          />

          <PasienCard
            title=" Poli Bedah"
            value={dashboard?.total_bedah}
            icon={<Bug />}
          />

          <PasienCard
            title=" Poli Kandungan Kebidanan"
            value={dashboard?.total_kandungan_kebidanan}
            icon={<Bug />}
          />

          <PasienCard
            title=" Poli Neurologi Saraf"
            value={dashboard?.total_neurologi_saraf}
            icon={<Bug />}
          />

          <PasienCard
            title=" Poli Jantung Pembuluh Darah"
            value={dashboard?.total_jantung_pembuluh_darah}
            icon={<Bug />}
          />
        </div>
      </section>
    </div>
  );
}
