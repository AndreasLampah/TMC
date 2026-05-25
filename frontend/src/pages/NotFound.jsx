import { Link } from "react-router-dom"

import "../styles/NotFound.css"

const NotFound = () => {

  return (

    <div className="notfound-container">

      <div className="notfound-card">

        <div className="notfound-badge">
          SIMRS MONITORING
        </div>

        <h1 className="notfound-code">
          404
        </h1>

        <h2 className="notfound-title">
          Halaman Tidak Ditemukan
        </h2>

        <p className="notfound-description">
          Halaman atau menu yang Anda akses tidak tersedia
          pada sistem Dashboard Monitoring Rumah Sakit.
          Silakan kembali ke dashboard utama untuk melanjutkan aktivitas.
        </p>

        <div className="notfound-actions">

          <Link
            to="/"
            className="notfound-button"
          >
            Kembali ke Dashboard
          </Link>

        </div>

        <div className="notfound-footer">
          Hospital Monitoring System • 2026
        </div>

      </div>

    </div>

  )

}

export default NotFound