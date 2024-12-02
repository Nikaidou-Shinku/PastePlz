import { createContext, JSX, useContext } from "solid-js";
import { createHighlighterCore, HighlighterCore } from "shiki/core";
import { createOnigurumaEngine } from "shiki/engine/oniguruma";

const ShikiContext = createContext<Promise<HighlighterCore>>();

interface ShikiProviderProps {
  children: JSX.Element;
}

export const ShikiProvider = (props: ShikiProviderProps) => {
  const highlighterPromise = createHighlighterCore({
    themes: [
      // TODO: change theme
      // import("shiki/themes/vitesse-dark.mjs"),
      import("shiki/themes/snazzy-light.mjs"),
    ],
    langs: [],
    engine: createOnigurumaEngine(import("shiki/wasm")),
  });

  return (
    <ShikiContext.Provider value={highlighterPromise}>
      {props.children}
    </ShikiContext.Provider>
  );
};

export const useShiki = () => {
  const highlighterPromise = useContext(ShikiContext);

  if (typeof highlighterPromise === "undefined") {
    throw new Error("`useShiki` can not be used without `ShikiProvider`");
  }

  return highlighterPromise;
};
