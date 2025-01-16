/*
  Warnings:

  - You are about to drop the column `queryCount` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `stateCode` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `stateName` on the `Location` table. All the data in the column will be lost.
  - Added the required column `state_code` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state_name` to the `Location` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Location" DROP COLUMN "queryCount",
DROP COLUMN "stateCode",
DROP COLUMN "stateName",
ADD COLUMN     "query_count" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "state_code" TEXT NOT NULL,
ADD COLUMN     "state_name" TEXT NOT NULL;
