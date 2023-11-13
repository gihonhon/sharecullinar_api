/*
  Warnings:

  - A unique constraint covering the columns `[userID,recipeID]` on the table `Bookmarks` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Bookmarks_userID_recipeID_key" ON "Bookmarks"("userID", "recipeID");
