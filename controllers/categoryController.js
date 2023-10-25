import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//* Create Category
export const createCategory = async (req, res, next) => {
  const { strCategory } = req.body;
  try {
    const category = await prisma.category.create({
      data: {
        strCategory,
      },
      include: {
        recipes: true,
      },
    });
    res.status(201).json(category);
  } catch (error) {
    next(error);
  }
};

//* Get All Category
export const getAllCategory = async (req, res, next) => {
  try {
    const response = await prisma.category.findMany({
      include: {
        recipes: {
          select: {
            id: true,
            userID: true,
            recipe_name: true,
          },
        },
      },
    });
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

//* Get Category By Id
export const getCategory = async (req, res, next) => {
  try {
    const response = await prisma.category.findUnique({
      where: {
        id: String(req.params.id),
      },
      include: {
        recipes: {
          select: {
            id: true,
            userID: true,
            recipe_name: true,
          },
        },
      },
    });
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
