import React from "react";
import Navbar from "../Shared Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared Components/Footer";

const MainLayout = () => {
  return (
    <div>
      {/* Navbar section */}
      <div className="h-16 md:h-36 z-20 overflow-hidden">
        <Navbar></Navbar>
      </div>
      {/* Outlet components */}
      <div className="min-h-[calc(100vh-494px)] overflow-hidden">
        <Outlet></Outlet>
      </div>
      {/* Footer section */}
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
