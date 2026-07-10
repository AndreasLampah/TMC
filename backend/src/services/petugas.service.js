import prisma from "../config/prisma.js";

const paginationService = (page = 1, limit = 30, totalData = 0) => {
  const currentPage = Math.max(Number(page), 1);

  const perPage = Math.min(Number(limit), 100);

  const skip = (currentPage - 1) * perPage;

  const totalPage = Math.ceil(totalData / perPage);

  return {
    skip,
    take: perPage,
    pagination: {
      currentPage,
      limit: perPage,
      totalData,
      totalPage,
    },
  };
};

export const getAllPetugasService = async (page, limit) => {
  const { skip, take, pagination } = paginationService(page, limit);

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
      nama: "asc",
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
