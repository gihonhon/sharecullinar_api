import express from "express";
import {
  createCategory,
  getAllCategory,
  getCategory,
} from "../controllers/categoryController.js";

const router = express.Router();

router.get("/category", getAllCategory);
router.get("/category/:id", getCategory);
router.post("/category", createCategory);

export default router;
