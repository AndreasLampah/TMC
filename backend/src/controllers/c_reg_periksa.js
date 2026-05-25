import prisma from "../config/prisma.js";
import { getDataHarian } from "../utils/date.js";

export const getDataRegPeriksa = async (req, res) => {
  try {
    const { date } = req.query;
    if (!date) {
      return res.status(400).json({
        success: false,
        message: "Date wajib diisi",
      });
    }

    const { start, end } = getDataHarian(date);

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 50;
    const skip = (page - 1) * limit;

    const where = {
      tgl_registrasi: {
        gte: start,
        lte: end,
      },
    };

    const [data, totalDataPasien] = await Promise.all([
      prisma.regPeriksa.findMany({
        where,
        skip,
        take: limit,
        orderBy: {
          tgl_registrasi: "desc",
        },
      }),

      prisma.regPeriksa.count({
        where,
      }),
    ]);

    const totalPages = Math.ceil(totalDataPasien / limit);

    const meta = {
      page,
      limit,
      totalDataPasien,
      totalPages,
    };

    return res.status(200).json({
      success: true,
      pagination: meta,
      data,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Gagal mengambil data pasien",
      error: error.message,
    });
  }
};

export const getDataIgdHarian = async (req, res) => {
  try {
    const { date } = req.query;
    if (!date) {
      return res.status(400).json({
        success: false,
        message: "Date wajib diisi",
      });
    }

    const { start, end } = getDataHarian(date);

    const where = {
      tgl_kunjungan: {
        gte: start,
        lte: end,
      },
    };

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 50;
    const skip = (page - 1) * limit;

    const [dataIgd, totalDataIgd] = await Promise.all([
      prisma.dataTriaseIgd.findMany({
        where,
        skip,
        take: limit,
        orderBy: {
          tgl_kunjungan: "desc",
        },
      }),

      prisma.dataTriaseIgd.count({
        where,
      }),
    ]);

    const totalPages = Math.ceil(totalDataIgd / limit);

    const meta = {
      page,
      limit,
      totalDataIgd,
      totalPages,
    };
    return res.status(200).json({
      success: true,
      pagination: meta,
      dataIgd,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Gagal mengambil data pasien IGD",
      error: error.messagge,
    });
  }
};
