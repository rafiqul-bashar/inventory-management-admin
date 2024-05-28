import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import "./css/custom.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
