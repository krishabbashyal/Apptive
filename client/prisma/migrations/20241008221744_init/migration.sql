-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "profilePicture" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "googleId" TEXT,
    "githubId" TEXT,
    "role" TEXT NOT NULL DEFAULT 'user',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Application" (
    "id" SERIAL NOT NULL,
    "applicationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "location" TEXT,
    "salary" INTEGER,
    "status" TEXT NOT NULL,
    "style" TEXT,
    "archived" BOOLEAN NOT NULL DEFAULT false,
    "applicationMethod" TEXT,
    "referral" TEXT,
    "notes" TEXT,
    "resume" TEXT,
    "applicationUrl" TEXT,
    "applicationBoardId" INTEGER,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApplicationBoard" (
    "id" SERIAL NOT NULL,
    "boardTitle" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "ApplicationBoard_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_applicationBoardId_fkey" FOREIGN KEY ("applicationBoardId") REFERENCES "ApplicationBoard"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApplicationBoard" ADD CONSTRAINT "ApplicationBoard_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
