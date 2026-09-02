import { useCallback, useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";

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
  AlertTriangle,
} from "lucide-react";

import "../styles/DashboardPageStyle.css";

export default function DashboardPage() {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [connected, setConnected] = useState(true);
  const [lastUpdate, setLastUpdate] = useState(null);
  const [fetching, setFetching] = useState(false);

  const fetchDashboard = useCallback(async () => {
    if (fetching) return;

    setFetching(true);

    try {
      const response = await axiosInstance.get("/api/data-harian");

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
  }, [fetching]);

  useEffect(() => {
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
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchDashboard();

    const interval = setInterval(fetchDashboard, 30000);

    return () => {
      clearInterval(interval);

      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [fetchDashboard]);

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

  const alertMessages = dashboard?.alertAntrianPasien?.alertMessage ?? [];

  return (
    <div className="dashboard-page">
      {!connected && (
        <div className="connection-error">
          <span className="dot"></span>
          {error}
        </div>
      )}

      {/* System Banner */}
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
                }) + " WITA"
              : "-"}
          </strong>
        </div>
      </div>

      {/* Header */}
      <div className="dashboard-header">
        <span className="eyebrow">Hospital Analytics</span>

        <h1>RSU. Tumpaan Medical Center</h1>
      </div>

      {/* =========================
          ALERT ANTRIAN PASIEN
      ========================= */}
      {alertMessages.length > 0 && (
        <section className="dashboard-section">
          <h2 className="section-title">Peringatan Antrian</h2>

          <div className="alert-antrian-list">
            {alertMessages.map((message, index) => (
              <div className="connection-error" key={index}>
                <AlertTriangle size={14} />
                {message}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* =========================
          RINGKASAN PASIEN
      ========================= */}
      <section className="dashboard-section">
        <h2 className="section-title">Ringkasan Pasien</h2>

        <div className="dashboard-grid-main">
          <PasienCard
            title="Total Pasien"
            value={dashboard?.ringkasan?.total_pasien ?? 0}
            icon={<Users />}
          />

          <PasienCard
            title="IGD"
            value={dashboard?.ringkasan?.total_igd ?? 0}
            icon={<HeartPulse />}
            variant="vital"
          />

          <PasienCard
            title="Gawat Darurat"
            value={dashboard?.ringkasan?.total_gawat_darurat ?? 0}
            icon={<Siren />}
            variant="vital"
          />

          <PasienCard
            title="Rawat Jalan"
            value={dashboard?.ringkasan?.total_ralan ?? 0}
            icon={<Activity />}
          />

          <PasienCard
            title="Rawat Inap"
            value={dashboard?.ringkasan?.total_ranap ?? 0}
            icon={<Bed />}
          />
        </div>
      </section>

      {/* =========================
          GRAFIK
      ========================= */}
      <section className="dashboard-section">
        <h2 className="section-title">Tren Kunjungan</h2>

        <Chart />
      </section>

      {/* =========================
          LABORATORIUM
      ========================= */}
      <section className="dashboard-section">
        <h2 className="section-title">Laboratorium</h2>

        <div className="dashboard-grid-lab">
          <PasienCard
            title="Lab Rawat Jalan"
            value={dashboard?.laboratorium?.total_laboratorium_ralan ?? 0}
            icon={<FlaskConical />}
            variant="lab"
          />

          <PasienCard
            title="Lab Rawat Inap"
            value={dashboard?.laboratorium?.total_laboratorium_ranap ?? 0}
            icon={<FlaskConical />}
            variant="lab"
          />

          <PasienCard
            title="Lab Patologi Klinik"
            value={dashboard?.laboratorium?.total_laboratorium_pk ?? 0}
            icon={<FlaskConical />}
            variant="lab"
          />

          <PasienCard
            title="Lab Patologi Anatomi"
            value={dashboard?.laboratorium?.total_laboratorium_pa ?? 0}
            icon={<Microscope />}
            variant="lab"
          />

          <PasienCard
            title="Mikrobiologi"
            value={dashboard?.laboratorium?.total_laboratorium_mb ?? 0}
            icon={<Microscope />}
            variant="lab"
          />
        </div>
      </section>

      {/* =========================
          POLIKLINIK
      ========================= */}
      <section className="dashboard-section">
        <h2 className="section-title">Poliklinik & Unit Layanan</h2>

        <div className="dashboard-grid-lab">
          <PasienCard
            title="Penyakit Dalam"
            value={dashboard?.poliklinik?.total_penyakit_dalam ?? 0}
            icon={<Stethoscope />}
            variant="poli"
          />

          <PasienCard
            title="Pediatri / Anak"
            value={dashboard?.poliklinik?.total_pediatri_anak ?? 0}
            icon={<Baby />}
            variant="poli"
          />

          <PasienCard
            title="Bedah"
            value={dashboard?.poliklinik?.total_bedah ?? 0}
            icon={<Scissors />}
            variant="poli"
          />

          <PasienCard
            title="Kandungan & Kebidanan"
            value={dashboard?.poliklinik?.total_kandungan_kebidanan ?? 0}
            icon={<HeartPulse />}
            variant="poli"
          />

          <PasienCard
            title="Neurologi / Saraf"
            value={dashboard?.poliklinik?.total_neurologi_saraf ?? 0}
            icon={<Brain />}
            variant="poli"
          />

          <PasienCard
            title="Jantung & Pembuluh Darah"
            value={dashboard?.poliklinik?.total_jantung_pembuluh_darah ?? 0}
            icon={<HeartCrack />}
            variant="poli"
          />

          <PasienCard
            title="Rehabilitasi Medik"
            value={dashboard?.poliklinik?.total_rehabilitasi_medik ?? 0}
            icon={<User />}
            variant="poli"
          />

          <PasienCard
            title="Kulit & Kelamin"
            value={dashboard?.poliklinik?.total_kulit_kelamin ?? 0}
            icon={<Bug />}
            variant="poli"
          />

          <PasienCard
            title="THT KL"
            value={dashboard?.poliklinik?.total_tht_kl ?? 0}
            icon={<Volume2 />}
            variant="poli"
          />

          <PasienCard
            title="Mata"
            value={dashboard?.poliklinik?.total_mata ?? 0}
            icon={<Eye />}
            variant="poli"
          />

          <PasienCard
            title="Geriatri"
            value={dashboard?.poliklinik?.total_geriatri ?? 0}
            icon={<Heart />}
            variant="poli"
          />

          <PasienCard
            title="Orthopedi"
            value={dashboard?.poliklinik?.total_orthopedi ?? 0}
            icon={<Bone />}
            variant="poli"
          />

          <PasienCard
            title="Urologi"
            value={dashboard?.poliklinik?.total_urologi ?? 0}
            icon={<Droplets />}
            variant="poli"
          />

          <PasienCard
            title="Gigi & Mulut"
            value={dashboard?.poliklinik?.total_gigi_mulut ?? 0}
            icon={<Smile />}
            variant="poli"
          />

          <PasienCard
            title="TB-DOTS"
            value={dashboard?.poliklinik?.total_tb_dots ?? 0}
            icon={<Shield />}
            variant="poli"
          />

          <PasienCard
            title="VCT"
            value={dashboard?.poliklinik?.total_vct ?? 0}
            icon={<Ribbon />}
            variant="poli"
          />

          <PasienCard
            title="Umum / MCU"
            value={dashboard?.poliklinik?.total_umum_mcu ?? 0}
            icon={<ClipboardList />}
            variant="poli"
          />
        </div>
      </section>
    </div>
  );
}