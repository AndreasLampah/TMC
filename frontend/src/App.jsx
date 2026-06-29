import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import ProtectedRoute from "./components/ProtectedRoute";

import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import RanapPage from "./pages/RanapPage";

import "../src/styles/Sidebar.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login - tidak pakai sidebar */}
        <Route path="/login" element={<LoginPage />} />

        {/* Layout dengan sidebar - semua route di sini protected */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <div className="app-layout">
                <Sidebar />
                <main className="main-content">
                  <Routes>
                    <Route path="/" element={<DashboardPage />} />
                    <Route path="/ranap" element={<RanapPage />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
