import React from "react";
import { NavLink } from "react-router-dom";

const tabArr = [
  {
    name: "Basic",
    link: "basic",
  },
  {
    name: "Professional",
    link: "professional",
  },
  {
    name: "Profile",
    link: "profile",
  },
  {
    name: "Emergency Contacts",
    link: "emergency-contacts",
  },
];

const SubTabs = () => {
  return (
    <div className="border-b border-stone-300 justify-start items-start inline-flex mt-5">
      {tabArr.map((tabItem) => (
        <NavLink
          to={tabItem.link}
          className={({ isActive }) =>
            isActive
              ? "p-1 border-b-2 border-primary-500 justify-start items-start flex px-4 py-2  justify-start items-start gap-2 text-text-hint text-xs font-medium leading-none"
              : "p-1 justify-start items-start flex px-4 py-2 justify-start items-start gap-2 text-neutral-500 text-xs font-normal leading-none"
          }
        >
          {tabItem.name}
        </NavLink>
      ))}
    </div>
  );
};

export default SubTabs;
