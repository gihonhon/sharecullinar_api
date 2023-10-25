import express from "express";
import {
  getRating,
  getRatings,
  giveRating,
} from "../controllers/ratingController.js";

const router = express.Router();

router.get("/ratings", getRatings);
router.get("/ratings/:id", getRating);
router.post("/ratings/:recipeID", giveRating);

export default router;
