import express from "express";

import { getTotalDataHarian } from "../controllers/totalPasienHarian.controller.js";
import { chart } from "../controllers/grafikData.controller.js";
import { auth } from "../controllers/auth.controller.js";
import { filterPasien } from "../controllers/pasien.controller.js";
import { attendanceController } from "../controllers/attendance.controller.js";

const router = express.Router();

// auth
router.post("/login", auth);

router.get("/data-harian", getTotalDataHarian);
router.get("/grafik", chart);
router.get("/pasien-ranap", filterPasien);
router.get("/presensi", attendanceController);

export default router;
