import { Router } from "express";
import { getMe, login, logout, signup } from "../controllers/auth.controller";
import { auth } from "../middleware/middleware";

const router = Router({});

router.post("/signup", signup);
router.post("/login", login);
router.get("/me", auth, getMe);
router.post("/logout", logout);

export default router;
