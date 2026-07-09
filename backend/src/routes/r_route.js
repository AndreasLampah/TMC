import express from "express";

import { getTotalDataHarian } from "../controllers/totalPasienHarian.controller.js";
import { chart } from "../controllers/grafikData.controller.js";
import { auth } from "../controllers/auth.controller.js";
import { filterPasien } from "../controllers/pasienRanap.controller.js";
import { attendanceController } from "../controllers/attendance.controller.js";
import { dashboardBed } from "../controllers/bedPasien.controller.js";
import {
  getAllPetugasController,
  filterPetugasController,
} from "../controllers/petugas.controller.js";

const router = express.Router();

// auth
router.post("/login", auth);

router.get("/data-harian", getTotalDataHarian);

router.get("/grafik", chart);

router.get("/pasien-ranap", filterPasien);

router.get("/presensi", attendanceController);

router.get("/bed", dashboardBed);

router.get("/petugas", getAllPetugasController);
router.post("/search-petugas", filterPetugasController);

export default router;
