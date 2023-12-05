import React, { useState } from "react";
import Pencil from "../../../../images/pencil.png";
import { Link } from "react-router-dom";
import { createAccountInfo } from "../../../../api/sales";

const options = [
  { value: "", text: "--Choose an option--" },
  { value: "option1", text: "option1" },
  { value: "option2", text: "option2" },
  { value: "option3", text: "option3" },
  { value: "option4", text: "option4" },
  { value: "option5", text: "option5" },
];

const AccountInfo = () => {
  const initialAccountInfo = {
    vendorName: "",
    phoneNumber: "",
    fox: "",
    type: "",
    accountType: "",
    annualReturn: "",
    website: "",
    paymentAccount: "",
  };

  const [accountInfo, setAccountInfo] = useState(initialAccountInfo);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setAccountInfo((pervData) => ({
      ...pervData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const response = await createAccountInfo(accountInfo);
    console.log(accountInfo);
    setAccountInfo(initialAccountInfo);
  };

  console.log(accountInfo);

  return (
    <div className="">
      <from className="flex flex-col gap-y-6 mt-5 text-sm font-normal text-text-hint">
        <div className="grid grid-cols-4 gap-3">
          <div className="">
            <label className="">Vendor Name</label>
            <select
              onChange={handleChange}
              value={accountInfo.vendorName}
              name="vendorName"
              className="flex justify-center items-center focus:ring-0 px-3 py-2  border border-neutral-500 rounded-lg outline-none w-full"
            >
              {options.map((option) => (
                <option className="" key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
          </div>
          <div className="">
            <label className="">Phone Number</label>
            <select
              onChange={handleChange}
              value={accountInfo.phoneNumber}
              name="phoneNumber"
              className="flex justify-center items-center focus:ring-0 px-3 py-2  border border-neutral-500 rounded-lg outline-none w-full"
            >
              {options.map((option) => (
                <option className="" key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
          </div>
          <div className="">
            <label className="">Fox</label>
            <select
              onChange={handleChange}
              value={accountInfo.fox}
              name="fox"
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
            <label className="">Type</label>
            <div className="flex justify-center items-center px-3 py-2  border border-neutral-500 rounded-lg">
              <input
                onChange={handleChange}
                value={accountInfo.type}
                name="type"
                placeholder="Type"
                required
                className="outline-none w-full"
              />
              <img src={Pencil} alt="pencil" />
            </div>
          </div>
          <div className="">
            <label className="">Account Type</label>
            <select
              onChange={handleChange}
              value={accountInfo.accountType}
              name="accountType"
              className="flex justify-center items-center focus:ring-0 px-3 py-2  border border-neutral-500 rounded-lg outline-none w-full"
            >
              {options.map((option) => (
                <option className="" key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
          </div>
          <div className="">
            <label className="">Annual Return</label>
            <select
              onChange={handleChange}
              value={accountInfo.annualReturn}
              name="annualReturn"
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
            <label className="">Website</label>
            <div className="flex justify-center items-center px-3 py-2  border border-neutral-500 rounded-lg">
              <input
                onChange={handleChange}
                value={accountInfo.website}
                name="website"
                placeholder="Website"
                required
                className="outline-none w-full"
              />
              <img src={Pencil} alt="pencil" />
            </div>
          </div>
          <div className="">
            <label className="">Payment Account</label>
            <select
              onChange={handleChange}
              value={accountInfo.paymentAccount}
              name="paymentAccount"
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
      </from>
      <div className="w-full py-10 px-8 flex justify-end items-baseline">
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

export default AccountInfo;
