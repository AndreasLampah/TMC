import prisma from "../config/prisma.js";
import { paginationService } from "../utils/pagination.js";

export const getAllPetugasService = async (page, limit) => {
  // hitung dulu totalData dengan where yang SAMA persis dengan findMany
  const totalData = await prisma.petugas.count({
    where: {
      nip: {
        startsWith: "TMC",
      },
    },
  });

  const { skip, take, pagination } = paginationService(page, limit, totalData);

  const getPetugas = await prisma.petugas.findMany({
    where: {
      nip: {
        startsWith: "TMC",
      },
    },
    skip,
    take,
    select: {
      nip: true,
      nama: true,
      kdJbtn: true,
    },
    orderBy: {
      nip: "asc",
    },
  });

  const finalName = getPetugas.map((item) => {
    return {
      nip: item.nip,
      nama: item.nama.split(",")[0].trim(),
      kdJbtn: item.kdJbtn,
    };
  });

  return { data: finalName, pagination };
};
export const filterPetugasService = async (namaPetugas) => {
  if (!namaPetugas || !namaPetugas.trim()) {
    throw new Error("Silahkan masukan nama petugas");
  }
  const search = namaPetugas.trim();

  const searchPetugas = await prisma.petugas.findMany({
    where: {
      nama: {
        contains: search,
      },
    },
    select: {
      nip: true,
      nama: true,
    },
    take: 20,
  });

  if (searchPetugas.length === 0) {
    throw new Error(`Petugas ${search} tidak ditemukan`);
  }

  return searchPetugas;
};
