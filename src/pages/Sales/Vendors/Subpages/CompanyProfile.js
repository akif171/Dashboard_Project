import React, { useState } from "react";
import Pencil from "../../../../images/pencil.png";
import { Link } from "react-router-dom";
import { createCompanyProfile } from "../../../../api/sales";

const options = [
  { value: "", text: "--Choose an option--" },
  { value: "option1", text: "option1" },
  { value: "option2", text: "option2" },
  { value: "option3", text: "option3" },
  { value: "option4", text: "option4" },
  { value: "option5", text: "option5" },
];

const CompanyProfile = () => {
  const initialCompanyProfile = {
    industry: "",
    yearStarted: "",
    employees: "",
    DUNS_num: "",
    NACS_code: "",
    ownership: "",
  };

  const [companyProfile, setCompanyProfile] = useState(initialCompanyProfile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyProfile((pervData) => ({
      ...pervData,
      [name]: value,
    }));
  };

  console.log(companyProfile);

  const handleSubmit = async () => {
    const response = await createCompanyProfile(companyProfile);
    console.log(companyProfile);
    setCompanyProfile(initialCompanyProfile);
  };

  return (
    <div className="w-full h-full">
      <from className="flex flex-col gap-y-6 mt-5 text-sm font-normal text-text-hint">
        <div className="grid grid-cols-4 gap-3">
          <div className="">
            <label className="">Industry</label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                onChange={handleChange}
                value={companyProfile.industry}
                name="industry"
                placeholder="Industry"
                required
                className="outline-none w-full text-black"
              />
              <img src={Pencil} alt="pencil" />
            </div>
          </div>
          <div className="">
            <label className="">Year Started</label>
            <input
              onChange={handleChange}
              value={companyProfile.yearStarted}
              name="yearStarted"
              type="date"
              required
              className="outline-none w-full text-black appearance-none flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg "
            />
          </div>
          <div className="">
            <label className="">Number Of Employees</label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                onChange={handleChange}
                value={companyProfile.employees}
                name="employees"
                placeholder="Numner of Employees"
                required
                className="outline-none w-full text-black"
              />
              <img src={Pencil} alt="pencil" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <div className="">
            <label className="">DUNS Number</label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                onChange={handleChange}
                value={companyProfile.DUNS_num}
                name="DUNS_num"
                placeholder="DUNS Number"
                required
                className="outline-none w-full text-black"
              />
              <img src={Pencil} alt="pencil" />
            </div>
          </div>
          <div className="">
            <label className="">NACS Code</label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                onChange={handleChange}
                value={companyProfile.NACS_code}
                name="NACS_code"
                placeholder="NACS Code"
                required
                className="outline-none w-full text-black"
              />
              <img src={Pencil} alt="pencil" />
            </div>
          </div>
          <div className="">
            <label className="">Ownership</label>
            <select
              onChange={handleChange}
              value={companyProfile.ownership}
              name="ownership"
              className="flex justify-center items-center focus:ring-0 px-3 py-2 mt-1 border border-neutral-500 rounded-lg outline-none w-full text-black"
            >
              {options.map((option) => (
                <option className="" key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
          </div>
        </div>
      </from>
      <div className="w-full h-72 py-10 px-8 flex justify-end items-end">
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

export default CompanyProfile;
