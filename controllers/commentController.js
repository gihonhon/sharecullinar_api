import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//* Create Comment
export const giveComment = async (req, res, next) => {
  const { userID, recipeID, comment_content } = req.body;
  try {
    const comments = await prisma.comments.create({
      data: {
        userID,
        recipeID,
        comment_content,
      },
    });
    res.status(201).json(comments);
  } catch (error) {
    next(error);
  }
};

//* Get All Comments
export const getAllComments = async (req, res, next) => {
  try {
    const response = await prisma.comments.findMany();
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

//* Get Comments by Id
export const getComment = async (req, res, next) => {
  try {
    const response = await prisma.comments.findMany({
      where: { recipeID: req.params.id },
      select: {
        id: true,
        userID: true,
        comment_content: true,
        createdAt: true,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
