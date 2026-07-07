import prisma from "../config/prisma.js";

export const filterPasien = async (req, res) => {
  try {
    const { namaPasien } = req.body;

    if (!namaPasien || !namaPasien.trim()) {
      return res.status(400).json({
        success: false,
        message: "Nama Pasien harus di isi",
      });
    }

    const nama = namaPasien.trim();

    const pasien = await prisma.$queryRaw`
  SELECT
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
    LIMIT 50
`;

    if (pasien.length === 0) {
      return res.status(404).json({
        success: false,
        message: `Pasien ${nama} tidak ditemukan`,
      });
    }

    return res.status(200).json({
      success: true,
      message:
        "Berhasil ambil data pasien dengan status rawat inap di rumah sakit",
      data: pasien,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message:
        "Gagal mengambil data pasien dengan status rawat inap di rumah sakit",
    });
  }
};
