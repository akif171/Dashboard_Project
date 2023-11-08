import React from "react";
import Pencil from "../../../images/pencil.png";
import { Link } from "react-router-dom";

const Professional = () => {
  return (
    <div className="">
   
      <from className="flex flex-col gap-y-6 mt-5 text-sm font-normal">
        <div className="grid grid-cols-4 gap-3">
          {[1, 2].map(() => (
            <div className="">
              <label className="">Job Title</label>
              <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
                <input
                  placeholder="Job Title"
                  required
                  className="outline-none w-full"
                />
                <img src={Pencil} alt="pencil" />
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-3">
          <div className="">
            <label className="">Technology</label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                placeholder="Technology"
                required
                className="outline-none w-full"
              />
              <img src={Pencil} alt="pencil" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <div className="">
            <label className="">Work Permit Status</label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                placeholder="work peemit status"
                required
                className="outline-none w-full"
              />
              <img src={Pencil} alt="pencil" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {[1, 2].map(() => (
            <div className="">
              <label className="">DOB</label>
              <div className="">
                <input
                  type="date"
                  required
                  className="outline-none w-full appearance-none flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg "
                />
                {/* <img src={Pencil} alt="pencil" /> */}
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-3">
          <div className="">
            <label className="">SSN</label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                placeholder="SSN"
                required
                className="outline-none w-full"
              />
              <img src={Pencil} alt="pencil" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {[1, 2].map(() => (
            <div className="">
              <label className="">Employment Status</label>
              <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
                <input
                  placeholder="employment status"
                  required
                  className="outline-none w-full"
                />
                <img src={Pencil} alt="pencil" />
              </div>
            </div>
          ))}
        </div>
      </from>
      <div className="w-full py-10 px-8 flex justify-end gap-5">
        <Link
          to={`/candidate/add-candidate/personal/basic`}
          className="text-secondary-700 bg-white border border-secondary-700 py-2 px-5 rounded-full text-lg"
        >
          Previous
        </Link>
        <Link
          to={`/candidate/add-candidate/personal/profile`}
          className="text-white bg-secondary-700 py-2 px-5 rounded-full text-lg"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Professional;
