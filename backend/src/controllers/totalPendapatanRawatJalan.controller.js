import {totalPendapatanRawatJalanService} from "../services/totalPendapatanRawatJalan.service.js"

export async function totalPendapatanRawatJalanController(req, res, next) {
    try {
        const {tanggal} = req.query
        const totalUangHarian = await totalPendapatanRawatJalanService(tanggal)

    return res.status(200).json({
        success: true,
        message: "Berhasil ambil total pendapatan pasien rawat jalan harian",
        data: totalUangHarian
    })

    } catch (error) {
        next(error)
    }
}