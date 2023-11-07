import React from "react";
import { Link, NavLink } from "react-router-dom";

const navArr = [
  {
    name: "Personal",
    link: "/candidate/add-candidate/personal",
  },
  {
    name: "Notes",
    link: "/candidate/add-candidate/notes",
  },
  {
    name: "Marketing",
    link: "/candidate/add-candidate/marketing",
  },
  {
    name: "Interviews",
    link: "/candidate/add-candidate/interviews",
  },
  {
    name: "Projects",
    link: "/candidate/add-candidate/projects",
  },
  {
    name: "Trainigs",
    link: "/candidate/add-candidate/trainings",
  },
  {
    name: "Documents",
    link: "/candidate/add-candidate/documents",
  },
];

const SubNav = () => {
  return (
    <div className="w-full h-9 border-b  justify-between items-start inline-flex">
      {navArr.map((navItem) => (
        <NavLink
          to={navItem.link}
          className={({ isActive }) =>
            isActive
              ? "p-2 bg-primary-500 rounded-tl-lg rounded-tr-lg justify-start items-start flex text-white text-sm font-normal  leading-tight tracking-tight"
              : "p-2 rounded-tl-lg rounded-tr-lg justify-start items-start flex text-neutral-500 text-sm font-normal  leading-tight tracking-tight"
          }
        >
          {/* <div className="text-white text-sm font-normal font-['Poppins'] leading-tight tracking-tight"> */}
          {navItem.name}
          {/* </div> */}
        </NavLink>
      ))}
    </div>
  );
};

export default SubNav;
