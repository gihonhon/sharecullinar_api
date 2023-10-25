-- AddForeignKey
ALTER TABLE "Bookmarks" ADD CONSTRAINT "Bookmarks_recipeID_fkey" FOREIGN KEY ("recipeID") REFERENCES "Recipes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
