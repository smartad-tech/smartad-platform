import { createBrowserRouter } from "react-router-dom";
import { Login } from "./components/LoginScreen/Login";
import { NotFound } from "./components/NotFound/NotFound";

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
  ],
  { basename: "" }
);
