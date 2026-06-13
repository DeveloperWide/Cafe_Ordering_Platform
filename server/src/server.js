import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173/"
}));

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`)
})