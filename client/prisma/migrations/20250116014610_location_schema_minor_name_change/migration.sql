/*
  Warnings:

  - You are about to drop the column `userID` on the `Application` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Application` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Application" DROP COLUMN "userID",
ADD COLUMN     "userId" TEXT NOT NULL;
