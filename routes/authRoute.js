import express from "express";
import {
  signup,
  login,
  authenticateToken,
} from "../controllers/authController.js";
import { getUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/profile", authenticateToken, getUser);

export default router;
