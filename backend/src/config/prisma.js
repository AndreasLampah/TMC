import "dotenv/config";
import { PrismaClient } from "../../generated/prisma/client.js";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL tidak ditemukan");
}

const adapter = new PrismaMariaDb(
  process.env.DATABASE_URL
);

const prisma = new PrismaClient({
  adapter,
});

export default prisma;