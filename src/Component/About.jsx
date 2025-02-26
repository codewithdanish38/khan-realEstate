/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import { IoIosMailUnread } from "react-icons/io";
const About = () => {
  const location = useLocation();
  return (
    
    <>
    {location.pathname === "/about"}
    <div className="flex flex-col md:flex-row items-center justify-center px-10 py-40 bg-white"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/thumb_back/fh260/background/20220924/pngtree-abstract-white-gray-gradient-green-background-designed-as-text-backdrop-product-image_1465635.jpg')",
      }}>
      {/* Left Section - Image */}
      <div className="w-full md:w-1/2">
        <img
          src="https://thumbs.dreamstime.com/b/real-estate-agents-showcase-expert-knowledge-commitment-assisting-homebuyers-personalized-services-349924319.jpg"
          alt="Company"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Right Section - Company Information */}
      <div className="w-full h-full md:w-1/2 md:pl-12 text-center md:text-left">
        <h2 className="text-5xl font-bold text-gray-800 mb-6">About Our Company</h2>
        <h3 className="text-3xl font-bold text-blue-600 mb-4">Digital Das</h3>
        <p className="text-lg text-black leading-relaxed">
          Digital Das is a leading real estate company dedicated to providing top-notch solutions
          for homebuyers and investors. With a commitment to excellence, we specialize in
          delivering high-quality projects that redefine modern living.
        </p>

        {/* Stats Section */}
        <div className="mt-6 grid grid-cols-2 gap-6 text-xl font-semibold text-gray-700">
          <div>
            <span className="text-4xl font-bold text-blue-600">10+</span>
            <p>Years of Experience</p>
          </div>
          <div>
            <span className="text-4xl font-bold text-blue-600">12+</span>
            <p>Projects Completed</p>
          </div>
          <div>
            <span className="text-4xl font-bold text-blue-600">20+</span>
            <p>Mn. Sq. Ft. Delivered</p>
          </div>
          <div>
            <span className="text-4xl font-bold text-blue-600">25+</span>
            <p>Ongoing Projects</p>
          </div>
        </div>

        {/* Learn More Button */}
        <div className="text-xl font-bold text-black -600 mt-10">
        <IoIosMailUnread />
          <h1>DigitalDas@gmail.com</h1>
        </div>
      </div>
    </div>
    </>
  );

};

export default About;
