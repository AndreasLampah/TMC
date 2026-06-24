import prisma from "../config/prisma.js";
import jwt from "jsonwebtoken";

export const auth = async (req, res) => {
  try {
    const { nip, password } = req.body;

    const user = await prisma.Petugas.findUnique({
      where: {
        nip,
      },
    });

    if (!user) {
      return res.status(404).json({
        message: "User tidak ditemukan",
      });
    }

    if (password !== user.nip) {
      return res.status(401).json({
        message: "Password salah",
      });
    }

    const token = jwt.sign(
      {
        nip: user.nip,
        nama: user.nama,
        jabatan: user.kdJbtn,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES,
      },
    );

    return res.status(200).json({
      message: "Login Berhasil",
      token,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: error.message,
    });
  }
};
