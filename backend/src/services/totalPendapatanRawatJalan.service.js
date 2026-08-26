import prisma from "../config/prisma.js";
import { getDataHarian } from "../utils/date.js";

export async function totalPendapatanRawatJalanService(tanggal) {

    const {start, end} = getDataHarian(tanggal)

    const totalUangHarian = await prisma.detailNotaJalan.findMany({
        where: {
            regPeriksa: {
                tgl_registrasi: {
                gte: start,
                lte: end,
             },
             stts: {
                not: "Batal"
            },
            stts_daftar: {
                in: ["Lama", "Baru"],
            }
            },
        },
        select: {
            besarBayar: true
        }
    })

    let totalPendapatan = 0

    for (let i = 0; i < totalUangHarian.length; i++) {
        totalPendapatan = totalPendapatan + Number(totalUangHarian[i].besarBayar)
    }


    return totalPendapatan
}