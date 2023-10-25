import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import createHttpError from "http-errors";
import RecipeRoute from "./routes/RecipesRoute.js";
import authRoute from "./routes/authRoute.js";
import bookmarkRoute from "./routes/bookmarkRoute.js";
import categoryRoute from "./routes/categoryRoute.js";
import commentRoute from "./routes/commentRoute.js";
import ratingRoute from "./routes/ratingRoute.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//* Main Route
app.get("/", (req, res) => {
  res.send("NodeJS + Express + Typescript App Up! 👍");
});

//! Routes
//* Auth Route
app.use("/auth", authRoute);
//* Recipe Route
app.use(RecipeRoute);
//* Category Route
app.use(categoryRoute);
//* Rating Route
app.use(ratingRoute);
//* Comment Route
app.use(commentRoute);
//* Bookmark Route
app.use(bookmarkRoute);

//* Handle for 404 error
app.use((req, res, next) => {
  next(createHttpError(404));
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
