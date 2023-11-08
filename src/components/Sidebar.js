import React from "react";
import { CgLoadbarSound } from "react-icons/cg";
import { FaRegFolderClosed } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";
import { BsGear } from "react-icons/bs";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside
      id="sidebar-multi-level-sidebar"
      className="fixed top-0 left-0 z-40 w-52 h-screen transition-transform -translate-x-full sm:translate-x-0 "
      aria-label="Sidebar"
      rounded-lg
    >
      <div className="h-full  overflow-y-auto bg-primary-500 dark:bg-gray-800 text-slate-50">
        <h1 className="m-6 text-xl text-auxiliary-600">Name.com</h1>
        <ul className="space-y-3 font-normal w-full">
          <li>
            <Link
              to="/dashboard"
              className="flex items-center p-4  text-white hover:text-primary-500 dark:text-white hover:bg-primary-50 dark:hover:bg-gray-700 group"
            >
              <CgLoadbarSound
                size={30}
                className=" transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white text-white hover:text-black"
              />

              <span className="ml-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/candidate"
              className="flex items-center p-4  dark:text-white hover:bg-primary-50 dark:hover:bg-gray-700 text-white hover:text-black group"
            >
              {/* <RxAvatar
                size={30}
                className="  transition duration-75 dark:text-gray-400 group-hover:text-gray-900 text-white hover:text-blackdark:group-hover:text-white"
              /> */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" "
              >
                <g id="icon">
                  <path
                    id="Vector 278"
                    d="M17.5 3.5H17.7C19.4913 3.5 20.387 3.5 20.9435 4.0565C21.5 4.61299 21.5 5.50866 21.5 7.3V7.5"
                    stroke="white"
                    stroke-linecap="round"
                  />
                  <path
                    id="Vector 280"
                    d="M17.5 20.5H17.7C19.4913 20.5 20.387 20.5 20.9435 19.9435C21.5 19.387 21.5 18.4913 21.5 16.7V16.5"
                    stroke="white"
                    stroke-linecap="round"
                  />
                  <path
                    id="Vector 279"
                    d="M6.5 3.5H6.3C4.50866 3.5 3.61299 3.5 3.0565 4.0565C2.5 4.61299 2.5 5.50866 2.5 7.3V7.5"
                    stroke="white"
                    stroke-linecap="round"
                  />
                  <path
                    id="Vector 281"
                    d="M6.5 20.5H6.3C4.50866 20.5 3.61299 20.5 3.0565 19.9435C2.5 19.387 2.5 18.4913 2.5 16.7V16.5"
                    stroke="white"
                    stroke-linecap="round"
                  />
                  <path
                    id="Ellipse 45"
                    d="M7.21484 15.7847C7.68758 15.1024 8.37508 14.5254 9.21678 14.1204C10.0585 13.7155 11.0187 13.5 12 13.5C12.9813 13.5 13.9415 13.7155 14.7832 14.1204C15.6249 14.5254 16.3124 15.1024 16.7852 15.7847"
                    stroke="white"
                    stroke-linecap="round"
                  />
                  <circle
                    id="Ellipse 46"
                    cx="12"
                    cy="9"
                    r="2.5"
                    stroke="white"
                    stroke-linecap="round"
                  />
                </g>
              </svg>

              <span className="ml-3">Candidate</span>
            </Link>
          </li>
          <li>
            <button
              type="button"
              className="flex items-center w-full p-4 text-base  transition duration-75  group hover:bg-primary-50 dark:text-white dark:hover:bg-gray-700 text-white hover:text-black"
              aria-controls="sales"
              data-collapse-toggle="sales"
            >
              <FaRegFolderClosed
                size={30}
                className=" transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white text-white hover:text-black"
              />

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
            <ul id="sales" className="hidden space-y-2 bg-primary-400 ">
              <li>
                <Link
                  to={`/sales/job-leads`}
                  className="flex items-center w-full p-4 text-gray-900 transition duration-75  pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Job Leads
                </Link>
              </li>
              <li>
                <Link
                  to={`/sales/interviews`}
                  className="flex items-center w-full p-4 text-gray-900 transition duration-75 pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Interviews
                </Link>
              </li>
              <li>
                <Link
                  to={`sales/projects`}
                  className="flex items-center w-full p-4 text-gray-900 transition duration-75  pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to={`sales/vendors`}
                  className="flex items-center w-full p-4 text-gray-900 transition duration-75  pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Vendors
                </Link>
              </li>
              <li>
                <Link
                  to={`sales/contacts`}
                  className="flex items-center w-full p-4 text-gray-900 transition duration-75  pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Contacts
                </Link>
              </li>
              <li>
                <Link
                  to={`/sales/tecnologies`}
                  className="flex items-center w-full p-4 text-gray-900 transition duration-75  pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Technologies
                </Link>
              </li>
              <li>
                <Link
                  to={`/sales/sales-teams`}
                  className="flex items-center w-full p-4 text-gray-900 transition duration-75  pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Sales Teams
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <button
              type="button"
              className="flex items-center w-full p-4 text-base  transition duration-75  group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 text-white hover:text-black"
              aria-controls="training"
              data-collapse-toggle="training"
            >
              <FaRegFolderClosed
                size={30}
                className=" transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white text-white hover:text-black"
              />

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
              <BsGear
                size={30}
                className=" transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white text-white hover:text-black"
              />

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
