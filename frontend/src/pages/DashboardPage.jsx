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
  Stethoscope,
  Siren,
  Baby,
  Scissors,
  Brain,
  HeartCrack,
  Heart,
  Smile,
  Eye,
  User,
  Bug,
  Volume2,
  Bone,
  Droplets,
  Shield,
  Ribbon,
  ClipboardList,
} from "lucide-react";

import "../styles/DashboardPageStyle.css";

export default function DashboardPage() {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [connected, setConnected] = useState(true);
  const [lastUpdate, setLastUpdate] = useState(null);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const fetchDashboard = async () => {
      if (fetching) return;
      setFetching(true);

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/data-harian`,
        );
        setDashboard(response.data.data);
        setConnected(true);
        setError("");
        setLastUpdate(new Date());
      } catch (error) {
        console.error("Dashboard Error:", error);
        setConnected(false);

        if (!navigator.onLine) {
          setError("Internet terputus");
        } else {
          setError("Koneksi ke server terputus");
        }
      } finally {
        setLoading(false);
        setFetching(false);
      }
    };

    const handleOnline = () => {
      setConnected(true);
      setError("");
      fetchDashboard();
    };

    const handleOffline = () => {
      setConnected(false);
      setError("Internet terputus");
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    fetchDashboard();

    const interval = setInterval(() => {
      fetchDashboard();
    }, 30000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [fetching]);

  if (loading && !dashboard) {
    return (
      <div className="dashboard-page">
        <div className="dashboard-header">
          <div className="skeleton skeleton-title"></div>
          <div className="skeleton skeleton-subtitle"></div>
        </div>

        <div className="dashboard-grid">
          {[...Array(16)].map((_, index) => (
            <div key={index} className="card-skeleton">
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

  return (
    <div className="dashboard-page">
      {!connected && (
        <div className="connection-error">
          <span className="dot"></span>
          {error}
        </div>
      )}

      <div className="system-banner">
        <div className="system-banner-content">
          <div className="pulse-indicator">
            <span className="ring"></span>
            <span className="core"></span>
          </div>
          <div>
            <h3>Sistem Monitoring Rumah Sakit</h3>
            <p>
              Data pasien dan pelayanan diperbarui secara otomatis setiap 30
              detik
            </p>
          </div>
        </div>

        <div className="sync-info">
          <span>Sinkronisasi Terakhir</span>
          <strong>
            {lastUpdate
              ? lastUpdate.toLocaleString("id-ID", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                }) + " WIB"
              : "-"}
          </strong>
        </div>
      </div>

      <div className="dashboard-header">
        <span className="eyebrow">Hospital Analytics</span>
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
            variant="vital"
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
            title="Lab Rawat Jalan"
            value={dashboard?.total_laboratorium_ralan}
            icon={<FlaskConical />}
            variant="lab"
          />
          <PasienCard
            title="Lab Rawat Inap"
            value={dashboard?.total_laboratorium_ranap}
            icon={<FlaskConical />}
            variant="lab"
          />
          <PasienCard
            title="Lab Patologi Klinik"
            value={dashboard?.total_laboratorium_pk}
            icon={<FlaskConical />}
            variant="lab"
          />
          <PasienCard
            title="Lab Patologi Anatomi"
            value={dashboard?.total_laboratorium_pa}
            icon={<Microscope />}
            variant="lab"
          />
        </div>
      </section>

      {/* Poliklinik */}
      <section className="dashboard-section">
        <h2 className="section-title">Poliklinik &amp; Unit Layanan</h2>
        <div className="dashboard-grid-lab">
          <PasienCard
            title="Mikrobiologi"
            value={dashboard?.total_laboratorium_mb}
            icon={<Microscope />}
            variant="lab"
          />
          <PasienCard
            title="Gawat Darurat"
            value={dashboard?.total_gawat_darurat}
            icon={<Siren />}
            variant="vital"
          />
          <PasienCard
            title="Penyakit Dalam"
            value={dashboard?.total_penyakit_dalam}
            icon={<Stethoscope />}
            variant="poli"
          />
          <PasienCard
            title="Pediatri / Anak"
            value={dashboard?.total_pediatri_anak}
            icon={<Baby />}
            variant="poli"
          />
          <PasienCard
            title="Bedah"
            value={dashboard?.total_bedah}
            icon={<Scissors />}
            variant="poli"
          />
          <PasienCard
            title="Kandungan &amp; Kebidanan"
            value={dashboard?.total_kandungan_kebidanan}
            icon={<HeartPulse />}
            variant="poli"
          />
          <PasienCard
            title="Neurologi / Saraf"
            value={dashboard?.total_neurologi_saraf}
            icon={<Brain />}
            variant="poli"
          />
          <PasienCard
            title="Jantung &amp; Pembuluh Darah"
            value={dashboard?.total_jantung_pembuluh_darah}
            icon={<HeartCrack />}
            variant="poli"
          />
          <PasienCard
            title="Rehabilitasi Medik"
            value={dashboard?.total_rehabilitasi_medik}
            icon={<User />}
            variant="poli"
          />
          <PasienCard
            title="Kulit &amp; Kelamin"
            value={dashboard?.total_kulit_kelamin}
            icon={<Bug />}
            variant="poli"
          />
          <PasienCard
            title="THT KL"
            value={dashboard?.total_tht_kl}
            icon={<Volume2 />}
            variant="poli"
          />
          <PasienCard
            title="Mata"
            value={dashboard?.total_mata}
            icon={<Eye />}
            variant="poli"
          />
          <PasienCard
            title="Geriatri"
            value={dashboard?.total_geriatri}
            icon={<Heart />}
            variant="poli"
          />
          <PasienCard
            title="Orthopedi"
            value={dashboard?.total_orthopedi}
            icon={<Bone />}
            variant="poli"
          />
          <PasienCard
            title="Urologi"
            value={dashboard?.total_urologi}
            icon={<Droplets />}
            variant="poli"
          />
          <PasienCard
            title="Gigi &amp; Mulut"
            value={dashboard?.total_gigi_mulut}
            icon={<Smile />}
            variant="poli"
          />
          <PasienCard
            title="TB-DOTS"
            value={dashboard?.total_tb_dots}
            icon={<Shield />}
            variant="poli"
          />
          <PasienCard
            title="VCT"
            value={dashboard?.total_vct}
            icon={<Ribbon />}
            variant="poli"
          />
          <PasienCard
            title="Umum / MCU"
            value={dashboard?.total_umum_mcu}
            icon={<ClipboardList />}
            variant="poli"
          />
        </div>
      </section>
    </div>
  );
}
