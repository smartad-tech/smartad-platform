import { createBrowserRouter } from "react-router-dom";
import { Login } from "./components/LoginScreen/Login";
import { NotFound } from "./components/NotFound/NotFound";
import { Dashboard } from "./components/Dashboard/Dashboard";

export const router = createBrowserRouter(
  [
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ],
  { basename: "" }
);
