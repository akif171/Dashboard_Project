import React from "react";
import Pencil from "../../../images/pencil.png";
import { Link } from "react-router-dom";
import StarRating from "../../../components/StarRating";

const Profile = () => {
  return (
    <div className="">
      <div className="mt-5">
        <h3>Rating</h3>
        <StarRating fontSize={24} initialRating={3} />
      </div>
      <from className="flex flex-col gap-y-6 mt-5 text-sm font-normal text-text-hint">
        <div className="grid grid-cols-4 gap-5">
          <div className="">
            <label className="">
              Total Interviews<span className="text-red-500">*</span>
            </label>
            <select className="flex justify-center items-center focus:ring-0 px-3 py-2 mt-1 border border-neutral-500 rounded-lg outline-none w-full">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="">
            <label className="">
              Active Interviews<span className="text-red-500">*</span>
            </label>
            <select className="flex justify-center items-center focus:ring-0 px-3 py-2 mt-1 border border-neutral-500 rounded-lg outline-none w-full">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-5">
          <div className="">
            <label className="">
              Passed Interviews<span className="text-red-500">*</span>
            </label>
            <select className="flex justify-center items-center focus:ring-0 px-3 py-2 mt-1 border border-neutral-500 rounded-lg outline-none w-full">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="">
            <label className="">
              Failed Interviews<span className="text-red-500">*</span>
            </label>
            <select className="flex justify-center items-center focus:ring-0 px-3 py-2 mt-1 border border-neutral-500 rounded-lg outline-none w-full">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-5">
          <div className="">
            <label className="">
              Interviews on Hold<span className="text-red-500">*</span>
            </label>
            <select className="flex justify-center items-center focus:ring-0 px-3 py-2 mt-1 border border-neutral-500 rounded-lg outline-none w-full">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <div className="">
            <label className="">
              Last Interviewed on<span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              required
              className="outline-none w-full appearance-none flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg "
            />
          </div>
        </div>
      </from>
      <div className="w-full py-10 px-8 flex justify-end gap-5">
        <Link
          to={`/candidate/add-candidate/personal/professional`}
          className="text-secondary-700 bg-white border border-secondary-700 py-2 px-5 rounded-full text-base"
        >
          Previous
        </Link>
        <Link
          to={`/candidate/add-candidate/personal/emergency-contacts`}
          className="text-white bg-secondary-700 py-2 px-5 rounded-full text-base"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Profile;
