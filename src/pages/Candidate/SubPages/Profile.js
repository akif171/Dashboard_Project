import React from "react";
import Pencil from "../../../images/pencil.png";
import { Link } from "react-router-dom";
import StarRating from "../../../components/StarRating";

const Profile = () => {
  return (
    <div className="">
      <div className="mt-5">
        <h3>Rating</h3>
        <StarRating />
      </div>
      <from className="flex flex-col gap-y-6 mt-5 text-sm font-normal">
        <div className="grid grid-cols-4 gap-3">
          {[1, 2].map(() => (
            <div className="">
              <label className="">Total Interviews</label>
              <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
                <input
                  placeholder="total interviews"
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
              <label className="">Passed Interviews</label>
              <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
                <input
                  placeholder="passed interviews"
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
              <label className="">Interviews on Hold</label>
              <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
                <input
                  placeholder="interviews on hold"
                  required
                  className="outline-none w-full"
                />
                <img src={Pencil} alt="pencil" />
              </div>
            </div>
          ))}
        </div>
      </from>
      <div className="w-full py-10 px-8 flex justify-end gap-5">
        <Link
          to={`/candidate/add-candidate/personal/professional`}
          className="text-secondary-700 bg-white border border-secondary-700 py-2 px-5 rounded-full text-lg"
        >
          Previous
        </Link>
        <Link
          to={`/candidate/add-candidate/personal/emergency-contacts`}
          className="text-white bg-secondary-700 py-2 px-5 rounded-full text-lg"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Profile;
