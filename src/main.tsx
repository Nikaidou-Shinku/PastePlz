import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { loader } from "@monaco-editor/react";
import { Home, Display } from "./pages";
import { cfg } from "../pasteplz.config";

import "antd/dist/antd.css";

loader.config({
  paths: {
    vs: cfg.monacoCDN
  }
});

const App = () => {
  const [theme, setTheme] = useState("light");

  const changeTheme = useCallback((name: string) => {
    document.getElementById("body")!.className = `${name}-theme`;
    setTheme(name);
  }, [setTheme]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={(
            <Home
              theme={theme}
              setTheme={changeTheme}
            />
          )}
        />
        <Route
          path="/:token"
          element={(
            <Display
              theme={theme}
              setTheme={changeTheme}
            />
          )}
        />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
