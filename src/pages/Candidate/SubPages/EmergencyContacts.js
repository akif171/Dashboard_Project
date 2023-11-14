import React from "react";
import Pencil from "../../../images/pencil.png";
import { Link } from "react-router-dom";

const EmergencyContacts = () => {
  return (
    <div className="">
      <from className="grid grid-cols-2 gap-6 mt-5 text-sm font-normal text-text-hint">
        <div className="flex flex-col gap-y-6">
          <h3 className="text-text-default">Emergency Contacts 1</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="">
              <label className="">Contacts Name<span className="text-red-500">*</span></label>
              <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
                <input
                  placeholder="Contacts Name"
                  required
                  className="outline-none w-full"
                />
                <img src={Pencil} alt="pencil" />
              </div>
            </div>
            <div className="">
              <label className="">Contacts Phone Number<span className="text-red-500">*</span></label>
              <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
                <input
                  placeholder="Contacts Phone Number"
                  required
                  className="outline-none w-full"
                />
                <img src={Pencil} alt="pencil" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2">
              <label className="">
                Email<span className="text-red-500">*</span>
              </label>
              <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
                <input
                  placeholder="youremail@gmail.com"
                  required
                  className="outline-none w-full"
                />
                <img src={Pencil} alt="pencil" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="">
              <label className="">Contacts Relations<span className="text-red-500">*</span></label>
              <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
                <input
                  placeholder="Contacts Relations"
                  required
                  className="outline-none w-full"
                />
                <img src={Pencil} alt="pencil" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-6">
          <h3 className="text-text-default">Emergency Contacts 1</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="">
              <label className="">Contacts Name<span className="text-red-500">*</span></label>
              <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
                <input
                  placeholder="Contacts Name"
                  required
                  className="outline-none w-full"
                />
                <img src={Pencil} alt="pencil" />
              </div>
            </div>
            <div className="">
              <label className="">Contacts Phone Number<span className="text-red-500">*</span></label>
              <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
                <input
                  placeholder="Contacts Phone Number"
                  required
                  className="outline-none w-full"
                />
                <img src={Pencil} alt="pencil" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2">
              <label className="">
                Email<span className="text-red-500">*</span>
              </label>
              <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
                <input
                  placeholder="youremail@gmail.com"
                  required
                  className="outline-none w-full"
                />
                <img src={Pencil} alt="pencil" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="">
              <label className="">Contacts Relations<span className="text-red-500">*</span></label>
              <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
                <input
                  placeholder="Contacts Relations"
                  required
                  className="outline-none w-full"
                />
                <img src={Pencil} alt="pencil" />
              </div>
            </div>
          </div>
        </div>
      </from>
      <div className="w-full py-10 px-8 flex justify-end gap-5">
        <Link
          to={`/candidate/add-candidate/personal/profile`}
          className="text-secondary-700 bg-white border border-secondary-700 py-2 px-5 rounded-full text-base"
        >
          Previous
        </Link>
        <Link
          to={`/candidate/add-candidate/notes`}
          className="text-white bg-secondary-700 py-2 px-5 rounded-full text-base"
        >
          Save & Next
        </Link>
      </div>
    </div>
  );
};

export default EmergencyContacts;
