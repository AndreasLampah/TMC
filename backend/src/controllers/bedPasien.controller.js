import { getBed } from "../services/bedPasien.service.js";

export const dashboardBed = async (req, res) => {
  try {
    const bed = await getBed();

    return res.status(200).json({
      success: true,
      message: "Berhasil mengambil data monitoring bed",
      data: bed,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Gagal mengambil data monitoring bed",
    });
  }
};
