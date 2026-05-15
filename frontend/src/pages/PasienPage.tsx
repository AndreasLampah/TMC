import { useState } from "react";
import { usePatients } from "../hooks/usePasien";
import "../style/pasienPage.css";

export default function PatientPage() {
  const [date, setDate] =
    useState("2026-01-01");

  const {
    patients,
    loading,
    error,
  } = usePatients(date);

  return (
    <div className="patient-page">

      <header className="page-header">
        <p>Hospital Dashboard</p>
        <h1>Patient Management</h1>
      </header>


      <section className="top-section">

        <div className="filter-card">

          <h3>Filter Date</h3>

          <input
            type="date"
            value={date}
            onChange={(e) =>
              setDate(e.target.value)
            }
          />

        </div>


        <div className="stats-card">

          <p>Total Patients</p>

          <h2>
            {patients.length}
          </h2>

        </div>

      </section>


      <section className="patient-list">

        {loading && (
          <p>Loading...</p>
        )}

        {error && (
          <p className="error">
            {error}
          </p>
        )}

        {!loading &&
          !error &&
          patients.map((patient) => (

            <div
              key={patient.no_rawat}
              className="patient-card"
            >

              <div>

                <h3>
                  {patient.p_jawab}
                </h3>

                <p>
                  {patient.no_rawat}
                </p>

              </div>

              <span>
                {patient.kd_poli}
              </span>

            </div>

          ))}

      </section>

    </div>
  );
}