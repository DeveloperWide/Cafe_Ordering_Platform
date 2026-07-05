import { Router } from "express";
import {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller";
import upload from "../middleware/upload";
const router = Router({});

router.get("/", getProducts);
router.post("/", upload.single("img"), createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
