/*
  Warnings:

  - The `instruction` column on the `Recipes` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `ingredients` column on the `Recipes` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Recipes" DROP COLUMN "instruction",
ADD COLUMN     "instruction" TEXT[],
DROP COLUMN "ingredients",
ADD COLUMN     "ingredients" TEXT[];
