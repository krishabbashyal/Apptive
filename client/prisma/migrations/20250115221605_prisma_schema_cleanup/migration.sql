/*
  Warnings:

  - You are about to drop the column `applicationBoardId` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `applicationMethod` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `referral` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `resumeUrl` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the `ApplicationBoard` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userID` to the `Application` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Application" DROP CONSTRAINT "Application_applicationBoardId_fkey";

-- DropForeignKey
ALTER TABLE "ApplicationBoard" DROP CONSTRAINT "ApplicationBoard_userId_fkey";

-- AlterTable
ALTER TABLE "Application" DROP COLUMN "applicationBoardId",
DROP COLUMN "applicationMethod",
DROP COLUMN "referral",
DROP COLUMN "resumeUrl",
ADD COLUMN     "userID" TEXT NOT NULL,
ALTER COLUMN "applicationDate" DROP DEFAULT;

-- DropTable
DROP TABLE "ApplicationBoard";

-- DropTable
DROP TABLE "User";
