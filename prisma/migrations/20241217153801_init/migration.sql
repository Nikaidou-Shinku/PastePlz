-- CreateTable
CREATE TABLE "Paste" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "lang" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "time" DATETIME NOT NULL
);
