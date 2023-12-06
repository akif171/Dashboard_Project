import React, { useState } from "react";
import Pencil from "../../../../images/pencil.png";
import { Link } from "react-router-dom";
import { createCompanyPreference } from "../../../../api/sales";

const options = [
  { value: "", text: "--Choose an option--" },
  { value: "option1", text: "option1" },
  { value: "option2", text: "option2" },
  { value: "option3", text: "option3" },
  { value: "option4", text: "option4" },
  { value: "option5", text: "option5" },
];

const CompanyPreference = () => {
  const initialCompanyPref = {
    contactMethod: "",
    email: "",
    followEmail: "",
    bulkEmail: "",
    phone: "",
    fox: "",
  };

  const [companyPreference, setCompanyPreference] =
    useState(initialCompanyPref);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyPreference((pervData) => ({
      ...pervData,
      [name]: value,
    }));
  };

  console.log(companyPreference);

  const handleSubmit = async () => {
    const response = await createCompanyPreference(companyPreference);
    console.log(companyPreference);
    setCompanyPreference(initialCompanyPref);
  };

  return (
    <div className="w-full h-full">
      <from className="flex flex-col gap-y-6 mt-5 text-sm font-normal text-text-hint">
        <div className="grid grid-cols-4 gap-3">
          <div className="">
            <label className="">Contact Method</label>
            <select
              onChange={handleChange}
              value={companyPreference.contactMethod}
              name="contactMethod"
              className="flex justify-center items-center focus:ring-0 px-3 py-2  border border-neutral-500 rounded-lg outline-none w-full"
            >
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
            <label className="">Email</label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                onChange={handleChange}
                value={companyPreference.email}
                name="email"
                placeholder="youremail@gmail.com"
                required
                className="outline-none w-full"
              />
              <img src={Pencil} alt="pencil" />
            </div>
          </div>
          <div className="">
            <label className="">Follow Email</label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                onChange={handleChange}
                value={companyPreference.followEmail}
                name="followEmail"
                placeholder="youremail@gmail.com"
                required
                className="outline-none w-full"
              />
              <img src={Pencil} alt="pencil" />
            </div>
          </div>
          <div className="">
            <label className="">Bulk Email</label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                onChange={handleChange}
                value={companyPreference.bulkEmail}
                name="bulkEmail"
                placeholder="youremail@gmail.com"
                required
                className="outline-none w-full"
              />
              <img src={Pencil} alt="pencil" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <div className="">
            <label className="">Phone</label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                onChange={handleChange}
                value={companyPreference.phone}
                name="phone"
                placeholder="Phone"
                required
                className="outline-none w-full"
              />
              <img src={Pencil} alt="pencil" />
            </div>
          </div>
          <div className="">
            <label className="">Fox</label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                onChange={handleChange}
                value={companyPreference.fox}
                name="fox"
                placeholder="Fox"
                required
                className="outline-none w-full"
              />
              <img src={Pencil} alt="pencil" />
            </div>
          </div>
        </div>
      </from>
      <div className="w-full h-52 py-10 px-8 flex justify-end items-end">
        <button
          onClick={handleSubmit}
          className="text-white bg-secondary-700 py-2 px-5 rounded-full text-base"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CompanyPreference;
