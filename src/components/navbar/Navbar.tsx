import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
      <div className="text-lg font-semibold">
        <h2 style={{ fontFamily: "Poppins" }}>Chess Analyzer Tool</h2>
      </div>

      {/* Middle section: Navigation Links */}
      <div
        className="flex gap-4 text-xl ml-[37rem]"
        style={{ fontFamily: "Poppins" }}
      >
        <a href="#" className="hover:text-gray-300">
          Home
        </a>
        <a href="#" className="hover:text-gray-300">
          About
        </a>
      </div>

      {/* Right section: Sign Up Button */}
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Sign Up
      </button>
    </div>
  );
};

export default Navbar;
