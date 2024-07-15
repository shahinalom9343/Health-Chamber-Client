import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import AuthProviders from "./AuthProviders/AuthProviders";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="font-Lato">
      <AuthProviders>
        <RouterProvider router={router}></RouterProvider>
      </AuthProviders>
    </div>
  </React.StrictMode>
);
