import prisma from "../config/prisma.js";

export const pasienRanapService = async (namaPasien) => {
  if (!namaPasien || !namaPasien.trim()) {
    throw new Error("Nama pasien wajib di isi");
  }

  const nama = namaPasien.trim();

  const pasienRanap = await prisma.$queryRaw`SELECT
    rp.no_rawat AS nomor_rawat,
    p.no_rkm_medis AS nomor_rekam_medis,
    p.nm_pasien AS nama_pasien,
    ki.kd_kamar,
    ki.tgl_masuk,
    ki.jam_masuk
  FROM reg_periksa rp
  INNER JOIN pasien p
    ON rp.no_rkm_medis = p.no_rkm_medis
  INNER JOIN kamar_inap ki
    ON rp.no_rawat = ki.no_rawat
  WHERE p.nm_pasien LIKE ${`%${nama}%`}
    AND rp.status_lanjut = 'Ranap'
    AND rp.stts != 'Batal'
    AND ki.stts_pulang = '-'
  ORDER BY ki.tgl_masuk DESC
    LIMIT 50`;

  if (pasienRanap.length === 0) {
    throw new Error(`Pasien ${nama} tidak ditemukan`);
  }

  return pasienRanap;
};
