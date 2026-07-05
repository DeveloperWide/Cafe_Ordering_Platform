import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173", //"http://localhost:5173"
    credentials: true,
    methods: ["POST", "PATCH", "DELETE", "GET", "PUT"],
  }),
);

export default app;
