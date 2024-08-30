import React from "react";
import { Helmet } from "react-helmet";

const Gallery = () => {
  return (
    <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
      <Helmet>
        <title>Health Chamber | Gallery</title>
      </Helmet>
      <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
        <img
          src="https://i.ibb.co/YBy0TSR/1.jpg"
          alt=""
          className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://i.ibb.co/6NhCpcn/2.jpg"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://i.ibb.co/TPHp4m7/3.jpg"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://i.ibb.co/j3QQ9DZ/4.jpg"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://i.ibb.co/rwJwG2c/5.png"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://i.ibb.co/fr7hW9s/6.jpg"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://i.ibb.co/GpsVSn1/7.jpg"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://i.ibb.co/bbP0Tm5/8.jpg"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://i.ibb.co/KDQxZH0/9.jpg"
        />
        <img
          src="https://i.ibb.co/gWLWxjv/10.webp"
          alt=""
          className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
        />
      </div>
    </section>
  );
};

export default Gallery;
