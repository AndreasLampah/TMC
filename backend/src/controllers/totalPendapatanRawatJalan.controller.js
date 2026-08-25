import {totalPendapatanRawatJalanService} from "../services/totalPendapatanRawatJalan.service.js"

export async function totalPendapatanRawatJalanController(req, res, next) {
    try {
        const TotalUangHarian = await totalPendapatanRawatJalanService()

    return res.status(200).json({
        success: true,
        message: "Berhasil ambil total pendapatan pasien rawat jalan harian",
        data: TotalUangHarian
    })

    } catch (error) {
        next(error)
    }
}