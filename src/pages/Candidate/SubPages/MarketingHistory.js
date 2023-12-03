import React, { useState } from "react";
import Pencil from "../../../images/pencil.png";
import { Link } from "react-router-dom";
import { createMarketingHistory } from "../../../api/candidiate";
const options = [
  { value: "", text: "--Choose an option--" },
  { value: "option1", text: "option1" },
  { value: "option2", text: "option2" },
  { value: "option3", text: "option3" },
  { value: "option4", text: "option4" },
  { value: "option5", text: "option5" },
];

const MarketingHistory = () => {
  const initialMarketingHistory = {
    candidateName: "",
    candidatePhoneNum: "",
    candidateName: "",
    marketingEmail: "",
    marketingStartDate: "",
    marketingEndDate: "",
    marketingStatus: "",
    salesPerson: "",
    ssnLastDigits: "",
    linkedInID: "",
    skypeID: "",
    onBenchFor: "",
  };

  const [marketingHistory, setMarketingHistory] = useState(
    initialMarketingHistory
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMarketingHistory((pervData) => ({
      ...pervData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const response = await createMarketingHistory(marketingHistory);
    console.log(response);
    setMarketingHistory(initialMarketingHistory);
  };

  console.log(marketingHistory);

  return (
    <div>
      <from className="flex flex-col gap-y-7 mt-5 text-sm font-normal text-text-hint">
        <div className="grid grid-cols-4 gap-3">
          <div className="">
            <label className="">Candidate Name</label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                onChange={handleChange}
                value={marketingHistory.candidateName}
                name="candidateName"
                placeholder="Candidate Name"
                required
                className="outline-none w-full text-black"
              />
            </div>
          </div>
          <div className="">
            <label className="">Candidate Phone Number</label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                onChange={handleChange}
                value={marketingHistory.candidatePhoneNum}
                name="candidatePhoneNum"
                placeholder="Candidate Phone Number"
                required
                className="outline-none w-full text-black"
              />
            </div>
          </div>
          <div className="">
            <label className="">Marketing Email</label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                onChange={handleChange}
                value={marketingHistory.marketingEmail}
                name="marketingEmail"
                placeholder="youremail@gmail.com"
                required
                className="outline-none w-full text-black"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3">
          <div className="">
            <label className="">Marketing Start Date</label>
            <div className="">
              <input
                onChange={handleChange}
                value={marketingHistory.marketingStartDate}
                name="marketingStartDate"
                type="date"
                required
                className="outline-none w-full text-black appearance-none flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg "
              />
            </div>
          </div>
          <div className="">
            <label className="">Marketing End Date</label>
            <div className="">
              <input
                onChange={handleChange}
                value={marketingHistory.marketingEndDate}
                name="marketingEndDate"
                type="date"
                required
                className="outline-none w-full text-black appearance-none flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg "
              />
            </div>
          </div>
          <div className="">
            <label className="">Marketing Status</label>
            <select
              onChange={handleChange}
              value={marketingHistory.marketingStatus}
              name="marketingStatus"
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
        <div className="grid grid-cols-4 gap-3">
          <div className="">
            <label className="">Sales Person</label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                onChange={handleChange}
                value={marketingHistory.salesPerson}
                name="salesPerson"
                placeholder="Sales Person"
                required
                className="outline-none w-full text-black"
              />
            </div>
          </div>
          <div className="">
            <label className="">SSN-Last 4 digits</label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                onChange={handleChange}
                value={marketingHistory.ssnLastDigits}
                name="ssnLastDigits"
                placeholder="SSN-Last 4 digits"
                required
                className="outline-none w-full text-black"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <div className="">
            <label className="">LinkedIn</label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                onChange={handleChange}
                value={marketingHistory.linkedInID}
                name="linkedInID"
                placeholder="LinkedIn"
                required
                className="outline-none w-full text-black"
              />
            </div>
          </div>
          <div className="">
            <label className="">SkypeID</label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                onChange={handleChange}
                value={marketingHistory.skypeID}
                name="skypeID"
                placeholder="SkypeID"
                required
                className="outline-none w-full text-black"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <div className="">
            <label className="">On bench for</label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                onChange={handleChange}
                value={marketingHistory.onBenchFor}
                name="onBenchFor"
                placeholder="On bench for"
                required
                className="outline-none w-full text-black"
              />
            </div>
          </div>
        </div>
      </from>
      <div className="w-full py-10 px-8 flex justify-end">
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

export default MarketingHistory;
