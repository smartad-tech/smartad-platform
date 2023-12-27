import { createBrowserRouter } from "react-router-dom";
import { Login } from "./components/LoginScreen/Login";
import { NotFound } from "./components/NotFound/NotFound";
import DashboardPage from "./components/Dashboard/DashboardPage";

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
      element: <DashboardPage/>,
    },
  ],
  { basename: "" },
);
