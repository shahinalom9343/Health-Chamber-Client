import React, { useContext } from "react";
import { Link } from "react-router-dom";
import loginImage from "../../public/loginImage.jpg";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { AuthContext } from "../AuthProviders/AuthProviders";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="flex justify-center gap-10 w-full mx-auto overflow-hidden dark:bg-gray-800 lg:max-w-4xl">
      {/* login form */}
      <form
        onSubmit={handleLogin}
        className="w-full px-3 py-4 md:px-8 lg:w-1/2 border-r-2 border-l-2 p-1 my-1"
      >
        <div className="flex justify-center mx-auto">
          <img
            className="w-auto h-7 sm:h-8"
            src="https://merakiui.com/images/logo.svg"
          />
        </div>

        <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
          Welcome back!
        </p>

        <Link className="flex items-center justify-center mt-1 text-gray-600 border-2 rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
          <FaGoogle className="text-red-700"></FaGoogle>

          <span className="w-5/6 px-4 py-3 font-bold text-center">
            Login with Google
          </span>
        </Link>
        <Link className="flex items-center justify-center mt-1 text-gray-600 border-2 rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
          <FaFacebook className="text-blue-700"></FaFacebook>

          <span className="w-5/6 px-4 py-3 font-bold text-center">
            Login with Facebook
          </span>
        </Link>

        <div className="flex items-center justify-between mt-2">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

          <a
            href="#"
            className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
          >
            or login with email
          </a>

          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
        </div>

        {/* login form */}
        <div className="mt-2">
          <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
            Email Address
          </label>
          <input
            id="LoggingEmailAddress"
            name="email"
            required
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
            type="email"
          />
        </div>

        <div className="mt-2">
          <div className="flex justify-between">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
              Password
            </label>
            <a className="text-xs text-gray-500 dark:text-gray-300 hover:underline">
              Forget Password?
            </a>
          </div>

          <input
            id="loggingPassword"
            name="password"
            required
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
            type="password"
          />
        </div>

        <div className="mt-2">
          <button
            type="submit"
            className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
          >
            Login
          </button>
        </div>

        <div className="flex items-center justify-between mt-2">
          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

          <Link
            to="/register"
            className="text-xs text-blue-500 uppercase dark:text-gray-400 hover:underline"
          >
            or sign up
          </Link>

          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
        </div>
      </form>
      {/* Login image */}
      <div className="hidden bg-cover lg:block lg:w-1/2 ">
        <img src={loginImage} alt="Login Image" className="min-h-full" />
      </div>
    </div>
  );
};

export default Login;
