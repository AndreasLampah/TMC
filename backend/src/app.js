import dotenv from "dotenv/config";
import express from "express";
import cors from "cors";
import r_route from "./routes/r_route.js";

const app = express();

const PORT = process.env.PORT;

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
