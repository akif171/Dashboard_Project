import React from "react";

const Description = () => {
  return (
    <div className="w-full h-full">
      <from className="flex flex-col gap-y-6 mt-5 text-sm font-normal text-text-hint">
        <div className="grid grid-cols-4 gap-3">
          <div className="flex flex-col col-span-3 ">
            <label htmlFor="document_type" className="text-text-hint mb-1">
              Description
            </label>
            <textarea
              type="text"
              placeholder="Description"
              id="document_type"
              className="focus:outline-none border  rounded-lg "
              rows={6}
            />
          </div>
        </div>
      </from>
      <div className="w-full h-56 py-10 px-8 flex justify-end items-end">
        <button className="text-white bg-secondary-700 py-2 px-5 rounded-full text-base">
          Save
        </button>
      </div>
    </div>
  );
};

export default Description;
