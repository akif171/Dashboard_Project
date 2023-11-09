import React, { useState } from "react";
import { RxReload } from "react-icons/rx";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { RiSoundModuleLine } from "react-icons/ri";
import StarRating from "../../../components/StarRating";
import { Link } from "react-router-dom";

const MarketingJobs = () => {
  const [isActive, setIsActive] = useState(false);

  const handleCheck = (e) => {
    if (e) {
      setIsActive(true);
    }
    setIsActive(false);
    //   setCheckedStyle("bg-auxiliary-100");
    // }

    // setCheckedStyle("bg-white");
  };

  // console.log(checkedStyle);
  return (
    <div>
      {" "}
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
          <div className="flex items-center gap-3">
            <div className="flex items-center text-teal-500 gap-2 py-2 px-4 border border-teal-500 rounded-full">
              <RiSoundModuleLine />
              <p>Filter</p>
            </div>
            <div className="flex items-center text-teal-500 gap-2 py-2 px-4 border border-teal-500 rounded-full">
              <RiSoundModuleLine />
              <p>Filter</p>
            </div>
          </div>
        </div>
        <div className="w-full overflow-x">
          <table class="table-auto overflow-scroll w-full">
            {/* Table headings */}
            <thead className="w-full">
              <tr className="grid grid-cols-11 gap-1 text-left py-3 pl-3 pr-6 bg-secondary-50 text-xs">
                <th className="col-span-2">Job</th>
                <th className="col-span-2">Vendor Info</th>
                <th>Technology</th>
                <th>Location</th>
                <th>Job Type</th>
                <th>Bill Rate</th>
                <th>Duration</th>
                <th>Sales Person</th>
                <th>Status</th>
              </tr>
            </thead>
            {/* table content/data */}
            <tbody
              className="flex flex-col items-center justify-between overflow-y-scroll w-full h-screen"
              // style={{ height: "90vh" }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
                <tr
                  className={`grid grid-cols-11 justify-center items-center py-2 px-3 gap-1 border border-gray-200 text-left w-full text-sm  ${
                    isActive ? "bg-auxiliary-50" : "bg-white"
                  }`}
                >
                  <td className="flex gap-2 col-span-2">
                    <div>
                      <input
                        type="checkbox"
                        className="rounded form-checkbox focus:outline-none focus-visible:outline-none  "
                        onClick={(e) => handleCheck(e.target.checked)}
                      />
                    </div>
                    <div>
                      <h3 className="text-auxiliary-800 text-base">
                        Bessie Cooper
                      </h3>
                      <p className="text-text-hint break-words font-normal">
                        Back-End <br></br> Developer
                      </p>
                    </div>
                  </td>
                  <td className="col-span-2">
                    <h5 className="text-sm">Miles Esther</h5>
                    <p className="text-xs text-text-hint">
                      bessiecooper@gmail.com
                    </p>
                    <p className="text-xs text-text-hint">10/10/10</p>
                  </td>
                  <td className="">Technology</td>
                  <td className="">
                    <h5 className="text-sm">City</h5>
                    <p className="text-xs text-text-hint">State</p>
                  </td>
                  <td className="py-2 border border-success-700 text-success-700 text-xs rounded-full flex justify-center items-center">
                    Remote
                  </td>
                  <td className="">120</td>
                  <td className=" text-xs">
                    <p className="flex gap-3">
                      <span>12</span>
                      <span className="text-text-hint">Months</span>
                    </p>
                  </td>
                  <td className="text-sm">Person</td>
                  <td className="py-2 border border-success-700 text-success-700 text-xs rounded-full flex justify-center items-center">
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

export default MarketingJobs;
