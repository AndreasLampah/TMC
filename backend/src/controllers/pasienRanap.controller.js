import { pasienRanapService } from "../services/pasienRanap.service.js";

export const filterPasien = async (req, res) => {
  try {
    const { namaPasien } = req.body;

    const pasien = await pasienRanapService(namaPasien);

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
