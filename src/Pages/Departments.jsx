import React from "react";
import { Helmet } from "react-helmet";
import { FaArrowRight } from "react-icons/fa6";

const departments = () => {
  return (
    <div>
      <Helmet>
        <title>Health Chamber | Departments</title>
      </Helmet>
      <div className="text-3xl text-center font-bold text-pink-600 my-2 md:my-4 lg:my-6">
        All Departments
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto md:mt-4">
        <div className="btn w-72 transition hover:scale-105 flex justify-start shadow-md rounded-none outline-none mb-4">
          <span>
            <FaArrowRight />
          </span>{" "}
          Emergency Department (ED)
        </div>
        <div className="btn w-72 transition hover:scale-105 flex justify-start shadow-md rounded-none outline-none mb-4">
          <span>
            <FaArrowRight />
          </span>{" "}
          Cardiology
        </div>
        <div className="btn w-72 transition hover:scale-105 flex justify-start shadow-md rounded-none outline-none mb-4">
          <span>
            <FaArrowRight />
          </span>{" "}
          Neurology
        </div>
        <div className="btn w-72 transition hover:scale-105 flex justify-start shadow-md rounded-none outline-none mb-4">
          <span>
            <FaArrowRight />
          </span>{" "}
          Orthopeadics
        </div>
        <div className="btn w-72 transition hover:scale-105 flex justify-start shadow-md rounded-none outline-none mb-4">
          <span>
            <FaArrowRight />
          </span>{" "}
          Oncology
        </div>
        <div className="btn w-72 transition hover:scale-105 flex justify-start shadow-md rounded-none outline-none mb-4">
          <span>
            <FaArrowRight />
          </span>{" "}
          Radiology
        </div>
        <div className="btn w-72 transition hover:scale-105 flex justify-start shadow-md rounded-none outline-none mb-4">
          <span>
            <FaArrowRight />
          </span>{" "}
          Anesthesiology
        </div>
        <div className="btn w-72 transition hover:scale-105 flex justify-start shadow-md rounded-none outline-none mb-4">
          <span>
            <FaArrowRight />
          </span>{" "}
          Gastroenterology
        </div>
        <div className="btn w-72 transition hover:scale-105 flex justify-start shadow-md rounded-none outline-none mb-4">
          <span>
            <FaArrowRight />
          </span>{" "}
          Gynecology (OB/GYN)
        </div>
        <div className="btn w-72 transition hover:scale-105 flex justify-start shadow-md rounded-none outline-none mb-4">
          <span>
            <FaArrowRight />
          </span>{" "}
          Endocrinology
        </div>
        <div className="btn w-72 transition hover:scale-105 flex justify-start shadow-md rounded-none outline-none mb-4">
          <span>
            <FaArrowRight />
          </span>{" "}
          Hematology
        </div>
        <div className="btn w-72 transition hover:scale-105 flex justify-start shadow-md rounded-none outline-none mb-4">
          <span>
            <FaArrowRight />
          </span>{" "}
          Rheumatology
        </div>
        <div className="btn w-72 transition hover:scale-105 flex justify-start shadow-md rounded-none outline-none mb-4">
          <span>
            <FaArrowRight />
          </span>{" "}
          Gynecology (OB/GYN)
        </div>
        <div className="btn w-72 transition hover:scale-105 flex justify-start shadow-md rounded-none outline-none mb-4">
          <span>
            <FaArrowRight />
          </span>
          Dermatology
        </div>
        <div className="btn w-72 transition hover:scale-105 flex justify-start shadow-md rounded-none outline-none mb-4">
          <span>
            <FaArrowRight />
          </span>
          Intensive Care Unit (ICU)
        </div>
        <div className="btn w-72 transition hover:scale-105 flex justify-start shadow-md rounded-none outline-none mb-4">
          <span>
            <FaArrowRight />
          </span>
          Rehabilitation
        </div>
        <div className="btn w-72 transition hover:scale-105 flex justify-start shadow-md rounded-none outline-none mb-4">
          <span>
            <FaArrowRight />
          </span>
          Clinical Laboratory
        </div>
        <div className="btn w-72 transition hover:scale-105 flex justify-start shadow-md rounded-none outline-none mb-4">
          <span>
            <FaArrowRight />
          </span>
          Vascular Surgery Burn Center
        </div>
        <div className="btn w-72 transition hover:scale-105 flex justify-start shadow-md rounded-none outline-none mb-4">
          <span>
            <FaArrowRight />
          </span>
          Occupational Therapy
        </div>
        <div className="btn w-72 transition hover:scale-105 flex justify-start shadow-md rounded-none outline-none mb-4">
          <span>
            <FaArrowRight />
          </span>
          Speech Therapy
        </div>
        <div className="btn w-72 transition hover:scale-105 flex justify-start shadow-md rounded-none outline-none mb-4">
          <span>
            <FaArrowRight />
          </span>
          Social Services
        </div>
        <div className="btn w-72 transition hover:scale-105 flex justify-start shadow-md rounded-none outline-none mb-4">
          <span>
            <FaArrowRight />
          </span>
          Pain Management
        </div>
        <div className="btn w-72 transition hover:scale-105 flex justify-start shadow-md rounded-none outline-none mb-4">
          <span>
            <FaArrowRight />
          </span>
          Vascular Surgery
        </div>
        <div className="btn w-72 transition hover:scale-105 flex justify-start shadow-md rounded-none outline-none mb-4">
          <span>
            <FaArrowRight />
          </span>
          Burn Center
        </div>
      </div>
    </div>
  );
};

export default departments;
