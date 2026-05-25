import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import Sidebar
from "./components/Sidebar"

import DashboardPage
from "./pages/DashboardPage"

import "../src/styles/Sidebar.css"
import NotFound from "./pages/NotFound"


export default function App(){

  return(

    <BrowserRouter>

      <div className="app-layout">

        <Sidebar />


        <main className="main-content">

          <Routes>

            <Route
              path="/"
              element={
                <DashboardPage />
              }
            />

            <Route
              path="*"
              element={
                <NotFound />
              }
            />

     
          </Routes>

        </main>

      </div>

    </BrowserRouter>
  )
}