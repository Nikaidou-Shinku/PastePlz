-- CreateTable
CREATE TABLE "Paste" (
    "id" TEXT NOT NULL,
    "lang" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Paste_pkey" PRIMARY KEY ("id")
);
