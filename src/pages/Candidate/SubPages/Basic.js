import React from "react";
import Pencil from "../../../images/pencil.png";
import { Link } from "react-router-dom";

const Basic = () => {
  return (
    <div className="">
      <from className="flex flex-col gap-y-6 mt-5 text-sm font-normal">
        <div className="grid grid-cols-4 gap-3">
          {[1, 2, 3].map(() => (
            <div className="">
              <label className="">Frist Name</label>
              <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
                <input
                  placeholder="First Name"
                  required
                  className="outline-none w-full"
                />
                <img src={Pencil} alt="pencil" />
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-3 ">
          <div className="">
            <label>Gender</label>
            <ul className="grid grid-cols-3 mt-1">
              <li className="relative">
                <input
                  className="sr-only peer"
                  type="radio"
                  value="male"
                  name="gender"
                  id="male"
                />
                <label
                  className="flex justify-center items-center py-2 px-3 bg-white border border-secondary-800 rounded-tl-full rounded-bl-full cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:bg-secondary-500 peer-checked:text-white peer-checked:border-secondary-800"
                  for="male"
                >
                  Male
                </label>
              </li>
              <li className="relative">
                <input
                  className="sr-only peer"
                  type="radio"
                  value="female"
                  name="gender"
                  id="female"
                />
                <label
                  className="flex justify-center items-center py-2 px-3 bg-white border border-t-secondary-800 border-b-secondary-800 cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:bg-secondary-500 peer-checked:text-white peer-checked:border-secondary-800"
                  for="female"
                >
                  Female
                </label>
              </li>

              <li className="relative">
                <input
                  className="sr-only peer"
                  type="radio"
                  value="other"
                  name="gender"
                  id="other"
                />
                <label
                  className="flex justify-center items-center py-2 px-3 bg-white border border-secondary-800 rounded-tr-full rounded-br-full cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:bg-secondary-500 peer-checked:text-white peer-checked:border-secondary-800"
                  for="other"
                >
                  Other
                </label>
              </li>
            </ul>
          </div>
          <div className="">
            <label>Marital Status</label>
            <ul className="grid grid-cols-3 mt-1">
              <li className="relative">
                <input
                  className="sr-only peer"
                  type="radio"
                  value="single"
                  name="marital_status"
                  id="single"
                />
                <label
                  className="flex justify-center items-center py-2 px-3 bg-white border border-secondary-800 rounded-tl-full rounded-bl-full cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:bg-secondary-500 peer-checked:text-white peer-checked:border-secondary-800"
                  for="single"
                >
                  Single
                </label>
              </li>

              <li className="relative">
                <input
                  className="sr-only peer"
                  type="radio"
                  value="married"
                  name="marital_status"
                  id="married"
                />
                <label
                  className="flex justify-center items-center py-2 px-3 bg-white border border-secondary-800 rounded-tr-full rounded-br-full cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:bg-secondary-500 peer-checked:text-white peer-checked:border-secondary-800"
                  for="married"
                >
                  Married
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <div className="">
            <label className="">DOB</label>
            <div className="">
              <input
                type="date"
                required
                className="outline-none w-full appearance-none flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg "
              />
              {/* <img src={Pencil} alt="pencil" /> */}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <div className="col-span-2">
            <label className="">Email</label>
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
        <div className="grid grid-cols-4 gap-3">
          {[1, 2].map(() => (
            <div className="">
              <label className="">Phone Number</label>
              <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
                <input
                  placeholder="99999999"
                  required
                  className="outline-none w-full"
                />
                <img src={Pencil} alt="pencil" />
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-3">
          {[1, 2].map(() => (
            <div className="">
              <label className="">Address Line 1</label>
              <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
                <input
                  placeholder="First Name"
                  required
                  className="outline-none w-full"
                />
                <img src={Pencil} alt="pencil" />
              </div>
            </div>
          ))}
        </div>
      </from>
      <div className="w-full py-10 px-8 flex justify-end">
        <Link
          to={`/candidate/add-candidate/personal/professional`}
          className="text-white bg-secondary-700 py-2 px-5 rounded-full text-lg"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Basic;
