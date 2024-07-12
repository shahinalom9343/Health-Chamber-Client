import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../../public/ErrorImage.jpg";
import { FaChevronLeft } from "react-icons/fa6";

const ErrorPage = () => {
  return (
    <section className="flex items-center h-full sm:p-16 dark:bg-gray-50 dark:text-gray-800">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-4 space-y-4 text-center">
        <img src={errorImg} alt="Error Page Image" />
        <p className="text-2xl font-semibold md:text-3xl">
          Sorry, we couldn&apos;t find this page.
        </p>
        <p className="mt-4 mb-8 dark:text-gray-600">
          But dont worry, you can find plenty of other things <br /> on our
          homepage.
        </p>
        <Link
          rel="noopener noreferrer"
          to="/"
          className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white font-semibold btn"
        >
          <span>
            <FaChevronLeft />
          </span>
          Back to Homepage
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
