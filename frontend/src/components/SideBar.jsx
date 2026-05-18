import {
  NavLink
} from "react-router-dom"

import {
  LayoutDashboard,
  Users,
  Ambulance,
  Bed
} from "lucide-react"

import "../styles/Sidebar.css"


export default function Sidebar(){

  return(

    <aside className="sidebar">

      <div className="sidebar-logo">

        <h2>
          SIMRS 
        </h2>

      </div>


      <nav className="sidebar-menu">

        <NavLink
          to="/"
        >
          <LayoutDashboard />
          Dashboard
        </NavLink>


        <NavLink
          to="/patients"
        >
          <Users />
          Pasien
        </NavLink>


        <NavLink
          to="/igd"
        >
          <Ambulance />
          IGD
        </NavLink>


        <NavLink
          to="/ranap"
        >
          <Bed />
          Rawat Inap
        </NavLink>

      </nav>

    </aside>
  )
}