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
              <RxAvatar
                size={30}
                className="  transition duration-75 dark:text-gray-400 group-hover:text-gray-900 text-white hover:text-blackdark:group-hover:text-white"
              />

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
