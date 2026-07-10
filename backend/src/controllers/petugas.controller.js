import {
  getAllPetugasService,
  filterPetugasService,
} from "../services/petugas.service.js";

export const getAllPetugasController = async (req, res, next) => {
  try {
    const getPetugas = await getAllPetugasService(
      req.query.page,
      req.query.limit,
    );

    return res.status(200).json({
      success: true,
      message: "Berhasil ambil data Petugas",
      data: getPetugas,
    });
  } catch (error) {
    console.error(error);

    next(error);
  }
};

export const filterPetugasController = async (req, res, next) => {
  try {
    const { namaPetugas } = req.body;

    const searchPetugas = await filterPetugasService(namaPetugas);

    return res.status(200).json({
      success: true,
      message: `Petugas ${namaPetugas} berhasil ditemukan`,
      data: searchPetugas,
    });
  } catch (error) {
    console.error(error);

    next(error);
  }
};
