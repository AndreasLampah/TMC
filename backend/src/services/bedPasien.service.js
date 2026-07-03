import prisma from "../config/prisma.js";

export const getBed = async () => {
  try {
    const [
      totalTempatTidur,
      ringkasanStatus,
      ringkasanKelas,
      ringkasanKodeBangsal,
      kamarTerbaru,
    ] = await Promise.all([
      prisma.kamar.count({
        where: {
          statusData: "AKTIF",
        },
      }),

      prisma.kamar.groupBy({
        by: ["status"],
        where: {
          statusData: "AKTIF",
        },
        _count: {
          status: true,
        },
      }),

      prisma.kamar.groupBy({
        by: ["kelas"],
        where: {
          statusData: "AKTIF",
        },
        _count: {
          kelas: true,
        },
      }),

      prisma.kamar.groupBy({
        by: ["kdBangsal"],
        where: {
          statusData: "AKTIF",
        },
        _count: {
          kdBangsal: true,
        },
      }),

      prisma.kamar.findMany({
        where: {
          statusData: "AKTIF",
        },
        orderBy: {
          kdKamar: "asc",
        },
        take: 10,
      }),
    ]);

    const summary = {
      totalTempatTidur,
      jumlahTerisi: 0,
      jumlahKosong: 0,
      jumlahDibersihkan: 0,
      jumlahDipesan: 0,
      jumlahPerbaikan: 0,
      bor: 0,
    };

    ringkasanStatus.forEach((item) => {
      switch (item.status) {
        case "ISI":
          summary.jumlahTerisi = item._count.status;
          break;

        case "KOSONG":
          summary.jumlahKosong = item._count.status;
          break;

        case "DIBERSIHKAN":
          summary.jumlahDibersihkan = item._count.status;
          break;

        case "DIBOOKING":
          summary.jumlahDipesan = item._count.status;
          break;

        case "PERBAIKAN":
          summary.jumlahPerbaikan = item._count.status;
          break;
      }
    });

    if (summary.totalTempatTidur > 0) {
      summary.bor = Number(
        ((summary.jumlahTerisi / summary.totalTempatTidur) * 100).toFixed(2),
      );
    }

    return {
      summary,
      ringkasanStatus,
      ringkasanKelas,
      ringkasanKodeBangsal,
      kamarTerbaru,
    };
  } catch (error) {
    console.error("[Bed Service]", error);

    throw error;
  }
};
