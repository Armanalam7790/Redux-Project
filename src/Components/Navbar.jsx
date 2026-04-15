import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="h-[8%] bg-[#f9fafb9d] border-b-1 border-blue-500 flex justify-between items-center px-10 shadow-2xs shadow-amber-200">
      <h1 className="text-2xl font-bold text-blue-600">MyStore</h1>
      <div className="flex gap-8 text-gray-700 font-medium ">
        <NavLink
          className={({ isActive }) => (isActive ? "text-rose-600 " : "")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-rose-600" : "")}
          to="/shop"
        >
          shop
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-rose-600" : "")}
          to="/about"
        >
          about
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-rose-600" : "")}
          to="/cart"
        >
          cart
        </NavLink>
      </div>

      <NavLink
        //  
    className="hidden md:block px-6 py-2 bg-blue-600 rounded text-white hover:bg-blue-700 transition"
      >
      login
      </NavLink>
    </div>
  );
};

export default Navbar;
