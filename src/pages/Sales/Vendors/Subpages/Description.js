import React, { useState } from "react";
import { createDescription } from "../../../../api/sales";

const Description = () => {
  const initialDescription = {
    description: "",
  };

  const [description, setDescription] = useState(initialDescription);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDescription((pervData) => ({
      ...pervData,
      [name]: value,
    }));
  };

  console.log(description);

  const handleSubmit = async () => {
    const response = await createDescription(description);
    console.log(description);
    setDescription(description);
  };

  return (
    <div className="w-full h-full">
      <from className="flex flex-col gap-y-6 mt-5 text-sm font-normal text-text-hint">
        <div className="grid grid-cols-4 gap-3">
          <div className="flex flex-col col-span-3 ">
            <label htmlFor="document_type" className="text-text-hint mb-1">
              Description
            </label>
            <textarea
              onChange={handleChange}
              value={description.description}
              name="description"
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

export default Description;
