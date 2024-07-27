import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Homepage/Home";
import ErrorPage from "../Pages/ErrorPage";
import MainLayout from "../MainLayout/MainLayout";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Patients from "../Pages/Patients";
import PrivateRoutes from "./PrivateRoutes";
import AllUsers from "../Dashboard/Admin/AllUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/patients",
        element: (
          <PrivateRoutes>
            <Patients></Patients>
          </PrivateRoutes>
        ),
      },
      {
        path: "/users",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
