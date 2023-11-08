import React from "react";
import Pencil from "../../../images/pencil.png";
import { Link } from "react-router-dom";

const EmergencyContacts = () => {
  return (
    <div className="">
     

      <from className="grid grid-cols-2 gap-6 mt-5 text-sm font-normal">
        <div className="flex flex-col gap-y-6">
          <h3>Emergency Contacts 1</h3>
          <div className="grid grid-cols-2 gap-3">
            {[1, 2].map(() => (
              <div className="">
                <label className="">Total Interviews</label>
                <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
                  <input
                    placeholder="total interviews"
                    required
                    className="outline-none w-full"
                  />
                  <img src={Pencil} alt="pencil" />
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[1, 2].map(() => (
              <div className="">
                <label className="">Total Interviews</label>
                <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
                  <input
                    placeholder="total interviews"
                    required
                    className="outline-none w-full"
                  />
                  <img src={Pencil} alt="pencil" />
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[1, 2].map(() => (
              <div className="">
                <label className="">Total Interviews</label>
                <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
                  <input
                    placeholder="total interviews"
                    required
                    className="outline-none w-full"
                  />
                  <img src={Pencil} alt="pencil" />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col gap-y-6">
          <h3>Emergency Contacts 1</h3>
          <div className="grid grid-cols-2 gap-3">
            {[1, 2].map(() => (
              <div className="">
                <label className="">Total Interviews</label>
                <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
                  <input
                    placeholder="total interviews"
                    required
                    className="outline-none w-full"
                  />
                  <img src={Pencil} alt="pencil" />
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[1, 2].map(() => (
              <div className="">
                <label className="">Total Interviews</label>
                <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
                  <input
                    placeholder="total interviews"
                    required
                    className="outline-none w-full"
                  />
                  <img src={Pencil} alt="pencil" />
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[1, 2].map(() => (
              <div className="">
                <label className="">Total Interviews</label>
                <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
                  <input
                    placeholder="total interviews"
                    required
                    className="outline-none w-full"
                  />
                  <img src={Pencil} alt="pencil" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </from>
      <div className="w-full py-10 px-8 flex justify-end gap-5">
        <Link
          to={`/candidate/add-candidate/personal/profile`}
          className="text-secondary-700 bg-white border border-secondary-700 py-2 px-5 rounded-full text-lg"
        >
          Previous
        </Link>
        <Link
          to={`/candidate/add-candidate/notes`}
          className="text-white bg-secondary-700 py-2 px-5 rounded-full text-lg"
        >
          Save & Next
        </Link>
      </div>
    </div>
  );
};

export default EmergencyContacts;
