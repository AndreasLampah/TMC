import { StatusRegPeriksa } from "@prisma/client";
import prisma from "../config/prisma.js";
import { getDataHarian } from "../utils/date.js";

export const getTotalDataHarian = async (req, res) => {
  try {
    const { start, end } = getDataHarian("2026-01-20");

    const [dataPasien, dataRalan, dataRanap, dataIgd] = await Promise.all([
      prisma.$queryRaw`
      SELECT COUNT(*) AS total_pasien FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end} 
      AND stts != 'Batal'`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_ralan FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND status_lanjut = 'Ralan'
      AND stts != 'Batal'`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_ranap FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND status_lanjut = 'Ranap'
      AND stts != 'Batal'`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_igd FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'IGDK'
      AND stts != 'Batal'`,
    ]);

    const totalPasien = Number(dataPasien[0]?.total_pasien ?? 0);
    const totalRalan = Number(dataRalan[0]?.total_ralan ?? 0);
    const totalRanap = Number(dataRanap[0]?.total_ranap ?? 0);
    const totalIgd = Number(dataIgd[0]?.total_igd ?? 0);

    return res.status(200).json({
      success: true,
      data: {
        total_pasien: totalPasien,
        total_ralan: totalRalan,
        total_ranap: totalRanap,
        total_igd: totalIgd,
      },
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: `Gagal mengambil total seluruh data harian`,
    });
  }
};
