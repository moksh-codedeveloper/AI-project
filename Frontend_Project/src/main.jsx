import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import Signin from "./auth/Signin.jsx";
import Dashboard from "./components/Dashboard.jsx";
import CreateResume from "./components/Resume/CreateResume.jsx";
import Display from "./components/Resume/Display.jsx";
import Delete from "./components/Resume/Delete.jsx";
import Update from "./components/Resume/Update.jsx";
import Signup from "./auth/Signup.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/resume",
        element: <Display />,
        children: [
          {
            path: "/createResume",
            element: <CreateResume />,
          },
          {
            path: "delete",
            element: <Delete />,
          },
          {
            path: "/update",
            element: <Update/>
          }
        ],
      },
    ],
  },
  {
    path: "/auth/signup",
    element: <Signup />,
  },
  {
    path: "/auth/sigin",
    element: <Signin />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter router={router} />
  </StrictMode>
);
