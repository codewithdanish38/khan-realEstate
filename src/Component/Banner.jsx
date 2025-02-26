/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/house.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Transform your vision into reality with our expert solutions
        </h1>
        <div className="mt-6 flex gap-4">
        <Link to="/services">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg">
            Services
          </button></Link>
          {/* <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg">
            Contact Us
          </button> */}
          <Link to="/contact">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg">
            Contact Us
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
