import React from "react";
import Pencil from "../../../../images/pencil.png";
import { Link } from "react-router-dom";

const BillingTerms = () => {
  return (
    <div className="w-full h-full">
      <from className="flex flex-col gap-y-6 mt-5 text-sm font-normal text-text-hint">
        <div className="grid grid-cols-4 gap-3">
          <div className="">
            <label className="">Currency</label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                placeholder="Currency"
                required
                className="outline-none w-full"
              />
              <img src={Pencil} alt="pencil" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3">
          <div className="">
            <label className="">Credit Limit</label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                placeholder="Credit Limit"
                required
                className="outline-none w-full"
              />
              <img src={Pencil} alt="pencil" />
            </div>
          </div>
          <div className="">
            <label className="">Credit Hold</label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                placeholder="Credit Hold"
                required
                className="outline-none w-full"
              />
              <img src={Pencil} alt="pencil" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <div className="flex flex-col col-span-2 ">
            <label htmlFor="document_type" className="text-text-hint mb-1">
              FeedBack
            </label>
            <textarea
              type="text"
              placeholder="Link"
              id="document_type"
              className="focus:outline-none border  rounded-lg "
              rows={4}
            />
          </div>
        </div>
      </from>
      <div className="w-full py-10 px-8 flex justify-end items-end">
      <button
          
          className="text-white bg-secondary-700 py-2 px-5 rounded-full text-base"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default BillingTerms;
