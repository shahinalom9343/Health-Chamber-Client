import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Homepage/Home";
import ErrorPage from "../Pages/ErrorPage";
import MainLayout from "../MainLayout/MainLayout";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

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
    ],
  },
]);
export default router;
