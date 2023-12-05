import React from "react";
import Pencil from "../../../../images/pencil.png";
import { Link } from "react-router-dom";

const options = [
  { value: "", text: "--Choose an option--" },
  { value: "option1", text: "option1" },
  { value: "option2", text: "option2" },
  { value: "option3", text: "option3" },
  { value: "option4", text: "option4" },
  { value: "option5", text: "option5" },
];

const BillingAddress = () => {
  return (
    <div>
      <from className="flex flex-col gap-y-6 mt-5 text-sm font-normal text-text-hint">
        <div className="grid grid-cols-4 gap-3">
          <div className="">
            <label className="">
              Billing Contact Name<span className="text-danger-500">*</span>
            </label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                placeholder="Billing Contact Name"
                required
                className="outline-none w-full"
              />
              <img src={Pencil} alt="pencil" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <div className="">
            <label className="">
              Address line 1<span className="text-danger-500">*</span>
            </label>
            <div className="flex justify-center items-center px-3 py-2  border border-neutral-500 rounded-lg">
              <input
                placeholder="Address line 1"
                required
                className="outline-none w-full"
              />
              <img src={Pencil} alt="pencil" />
            </div>
          </div>
          <div className="">
            <label className="">
              Address line 2<span className="text-danger-500">*</span>
            </label>
            <div className="flex justify-center items-center px-3 py-2   border border-neutral-500 rounded-lg">
              <input
                placeholder="Address line 2"
                required
                className="outline-none w-full"
              />
              <img src={Pencil} alt="pencil" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <div className="">
            <label className="">
              City<span className="text-danger-500">*</span>
            </label>
            <select className="flex justify-center items-center focus:ring-0 px-3 py-2  border border-neutral-500 rounded-lg outline-none w-full">
              {options.map((option) => (
                <option className="" key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
          </div>
          <div className="">
            <label className="">
              State/Province<span className="text-danger-500">*</span>
            </label>
            <select className="flex justify-center items-center focus:ring-0 px-3 py-2  border border-neutral-500 rounded-lg outline-none w-full">
              {options.map((option) => (
                <option className="" key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <div className="">
            <label className="">
              Postal Code<span className="text-danger-500">*</span>
            </label>
            <div className="flex justify-center items-center px-3 py-2  border border-neutral-500 rounded-lg">
              <input
                placeholder="Postal Code"
                required
                className="outline-none w-full"
              />
              <img src={Pencil} alt="pencil" />
            </div>
          </div>
          <div className="">
            <label className="">
              Country/Region<span className="text-danger-500">*</span>
            </label>
            <select className="flex justify-center items-center focus:ring-0 px-3 py-2  border border-neutral-500 rounded-lg outline-none w-full">
              {options.map((option) => (
                <option className="" key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
          </div>
        </div>
      </from>
      <div className="w-full py-10 px-8 flex justify-end items-baseline">
        <button className="text-white bg-secondary-700 py-2 px-5 rounded-full text-base">
          Save
        </button>
      </div>
    </div>
  );
};

export default BillingAddress;
