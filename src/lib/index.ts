import { action, query, redirect } from "@solidjs/router";
import { codeToHtml } from "shiki";
import { ID_CHARSET, supportedLanguages } from "~/constants";
import { db } from "./db";

export const getPaste = query(async (id: string) => {
  "use server";

  const paste = await db.paste.findUnique({ where: { id } });

  if (paste === null) {
    throw redirect("/404");
  }

  return paste;
}, "pasteById");

export const render = query(codeToHtml, "render");

const generateId = () => {
  let res = "";

  for (let i = 0; i < 8; ++i) {
    res += ID_CHARSET[Math.floor(Math.random() * ID_CHARSET.length)];
  }

  return res;
};

export const submitPaste = action(async (formData: FormData) => {
  "use server";

  const lang = formData.get("lang") as string;
  const content = formData.get("content") as string;

  if (!Object.keys(supportedLanguages).includes(lang)) {
    return {
      error: "Unknown language",
    };
  }

  if (content.length === 0) {
    return {
      error: "Content can not be empty",
    };
  }

  if (content.length > 102400) {
    return {
      error: "Content is too long",
    };
  }

  const paste = await db.paste.create({
    data: {
      id: generateId(),
      lang,
      content,
      time: new Date(),
    },
  });

  throw redirect(`/${paste.id}`);
}, "submitPaste");
