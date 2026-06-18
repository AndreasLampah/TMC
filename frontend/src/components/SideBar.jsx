import { NavLink } from "react-router-dom";

import { LayoutDashboard, Users, Ambulance, Bed, Cross } from "lucide-react";

import "../styles/Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="sidebar-logo-mark">
          <Cross />
        </div>

        <div className="sidebar-logo-text">
          <strong>RSU. Tumpaan</strong>
          <span>Medical Center</span>
        </div>
      </div>

      <nav className="sidebar-menu">
        <span className="sidebar-menu-label">Menu</span>

        <NavLink to="/">
          <LayoutDashboard />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/pasien">
          <Users />
          <span>Pasien</span>
        </NavLink>

        <NavLink to="/igd">
          <Ambulance />
          <span>IGD</span>
        </NavLink>

        <NavLink to="/ranap">
          <Bed />
          <span>Rawat Inap</span>
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <span className="status-dot"></span>
        <span>Sistem aktif</span>
      </div>
    </aside>
  );
}
