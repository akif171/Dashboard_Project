import React, { useEffect, useState } from "react";
import Pencil from "../../../images/pencil.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setProfessionalInfo } from "../../../features/candidate/personalSlice";

const options = [
  { value: "", text: "--Choose an option--" },
  { value: "option1", text: "option1" },
  { value: "option2", text: "option2" },
  { value: "option3", text: "option3" },
  { value: "option4", text: "option4" },
  { value: "option5", text: "option5" },
];

const Professional = () => {
  const initialProfessionalData = {
    jobTitle: "",
    salesPeson: "",
    technology: "",
    workPermitStatus: "",
    workPermitIssueDate: "",
    workPermitExpireDate: "",
    SSN: "",
    employmentStatus: "",
    referredBy: "",
  };

  const dispatch = useDispatch();
  const {
    jobTitle,
    salesPerson,
    technology,
    workPermitStatus,
    workPermitIssueDate,
    workPermitExpireDate,
    SSN,
    employmentStatus,
    referredBy,
  } = useSelector((state) => state.personal.professional);

  const [professionalData, setProfessionalData] = useState({
    jobTitle,
    salesPerson,
    technology,
    workPermitStatus,
    workPermitIssueDate,
    workPermitExpireDate,
    SSN,
    employmentStatus,
    referredBy,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfessionalData((pervData) => ({
      ...pervData,
      [name]: value,
    }));
  };
  console.log(professionalData);

  useEffect(() => {
    dispatch(setProfessionalInfo(professionalData));
  }, [professionalData]);

  return (
    <div className="">
      <from className="flex flex-col gap-y-6 mt-5 text-sm font-normal text-text-hint">
        <div className="grid grid-cols-4 gap-3">
          <div className="">
            <label className="">
              Job Title<span className="text-red-500">*</span>
            </label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                onChange={handleChange}
                value={jobTitle}
                name="jobTitle"
                placeholder="Job Title"
                required
                className="outline-none w-full text-black"
              />
              <img src={Pencil} alt="pencil" />
            </div>
          </div>
          <div className="">
            <label className="">
              Sales Person<span className="text-red-500">*</span>
            </label>
            <select
              onChange={handleChange}
              name="salesPerson"
              value={salesPerson}
              className="flex justify-center items-center text-black focus:ring-0 px-3 py-2 mt-1 border border-neutral-500 rounded-lg outline-none w-full"
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
            <label className="">
              Technology<span className="text-red-500">*</span>
            </label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                onChange={handleChange}
                value={technology}
                name="technology"
                placeholder="Technology"
                required
                className="outline-none w-full text-black"
              />
              <img src={Pencil} alt="pencil" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <div className="">
            <label className="">
              Work Permit Status<span className="text-red-500">*</span>
            </label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                onChange={handleChange}
                value={workPermitStatus}
                name="workPermitStatus"
                placeholder="work peemit status"
                required
                className="outline-none w-full text-black"
              />
              <img src={Pencil} alt="pencil" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <div className="">
            <label className="">
              Work Permit Issur Date<span className="text-red-500">*</span>
            </label>
            <input
              onChange={handleChange}
              value={workPermitIssueDate}
              name="workPermitIssueDate"
              type="date"
              required
              className="outline-none w-full text-black appearance-none flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg "
            />
          </div>
          <div className="">
            <label className="">
              Work Permit Expire Date<span className="text-red-500">*</span>
            </label>
            <input
              onChange={handleChange}
              value={workPermitExpireDate}
              name="workPermitExpireDate"
              type="date"
              required
              className="outline-none w-full text-black appearance-none flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg "
            />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <div className="">
            <label className="">
              SSN<span className="text-red-500">*</span>
            </label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                onChange={handleChange}
                value={SSN}
                name="SSN"
                placeholder="SSN"
                required
                className="outline-none w-full text-black"
              />
              <img src={Pencil} alt="pencil" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <div className="">
            <label className="">
              Employment Status<span className="text-red-500">*</span>
            </label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                onChange={handleChange}
                value={employmentStatus}
                name="employmentStatus"
                placeholder="Employment status"
                required
                className="outline-none w-full text-black"
              />
              <img src={Pencil} alt="pencil" />
            </div>
          </div>
          <div className="">
            <label className="">
              Referred By<span className="text-red-500">*</span>
            </label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                onChange={handleChange}
                value={referredBy}
                name="referredBy"
                placeholder="Referred By"
                required
                className="outline-none w-full text-black"
              />
              <img src={Pencil} alt="pencil" />
            </div>
          </div>
        </div>
      </from>
      <div className="w-full py-10 px-8 flex justify-end gap-5">
        <Link
          to={`/candidate/add-candidate/personal/basic`}
          className="text-secondary-700 bg-white border border-secondary-700 py-2 px-5 rounded-full text-base"
        >
          Previous
        </Link>
        <Link
          to={`/candidate/add-candidate/personal/profile`}
          className="text-white bg-secondary-700 py-2 px-5 rounded-full text-base"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Professional;
