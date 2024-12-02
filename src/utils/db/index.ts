import { PrismaClient } from "@prisma/client";
import { supportedLanguages } from "~/constants";
import { generateId } from "~/utils";

const prisma = new PrismaClient();

export const validatePaste = (lang: unknown, content: unknown) => {
  if (typeof lang !== "string" || typeof content !== "string") {
    return "Invalid language or content";
  }

  if (!Object.keys(supportedLanguages).includes(lang)) {
    return "Unknown language";
  }

  if (content.length === 0) {
    return "Content can not be empty";
  }

  if (content.length > 102400) {
    return "Content is too long";
  }
};

export const newPaste = (lang: string, content: string) => {
  const id = generateId();
  const time = new Date();

  return prisma.paste.create({
    data: {
      id,
      lang,
      content,
      time,
    },
  });
};

export const getPaste = (id: string) =>
  prisma.paste.findUnique({ where: { id } });
