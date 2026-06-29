import express from "express";

import { getTotalDataHarian } from "../controllers/c_total_data_harian.js";
import { chart } from "../controllers/c_grafik_data.js";
import { auth } from "../controllers/c_auth.js";
import { filterPasien } from "../controllers/c_pasien.js";

const router = express.Router();

router.get("/data-harian", getTotalDataHarian);
router.get("/grafik", chart);
router.get("/pasien-ranap", filterPasien);

// auth
router.post("/login", auth);

export default router;
