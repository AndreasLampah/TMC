import express from "express";
import {
  getDataRegPeriksa,
  getDataIgdHarian,
} from "../controllers/c_reg_periksa.js";
import { getTotalDataHarian } from "../controllers/c_total_data_harian.js";
import { chart } from "../controllers/c_grafik_data.js";
import { auth } from "../controllers/c_auth.js";

const router = express.Router();

router.get("/pasien", getDataRegPeriksa);
router.get("/igd", getDataIgdHarian);
router.get("/data-harian", getTotalDataHarian);
router.get("/grafik", chart);

// auth
router.post("/login", auth);

export default router;
