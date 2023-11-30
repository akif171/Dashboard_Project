import React, { useEffect, useState } from "react";
import Pencil from "../../../images/pencil.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setBasicInfo } from "../../../features/candidate/personalSlice";

const Basic = () => {
  const inititalBasicData = {
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    maritalStatus: "",
    dateOfBirth: "",
    email: "",
    phoneNum: "",
    alternatePhoneNum: "",
    address1: "",
    address2: "",
  };
  const {
    firstName,
    lastName,
    middleName,
    gender,
    maritalStatus,
    dateOfBirth,
    email,
    address1,
    address2,
    phoneNum,
    alternatePhoneNum,
  } = useSelector((state) => state.personal.basic);
  // const [genderStatus, setGenderStatus] = useState("");
  // const [personMaritalStatus, setPersonMaritalStatus] = useState("");
  const [basicData, setBasicData] = useState({
    firstName,
    lastName,
    middleName,
    gender,
    maritalStatus,
    dateOfBirth,
    email,
    address1,
    address2,
    phoneNum,
    alternatePhoneNum,
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setBasicData((pervData) => ({
      ...pervData,

      [name]: value,
    }));
  };
  console.log(basicData);

  useEffect(() => {
    dispatch(setBasicInfo(basicData));
    localStorage.setItem("state", JSON.stringify(basicData));
  }, [basicData]);

  return (
    <div className="">
      <from className="flex flex-col gap-y-6 mt-5 text-sm font-normal text-text-hint">
        <div className="grid grid-cols-4 gap-3">
          <div className="">
            <label className="">
              Frist Name<span className="text-red-500">*</span>
            </label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                onChange={handleChange}
                value={firstName}
                name="firstName"
                placeholder="First Name"
                required
                className="outline-none w-full text-black"
              />
              <img src={Pencil} alt="pencil" />
            </div>
          </div>
          <div className="">
            <label className="">
              Last Name<span className="text-red-500">*</span>
            </label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                onChange={handleChange}
                value={lastName}
                name="lastName"
                placeholder="Last Name"
                required
                className="outline-none w-full text-black"
              />
              <img src={Pencil} alt="pencil" />
            </div>
          </div>
          <div className="">
            <label className="">
              Middle Name<span className="text-red-500">*</span>
            </label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                onChange={handleChange}
                value={middleName}
                name="middleName"
                placeholder="Middle Name"
                required
                className="outline-none w-full text-black"
              />
              <img src={Pencil} alt="pencil" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3 ">
          <div className="">
            <label>
              Gender<span className="text-red-500">*</span>
            </label>
            <ul className="grid grid-cols-3 mt-1">
              <li className="relative">
                <input
                  onChange={handleChange}
                  value="male"
                  checked={basicData.gender === "male"}
                  className="sr-only peer"
                  type="radio"
                  name="gender"
                  id="male"
                />
                <label
                  className="flex justify-center items-center py-2 px-3 bg-white border border-secondary-800 rounded-tl-full rounded-bl-full cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:bg-secondary-500 peer-checked:text-white peer-checked:border-secondary-800"
                  htmlFor="male"
                >
                  Male
                </label>
              </li>
              <li className="relative">
                <input
                  onChange={handleChange}
                  value="female"
                  checked={basicData.gender === "female"}
                  className="sr-only peer"
                  type="radio"
                  name="gender"
                  id="female"
                />
                <label
                  className="flex justify-center items-center py-2 px-3 bg-white border border-t-secondary-800 border-b-secondary-800 cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:bg-secondary-500 peer-checked:text-white peer-checked:border-secondary-800"
                  htmlFor="female"
                >
                  Female
                </label>
              </li>

              <li className="relative">
                <input
                  onChange={handleChange}
                  value="other"
                  checked={basicData.gender === "other"}
                  className="sr-only peer"
                  type="radio"
                  name="gender"
                  id="other"
                />
                <label
                  className="flex justify-center items-center py-2 px-3 bg-white border border-secondary-800 rounded-tr-full rounded-br-full cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:bg-secondary-500 peer-checked:text-white peer-checked:border-secondary-800"
                  htmlFor="other"
                >
                  Other
                </label>
              </li>
            </ul>
          </div>
          <div className="">
            <label>
              Marital Status<span className="text-red-500">*</span>
            </label>
            <ul className="grid grid-cols-3 mt-1">
              <li className="relative">
                <input
                  onChange={handleChange}
                  value="single"
                  checked={basicData.maritalStatus === "single"}
                  className="sr-only peer"
                  type="radio"
                  name="maritalStatus"
                  id="single"
                />
                <label
                  className="flex justify-center items-center py-2 px-3 bg-white border border-secondary-800 rounded-tl-full rounded-bl-full cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:bg-secondary-500 peer-checked:text-white peer-checked:border-secondary-800"
                  htmlFor="single"
                >
                  Single
                </label>
              </li>

              <li className="relative">
                <input
                  onChange={handleChange}
                  value="married"
                  checked={basicData.maritalStatus === "married"}
                  className="sr-only peer"
                  type="radio"
                  name="maritalStatus"
                  id="married"
                />
                <label
                  className="flex justify-center items-center py-2 px-3 bg-white border border-secondary-800 rounded-tr-full rounded-br-full cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:bg-secondary-500 peer-checked:text-white peer-checked:border-secondary-800"
                  htmlFor="married"
                >
                  Married
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <div className="">
            <label className="">
              DOB<span className="text-red-500">*</span>
            </label>
            <div className="">
              <input
                onChange={handleChange}
                value={dateOfBirth}
                name="dateOfBirth"
                type="date"
                required
                className="outline-none w-full text-black appearance-none flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg "
              />
              {/* <img src={Pencil} alt="pencil" /> */}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <div className="col-span-2">
            <label className="">
              Email<span className="text-red-500">*</span>
            </label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                onChange={handleChange}
                value={email}
                name="email"
                placeholder="youremail@gmail.com"
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
              Phone Number<span className="text-red-500">*</span>
            </label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                onChange={handleChange}
                value={phoneNum}
                name="phoneNum"
                placeholder="99999999"
                required
                className="outline-none w-full text-black"
              />
              <img src={Pencil} alt="pencil" />
            </div>
          </div>
          <div className="">
            <label className="">
              Alternative Phone Number<span className="text-red-500">*</span>
            </label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                onChange={handleChange}
                value={alternatePhoneNum}
                name="alternatePhoneNum"
                placeholder="99999999"
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
              Address Line 1<span className="text-red-500">*</span>
            </label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                onChange={handleChange}
                value={address1}
                name="address1"
                placeholder="Address Line 1"
                required
                className="outline-none w-full text-black"
              />
              <img src={Pencil} alt="pencil" />
            </div>
          </div>
          <div className="">
            <label className="">
              Address Line 2<span className="text-red-500">*</span>
            </label>
            <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
              <input
                onChange={handleChange}
                value={address2}
                name="address2"
                placeholder="Address Line 2"
                required
                className="outline-none w-full text-black"
              />
              <img src={Pencil} alt="pencil" />
            </div>
          </div>
        </div>
      </from>
      <div className="w-full py-10 px-8 flex justify-end">
        <Link
          to={`/candidate/add-candidate/personal/professional`}
          className="text-white bg-secondary-700 py-2 px-5 rounded-full text-base"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Basic;
