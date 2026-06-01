import prisma from "../config/prisma.js";
import { grafikDate } from "../utils/grafik_date.js";
import { StatusDaftar, StatusRegPeriksa } from "@prisma/client";
// export const grafikSevenDaysAgo = async (req, res) => {
//   try {
//     const { sevenDaysAgo } = grafikDate();

//     const pasienChartSevenDaysAgo = await prisma.regPeriksa.findMany({
//       where: {
//         tgl_registrasi: {
//           gte: sevenDaysAgo,
//         },
//       },
//       orderBy: {
//         tgl_registrasi: "asc",
//       },
//     });

//     const grouped = {};

//     pasienChartSevenDaysAgo.forEach((item) => {
//       const date = item.tgl_registrasi.toISOString().split("T")[0];

//       if (!grouped[date]) {
//         grouped[date] = 0;
//       }
//       grouped[date]++;
//     });

//     const chartDataSevenDayAgo = Object.entries(grouped).map(
//       ([date, total]) => ({
//         date,
//         total,
//       }),
//     );

//     return res.status(200).json({
//       success: true,
//       message: "berhasil ambil data 7 pasien hari terakhir",
//       data: chartDataSevenDayAgo,
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({
//       success: false,
//       message: " Gagal mengambil data 7 pasien hari terakhirS",
//     });
//   }
// };

// export const grafikToday = async (req, res) => {
//   try {
//     const { today } = grafikDate();

//     const pasienChartToday = await prisma.regPeriksa.findMany({
//       where: {
//         tgl_registrasi: {
//           gte: today,
//         },
//       },
//       orderBy: {
//         tgl_registrasi: "asc",
//       },
//     });

//     const buildChart = data;
//     const grouped = {};

//     pasienChartToday.forEach((item) => {
//       const date = item.tgl_registrasi.toISOString().split("T")[0];

//       if (!grouped[date]) {
//         grouped[date] = 0;
//       }
//       grouped[date]++;
//     });

//     const chartDataToday = Object.entries(grouped).map(([date, total]) => ({
//       date,
//       total,
//     }));

//     return res.status(200).json({
//       success: true,
//       message: "Berhasil mengambil data hari ini",
//       data: chartDataToday,
//     });
//   } catch (error) {
//     console.error(error);

//     return res.status(500).json({
//       success: false,
//       message: "Gagal mengambil data har ini",
//     });
//   }
// };

export const chart = async (req, res) => {
  try {
    const { todayStart, todayEnd, sevenDaysAgo } = grafikDate();

    const pasienChart = await prisma.regPeriksa.findMany({
      where: {
        tgl_registrasi: {
          gte: sevenDaysAgo,
          lte: todayEnd,
        },
        stts: {
          not: StatusRegPeriksa.Batal,
        },
      },
      orderBy: {
        tgl_registrasi: "asc",
      },
    });

    const grouped = {};
    pasienChart.forEach((item) => {
      const date = item.tgl_registrasi.toLocaleDateString("sv-SE");

      if (!grouped[date]) {
        grouped[date] = 0;
      }
      grouped[date]++;
    });

    const chartData = Object.entries(grouped).map(([date, total]) => ({
      date,
      total,
    }));

    const totalToday = pasienChart.filter((item) => {
      return (
        item.tgl_registrasi >= todayStart && item.tgl_registrasi <= todayEnd
      );
    }).length;
    return res.status(200).json({
      success: true,
      message: "Berhasil ambil data grafik",
      totalToday,
      data: chartData,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Gagal mengambil data grafik",
    });
  }
};
