import langs from "~/languages.json";

export type SupportedLanguages = keyof typeof langs;
export const supportedLanguages: Record<SupportedLanguages, string> = langs;

export const ID_CHARSET =
  "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
