/*
  Warnings:

  - Made the column `work_arrangement` on table `Application` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Application" ALTER COLUMN "work_arrangement" SET NOT NULL;
