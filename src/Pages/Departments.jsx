import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const departments = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto md:mt-4">
      <div className="btn w-72 flex justify-start shadow-md rounded-none outline-none mb-4">
        <span>
          <FaArrowRight />
        </span>{" "}
        Emergency Department (ED)
      </div>
      <div className="btn w-72 flex justify-start shadow-md rounded-none outline-none mb-4">
        <span>
          <FaArrowRight />
        </span>{" "}
        Cardiology
      </div>
      <div className="btn w-72 flex justify-start shadow-md rounded-none outline-none mb-4">
        <span>
          <FaArrowRight />
        </span>{" "}
        Neurology
      </div>
      <div className="btn w-72 flex justify-start shadow-md rounded-none outline-none mb-4">
        <span>
          <FaArrowRight />
        </span>{" "}
        Orthopeadics
      </div>
      <div className="btn w-72 flex justify-start shadow-md rounded-none outline-none mb-4">
        <span>
          <FaArrowRight />
        </span>{" "}
        Oncology
      </div>
      <div className="btn w-72 flex justify-start shadow-md rounded-none outline-none mb-4">
        <span>
          <FaArrowRight />
        </span>{" "}
        Radiology
      </div>
      <div className="btn w-72 flex justify-start shadow-md rounded-none outline-none mb-4">
        <span>
          <FaArrowRight />
        </span>{" "}
        Anesthesiology
      </div>
      <div className="btn w-72 flex justify-start shadow-md rounded-none outline-none mb-4">
        <span>
          <FaArrowRight />
        </span>{" "}
        Gastroenterology
      </div>
      <div className="btn w-72 flex justify-start shadow-md rounded-none outline-none mb-4">
        <span>
          <FaArrowRight />
        </span>{" "}
        Gynecology (OB/GYN)
      </div>
      <div className="btn w-72 flex justify-start shadow-md rounded-none outline-none mb-4">
        <span>
          <FaArrowRight />
        </span>{" "}
        Endocrinology
      </div>
      <div className="btn w-72 flex justify-start shadow-md rounded-none outline-none mb-4">
        <span>
          <FaArrowRight />
        </span>{" "}
        Hematology
      </div>
      <div className="btn w-72 flex justify-start shadow-md rounded-none outline-none mb-4">
        <span>
          <FaArrowRight />
        </span>{" "}
        Rheumatology
      </div>
      <div className="btn w-72 flex justify-start shadow-md rounded-none outline-none mb-4">
        <span>
          <FaArrowRight />
        </span>{" "}
        Gynecology (OB/GYN)
      </div>
      <div className="btn w-72 flex justify-start shadow-md rounded-none outline-none mb-4">
        <span>
          <FaArrowRight />
        </span>
        Dermatology
      </div>
      <div className="btn w-72 flex justify-start shadow-md rounded-none outline-none mb-4">
        <span>
          <FaArrowRight />
        </span>
        Intensive Care Unit (ICU)
      </div>
      <div className="btn w-72 flex justify-start shadow-md rounded-none outline-none mb-4">
        <span>
          <FaArrowRight />
        </span>
        Rehabilitation
      </div>
      <div className="btn w-72 flex justify-start shadow-md rounded-none outline-none mb-4">
        <span>
          <FaArrowRight />
        </span>
        Clinical Laboratory
      </div>
      <div className="btn w-72 flex justify-start shadow-md rounded-none outline-none mb-4">
        <span>
          <FaArrowRight />
        </span>
        Vascular Surgery Burn Center
      </div>
    </div>
  );
};

export default departments;
