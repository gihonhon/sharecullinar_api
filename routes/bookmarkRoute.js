import express from "express";
import {
  addBookmark,
  getAllBookmark,
  getBookmarkUser,
} from "../controllers/bookmarkController.js";

const router = express.Router();

router.get("/bookmarks", getAllBookmark);
router.get("/bookmarks/:userID", getBookmarkUser);
router.post("/bookmarks", addBookmark);

export default router;
