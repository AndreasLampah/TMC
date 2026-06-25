import dotenv from "dotenv/config";
import express from "express";
import cors from "cors";
import r_route from "./routes/r_route.js";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET belum dikonfigurasi");
}

if (!process.env.JWT_EXPIRES) {
  throw new Error("JWT_EXPIRES belum dikonfigurasi");
}

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use("/api", r_route);

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
