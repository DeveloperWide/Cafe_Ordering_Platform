import { Request, Response } from "express";
import app from "./app";
import { connectDB } from "./config/db";
import authRoutes from "./routes/auth.routes";
import productRoutes from "./routes/product.routes";

const PORT = process.env.PORT || 8080;

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.use("/api/auth/", authRoutes);
app.use("/api/product/", productRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
  });
});
