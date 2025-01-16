/*
  Warnings:

  - You are about to drop the column `applicationDate` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `applicationUrl` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `company` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `isArchived` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `workStyle` on the `Application` table. All the data in the column will be lost.
  - Added the required column `application_date` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `application_status` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_name` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `job_title` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location_city` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location_state` to the `Application` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Application" DROP COLUMN "applicationDate",
DROP COLUMN "applicationUrl",
DROP COLUMN "company",
DROP COLUMN "isArchived",
DROP COLUMN "status",
DROP COLUMN "title",
DROP COLUMN "workStyle",
ADD COLUMN     "application_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "application_status" TEXT NOT NULL,
ADD COLUMN     "company_name" TEXT NOT NULL,
ADD COLUMN     "is_archived" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "job_title" TEXT NOT NULL,
ADD COLUMN     "listing_url" TEXT,
ADD COLUMN     "location_city" TEXT NOT NULL,
ADD COLUMN     "location_state" TEXT NOT NULL,
ADD COLUMN     "work_arrangement" TEXT;
