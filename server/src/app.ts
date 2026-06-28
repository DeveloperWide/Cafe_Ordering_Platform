import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173/",
  }),
);

export default app;
