import React from "react";
import Navbar from "../Shared Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared Components/Footer";

const MainLayout = () => {
  return (
    <div>
      {/* Navbar section */}
      <div className="h-16 md:h-36">
        <Navbar></Navbar>
      </div>
      {/* Outlet components */}
      <Outlet></Outlet>
      {/* Footer section */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
