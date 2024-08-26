import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { ColorRing } from "react-loader-spinner";

const Doctors = () => {
  const axiosSecure = useAxiosPublic();
  const { data: doctors = [], isLoading } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const result = await axiosSecure.get("/doctors");
      return result.data;
    },
  });
  if (isLoading) {
    return (
      <div className="flex justify-center">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    );
  }
  return (
    <div>
      {/* doctor list and search section */}
      <div>
        <h2 className="text-5xl mt-2 mb-3 md:mt-6 lg:mt-10 text-center font-extrabold">
          Doctors List
        </h2>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search your doctor here"
            className="input input-bordered w-full max-w-lg"
          />
          <button className="btn bg-yellow-600 text-white">Search</button>
        </div>
      </div>
      <hr className="my-4 w-full broder-2" />
      {/* doctor card section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {doctors.map((doctor) => (
          <div
            key={doctor._id}
            className="flex flex-col max-w-lg p-6 space-y-2 overflow-hidden rounded-lg shadow-xl dark:bg-gray-50 dark:text-gray-800"
          >
            <div>
              <img
                src={doctor?.profile_image}
                alt=""
                className="object-cover w-full mb-4  h-64 dark:bg-gray-500"
              />
              <h2 className="mb-1 text-xl font-semibold">{doctor?.name}</h2>
            </div>

            <div className="space-x-2">
              <p>
                <span className="font-bold mr-1">Speciality:</span>
                <span className="text-pink-600">{doctor?.specialty}</span>
              </p>
              <p>
                <span className="font-bold mr-1">Degree:</span>
                <span className="text-pink-600">{doctor?.degree}</span>
              </p>
              <p>
                <span className="font-bold mr-1">Public Rating:</span>
                <span className="badge badge-secondary">
                  {doctor?.public_rating}
                </span>
              </p>
            </div>

            {/* button */}
            <div className="flex justify-around">
              <button className="btn bg-green-700 text-white text-sm font-medium uppercase">
                Get an Appointment
              </button>
              <button className="btn bg-green-700 text-white text-sm font-medium uppercase">
                Doctor Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
