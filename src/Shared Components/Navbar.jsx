import React from "react";
import { CiSearch } from "react-icons/ci";
import {
  FaFacebook,
  FaLinkedin,
  FaLocationDot,
  FaPhoneVolume,
} from "react-icons/fa6";
import { IoIosMail, IoLogoYoutube } from "react-icons/io";

const Navbar = () => {
  const navItems = (
    <>
      <li className="hover:bg-emerald-700 hover:text-white hover:rounded-md">
        <a>Home</a>
      </li>
      <li className="hover:bg-emerald-700 hover:text-white hover:rounded-md">
        <a>About Us</a>
      </li>
      <li className="hover:bg-emerald-700 hover:text-white hover:rounded-md">
        <a>Contact</a>
      </li>
    </>
  );
  return (
    <div>
      {/* upper navbar for contact info */}
      <div className="hidden md:block">
        <div className="navbar flex justify-center md:px-5 lg:px-10 items-center my-auto bg-green-100">
          <div className="flex-1 gap-3 navbar-start">
            <div className="flex justify-center items-center gap-1">
              <div>
                <FaLocationDot />
              </div>
              <div>Library Bazar, Pabna Sadar,Pabna</div>
            </div>
            <button className="flex justify-center items-center gap-1">
              <div>
                <IoIosMail />
              </div>
              <div>cuet.shahin.eee12@gmail.com</div>
            </button>
            <button className="flex justify-center items-center gap-1">
              <div>
                <FaPhoneVolume />
              </div>
              <div>+8801738672464</div>
            </button>
          </div>
          <div className="flex-none navbar-end items-center gap-3">
            <div>
              <button className="btn btn-outline">Book Your Appointment</button>
            </div>
            <div className="text-blue-700 hover:bg-violet-700 hover:text-white text-2xl bg-none border-2 p-1 rounded-full">
              <FaFacebook />
            </div>
            <div className="text-red-700 hover:bg-cyan-700 hover:text-white text-2xl bg-none border-2 p-1 rounded-full">
              <IoLogoYoutube />
            </div>
            <div className="text-blue-400 hover:bg-pink-700 hover:text-white text-2xl bg-none border-2 p-1 rounded-full">
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
      {/* Lower navbar for different info */}
      <div className="navbar bg-base-200 font-semibold">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Health Chamber</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <button className="text-2xl">
            <CiSearch />
          </button>
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
