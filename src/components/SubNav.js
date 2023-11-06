import React from "react";
import { Link, NavLink } from "react-router-dom";

const navArr = [
  {
    name: "Personal",
    link: "",
  },
  {
    name: "Notes",
    link: "",
  },
  {
    name: "Marketing",
    link: "",
  },
  {
    name: "Interviews",
    link: "",
  },
  {
    name: "Projects",
    link: "",
  },
  {
    name: "Trainigs",
    link: "",
  },
  {
    name: "Documents",
    link: "",
  },
];

const SubNav = () => {
  return (
    <div className="w-full h-9 border-b border-neutral-200 justify-between items-start inline-flex">
      {/* <ul>
        {navArr.map((navItem, index) => (
          <li key={index}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "p-2 bg-slate-700 rounded-tl-lg rounded-tr-lg justify-start items-start flex"
                  : "p-2 rounded-tl-lg rounded-tr-lg justify-start items-start flex"
              }
            >
              <p
                className={({ isActive }) =>
                  isActive
                    ? "text-white text-sm font-normal font-['Poppins'] leading-tight tracking-tight"
                    : "text-neutral-500 text-sm font-normal font-['Poppins'] leading-tight tracking-tight"
                }
              >
                {}
              </p>
            </NavLink>
          </li>
        ))}
      </ul> */}

      <div className="p-2 bg-slate-700 rounded-tl-lg rounded-tr-lg justify-start items-start flex">
        <div className="text-white text-sm font-normal font-['Poppins'] leading-tight tracking-tight">
          Personal
        </div>
      </div>
      <div className="p-2 rounded-tl-lg rounded-tr-lg justify-start items-start flex">
        <div className="text-neutral-500 text-sm font-normal font-['Poppins'] leading-tight tracking-tight">
          Notes
        </div>
      </div>
      <div className="p-2 rounded-tl-lg rounded-tr-lg justify-start items-start flex">
        <div className="text-neutral-500 text-sm font-normal font-['Poppins'] leading-tight tracking-tight">
          Marketing
        </div>
      </div>
      <div className="p-2 rounded-tl-lg rounded-tr-lg justify-start items-start flex">
        <div className="text-neutral-500 text-sm font-normal font-['Poppins'] leading-tight tracking-tight">
          Interviews
        </div>
      </div>
      <div className="p-2 rounded-tl-lg rounded-tr-lg justify-start items-start flex">
        <div className="text-neutral-500 text-sm font-normal font-['Poppins'] leading-tight tracking-tight">
          Projects
        </div>
      </div>
      <div className="p-2 rounded-tl-lg rounded-tr-lg justify-start items-start flex">
        <div className="text-neutral-500 text-sm font-normal font-['Poppins'] leading-tight tracking-tight">
          Trainings
        </div>
      </div>
      <div className="p-2 rounded-tl-lg rounded-tr-lg justify-start items-start flex">
        <div className="text-neutral-500 text-sm font-normal font-['Poppins'] leading-tight tracking-tight">
          Document
        </div>
      </div>
    </div>
  );
};

export default SubNav;
