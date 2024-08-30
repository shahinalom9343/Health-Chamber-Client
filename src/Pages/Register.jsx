import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../AuthProviders/AuthProviders";
import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // password validation
    if (data.password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    } else if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(data.password)) {
      alert("Password must have at least 1 uppercase & 1 uppercase leeter");
      return;
    }

    const userInfo = {
      name: data.name,
      email: data.email,
      photoURL: data.photoURL,
      password: data.password,
    };
    axiosPublic.put("/users", userInfo);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "User Created Successfully.",
        showConfirmButton: false,
        timer: 1000,
      });
      navigate("/login");
    });
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <Helmet>
        <title>Health Chamber | Registration</title>
      </Helmet>
      <div className="container  flex items-center justify-center px-6 mx-auto">
        <form
          className="w-full max-w-lg border-2 p-4 my-1 rounded-lg shadow-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex items-center justify-center">
            <div className="w-1/3 pb-1 font-bold text-center text-2xl text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white">
              sign up
            </div>
          </div>

          <div className=" flex items-center mt-8">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>

            <input
              type="text"
              name="name"
              className=" w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Username"
              {...register("name", { required: true })}
            />
            {errors.name && <span>Username is required</span>}
          </div>

          <label className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white  border rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-300 dark:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>

            <h2 className="mx-3 text-gray-400">Profile Photo</h2>

            <input
              id="dropzone-file"
              name="photoURL"
              type="file"
              className="hidden"
            />
          </label>

          <div className="flex items-center mt-6">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>

            <input
              type="email"
              name="email"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Email address"
              {...register("email", { required: true })}
            />
            {errors.email && <span>User Email is required</span>}
          </div>

          <div className="flex items-center mt-4 relative">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            <span
              className="absolute opacity-80 text-xl bottom-3 right-4"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
            {errors.password && <span>Password field is required</span>}
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize  bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
              Sign Up
            </button>

            <div className="mt-6 text-center ">
              Already have an account?
              <Link
                to="/login"
                className="text-sm ml-1 text-blue-500 hover:underline dark:text-blue-400"
              >
                Sign In
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
