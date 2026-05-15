import express from "express"
import { getDataRegPeriksa, getDataIgdHarian } from "../controllers/c_reg_periksa.js"
import { getTotalDataHarian } from "../controllers/total_data.js"

const router = express.Router()

router.get("/pasien", getDataRegPeriksa)
router.get("/igd", getDataIgdHarian)
router.get("/data-harian", getTotalDataHarian)


export default router