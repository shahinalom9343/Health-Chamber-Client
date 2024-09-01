import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Homepage/Home";
import ErrorPage from "../Pages/ErrorPage";
import MainLayout from "../MainLayout/MainLayout";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoutes from "./PrivateRoutes";
import AllUsers from "../Dashboard/Admin/AllUsers";
import Dashboard from "../Dashboard/Dashboard";
import AdminHome from "../Dashboard/Admin/AdminHome";
import Gallery from "../Pages/Gallery";
import Doctors from "../Pages/Doctors";
import EmergencyCenter from "../Pages/Center of excellence/EmergencyCenter";
import EyeCenter from "../Pages/Center of excellence/EyeCenter";
import CancerCenter from "../Pages/Center of excellence/CancerCenter";
import Departments from "../Pages/Departments";
import Appointment from "../Pages/Appointment";
import AllPatients from "../Dashboard/Admin/AllPatients";

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
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/excellence/emergencyCenter",
        element: <EmergencyCenter></EmergencyCenter>,
      },
      {
        path: "/excellence/eyeCenter",
        element: <EyeCenter></EyeCenter>,
      },
      {
        path: "/excellence/cancerCenter",
        element: <CancerCenter></CancerCenter>,
      },
      {
        path: "/doctors",
        element: <Doctors></Doctors>,
      },
      {
        path: "/departments",
        element: <Departments></Departments>,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
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
            element: <AllPatients></AllPatients>,
          },
        ],
      },
    ],
  },
]);
export default router;
