import React from "react";
import { CgLoadbarSound } from "react-icons/cg";
import { FaRegFolderClosed } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";
import { BsGear } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import Triangle from "../images/triangle.png";

const SalesArr = [
  {
    name: "Job Leads",
    link: "sales/job-leads",
  },
  {
    name: "Interviews",
    link: "sales/interviews",
  },
  {
    name: "Projects",
    link: "sales/projects",
  },
  {
    name: "Vendors",
    link: "sales/vendors",
  },
  {
    name: "Contacts",
    link: "sales/contacts",
  },
  {
    name: "Technologies",
    link: "sales/technologies",
  },
  {
    name: "Sales Team",
    link: "sales/sales-teams",
  },
];

const Sidebar = () => {
  return (
    <aside
      id="sidebar-multi-level-sidebar"
      className="fixed  left-0  w-52 h-screen transition-transform -translate-x-full sm:translate-x-0 "
      aria-label="Sidebar"
      rounded-lg
    >
      <div className="h-full  overflow-y-auto bg-primary-500 dark:bg-gray-800 text-slate-50">
        <ul className=" font-normal w-full">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-4 bg-primary-50 text-primary-500"
                  : "flex items-center p-4 hover:bg-primary-50 text-white hover:text-primary-500"
              }
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="icon">
                  <path
                    id="Vector"
                    d="M18 20V10"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M12 20V4"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_3"
                    d="M6 20V14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
              <span className="ml-3">Dashboard</span>
            </NavLink>
          </li>
          <li className="hover:text-primary-700">
            <NavLink
              to="/candidate"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-4 bg-primary-50 text-primary-500"
                  : "flex items-center p-4 hover:bg-primary-50 text-white hover:text-primary-500"
              }
              // className="flex items-center p-4   dark:text-white hover:bg-primary-50 dark:hover:bg-gray-700 text-white hover:text-primary-500 group"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="icon">
                  <path
                    id="Vector 278"
                    d="M17.5 3.5H17.7C19.4913 3.5 20.387 3.5 20.9435 4.0565C21.5 4.61299 21.5 5.50866 21.5 7.3V7.5"
                    stroke="currentColor"
                    stroke-linecap="round"
                  />
                  <path
                    id="Vector 280"
                    d="M17.5 20.5H17.7C19.4913 20.5 20.387 20.5 20.9435 19.9435C21.5 19.387 21.5 18.4913 21.5 16.7V16.5"
                    stroke="currentColor"
                    stroke-linecap="round"
                  />
                  <path
                    id="Vector 279"
                    d="M6.5 3.5H6.3C4.50866 3.5 3.61299 3.5 3.0565 4.0565C2.5 4.61299 2.5 5.50866 2.5 7.3V7.5"
                    stroke="currentColor"
                    stroke-linecap="round"
                  />
                  <path
                    id="Vector 281"
                    d="M6.5 20.5H6.3C4.50866 20.5 3.61299 20.5 3.0565 19.9435C2.5 19.387 2.5 18.4913 2.5 16.7V16.5"
                    stroke="currentColor"
                    stroke-linecap="round"
                  />
                  <path
                    id="Ellipse 45"
                    d="M7.21484 15.7847C7.68758 15.1024 8.37508 14.5254 9.21678 14.1204C10.0585 13.7155 11.0187 13.5 12 13.5C12.9813 13.5 13.9415 13.7155 14.7832 14.1204C15.6249 14.5254 16.3124 15.1024 16.7852 15.7847"
                    stroke="currentColor"
                    stroke-linecap="round"
                  />
                  <circle
                    id="Ellipse 46"
                    cx="12"
                    cy="9"
                    r="2.5"
                    stroke="currentColor"
                    stroke-linecap="round"
                  />
                </g>
              </svg>

              <span className="ml-3">Candidate</span>
            </NavLink>
          </li>
          <li>
            <button
              type="button"
              className="flex items-center w-full p-4 text-base  transition duration-75  group hover:bg-primary-50 dark:text-white dark:hover:bg-gray-700 text-white hover:text-primary-700"
              aria-controls="sales"
              data-collapse-toggle="sales"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="folder">
                  <path
                    id="Vector 240"
                    d="M1 9.99976H19"
                    stroke="currentColor"
                    stroke-miterlimit="1.41421"
                  />
                  <path
                    id="Rectangle 4017"
                    d="M1 3.4C1 2.55992 1 2.13988 1.16349 1.81901C1.3073 1.53677 1.53677 1.3073 1.81901 1.16349C2.13988 1 2.55992 1 3.4 1H7.13327C7.52261 1 7.71728 1 7.89282 1.05512C8.04817 1.10391 8.19198 1.1838 8.31547 1.28994C8.455 1.40987 8.55784 1.57516 8.76351 1.90574L10.0365 3.95181C10.2422 4.28239 10.345 4.44768 10.4845 4.56761C10.608 4.67374 10.7518 4.75364 10.9072 4.80243C11.0827 4.85755 11.2774 4.85755 11.6667 4.85755H16.6C17.4401 4.85755 17.8601 4.85755 18.181 5.02104C18.4632 5.16485 18.6927 5.39432 18.8365 5.67656C19 5.99743 19 6.41747 19 7.25755V16.6C19 17.4401 19 17.8601 18.8365 18.181C18.6927 18.4632 18.4632 18.6927 18.181 18.8365C17.8601 19 17.4401 19 16.6 19H3.4C2.55992 19 2.13988 19 1.81901 18.8365C1.53677 18.6927 1.3073 18.4632 1.16349 18.181C1 17.8601 1 17.4401 1 16.6V3.4Z"
                    stroke="currentColor"
                  />
                </g>
              </svg>

              <span className="flex-1 ml-3 text-left whitespace-nowrap">
                Sales
              </span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <ul id="sales" className="hidden  bg-primary-400 text-white ">
              {SalesArr.map(({ name, link, index }) => (
                <NavLink
                  key={index}
                  to={link}
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center  w-full p-4  transition duration-75 text-primary-500 bg-gray-100"
                      : "flex items-center  w-full p-4  transition duration-75 hover:bg-gray-100 text-white hover:text-primary-500 dark:hover:bg-gray-700"
                  }
                  // className="flex items-center  w-full p-4  transition duration-75   group hover:bg-gray-100 text-white hover:text-primary-500 dark:hover:bg-gray-700"
                >
                  <li className=" flex gap-3 ">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="icon">
                        <path
                          id="Vector 10"
                          d="M16.7074 11.7952L8.25877 5.88114C7.72855 5.50998 7 5.88931 7 6.53652V17.4635C7 18.1107 7.72855 18.49 8.25877 18.1189L16.7074 12.2048C16.8496 12.1053 16.8496 11.8947 16.7074 11.7952Z"
                          fill="currentColor"
                        />
                      </g>
                    </svg>

                    {name}
                  </li>
                </NavLink>
              ))}
            </ul>
          </li>
          <li>
            <button
              type="button"
              className="flex items-center w-full p-4 text-base  transition duration-75  group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-white hover:text-primary-700"
              aria-controls="training"
              data-collapse-toggle="training"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="icon">
                  <ellipse
                    id="Ellipse 46"
                    cx="12"
                    cy="8"
                    rx="4"
                    ry="4"
                    stroke="currentColor"
                    stroke-linecap="round"
                  />
                  <path
                    id="Subtract"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.2759 16C13.8972 15.5613 12.3896 15.4073 10.9067 15.5538C9.26616 15.7157 7.71472 16.2397 6.45048 17.0712C5.18613 17.9028 4.25374 19.0137 3.80174 20.2789C3.70884 20.5389 3.84433 20.825 4.10438 20.9179C4.36442 21.0108 4.65054 20.8754 4.74345 20.6153C5.11048 19.588 5.88515 18.64 7 17.9067C8.11495 17.1734 9.508 16.6967 11.0049 16.5489C11.5548 16.4946 12.1076 16.4858 12.6536 16.521C13.009 16.1974 13.4814 16 14 16L15.2759 16Z"
                    fill="currentColor"
                  />
                  <path
                    id="Vector 52"
                    d="M18 14L18 22"
                    stroke="currentColor"
                    stroke-linecap="round"
                  />
                  <path
                    id="Vector 53"
                    d="M22 18L14 18"
                    stroke="currentColor"
                    stroke-linecap="round"
                  />
                </g>
              </svg>
              <span className="flex-1 ml-3 text-left whitespace-nowrap">
                Training
              </span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <ul id="training" className="hidden space-y-2 bg-slate-500">
              <li>
                <Link
                  href="#"
                  className="flex items-center w-full p-4 text-gray-900 transition duration-75  pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Classes
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center w-full p-4 text-gray-900 transition duration-75  pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Faculty
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center w-full p-4 text-gray-900 transition duration-75  pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Training
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <button
              type="button"
              className="flex items-center w-full p-4 text-base  transition duration-75  group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-white hover:text-black"
              aria-controls="administration"
              data-collapse-toggle="administration"
            >
              {/* <BsGear
                size={24}
                className=" transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white text-white hover:text-black"
              /> */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="icon">
                  <path
                    id="Star 5"
                    d="M10.0285 3.91752C10.9596 2.49801 13.0404 2.49801 13.9715 3.91752C14.653 4.9566 15.8526 5.53433 17.0899 5.4193C18.7803 5.26216 20.0777 6.88906 19.5483 8.50201C19.1609 9.6827 19.4571 10.9808 20.3185 11.8765C21.4953 13.1 21.0322 15.1287 19.4411 15.7206C18.2765 16.1538 17.4463 17.1948 17.2831 18.4267C17.0602 20.1096 15.1854 21.0124 13.7306 20.1374C12.6658 19.497 11.3342 19.497 10.2694 20.1374C8.81464 21.0124 6.93984 20.1096 6.71691 18.4267C6.55373 17.1948 5.72354 16.1538 4.55886 15.7206C2.96776 15.1287 2.50473 13.1 3.68148 11.8765C4.54285 10.9808 4.83915 9.6827 4.45168 8.50201C3.92234 6.88906 5.21975 5.26216 6.91006 5.4193C8.14736 5.53433 9.34702 4.95661 10.0285 3.91752Z"
                    stroke="currentColor"
                  />
                  <circle
                    id="Ellipse 165"
                    cx="12"
                    cy="12"
                    r="3.5"
                    stroke="currentColor"
                  />
                </g>
              </svg>

              <span className="flex-1 ml-3 text-left whitespace-nowrap">
                Administration
              </span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <ul id="administration" className="hidden space-y-2 bg-slate-500">
              <li>
                <Link
                  href="#"
                  className="flex items-center w-full p-4 text-gray-900 transition duration-75  pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Account
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center w-full p-4 text-gray-900 transition duration-75  pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Users
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center w-full p-4 text-gray-900 transition duration-75  pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  User Role
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center w-full p-4 text-gray-900 transition duration-75  pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Settings
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
