import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className=" py-4 px-6 flex justify-between items-center">
      <div className="text-lg font-semibold">
        <h2 style={{ fontFamily: "Poppins" }}>Chess Analyzer Tool</h2>
      </div>

      {/* Middle section: Navigation Links */}
      <div
        className="flex gap-4 text-lg ml-[53rem]"
        style={{ fontFamily: "Poppins" }}
      >
        <a href="#" className="hover:text-gray-700">
          Home
        </a>
        <a href="#" className="hover:text-gray-700">
          About
        </a>
      </div>

      {/* Right section: Sign Up Button */}
      <button
        className="bg-transparent hover:bg-white text-black font-semibold py-2 px-12 rounded border-[1.5px] border-black transition-all cursor-pointer"
        style={{ fontFamily: "Poppins" }}
      >
        Sign Up
      </button>
    </div>
  );
};

export default Navbar;
