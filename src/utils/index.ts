import { LanguageRegistration } from "shiki/core";
import { ID_CHARSET } from "~/constants";

export const importLanguage = (
  name: string,
): Promise<{ default: LanguageRegistration[] }> => {
  switch (name) {
    case "text": {
      throw new Error("there is nothing need to import for language `text`");
    }
    case "asciidoc": {
      return import("shiki/langs/asciidoc.mjs");
    }
    case "asm": {
      return import("shiki/langs/asm.mjs");
    }
    case "astro": {
      return import("shiki/langs/astro.mjs");
    }
    case "bat": {
      return import("shiki/langs/bat.mjs");
    }
    case "bibtex": {
      return import("shiki/langs/bibtex.mjs");
    }
    case "c": {
      return import("shiki/langs/c.mjs");
    }
    case "cmake": {
      return import("shiki/langs/cmake.mjs");
    }
    case "common-lisp": {
      return import("shiki/langs/common-lisp.mjs");
    }
    case "coq": {
      return import("shiki/langs/coq.mjs");
    }
    case "cpp": {
      return import("shiki/langs/cpp.mjs");
    }
    case "csharp": {
      return import("shiki/langs/csharp.mjs");
    }
    case "css": {
      return import("shiki/langs/css.mjs");
    }
    case "csv": {
      return import("shiki/langs/csv.mjs");
    }
    case "dart": {
      return import("shiki/langs/dart.mjs");
    }
    case "diff": {
      return import("shiki/langs/diff.mjs");
    }
    case "docker": {
      return import("shiki/langs/docker.mjs");
    }
    case "elixir": {
      return import("shiki/langs/elixir.mjs");
    }
    case "go": {
      return import("shiki/langs/go.mjs");
    }
    case "haskell": {
      return import("shiki/langs/haskell.mjs");
    }
    case "html": {
      return import("shiki/langs/html.mjs");
    }
    case "java": {
      return import("shiki/langs/java.mjs");
    }
    case "javascript": {
      return import("shiki/langs/javascript.mjs");
    }
    case "json": {
      return import("shiki/langs/json.mjs");
    }
    case "jsx": {
      return import("shiki/langs/jsx.mjs");
    }
    case "kotlin": {
      return import("shiki/langs/kotlin.mjs");
    }
    case "latex": {
      return import("shiki/langs/latex.mjs");
    }
    case "lean": {
      return import("shiki/langs/lean.mjs");
    }
    case "lua": {
      return import("shiki/langs/lua.mjs");
    }
    case "make": {
      return import("shiki/langs/make.mjs");
    }
    case "markdown": {
      return import("shiki/langs/markdown.mjs");
    }
    case "matlab": {
      return import("shiki/langs/matlab.mjs");
    }
    case "nix": {
      return import("shiki/langs/nix.mjs");
    }
    case "ocaml": {
      return import("shiki/langs/ocaml.mjs");
    }
    case "pascal": {
      return import("shiki/langs/pascal.mjs");
    }
    case "perl": {
      return import("shiki/langs/perl.mjs");
    }
    case "php": {
      return import("shiki/langs/php.mjs");
    }
    case "powershell": {
      return import("shiki/langs/powershell.mjs");
    }
    case "python": {
      return import("shiki/langs/python.mjs");
    }
    case "ruby": {
      return import("shiki/langs/ruby.mjs");
    }
    case "rust": {
      return import("shiki/langs/rust.mjs");
    }
    case "scala": {
      return import("shiki/langs/scala.mjs");
    }
    case "scheme": {
      return import("shiki/langs/scheme.mjs");
    }
    case "shellscript": {
      return import("shiki/langs/shellscript.mjs");
    }
    case "shellsession": {
      return import("shiki/langs/shellsession.mjs");
    }
    case "sql": {
      return import("shiki/langs/sql.mjs");
    }
    case "svelte": {
      return import("shiki/langs/svelte.mjs");
    }
    case "tex": {
      return import("shiki/langs/tex.mjs");
    }
    case "toml": {
      return import("shiki/langs/toml.mjs");
    }
    case "tsx": {
      return import("shiki/langs/tsx.mjs");
    }
    case "typescript": {
      return import("shiki/langs/typescript.mjs");
    }
    case "typst": {
      return import("shiki/langs/typst.mjs");
    }
    case "verilog": {
      return import("shiki/langs/verilog.mjs");
    }
    case "vue": {
      return import("shiki/langs/vue.mjs");
    }
    case "wasm": {
      return import("shiki/langs/wasm.mjs");
    }
    case "wolfram": {
      return import("shiki/langs/wolfram.mjs");
    }
    case "xml": {
      return import("shiki/langs/xml.mjs");
    }
    case "yaml": {
      return import("shiki/langs/yaml.mjs");
    }
    case "zig": {
      return import("shiki/langs/zig.mjs");
    }
    default: {
      throw new Error(`unsupported language: ${name}`);
    }
  }
};

export const generateId = () => {
  let res = "";

  for (let i = 0; i < 8; ++i) {
    res += ID_CHARSET[Math.floor(Math.random() * ID_CHARSET.length)];
  }

  return res;
};
