import React, { useState } from "react";
import { RxReload } from "react-icons/rx";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { RiSoundModuleLine } from "react-icons/ri";
import StarRating from "../../../components/StarRating";
import { Link } from "react-router-dom";

const tabelHeadArr = [
  "Sales Manager",
  "Sales Start Date",
  "Sales End Date",
  "Jobs Applied",
  "Interview Attend",
  "Sales Person",
  "Marketing Status",
];

const MarketingList = () => {
  return (
    <div>
      <div className="border border-gray-300 mt-5 rounded-lg ">
        <div className="flex items-center gap-2 p-3">
          <RxReload size={20} />
          <BsThreeDotsVertical size={20} />
          <div className="flex items-center gap-3 flex-grow p-3 border-2 border-gray-200 bg-gray-100 rounded-lg ">
            <FiSearch color="gray" size={20} />
            <input className="outline-none w-full h-full bg-gray-100" />
          </div>
          <div className="flex items-center text-teal-500 gap-2 py-2 px-4 border border-teal-500 rounded-full">
            <RiSoundModuleLine />
            <p>Filter</p>
          </div>
          <div className="flex items-center text-teal-500 gap-2 py-2 px-4 border border-teal-500 rounded-full">
            <RiSoundModuleLine />
            <p>Filter</p>
          </div>
        </div>
        <div className="w-full overflow-x">
          <table class="table-auto overflow-scroll w-full">
            {/* Table headings */}
            <thead className="w-full">
              <tr className="grid grid-cols-7 items-center w-full text-left text-sm py-3 pl-3 pr-6 bg-secondary-50">
                {tabelHeadArr.map((heading) => (
                  <th>{heading}</th>
                ))}
              </tr>
            </thead>
            {/* table content/data */}
            <tbody className="flex flex-col items-center overflow-y-scroll w-full h-screen">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(() => (
                <tr className="grid grid-cols-7 items-center py-2 px-3 border border-gray-200 text-left w-full text-sm">
                  <td className="text-auxiliary-800">Bessie Cooper</td>
                  <td>10/10/10</td>
                  <td>10/10/10</td>
                  <td>
                    <div className=" px-6 py-3 bg-secondary-50 rounded-full justify-start items-center gap-2 inline-flex text-success-700 text-xs font-medium  leading-none">
                      12
                    </div>
                  </td>
                  <td>
                    <div className="px-6 py-3 bg-secondary-100 rounded-full justify-start items-center  inline-flex text-success-700 text-xs font-medium  leading-none">
                      12
                    </div>
                  </td>
                  <td>Floyed Miles</td>
                  <td>
                    <div className="px-6 py-3 rounded-full border border-success-700 justify-start items-center inline-flex text-success-700 text-xs font-medium leading-none">
                      Employed
                    </div>
                  </td>
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

export default MarketingList;
