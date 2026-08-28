import {totalPendapatanHarian} from "../services/totalPendapatanRawatJalan.service.js"

export async function totalPendapatanController(req, res, next) {
    try {
        const {tanggal} = req.query
        const totalUangHarian = await totalPendapatanHarian(tanggal)

    return res.status(200).json({
        success: true,
        message: "Berhasil ambil total pendapatan hari ini",
        data: totalUangHarian
    })

    } catch (error) {
        next(error)
    }
}