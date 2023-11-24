import React from "react";
import { BsBell } from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";
import Logo from "../images/Nav-Logo.png";
import { useLocation, useMatch } from "react-router-dom";
import SettingsPopUp from "./SettingsPopUp";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;
  console.log(path);

  return (
    <div className="top-0 z-20 flex justify-between items-center px-5 py-3 bg-primary-500 text-white sticky w-full ">
      <div className="flex ">
        <div className="flex items-center w-56 gap-3">
          <img src={Logo} alt="logo" />
          <h3 className="font-bold text-auxiliary-400">Name.com</h3>
        </div>

        <div className="flex gap-5">
          <p>Hello,Member</p>
          <p>Company</p>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <BsBell size={25} />
        {path === "/dashboard" ? (
          <IoCalendarOutline size={25} />
        ) : (
          <SettingsPopUp />
        )}
        <button className="py-2 px-3 border rounded-full">Sign Out</button>
      </div>
    </div>
  );
};

export default Navbar;
