import { Router } from "express";
import {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  showProduct,
} from "../controllers/product.controller";
import upload from "../middleware/upload";
import { auth } from "../middleware/middleware";
const router = Router({});

router.get("/", auth, getProducts);
router.post("/", auth, upload.single("img"), createProduct);
router.get("/:id", showProduct);
router.put("/:id", auth, upload.single("img"), updateProduct);
router.delete("/:id", deleteProduct);

export default router;
