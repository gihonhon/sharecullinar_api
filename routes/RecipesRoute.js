import express from "express";
import {
  cerateRecipe,
  deleteRecipe,
  getAllRecipe,
  getRecipe,
  searchRecipe,
  updateRecipe,
} from "../controllers/RecipesController.js";

const router = express.Router();

router.get("/recipes", getAllRecipe);
router.get("/recipes/:id", getRecipe);
router.get("/search/recipes/:name", searchRecipe);
router.post("/recipes", cerateRecipe);
router.patch("/recipes/:id", updateRecipe);
router.delete("/recipes/:id", deleteRecipe);

export default router;
