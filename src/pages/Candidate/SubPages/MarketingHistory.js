import React from "react";
import Pencil from "../../../images/pencil.png";
import { Link } from "react-router-dom";

const MarketingHistory = () => {
  return (
    <div>
      <from className="flex flex-col gap-y-6 mt-5 text-sm font-normal">
        <div className="grid grid-cols-4 gap-3">
          {[1, 2, 3].map(() => (
            <div className="">
              <label className="">Frist Name</label>
              <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
                <input
                  placeholder="First Name"
                  required
                  className="outline-none w-full"
                />
                <img src={Pencil} alt="pencil" />
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-3">
          {[1, 2, 3].map(() => (
            <div className="">
              <label className="">Phone Number</label>
              <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
                <input
                  placeholder="99999999"
                  required
                  className="outline-none w-full"
                />
                <img src={Pencil} alt="pencil" />
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-3">
          {[1, 2].map(() => (
            <div className="">
              <label className="">Address Line 1</label>
              <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
                <input
                  placeholder="First Name"
                  required
                  className="outline-none w-full"
                />
                <img src={Pencil} alt="pencil" />
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-3">
          {[1, 2].map(() => (
            <div className="">
              <label className="">Address Line 1</label>
              <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
                <input
                  placeholder="First Name"
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
            <label className="">Address Line 1</label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                placeholder="First Name"
                required
                className="outline-none w-full"
              />
              <img src={Pencil} alt="pencil" />
            </div>
          </div>
        </div>
      </from>
      <div className="w-full py-10 px-8 flex justify-end">
        <Link
          to={`/candidate/add-candidate/personal/professional`}
          className="text-white bg-secondary-700 py-2 px-5 rounded-full text-lg"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default MarketingHistory;
