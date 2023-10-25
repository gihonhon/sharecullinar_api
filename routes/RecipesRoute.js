import express from "express";
import {
  getAllRecipe,
  getRecipe,
  cerateRecipe,
  updateRecipe,
  deleteRecipe,
} from "../controllers/RecipesController.js";

const router = express.Router();

router.get("/recipes", getAllRecipe);
router.get("/recipes/:id", getRecipe);
router.post("/recipes", cerateRecipe);
router.patch("/recipes/:id", updateRecipe);
router.delete("/recipes/:id", deleteRecipe);

export default router;
