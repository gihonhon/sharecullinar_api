import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//* Add to Bookmarks
export const addBookmark = async (req, res, next) => {
  const { userID, recipeID } = req.body;
  try {
    const newBookmark = await prisma.bookmarks.create({
      data: {
        userID,
        recipeID,
      },
    });
    res.status(201).json(newBookmark);
  } catch (error) {
    next(error);
  }
};

//* Get All Bookmarks
export const getAllBookmark = async (req, res, next) => {
  try {
    const response = await prisma.bookmarks.findMany({
      include: {
        recipe: true,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

//* Get Bookmark User
export const getBookmarkUser = async (req, res, next) => {
  try {
    const response = await prisma.bookmarks.findMany({
      where: { userID: req.params.userID },
      include: {
        recipe: true,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
