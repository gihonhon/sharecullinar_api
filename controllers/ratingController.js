import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//* Create Ratings
export const giveRating = async (req, res, next) => {
  const { userID, recipeID, rating } = req.body;
  try {
    const newRatings = await prisma.ratings.create({
      data: {
        userID,
        recipeID,
        rating,
      },
      select: {
        id: true,
        userID: true,
        recipeID: true,
        rating: true,
        createdAt: true,
      },
    });

    const ratings = await prisma.ratings.findMany({
      where: {
        recipeID: req.params.recipeID,
      },
    });

    const totalRating = ratings.reduce((sum, r) => sum + r.rating, 0);
    const averageRating = ratings.length > 0 ? totalRating / ratings.length : 0;

    const roundedAverageRating = averageRating.toFixed(1);

    await prisma.recipes.update({
      where: { id: req.params.recipeID },
      data: {
        average_ratings: parseFloat(roundedAverageRating),
      },
    });

    res.status(201).json(newRatings);
  } catch (error) {
    next(error);
  }
};

//* Get Rating By recipe Id
export const getRating = async (req, res, next) => {
  try {
    const response = await prisma.ratings.findMany({
      where: { recipeID: req.params.id },
      select: {
        id: true,
        userID: true,
        rating: true,
        createdAt: true,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

//* Get All Ratings
export const getRatings = async (req, res, next) => {
  try {
    const response = await prisma.ratings.findMany({
      select: {
        id: true,
        userID: true,
        recipes: {
          select: {
            id: true,
            recipe_name: true,
            picture: true,
            createdAt: true,
            category: {
              select: {
                id: true,
                strCategory: true,
              },
            },
          },
        },
        createdAt: true,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
