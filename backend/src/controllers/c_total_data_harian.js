import prisma from "../config/prisma.js"
import getDataHarian from "../utils/date.js"

export const getTotalDataHarian = async (req, res) => {
    try {

        const {start, end} = getDataHarian()

        const [dataPasien, dataRalan, dataRanap ,dataIgd, ] = await Promise.all([

            prisma.regPeriksa.count({
                where: {
                    tgl_registrasi: {
                        gte: start,
                        lte: end,
                    },
                }
            }),

            prisma.regPeriksa.count({
                where: { 
                    status_lanjut: "Ralan",
                    tgl_registrasi: {
                        gte: start,
                        lte: end,
                    }
                }
            }),

            prisma.regPeriksa.count({
                where: {
                    status_lanjut: "Ranap",
                    tgl_registrasi: {
                        gte: start,
                        lte: end
                    }
                }
            }),

            prisma.dataTriaseIgd.count({
                where: {
                    tgl_kunjungan: {
                        gte: start,
                        lte: end,
                    },
                }
            }),

        ])

        return res.status(200).json({
            success: true,
            data: {
                total_pasien: dataPasien,
                total_igd: dataIgd,
                total_ralan: dataRalan,
                total_Ranap: dataRanap
            }
        })
    } catch (error) {
        console.error(error)

        return res.status(500).json({
            success: false,
            message: `Gagal mengambil total seluruh data harian` 
        })
    }
}