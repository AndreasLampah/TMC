import prisma from "../config/prisma.js";

export const getAllPetugasService = async () => {
  const getPetugas = await prisma.petugas.findMany({
    select: {
      nip: true,
      nama: true,
      kdJbtn: true,
    },

    skip: 0,
    take: 30,
  });
  return getPetugas;
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
        mode: "insensitive",
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
