import React, { useState } from "react";
import { RxReload } from "react-icons/rx";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { RiSoundModuleLine } from "react-icons/ri";
import StarRating from "../../components/StarRating";
import { Link } from "react-router-dom";

const Trainings = () => {
  return (
    <div>
      <div className="border  border-gray-300 mt-5 rounded-lg ">
        <div className="flex justify-between items-center gap-2 p-3">
          <div className="flex items-center gap-3">
            <RxReload size={20} />
            <BsThreeDotsVertical size={20} />
          </div>
          {/* <div className="flex items-center gap-3 flex-grow p-3 border-2 border-gray-200 bg-gray-100 rounded-lg ">
        <FiSearch color="gray" size={20} />
        <input className="outline-none w-full h-full bg-gray-100" />
      </div> */}
          <div className="flex items-center ">
            <button className=" bg-secondary-700 text-white py-2 px-5 rounded-full font-normal">
              <span className="text-lg mr-3">+</span>
              New Training
            </button>
          </div>
        </div>
        <div className="w-full overflow-x">
          <table class="table-auto overflow-scroll w-full">
            {/* Table headings */}
            <thead className="w-full">
              <tr className="grid grid-cols-8  text-left py-3 pl-3 pr-6 bg-secondary-50 text-sm">
                <th className="col-span-2">Course Name</th>
                <th className="">Training</th>
                <th>Trainer</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Status Reason</th>
                <th> Status</th>
              </tr>
            </thead>
            {/* table content/data */}
            <tbody
              className="flex flex-col items-center justify-between overflow-y-scroll w-full h-screen"
              // style={{ height: "90vh" }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(() => (
                <tr
                  className={`grid grid-cols-8 justify-center items-center py-2 px-3 gap-1 border border-gray-200 text-left w-full text-sm`}
                >
                  <td className="col-span-2 ">
                    <h3 className="text-auxiliary-800 text-base">Sales Tech</h3>
                  </td>
                  <td className="">Technology</td>
                  <td className="">Technology</td>
                  <td className="">10/10/10</td>
                  <td className="">10/10/10</td>
                  <td className="">Reason</td>
                  <td className="flex">
                    <p className="py-2 px-5 border border-success-700 text-success-700 text-xs rounded-full ">
                      Remote
                    </p>
                  </td>
                  {/* <td className=" text-xs">
                    <p className="flex gap-3">
                      <span>12</span>
                      <span className="text-text-hint">Months</span>
                    </p>
                  </td>
                  <td className="py-2 border border-success-700 text-success-700 text-xs rounded-full flex justify-center items-center">
                    Employed
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="w-full h-14 py-2 bg-secondary-50 justify-end items-center gap-4 inline-flex">
          <div className="w-24 bg-white flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-10 flex-col justify-start items-start gap-1 flex">
              <div className="self-stretch h-10 px-4 py-2 rounded-lg border border-neutral-500 justify-between items-center inline-flex">
                <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['Poppins'] leading-tight">
                  15
                </div>
                <div className="w-6 h-6 relative" />
              </div>
            </div>
          </div>
          <div className="text-neutral-700 text-base font-medium font-['Poppins'] leading-normal">
            1-15{" "}
          </div>
          <div className="text-neutral-700 text-base font-medium font-['Poppins'] leading-normal">
            of
          </div>
          <div className="text-neutral-700 text-base font-medium font-['Poppins'] leading-normal">
            126
          </div>
          <div className="w-6 h-6 relative" />
          <div className="w-6 h-6 relative" />
        </div>
      </div>
    </div>
  );
};

export default Trainings;
