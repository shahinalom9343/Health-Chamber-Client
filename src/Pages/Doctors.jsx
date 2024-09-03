import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { ColorRing } from "react-loader-spinner";
import { Helmet } from "react-helmet";

const Doctors = () => {
  const axiosSecure = useAxiosPublic();
  const [search, setSearch] = useState("");
  const [doctor, setDoctor] = useState([]);
  const [doctorsPerPage, setDoctorsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(0);

  const { data: doctors = [], isLoading } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const result = await axiosSecure.get("/doctors");
      return result.data;
    },
  });
  const numberofPages = Math.ceil(doctors.length / doctorsPerPage);
  const pages = [...Array(numberofPages).keys()];

  useEffect(() => {
    fetch(
      `http://localhost:5000/doctors?pages=${currentPage}&size=${doctorsPerPage}&search=${search}`
    )
      .then((res) => res.json())
      .then((data) => setDoctor(data));
  }, [currentPage, doctorsPerPage, search]);

  const handleDoctorsPerPage = (e) => {
    const value = parseInt(e.target.value);
    setDoctorsPerPage(value);
    setCurrentPage(0);
  };
  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    setSearch(searchText);
  };
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
    <div className="my-2">
      <Helmet>
        <title>Health Chamber | Doctors</title>
      </Helmet>
      {/* doctor list and search section */}
      <div>
        <h2 className="text-5xl mt-2 mb-3 md:mt-6 lg:mt-10 text-center font-extrabold text-black dark:text-slate-50">
          Doctors List
        </h2>
        {/* search section */}
        <div className="max-w-2xl mx-auto">
          <form action="" onSubmit={handleSearch}>
            <label htmlFor="" className="flex">
              <input
                type="text"
                name="search"
                placeholder="Search your doctor here"
                className="input input-bordered w-full max-w-lg"
              />
              <input
                type="submit"
                value="search"
                className="btn bg-yellow-600 text-white"
              />
            </label>
          </form>
        </div>
      </div>
      <hr className="my-4 w-full broder-2" />
      {/* doctor card section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {doctor.map((singleDoctor) => (
          <div
            key={singleDoctor._id}
            className="flex flex-col max-w-lg p-6 space-y-2 overflow-hidden rounded-lg shadow-xl dark:bg-gray-50 dark:text-gray-800"
          >
            <div>
              <img
                src={singleDoctor?.profile_image}
                alt=""
                className="object-cover w-full mb-4  h-64 dark:bg-gray-500"
              />
              <h2 className="mb-1 text-xl font-semibold">
                {singleDoctor?.name}
              </h2>
            </div>

            <div className="space-x-2">
              <p>
                <span className="font-bold mr-1">Speciality:</span>
                <span className="text-pink-600">{singleDoctor?.specialty}</span>
              </p>
              <p>
                <span className="font-bold mr-1">Degree:</span>
                <span className="text-pink-600">{singleDoctor?.degree}</span>
              </p>
              <p>
                <span className="font-bold mr-1">Public Rating:</span>
                <span className="badge badge-secondary">
                  {singleDoctor?.public_rating}
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

      {/* pagination section */}
      <div className="py-4 flex justify-center items-center">
        <p>
          <button className="btn mr-1" onClick={handlePrevious}>
            Previous
          </button>
        </p>
        {pages.map((page) => (
          <button
            className={
              (currentPage === page && "btn bg-purple-800 text-white") ||
              "btn mr-1"
            }
            onClick={() => setCurrentPage(page)}
            key={page}
          >
            {page}
          </button>
        ))}

        <p>
          <button className="btn ml-1" onClick={handleNext}>
            Next
          </button>
        </p>
        <label htmlFor="" className="ml-2">
          Doctor Per Page:
          <select
            name=""
            value={doctorsPerPage}
            onChange={handleDoctorsPerPage}
            className="btn bg-orange-400 text-white"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Doctors;
