import React from "react";
import Pencil from "../../../images/pencil.png";
import { Link } from "react-router-dom";

const MarketingHistory = () => {
  return (
    <div>
      <from className="flex flex-col gap-y-7 mt-5 text-sm font-normal text-text-hint">
        <div className="grid grid-cols-4 gap-3">
          <div className="">
            <label className="">Candidate Name</label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                placeholder="Candidate Name"
                required
                className="outline-none w-full"
              />
            </div>
          </div>
          <div className="">
            <label className="">Candidate Phone Number</label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                placeholder="Candidate Phone Number"
                required
                className="outline-none w-full"
              />
            </div>
          </div>
          <div className="">
            <label className="">Marketing Email</label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                placeholder="youremail@gmail.com"
                required
                className="outline-none w-full"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3">
          <div className="">
            <label className="">Marketing Start Date</label>
            <div className="">
              <input
                type="date"
                required
                className="outline-none w-full appearance-none flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg "
              />
            </div>
          </div>
          <div className="">
            <label className="">Marketing End Date</label>
            <div className="">
              <input
                type="date"
                required
                className="outline-none w-full appearance-none flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg "
              />
            </div>
          </div>
          <div className="">
            <label className="">Marketing Status</label>
            <select className="flex justify-center items-center focus:ring-0 px-3 py-2 mt-1 border border-neutral-500 rounded-lg outline-none w-full">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <div className="">
            <label className="">Sales Person</label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                placeholder="Sales Person"
                required
                className="outline-none w-full"
              />
            </div>
          </div>
          <div className="">
            <label className="">SSN-Last 4 digits</label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                placeholder="SSN-Last 4 digits"
                required
                className="outline-none w-full"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <div className="">
            <label className="">LinkedIn</label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                placeholder="LinkedIn"
                required
                className="outline-none w-full"
              />
            </div>
          </div>
          <div className="">
            <label className="">SkypeID</label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                placeholder="SkypeID"
                required
                className="outline-none w-full"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <div className="">
            <label className="">On bench for</label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                placeholder="On bench for"
                required
                className="outline-none w-full"
              />
            </div>
          </div>
        </div>
      </from>
      <div className="w-full py-10 px-8 flex justify-end">
        <Link
          to={`/candidate/add-candidate/personal/professional`}
          className="text-white bg-secondary-700 py-2 px-5 rounded-full text-base"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default MarketingHistory;
