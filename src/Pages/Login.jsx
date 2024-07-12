import React from "react";
import { Link } from "react-router-dom";
import loginImage from "../../public/loginImage.jpg";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex w-full mx-auto overflow-hidden  rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
      {/* login form */}
      <div className="w-full px-3 py-4 md:px-8 lg:w-1/2">
        <div className="flex justify-center mx-auto">
          <img
            className="w-auto h-7 sm:h-8"
            src="https://merakiui.com/images/logo.svg"
          />
        </div>

        <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
          Welcome back!
        </p>

        <Link className="flex items-center justify-center mt-4 text-gray-600 border-2 rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
          <FaGoogle className="text-red-400"></FaGoogle>

          <span className="w-5/6 px-4 py-3 font-bold text-center">
            Sign in with Google
          </span>
        </Link>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

          <a
            href="#"
            className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
          >
            or login with email
          </a>

          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
        </div>

        <div className="mt-4">
          <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
            Email Address
          </label>
          <input
            id="LoggingEmailAddress"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
            type="email"
          />
        </div>

        <div className="mt-4">
          <div className="flex justify-between">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
              Password
            </label>
            <a
              href="#"
              className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
            >
              Forget Password?
            </a>
          </div>

          <input
            id="loggingPassword"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
            type="password"
          />
        </div>

        <div className="mt-6">
          <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
            Sign In
          </button>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

          <Link
            to="/register"
            className="text-xs text-blue-500 uppercase dark:text-gray-400 hover:underline"
          >
            or sign up
          </Link>

          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
        </div>
      </div>
      {/* Login image */}
      <div className="hidden bg-cover lg:block lg:w-1/2">
        <img src={loginImage} alt="Login Image" />
      </div>
    </div>
  );
};

export default Login;
