import React from "react";
import { BsBell } from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-5 py-3 bg-primary-500 text-white sticky top-0 z-50">
      <div className="flex gap-5">
        <p>Hello,Member</p>
        <p>Company</p>
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
