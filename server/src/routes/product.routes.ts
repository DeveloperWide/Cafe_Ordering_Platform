import { Router } from "express";
import {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  showProduct,
} from "../controllers/product.controller";
import upload from "../middleware/upload";
const router = Router({});

router.get("/", getProducts);
router.post("/", upload.single("img"), createProduct);
router.get("/:id", showProduct);
router.put("/:id", upload.single("img"), updateProduct);
router.delete("/:id", deleteProduct);

export default router;
