import React, { useState } from "react";
import { RxReload } from "react-icons/rx";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { RiSoundModuleLine } from "react-icons/ri";
import StarRating from "../../components/StarRating";
import { Link } from "react-router-dom";

const Candidate = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="p-5 ">
      <div className="flex items-center justify-between">
        <h5>Candidate</h5>
        <Link
          to={`add-candidate/personal`}
          className="bg-secondary-700  text-white py-2 px-4 rounded-full"
        >
          Add Candidate
        </Link>
      </div>
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
              <tr className="grid grid-cols-9 text-left py-2 px-3 bg-secondary-50">
                <th className="col-span-2">Candidate Info</th>
                <th>Tehnology</th>
                <th>Job Title</th>
                <th>Work Status</th>
                <th>Sales Persons</th>
                <th>Interviews</th>
                <th>Marketing</th>
                <th>Status</th>
              </tr>
            </thead>
            {/* table content/data */}
            <tbody
              className="flex flex-col items-center justify-between overflow-y-scroll w-full h-screen"
              // style={{ height: "90vh" }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
                <tr className="grid grid-cols-9 justify-center items-center py-2 px-3 gap-1 border border-gray-200 text-left w-full">
                  <td className="col-span-2">
                    <h3 className="text-auxiliary-800 text-lg">
                      Bessie Cooper
                    </h3>
                    <p>bessiecooper@gmail.com</p>
                    <p>010-919-923-23</p>
                    <StarRating />
                  </td>
                  <td className="">Technology</td>
                  <td className="">Department 1</td>
                  <td className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
                    Employed
                  </td>
                  <td className="">Employed</td>
                  <td className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
                    12
                  </td>
                  <td className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
                    Employed
                  </td>
                  <td className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
                    Employed
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

export default Candidate;
