import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Number from "../pages/Number/Number";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "login",
            element: <Login></Login>,
        },
        {
            path: "signup",
            element: <SignUp></SignUp>,
        },
        {
          path: "number",
          element: <PrivateRoutes><Number></Number></PrivateRoutes>
      },
      ]
    },
  ]);

  export default router;