import prisma from "../config/prisma.js";
import { getDataHarian } from "../utils/date.js";

async function totalPendapatanRawatJalanService(tanggal) {

    const {start, end} = getDataHarian(tanggal)

    const pendapatanRawatJalan = await prisma.detailNotaJalan.findMany({
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

    let totalPendapatanJalan = 0

    for (let i = 0; i < pendapatanRawatJalan.length; i++) {
        totalPendapatanJalan = totalPendapatanJalan + Number(pendapatanRawatJalan[i].besarBayar)
    }


    return totalPendapatanJalan
}

async function totalPendapatanRawatInapService(tanggal) {
    const {start, end} = getDataHarian(tanggal)

    const pendapatanRawatInap = await prisma.detailNotaInap.findMany({
        where: {
            regPeriksa: {
                tgl_registrasi: {
                    gte: start,  
                    lte: end
                },
                stts: {
                    not: "Batal"
                },
                stts_daftar: {
                    in: ["Lama","Baru"]
                }
            }
        },
        select: {
            besarBayar: true
        }
    })
 
    let totalPendapatanInap = 0

    for (let i = 0; i < pendapatanRawatInap.length; i++) {
        totalPendapatanInap = totalPendapatanInap + Number(pendapatanRawatInap[i].besarBayar)
    }

    return totalPendapatanInap
}

export async function totalPendapatanHarian(tanggal) {

    const [rawatJalan, rawatInap] = await Promise.all([
        totalPendapatanRawatJalanService(tanggal),
        totalPendapatanRawatInapService(tanggal)
    ])

    return {
        rawatJalan: rawatJalan,
        rawatInap: rawatInap,
        total: rawatJalan + rawatInap
    }
}