/*
  Warnings:

  - The `price` column on the `properties` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "properties" ADD COLUMN     "category" TEXT,
DROP COLUMN "price",
ADD COLUMN     "price" MONEY;
