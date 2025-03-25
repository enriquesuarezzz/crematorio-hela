// src/main.tsx
import React from "react"; // Add this import
import { createRoot } from "react-dom/client";
import App from "./App";
import "./i18n"; // Import i18n configuration
import "./index.css"; // Your global styles

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
