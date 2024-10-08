import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";
import GotoTop from "./GotoTop";
import logoImg from "../../public/Logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-white opacity-85">
      <div className="container px-6 py-8 mx-auto">
        {/* upper footer */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12">
          <div className="pb-6 col-span-1 md:pb-0 md:col-span-2 lg:col-span-4">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex justify-center space-x-3 md:justify-start"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full dark:bg-violet-600">
                <img src={logoImg} alt="" />
              </div>
              <span className="self-center text-xl font-semibold">
                <span className="text-violet-600">
                  <span className="text-2xl">H</span>ealth
                </span>{" "}
                <span className="text-pink-700 ml-1">
                  <span className="text-2xl">C</span>hamber
                </span>
              </span>
            </a>
          </div>

          <div className="col-span-1 md:pb-0 md:col-span-2 lg:col-span-4 ">
            <p className="pb-1 text-xl font-medium text-center md:text-left">
              Quick Links to Explore More
            </p>
            <div className="flex gap-4 md:gap-24 md:flex-row flex-col text-opacity-65 text-center md:text-left">
              <ul>
                <li className="hover:text-purple-400 hover:underline">
                  <Link
                    rel="noopener noreferrer"
                    to="/"
                    className="hover:dark:text-violet-600"
                  >
                    Home
                  </Link>
                </li>
                <li className="hover:text-purple-400 hover:underline">
                  <Link
                    rel="noopener noreferrer"
                    className="hover:dark:text-violet-600"
                  >
                    Doctors
                  </Link>
                </li>
                <li className="hover:text-purple-400 hover:underline">
                  <Link
                    rel="noopener noreferrer"
                    className="hover:dark:text-violet-600"
                  >
                    News and Events
                  </Link>
                </li>
                <li className="hover:text-purple-400 hover:underline">
                  <Link
                    rel="noopener noreferrer"
                    to="/contact"
                    className="hover:dark:text-violet-600"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="hover:text-purple-400 hover:underline">
                  <Link
                    rel="noopener noreferrer"
                    to="/about"
                    className="hover:dark:text-violet-600"
                  >
                    About
                  </Link>
                </li>
                <li className="hover:text-purple-400 hover:underline">
                  <Link
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:dark:text-violet-600"
                  >
                    Services
                  </Link>
                </li>
                <li className="hover:text-purple-400 hover:underline">
                  <Link
                    rel="noopener noreferrer"
                    className="hover:dark:text-violet-600"
                  >
                    Departments
                  </Link>
                </li>
                <li className="hover:text-purple-400 hover:underline">
                  <Link
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:dark:text-violet-600"
                  >
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-span-1 md:pb-0 md:col-span-2 lg:col-span-4">
            <form>
              <h6 className="footer-title">Newsletter</h6>
              <fieldset className="form-control w-80">
                <label className="label">
                  <span className="label-text text-white">
                    Enter your email address
                  </span>
                </label>
                <div className="join">
                  <input
                    type="text"
                    placeholder="username@example.com"
                    className="input input-bordered join-item text-black font-normal"
                  />
                  <button className="btn btn-success text-white join-item">
                    Sign Up
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />
        {/* lower footer */}
        <div className="flex justify-between">
          <div className="flex flex-col items-center sm:flex-row gap-10">
            <div className="flex gap-3">
              <div className="text-blue-300 hover:bg-violet-700 hover:text-white text-2xl bg-none p-1 rounded-full">
                <FaFacebook />
              </div>
              <div className="text-red-700 hover:bg-cyan-700 hover:text-white text-2xl bg-none  p-1 rounded-full">
                <IoLogoYoutube />
              </div>
              <div className="text-sky-300 hover:bg-pink-700 hover:text-white text-2xl bg-none  p-1 rounded-full">
                <FaLinkedin />
              </div>
            </div>
            <p className="text-base">
              Copyright © 2024. All Rights Reserved <br /> Developed by
              Md.Shahin Alom.
            </p>
          </div>
          <GotoTop />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
