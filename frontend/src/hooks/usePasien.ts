import { useEffect, useState } from "react";
import { getPasien } from "../services/pasien.services";
import type { Pasien } from "../types/pasien";

export const usePatients = (date: string) => {

  const [patients, setPatients] =
    useState<Pasien[]>([]);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  useEffect(() => {

    if (!date) return;

    const fetchData = async () => {

      try {

        setLoading(true);

        const result =
          await getPasien(date);

        setPatients(result.data);

      } catch (err) {
        console.error(err)

        setError("Gagal ambil data");

      } finally {

        setLoading(false);

      }
    };

    fetchData();

  }, [date]);

  return {
    patients,
    loading,
    error,
  };
};