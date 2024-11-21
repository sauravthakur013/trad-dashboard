import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";

const rootElement = document.getElementById("root");
if (rootElement !== null) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
