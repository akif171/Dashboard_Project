import React, { useEffect, useState } from "react";
import Pencil from "../../../images/pencil.png";
import { Link } from "react-router-dom";
import StarRating from "../../../components/StarRating";
import { useDispatch, useSelector } from "react-redux";
import { setProfileInfo } from "../../../features/candidate/personalSlice";

const options = [
  { value: "", text: "--Choose an option--" },
  { value: "option1", text: "option1" },
  { value: "option2", text: "option2" },
  { value: "option3", text: "option3" },
  { value: "option4", text: "option4" },
  { value: "option5", text: "option5" },
];
const Profile = () => {
  const dispatch = useDispatch();

  const initialProfileData = {
    totalInterviews: "",
    activeInterviews: "",
    passedInterviews: "",
    failedInterviews: "",
    holdInterviews: "",
    lastInterviewOn: "",
    rating: 0,
  };

  const {
    totalInterviews,
    activeInterviews,
    passedInterviews,
    failedInterviews,
    holdInterviews,
    lastInterviewOn,
    rating,
  } = useSelector((state) => state.personal.profile);

  const [profileRating, setProfileRating] = useState(rating);

  const [profileData, setProfileData] = useState({
    totalInterviews,
    activeInterviews,
    passedInterviews,
    failedInterviews,
    holdInterviews,
    lastInterviewOn,
    rating,
  });
  console.log(profileData);

  const onRatingChange = (rating) => {
    setProfileData((pervData) => ({
      ...pervData,
      rating,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((pervData) => ({
      ...pervData,
      [name]: value,
    }));
  };

  console.log(profileRating);

  useEffect(() => {
    dispatch(setProfileInfo(profileData));
  }, [profileData, profileRating]);

  return (
    <div className="">
      <div className="mt-5">
        <h3>Rating</h3>
        <StarRating
          fontSize={24}
          initialRating={rating}
          setProfileRating={setProfileRating}
          onRatingChange={onRatingChange}
        />
      </div>
      <from className="flex flex-col gap-y-6 mt-5 text-sm font-normal text-text-hint">
        <div className="grid grid-cols-4 gap-5">
          <div className="">
            <label className="">
              Total Interviews<span className="text-red-500">*</span>
            </label>
            <select
              onChange={handleChange}
              name="totalInterviews"
              value={totalInterviews}
              className="flex justify-center items-center text-black focus:ring-0 px-3 py-2 mt-1 border border-neutral-500 rounded-lg outline-none w-full"
            >
              {options.map((option) => (
                <option className="" key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
          </div>
          <div className="">
            <label className="">
              Active Interviews<span className="text-red-500">*</span>
            </label>
            <select
              onChange={handleChange}
              name="activeInterviews"
              value={activeInterviews}
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
        <div className="grid grid-cols-4 gap-5">
          <div className="">
            <label className="">
              Passed Interviews<span className="text-red-500">*</span>
            </label>
            <select
              onChange={handleChange}
              name="passedInterviews"
              value={passedInterviews}
              className="flex justify-center items-center text-black focus:ring-0 px-3 py-2 mt-1 border border-neutral-500 rounded-lg outline-none w-full"
            >
              {options.map((option) => (
                <option className="" key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
          </div>
          <div className="">
            <label className="">
              Failed Interviews<span className="text-red-500">*</span>
            </label>
            <select
              onChange={handleChange}
              name="failedInterviews"
              value={failedInterviews}
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
        <div className="grid grid-cols-4 gap-5">
          <div className="">
            <label className="">
              Interviews on Hold<span className="text-red-500">*</span>
            </label>
            <select
              onChange={handleChange}
              name="holdInterviews"
              value={holdInterviews}
              className="flex justify-center items-center text-black focus:ring-0 px-3 py-2 mt-1 border border-neutral-500 rounded-lg outline-none w-full"
            >
              {options.map((option) => (
                <option className="" key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
          </div>

          <div className="">
            <label className="">
              Last Interviewed on<span className="text-red-500">*</span>
            </label>
            <input
              onChange={handleChange}
              name="lastInterviewOn"
              value={lastInterviewOn}
              type="date"
              required
              className="outline-none w-full appearance-none text-black flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg "
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
