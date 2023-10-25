import express from "express";
import {
  giveComment,
  getAllComments,
  getComment,
} from "../controllers/commentController.js";

const router = express.Router();

router.get("/comments", getAllComments);
router.get("/comments/:id", getComment);
router.post("/comments", giveComment);

export default router;
