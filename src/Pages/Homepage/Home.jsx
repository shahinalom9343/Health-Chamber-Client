import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../../Components/Hero";
import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <Helmet>
        <title>Health Chamber | Home</title>
      </Helmet>
      ;
      <div className="container mx-auto flex flex-col z-10">
        {/* Hero compoenent section */}
        <div>
          <Hero></Hero>
        </div>
        {/* marquee section */}
        <div className="py-5 text-2xl font-medium  bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-white px-4 hidden md:block">
          <Marquee pauseOnHover>
            Welcome to our Health Chamber Hospital, where compassionate care
            meets cutting-edge medical expertise. Our dedicated team of
            healthcare professionals is committed to providing personalized,
            high-quality treatment in a safe and comfortable environment. Your
            health and well-being are our top priorities. Experience the
            difference at Health Chamber—where every patient is treated like
            family...
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Home;
