import React from "react";
import Navbar from "../Shared Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared Components/Footer";

const MainLayout = () => {
  return (
    <div>
      {/* Navbar section */}
      <Navbar></Navbar>
      {/* Outlet components */}
      <Outlet></Outlet>
      {/* Footer section */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
