import { Link } from "react-router-dom";
import { LayoutDashboard } from "lucide-react";

import "../styles/NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-card">
        <div className="notfound-badge">
          <span className="status-dot"></span>
          SIMRS Monitoring
        </div>

        <div className="notfound-ekg" aria-hidden="true">
          <svg viewBox="0 0 200 40" preserveAspectRatio="none">
            <path d="M0 20 H60 L70 5 L80 35 L90 20 H200" />
          </svg>
        </div>

        <h1 className="notfound-code">404</h1>

        <h2 className="notfound-title">Halaman Tidak Ditemukan</h2>

        <p className="notfound-description">
          Halaman atau menu yang Anda akses tidak tersedia pada sistem Dashboard
          Monitoring Rumah Sakit. Silakan kembali ke dashboard utama untuk
          melanjutkan aktivitas.
        </p>

        <div className="notfound-actions">
          <Link to="/" className="notfound-button">
            <LayoutDashboard />
            Kembali ke Dashboard
          </Link>
        </div>

        <div className="notfound-footer">
          Hospital Monitoring System &middot; 2026
        </div>
      </div>
    </div>
  );
};

export default NotFound;
