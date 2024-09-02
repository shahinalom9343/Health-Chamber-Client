import React, { useContext, useEffect, useState } from "react";
import usePrimaryButton from "../Hooks/usePrimaryButton";
import {
  FaFacebook,
  FaLinkedin,
  FaLocationDot,
  FaPhoneVolume,
  FaRegMoon,
} from "react-icons/fa6";
import { IoIosMail, IoLogoYoutube, IoMdSunny } from "react-icons/io";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useSecondaryButton from "../Hooks/useSecondaryButton";
import { AuthContext } from "../AuthProviders/AuthProviders";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";
import logoImg from "../../public/Logo.jpg";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const navigate = useNavigate();
  const signOut = () => {
    logOut().then((result) => {
      console.log(result);
      toast("Logout Successfully!!!");
      navigate("/login");
    });
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const handleTheme = (e) => {
    // console.log(theme);
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  const loginButton = usePrimaryButton("Login");
  const registerButton = useSecondaryButton("Register");
  const logoutButton = useSecondaryButton("Logout");
  return (
    <div className="fixed min-w-full">
      {/* upper navbar for contact info */}

      <div className="navbar justify-center md:px-5 lg:px-10 items-center my-auto hidden md:block dark:bg-gray-800  text-green-800 dark:text-green-200">
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
            <Link to="/appointment" className="btn btn-outline hidden lg:flex">
              Book Your Appointment
            </Link>
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

      {/* Lower navbar for different info */}
      <div className="navbar  dark:bg-gray-800 font-semibold top-0 shadow-lg text-gray-600 dark:text-white md:px-5 lg:px-10 z-10">
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
              className="menu menu-sm dropdown-content bg-slate-400 text-white z-10 mt-3 -mx-3 overflow-y-auto whitespace-nowrap scroll-hidden"
            >
              <NavLink
                className="mx-4 text-sm leading-5  transition-colors duration-300 transform  hover:text-blue-500  hover:border-b-4 hover:border-blue-400 md:my-0"
                to="/about"
              >
                About Us
              </NavLink>
              <NavLink
                id="center"
                className="mx-4  text-sm leading-5 transition-colors duration-300 transform  hover:text-blue-500  hover:border-b-4 hover:border-blue-400 md:my-0"
              >
                Center of Excellence
                <ul
                  className="bg-gray-500 text-white p-2 rounded-md"
                  id="submenu"
                >
                  <NavLink
                    to="/excellence/emergencyCenter"
                    className="hover:bg-sky-600 hover:text-white m-4"
                  >
                    Health Chamber Emergency center
                  </NavLink>
                  <hr />
                  <NavLink
                    to="/excellence/eyeCenter"
                    className="hover:bg-sky-600 hover:text-white m-4"
                  >
                    Health Chamber Eye center
                  </NavLink>{" "}
                  <hr />
                  <NavLink
                    to="/excellence/cancerCenter"
                    className="hover:bg-sky-600 hover:text-white m-4 space-y-3"
                  >
                    Health Chamber Cancer center
                  </NavLink>{" "}
                  <hr />
                  <NavLink className="hover:bg-sky-600 hover:text-white m-4">
                    Health Chamber Surgery center
                  </NavLink>{" "}
                  <hr />
                  <NavLink className="hover:bg-sky-600 hover:text-white m-4">
                    Health Chamber Neurocience center
                  </NavLink>
                </ul>
              </NavLink>
              <NavLink
                className="mx-4 text-sm leading-5  transition-colors duration-300 transform  hover:text-blue-500  hover:border-b-4 hover:border-blue-400 md:my-0"
                to="/about"
              >
                Departments
              </NavLink>
              <NavLink
                className="mx-4 text-sm leading-5  transition-colors duration-300 transform  hover:text-blue-500  hover:border-b-4 hover:border-blue-400 md:my-0"
                to="/doctors"
              >
                Find Doctors
              </NavLink>
              <NavLink
                className="mx-4 text-sm leading-5  transition-colors duration-300 transform  hover:text-blue-500  hover:border-b-4 hover:border-blue-400 md:my-0"
                to="/dashboard"
              >
                Dashboard
              </NavLink>
              <NavLink
                className="mx-4 text-sm leading-5  transition-colors duration-300 transform  hover:text-blue-500  hover:border-b-4 hover:border-blue-400 md:my-0"
                to="/gallery"
              >
                Gallery
              </NavLink>
              <NavLink
                className="mx-4 text-sm leading-5  transition-colors duration-300 transform  hover:text-blue-500  hover:border-b-4 hover:border-blue-400 md:my-0"
                to="/contact"
              >
                Contact
              </NavLink>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <img src={logoImg} className="h-6 w-6 -mr-1" alt="" />
            <Link to="/" className="btn btn-ghost text-xl">
              <span className="text-pink-600">
                <span className="text-2xl">H</span>ealth
              </span>{" "}
              <span className="text-violet-700 -ml-1">
                <span className="text-2xl">C</span>hamber
              </span>
            </Link>
          </div>
        </div>
        <div id="menu" className="navbar-center hidden lg:flex">
          <ul className="py-3 mt-3 h-full -mx-3 overflow-y-auto whitespace-nowrap scroll-hidden">
            <NavLink
              className="mx-4 text-sm leading-5  transition-colors duration-300 transform  hover:text-blue-500  hover:border-b-4 hover:border-blue-400 md:my-0"
              to="/about"
            >
              About Us
            </NavLink>
            <NavLink
              id="center"
              className="mx-4  min-h-full text-sm leading-5 transition-colors duration-300 transform  hover:text-blue-500  hover:border-b-4 hover:border-blue-400"
            >
              Center of Excellence
              <ul
                className="bg-gray-500 text-white p-2 rounded-md z-20"
                id="submenu"
              >
                <NavLink
                  to="/excellence/emergencyCenter"
                  className="hover:bg-sky-600 hover:text-white m-4"
                >
                  Health Chamber Emergency center
                </NavLink>
                <hr />
                <NavLink
                  to="/excellence/eyeCenter"
                  className="hover:bg-sky-600 hover:text-white m-4"
                >
                  Health Chamber Eye center
                </NavLink>{" "}
                <hr />
                <NavLink
                  to="/excellence/cancerCenter"
                  className="hover:bg-sky-600 hover:text-white m-4 space-y-3"
                >
                  Health Chamber Cancer center
                </NavLink>{" "}
                <hr />
                <NavLink className="hover:bg-sky-600 hover:text-white m-4">
                  Health Chamber Surgery center
                </NavLink>{" "}
                <hr />
                <NavLink className="hover:bg-sky-600 hover:text-white m-4">
                  Health Chamber Neurocience center
                </NavLink>
              </ul>
            </NavLink>
            <NavLink
              className="mx-4 text-sm leading-5  transition-colors duration-300 transform  hover:text-blue-500  hover:border-b-4 hover:border-blue-400 md:my-0"
              to="/departments"
            >
              Departments
            </NavLink>
            <NavLink
              className="mx-4 text-sm leading-5  transition-colors duration-300 transform  hover:text-blue-500  hover:border-b-4 hover:border-blue-400 md:my-0"
              to="/doctors"
            >
              Find Doctors
            </NavLink>
            <NavLink
              className="mx-4 text-sm leading-5  transition-colors duration-300 transform  hover:text-blue-500  hover:border-b-4 hover:border-blue-400 md:my-0"
              to="/dashboard"
            >
              Dashboard
            </NavLink>
            <NavLink
              className="mx-4 text-sm leading-5  transition-colors duration-300 transform  hover:text-blue-500  hover:border-b-4 hover:border-blue-400 md:my-0"
              to="/gallery"
            >
              Gallery
            </NavLink>
            <NavLink
              className="mx-4 text-sm leading-5  transition-colors duration-300 transform  hover:text-blue-500  hover:border-b-4 hover:border-blue-400 md:my-0"
              to="/contact"
            >
              Contact
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          {user && (
            <div>
              <img
                src={user.photoURL}
                className="h-12 w-14 rounded-full mr-1"
                alt=""
              />
            </div>
          )}
          {/* Theme controller button */}
          <label className="swap swap-rotate mr-1">
            <input
              type="checkbox"
              className="theme-controller "
              onChange={handleTheme}
            />

            {/* sun icon */}
            <IoMdSunny className="text-yellow-400 font-extrabold text-3xl swap-off" />

            {/* moon icon */}
            <FaRegMoon className="font-bold text-2xl swap-on" />
          </label>
          {user ? (
            <button onClick={signOut}>{logoutButton}</button>
          ) : (
            <div className="flex gap-1">
              <Link to="/login">{loginButton}</Link>
              <Link to="/register">{registerButton}</Link>
            </div>
          )}
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Navbar;
