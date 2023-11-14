import React from "react";
import { BsBell } from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";
import Logo from "../images/Vector.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-5 py-3 bg-primary-500 text-white sticky w-full ">
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
        <IoCalendarOutline size={25} />
        <button className="py-2 px-3 border rounded-full">Sign Out</button>
      </div>
    </div>
  );
};

export default Navbar;
