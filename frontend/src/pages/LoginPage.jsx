import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { Activity, Eye, EyeOff, LogIn } from "lucide-react";
import "../styles/LoginPage.css";

export default function LoginPage() {
  const navigate = useNavigate();

  const [nip, setNip] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    if (!nip || !password) {
      setError("NIP dan password wajib diisi.");
      return;
    }

    setLoading(true);

    try {
      const response = await axiosInstance.post("/api/login", {
        nip,
        password,
      });

      const { token } = response.data;

      localStorage.setItem("token", token);

      navigate("/", {
        replace: true,
      });
    } catch (err) {
      const msg = err.response?.data?.message;

      if (!navigator.onLine) {
        setError("Internet terputus. Periksa koneksi Anda.");
      } else if (msg) {
        setError(msg);
      } else {
        setError("Gagal terhubung ke server.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      {/* Ambient decoration */}
      <div className="login-ambient" aria-hidden="true">
        <span className="ambient-circle ambient-circle--1" />
        <span className="ambient-circle ambient-circle--2" />
      </div>

      <div className="login-card">
        {/* Logo / Brand */}
        <div className="login-brand">
          <div className="login-brand-icon">
            <Activity size={22} />
          </div>
          <div>
            <p className="login-brand-label">Hospital Analytics</p>
            <h1 className="login-brand-name">RSU. Tumpaan Medical Center</h1>
          </div>
        </div>

        <div className="login-divider" />

        {/* Heading */}
        <div className="login-heading">
          <h2>Masuk ke Dashboard</h2>
          <p>Gunakan NIP dan password yang terdaftar di sistem.</p>
        </div>

        {/* Error banner */}
        {error && (
          <div className="login-error" role="alert">
            <span className="login-error-dot" />
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="login-form" noValidate>
          <div className="form-field">
            <label htmlFor="nip" className="form-label">
              NIP
            </label>
            <input
              id="nip"
              type="text"
              className="form-input"
              placeholder=""
              value={nip}
              onChange={(e) => setNip(e.target.value)}
              autoComplete="username"
              autoFocus
              disabled={loading}
            />
          </div>

          <div className="form-field">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="form-input-wrapper">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="form-input form-input--password"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                disabled={loading}
              />
              <button
                type="button"
                className="form-toggle-pw"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={
                  showPassword ? "Sembunyikan password" : "Tampilkan password"
                }
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className={`login-btn${loading ? " login-btn--loading" : ""}`}
            disabled={loading}
          >
            {loading ? <span className="login-spinner" /> : <LogIn size={16} />}
            {loading ? "Memverifikasi…" : "Masuk"}
          </button>
        </form>

        <p className="login-footer">
          RSU Tumpaan Medical Center &mdash; Sistem Informasi Manajemen Rumah
          Sakit
        </p>
      </div>
    </div>
  );
}
