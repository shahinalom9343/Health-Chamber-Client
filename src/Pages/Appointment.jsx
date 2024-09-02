import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { axiosPulic } from "../Hooks/useAxiosPublic";

const Appointment = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const patientInfo = {
      first: data.first,
      last: data.last,
      email: data.email,
      address: data.address,
      postal: data.postal,
      city: data.city,
      country: data.country,
    };
    axiosPulic.put("/patients", patientInfo);
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Your Appointment has been Successful.",
      showConfirmButton: false,
      timer: 1000,
    });
    navigate("/");
  };
  return (
    <div className="space-y-2 max-w-5xl mx-auto overflow-hidden">
      <h1 className="text-3xl font-extrabold">Patient Details</h1>
      <p className="text-lg">
        Please fill the form below and we will get back soon to you.A
        confirmation email will be sent to you.
      </p>
      <section className="p-4 rounded-md shadow-md border-2 dark:bg-gray-800">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="col-span-1 md:col-span-1">
              <label className="text-gray-700 dark:text-gray-200">
                First Name
              </label>
              <input
                id="first"
                type="text"
                name="first"
                {...register("first", { required: true })}
                className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
              {errors.first && <span>FirstName is required</span>}
            </div>

            <div className="col-span-1 md:col-span-1">
              <label className="text-gray-700 dark:text-gray-200">
                Last Name
              </label>
              <input
                id="last"
                name="last"
                {...register("last", { required: true })}
                type="text"
                className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
              {errors.last && <span>Last Name is required</span>}
            </div>

            <div className="col-span-1 md:col-span-2">
              <label className="text-gray-700 dark:text-gray-200">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                {...register("email", { required: true })}
                placeholder="Enter your email"
                className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
              {errors.email && <span>Email address is required</span>}
            </div>

            <div className="col-span-1 md:col-span-2">
              <label className="text-gray-700 dark:text-gray-200">
                Address
              </label>
              <input
                id="address"
                type="text"
                name="address"
                {...register("address", { required: true })}
                placeholder="Address Line"
                className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div className="col-span-1 md:col-span-1">
              <label className="text-gray-700 dark:text-gray-200">
                Postal Code
              </label>
              <input
                id="postal"
                type="number"
                name="postal"
                {...register("postal", { required: true })}
                placeholder="Postal/Zip code"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div className="col-span-1 md:col-span-1">
              <label className="text-gray-700 dark:text-gray-200">City</label>
              <input
                id="city"
                type="text"
                placeholder="City"
                name="city"
                {...register("city", { required: true })}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="text-gray-700 dark:text-gray-200">
                Country
              </label>
              <input
                id="country"
                type="text"
                placeholder="Country"
                name="country"
                {...register("country", { required: true })}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div className="mt-6 col-span-1 md:col-span-2">
              <button
                type="submit"
                className="px-8 py-2.5 w-full leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Create An Appointment
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Appointment;
