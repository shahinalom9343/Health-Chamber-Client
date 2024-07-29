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
import Dashboard from "../Dashboard/Dashboard";
import AdminHome from "../Dashboard/Admin/AdminHome";

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
      {
        path: "/dashboard",
        element: (
          <PrivateRoutes>
            <Dashboard></Dashboard>
          </PrivateRoutes>
        ),
        children: [
          {
            path: "/dashboard/adminHome",
            element: <AdminHome></AdminHome>,
          },

          {
            path: "/dashboard/users",
            element: <AllUsers></AllUsers>,
          },
          {
            path: "/dashboard/patients",
            element: <Patients></Patients>,
          },
        ],
      },
    ],
  },
]);
export default router;
