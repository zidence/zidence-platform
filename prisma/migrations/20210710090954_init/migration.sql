/*
  Warnings:

  - The primary key for the `properties` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `properties` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[name]` on the table `properties` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `properties` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "properties" DROP CONSTRAINT "properties_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "properties.name_unique" ON "properties"("name");

-- CreateIndex
CREATE UNIQUE INDEX "properties.slug_unique" ON "properties"("slug");
