/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-base-100 shadow-md px-6 md:px-12 py-3">
      <div className="flex items-center justify-between">
        
        {/* Logo */}
        <a href="https://www.digitaldas.com/aboutus " className="text-3xl font-bold text-primary">
          Digital Das
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-12 text-lg font-medium">
          <li className="hover:text-info transition"><a href="/">Home</a></li>
          <li className="hover:text-info transition"><a href="project">Project</a></li>
          <li className="hover:text-info transition"><a href="/contact">Contact</a></li>
          <li className="hover:text-info transition"><a href="/about">About</a></li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-6">
       
     
        <Link to="/signup" className="btn btn-info">Login</Link>
          {/* Profile Dropdown */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="User Profile"
                  src="https://d502jbuhuh9wk.cloudfront.net/orgData/64fd6a37e4b0735aa6e4ed34/pages/assets/images/LiuPWwhatsappimage20231114at8.53.53pm.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <li><a href="#">Profile <span className="badge">New</span></a></li>
              <li><a href="#">Logout</a></li>
            </ul>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden btn btn-ghost btn-circle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-4 md:hidden">
          <ul className="flex flex-col space-y-3 text-lg font-medium">
            <li className="hover:text-info transition"><a href="#">Home</a></li>
            <li className="hover:text-info transition"><a href="#">Project</a></li>
            <li className="hover:text-info transition"><a href="#">Contact</a></li>
            <li className="hover:text-info transition"><a href="#">About</a></li>
          </ul>
          <div className="mt-4 flex flex-col space-y-3">
            <button className="btn btn-info w-full">Login</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
