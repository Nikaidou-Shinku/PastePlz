import React from "react";
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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:token" element={<Display />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
