import prisma from "../config/prisma.js";
import { getDataHarian } from "../utils/date.js";

export const getTotalDataHarian = async (req, res) => {
  try {
    const { start, end } = getDataHarian();

    const [
      dataPasien,
      dataRalan,
      dataRanap,
      dataIgd,
      dataLabRalan,
      dataLabRanap,
      dataLabPa,
      dataLabPk,
      dataLabMb,
      dataGawatDarurat,
      dataPenyakitDalam,
      dataPediatriAnak,
      dataBedah,
      dataKandunganKebidanan,
      dataNeurologiSaraf,
      dataJantungPembuluhDarah,
    ] = await Promise.all([
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

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_laboratorium_ralan FROM periksa_lab
      WHERE tgl_periksa >= ${start} AND tgl_periksa < ${end}
      AND status = 'Ralan'
      `,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_laboratorium_ranap FROM periksa_lab
      WHERE tgl_periksa >= ${start} AND tgl_periksa < ${end}
      AND status = 'Ranap'
      `,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_laboratorium_pa FROM periksa_lab
      WHERE tgl_periksa >= ${start} AND tgl_periksa < ${end}
      AND kategori = 'PA'`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_laboratorium_pk FROM periksa_lab
      WHERE tgl_periksa >= ${start} AND tgl_periksa < ${end}
      AND kategori = 'PK'`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_laboratorium_mb FROM periksa_lab
      WHERE tgl_periksa >= ${start} AND tgl_periksa < ${end}
      AND kategori = 'MB'`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_gawat_darurat FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0001'
      AND stts != 'Batal'`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_penyakit_dalam FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0002'
      AND stts != 'Batal'`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_pediatri_anak FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0003'
      AND stts != 'Batal'`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_bedah FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0004'
      AND stts != 'Batal'`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_kandungan_kebidanan FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0005'
      AND stts != 'Batal'`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_neurologi_saraf FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0006'
      AND stts != 'Batal'`,

      prisma.$queryRaw`
      SELECT COUNT(*) AS total_jantung_pembuluh_darah FROM reg_periksa
      WHERE tgl_registrasi >= ${start} AND tgl_registrasi < ${end}
      AND kd_poli = 'U0007'
      AND stts != 'Batal'`,
    ]);

    const totalPasien = Number(dataPasien[0]?.total_pasien ?? 0);
    const totalRalan = Number(dataRalan[0]?.total_ralan ?? 0);
    const totalRanap = Number(dataRanap[0]?.total_ranap ?? 0);
    const totalIgd = Number(dataIgd[0]?.total_igd ?? 0);
    const totalLabRalan = Number(
      dataLabRalan[0]?.total_laboratorium_ralan ?? 0,
    );
    const totalLabRanap = Number(
      dataLabRanap[0]?.total_laboratorium_ranap ?? 0,
    );
    const totalLabPa = Number(dataLabPa[0]?.total_laboratorium_pa ?? 0);
    const totalLabPk = Number(dataLabPk[0]?.total_laboratorium_pk ?? 0);
    const totalLabMb = Number(dataLabMb[0]?.total_laboratorium_mb ?? 0);
    const totalGawatDarurat = Number(
      dataGawatDarurat[0]?.total_gawat_darurat ?? 0,
    );
    const totalPenyakitDalam = Number(
      dataPenyakitDalam[0]?.total_penyakit_dalam ?? 0,
    );
    const totalPediatriAnak = Number(
      dataPediatriAnak[0]?.total_pediatri_anak ?? 0,
    );
    const totalBedah = Number(dataBedah[0]?.total_bedah ?? 0);
    const totalKandunganKebidanan = Number(
      dataKandunganKebidanan[0]?.total_kandungan_kebidanan ?? 0,
    );
    const totalNeurologiSaraf = Number(
      dataNeurologiSaraf[0]?.total_neurologi_saraf ?? 0,
    );
    const totalJantungPembuluhDarah = Number(
      dataJantungPembuluhDarah[0]?.total_jantung_pembuluh_darah ?? 0,
    );

    return res.status(200).json({
      success: true,
      data: {
        total_pasien: totalPasien,
        total_ralan: totalRalan,
        total_ranap: totalRanap,
        total_igd: totalIgd,
        total_laboratorium_ralan: totalLabRalan,
        total_laboratorium_ranap: totalLabRanap,
        total_laboratorium_pa: totalLabPa,
        total_laboratorium_pk: totalLabPk,
        total_laboratorium_mb: totalLabMb,
        total_gawat_darurat: totalGawatDarurat,
        total_penyakit_dalam: totalPenyakitDalam,
        total_pediatri_anak: totalPediatriAnak,
        total_bedah: totalBedah,
        total_kandungan_kebidanan: totalKandunganKebidanan,
        total_neurologi_saraf: totalNeurologiSaraf,
        total_jantung_pembuluh_darah: totalJantungPembuluhDarah,
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
