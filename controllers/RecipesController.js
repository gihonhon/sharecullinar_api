import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//* Get All Recipes
export const getAllRecipe = async (req, res) => {
  try {
    const response = await prisma.recipes.findMany({
      include: {
        category: true,
        user: {
          select: {
            username: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//* Get Recipe By Id
export const getRecipe = async (req, res) => {
  try {
    const response = await prisma.recipes.findFirst({
      where: {
        id: String(req.params.id),
      },
      include: {
        category: true,
        ratings: {
          select: {
            rating: true,
            createdAt: true,
          },
        },
        comments: {
          select: {
            comment_content: true,
            createdAt: true,
          },
        },
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//* Search Recipe
export const searchRecipe = async (req, res) => {
  try {
    const response = await prisma.recipes.findMany({
      where: {
        recipe_name: {
          contains: String(req.params.name),
          mode: "insensitive",
        },
      },
      include: {
        user: {
          select: {
            username: true,
          },
        },
        comments: true,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//* Create Recipe
export const cerateRecipe = async (req, res) => {
  const {
    recipe_name,
    desc,
    instruction,
    ingredients,
    picture,
    userID,
    categoryID,
  } = req.body;
  try {
    const recipe = await prisma.recipes.create({
      data: {
        userID: userID,
        recipe_name: recipe_name,
        desc: desc,
        instruction: instruction,
        ingredients: ingredients,
        picture: picture,
        categoryID: categoryID,
      },
      select: {
        userID: true,
        recipe_name: true,
        desc: true,
        instruction: true,
        ingredients: true,
        picture: true,
        createdAt: true,
        category: true,
      },
    });
    res.status(201).json(recipe);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//* Update Recipe
export const updateRecipe = async (req, res) => {
  const { recipe_name, desc, instruction, ingredients, picture, categoryID } =
    req.body;
  try {
    const updatedRecipe = await prisma.recipes.update({
      where: {
        id: req.params.id,
      },
      data: {
        recipe_name: recipe_name,
        desc: desc,
        instruction: instruction,
        ingredients: ingredients,
        picture: picture,
        categoryID: categoryID,
      },
      select: {
        recipe_name: true,
        desc: true,
        instruction: true,
        ingredients: true,
        picture: true,
        updatedAt: true,
        category: true,
      },
    });
    res
      .send("Updated Successfully")
      .status(200)
      .json(updatedRecipe)
      .send("Updated Successfully");
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Delete Recipe
export const deleteRecipe = async (req, res) => {
  try {
    const recipe = await prisma.recipes.delete({
      where: {
        id: req.params.id,
      },
    });
    res.send("Delete Successfully").status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
