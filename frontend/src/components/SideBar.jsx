import { NavLink } from "react-router-dom";

import { LayoutDashboard, Users, Ambulance, Bed } from "lucide-react";

import "../styles/Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        {/* <h2>
          DASHBOARD  
        </h2> */}
      </div>

      <nav className="sidebar-menu">
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
    </aside>
  );
}
