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
  Clock,
  CheckCircle2,
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

  // Semua poli di bawah ini memang punya breakdown total / antrian (menunggu) /
  // periksa (selesai) sesuai response backend getTotalDataHarian.
  const poliDenganAntrian = [
    {
      key: "Poli_Penyakit_Dalam",
      title: "Penyakit Dalam",
      icon: <Stethoscope />,
      data: dashboard?.Poli_Penyakit_Dalam,
      totalField: "total_penyakit_dalam",
      antrianField: "total_antrian_penyakit_dalam",
      periksaField: "total_periksa_penyakit_dalam",
    },
    {
      key: "Poli_Anak",
      title: "Pediatri / Anak",
      icon: <Baby />,
      data: dashboard?.Poli_Anak,
      totalField: "total_pediatri_anak",
      antrianField: "total_antrian_anak",
      periksaField: "total_periksa_anak",
    },
    {
      key: "Poli_Bedah",
      title: "Bedah",
      icon: <Scissors />,
      data: dashboard?.Poli_Bedah,
      totalField: "total_bedah",
      antrianField: "total_antrian_bedah",
      periksaField: "total_periksa_bedah",
    },
    {
      key: "Poli_Kandungan_Kebidanan",
      title: "Kandungan & Kebidanan",
      icon: <HeartPulse />,
      data: dashboard?.Poli_Kandungan_Kebidanan,
      totalField: "total_kandungan_kebidanan",
      antrianField: "total_antrian_kandungan_kebidanan",
      periksaField: "total_periksa_kandungan_kebidanan",
    },
    {
      key: "Poli_Neurologi_Saraf",
      title: "Neurologi / Saraf",
      icon: <Brain />,
      data: dashboard?.Poli_Neurologi_Saraf,
      totalField: "total_neurologi_saraf",
      antrianField: "total_antrian_neurologi_saraf",
      periksaField: "total_periksa_neurologi_saraf",
    },
    {
      key: "Poli_Jantung_Pembuluh_Darah",
      title: "Jantung & Pembuluh Darah",
      icon: <HeartCrack />,
      data: dashboard?.Poli_Jantung_Pembuluh_Darah,
      totalField: "total_jantung_pembuluh_darah",
      antrianField: "total_antrian_jantung_pembuluh_darah",
      periksaField: "total_periksa_jantung_pembuluh_darah",
    },
    {
      key: "Poli_Rehabilitas_Medik",
      title: "Rehabilitasi Medik",
      icon: <User />,
      data: dashboard?.Poli_Rehabilitas_Medik,
      totalField: "total_rehabilitasi_medik",
      antrianField: "total_antrian_rehabilitasi_medik",
      periksaField: "total_periksa_rehabilitasi_medik",
    },
    {
      key: "Poli_Kulit_Kelamin",
      title: "Kulit & Kelamin",
      icon: <Bug />,
      data: dashboard?.Poli_Kulit_Kelamin,
      totalField: "total_kulit_kelamin",
      antrianField: "total_antrian_kulit_kelamin",
      periksaField: "total_periksa_kulit_kelamin",
    },
    {
      key: "Poli_Tht_Kl",
      title: "THT - KL",
      icon: <Volume2 />,
      data: dashboard?.Poli_Tht_Kl,
      totalField: "total_tht_kl",
      antrianField: "total_antrian_tht_kl",
      periksaField: "total_periksa_tht_kl",
    },
    {
      key: "Poli_Mata",
      title: "Mata",
      icon: <Eye />,
      data: dashboard?.Poli_Mata,
      totalField: "total_mata",
      antrianField: "total_antrian_mata",
      periksaField: "total_periksa_mata",
    },
    {
      key: "Poli_Geriatri",
      title: "Geriatri",
      icon: <Heart />,
      data: dashboard?.Poli_Geriatri,
      totalField: "total_geriatri",
      antrianField: "total_antrian_geriatri",
      periksaField: "total_periksa_geriatri",
    },
    {
      key: "Poli_Orthopedi",
      title: "Orthopedi",
      icon: <Bone />,
      data: dashboard?.Poli_Orthopedi,
      totalField: "total_orthopedi",
      antrianField: "total_antrian_orthopedi",
      periksaField: "total_periksa_orthopedi",
    },
    {
      key: "Poli_Urologi",
      title: "Urologi",
      icon: <Droplets />,
      data: dashboard?.Poli_Urologi,
      totalField: "total_urologi",
      antrianField: "total_antrian_urologi",
      periksaField: "total_periksa_urologi",
    },
    {
      key: "Poli_Gigi_Mulut",
      title: "Gigi & Mulut",
      icon: <Smile />,
      data: dashboard?.Poli_Gigi_Mulut,
      totalField: "total_gigi_mulut",
      antrianField: "total_antrian_gigi_mulut",
      periksaField: "total_periksa_gigi_mulut",
    },
    {
      key: "Poli_Tb_Dots",
      title: "TB-DOTS",
      icon: <Shield />,
      data: dashboard?.Poli_Tb_Dots,
      totalField: "total_tb_dots",
      antrianField: "total_antrian_tb_dots",
      periksaField: "total_periksa_tb_dots",
    },
    {
      key: "Poli_VCT",
      title: "VCT",
      icon: <Ribbon />,
      data: dashboard?.Poli_VCT,
      totalField: "total_vct",
      antrianField: "total_antrian_vct",
      periksaField: "total_periksa_vct",
    },
    {
      key: "Poli_Umum_Mcu",
      title: "Umum / MCU",
      icon: <ClipboardList />,
      data: dashboard?.Poli_Umum_Mcu,
      totalField: "total_umum_mcu",
      antrianField: "total_antrian_umum_mcu",
      periksaField: "total_periksa_umum_mcu",
    },
  ];

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
          SEMUA POLI — TOTAL / ANTRIAN / SELESAI
      ========================= */}
      <section className="dashboard-section">
        <h2 className="section-title">Poliklinik — Total, Menunggu & Selesai</h2>

        {poliDenganAntrian.map(
          ({
            key,
            title,
            icon,
            data,
            totalField,
            antrianField,
            periksaField,
          }) => (
            <div
              key={key}
              className="dashboard-grid-main"
              style={{ marginBottom: 12 }}
            >
              <PasienCard
                title={title}
                value={data?.[totalField] ?? 0}
                icon={icon}
                variant="poli"
              />

              <PasienCard
                title={`${title} — Menunggu`}
                value={data?.[antrianField] ?? 0}
                icon={<Clock />}
                variant="vital"
              />

              <PasienCard
                title={`${title} — Selesai Periksa`}
                value={data?.[periksaField] ?? 0}
                icon={<CheckCircle2 />}
                variant="lab"
              />
            </div>
          )
        )}
      </section>
    </div>
  );
}