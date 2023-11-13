import { PrismaClient } from "@prisma/client";

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { strCategory: "Beef" },
        { strCategory: "Chicken" },
        { strCategory: "Dessert" },
        { strCategory: "Miscellaneous" },
        { strCategory: "Pasta" },
        { strCategory: "Pork" },
        { strCategory: "Seafood" },
        { strCategory: "Side" },
        { strCategory: "Starter" },
        { strCategory: "Vegetarian" },
        { strCategory: "Breakfast" },
        { strCategory: "Breakfast" },
      ],
    });
    console.log("Created");
  } catch (error) {
    console.log("Error seeding database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();
