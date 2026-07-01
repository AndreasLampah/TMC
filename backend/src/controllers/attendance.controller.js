import { getAttendance } from "../services/attendance.service.js";

export const attendanceController = async (req, res) => {
  try {
    const { date } = req.query;

    if (date && !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return res.status(400).json({
        success: false,
        message: "Format tanggal tidak valid, gunakan YYYY-MM-DD",
      });
    }

    const attendance = await getAttendance(date);

    if (!attendance || attendance.length === 0) {
      return res.status(200).json({
        success: true,
        message: date
          ? "Tidak ada data pada tanggal tersebut"
          : "Belum ada data presensi",
        data: [],
      });
    }

    return res.status(200).json({
      success: true,
      message: "Berhasil ambil data presensi",
      data: attendance,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Terjadi kesalahan pada server",
    });
  }
};
