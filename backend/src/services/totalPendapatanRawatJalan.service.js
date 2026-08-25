import { gte } from "zod";
import prisma from "../config/prisma.js";
import { getDataHarian } from "../utils/date.js";

export async function totalPendapatanRawatJalanService() {

    const {start, end} = getDataHarian()

    const totalUangHarian = await prisma.detailNotaJalan.findMany({
        where: {
            regPeriksa: {
                tgl_registrasi: {
                gte: start,
                lte: end,
             }
            },
        },
        select: {
            besarBayar: true
        }
    })

    if (totalUangHarian.length === 0) throw new Error("Belum ada pendapatan untuk hari ini")

    return totalUangHarian
}