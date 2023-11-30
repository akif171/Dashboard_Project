import React, { useEffect, useState } from "react";
import Pencil from "../../../images/pencil.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setEmergencyContact1,
  setEmergencyContact2,
  setEmergencyContacts,
} from "../../../features/candidate/personalSlice";

const options = [
  { value: "", text: "--Choose an option--" },
  { value: "option1", text: "option1" },
  { value: "option2", text: "option2" },
  { value: "option3", text: "option3" },
  { value: "option4", text: "option4" },
  { value: "option5", text: "option5" },
];

const EmergencyContacts = () => {
  const initialContact1 = {
    contactName1: "",
    contactPhoneNum1: "",
    email1: "",
    contactRelation1: "",
  };

  const initialContact2 = {
    contactName2: "",
    contactPhoneNum2: "",
    email2: "",
    contactRelation2: "",
  };

  const dispatch = useDispatch();

  const { contactInfo1, contactInfo2 } = useSelector(
    (state) => state.personal.emergencyContacts
  );
  console.log(contactInfo1, contactInfo2);
  const [contact1, setContact1] = useState(contactInfo1);
  const [contact2, setContact2] = useState(contactInfo2);

  const handleChange1 = (e) => {
    const { name, value } = e.target;

    setContact1((pervData) => ({
      ...pervData,
      [name]: value,
    }));
  };

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    console.log(e);
    setContact2((pervData) => ({
      ...pervData,
      [name]: value,
    }));
  };

  useEffect(() => {
    dispatch(setEmergencyContact1(contact1));
  }, [contact1]);

  useEffect(() => {
    dispatch(setEmergencyContact2(contact2));
  }, [contact2]);

  console.log("contact1", contact1);
  console.log("contact2", contact2);

  return (
    <div className="">
      <from className="grid grid-cols-2 gap-6 mt-5 text-sm font-normal text-text-hint">
        <div className="flex flex-col gap-y-6">
          <h3 className="text-text-default">Emergency Contacts 1</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="">
              <label className="">
                Contacts Name<span className="text-red-500">*</span>
              </label>
              <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
                <input
                  onChange={handleChange1}
                  value={contact1.contactName}
                  name="contactName"
                  placeholder="Contacts Name"
                  required
                  className="outline-none w-full text-black"
                />
                <img src={Pencil} alt="pencil" />
              </div>
            </div>
            <div className="">
              <label className="">
                Contacts Phone Number<span className="text-red-500">*</span>
              </label>
              <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
                <input
                  onChange={handleChange1}
                  value={contact1.contactPhoneNum}
                  name="contactPhoneNum"
                  placeholder="Contacts Phone Number"
                  required
                  className="outline-none w-full text-black"
                />
                <img src={Pencil} alt="pencil" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2">
              <label className="">
                Email<span className="text-red-500">*</span>
              </label>
              <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
                <input
                  onChange={handleChange1}
                  value={contact1.email}
                  name="email"
                  placeholder="youremail@gmail.com"
                  required
                  className="outline-none w-full text-black"
                />
                <img src={Pencil} alt="pencil" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="">
              <label className="">
                Contacts Relations<span className="text-red-500">*</span>
              </label>
              <select
                onChange={handleChange1}
                value={contact1.contactRelation}
                name="contactRelation"
                className="flex justify-center items-center text-black focus:ring-0 px-3 py-2 mt-1 border border-neutral-500 rounded-lg outline-none w-full "
              >
                {options.map((option) => (
                  <option className="" key={option.value} value={option.value}>
                    {option.text}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {/* Emergency contact 2 */}

        <div className="flex flex-col gap-y-6">
          <h3 className="text-text-default">Emergency Contacts 2</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="">
              <label className="">
                Contacts Name<span className="text-red-500">*</span>
              </label>
              <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
                <input
                  onChange={handleChange2}
                  value={contact2.contactName}
                  name="contactName"
                  placeholder="Contacts Name"
                  required
                  className="outline-none w-full text-black"
                />
                <img src={Pencil} alt="pencil" />
              </div>
            </div>
            <div className="">
              <label className="">
                Contacts Phone Number<span className="text-red-500">*</span>
              </label>
              <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
                <input
                  onChange={handleChange2}
                  value={contact2.contactPhoneNum}
                  name="contactPhoneNum"
                  placeholder="Contacts Phone Number"
                  required
                  className="outline-none w-full text-black"
                />
                <img src={Pencil} alt="pencil" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2">
              <label className="">
                Email<span className="text-red-500">*</span>
              </label>
              <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
                <input
                  onChange={handleChange2}
                  value={contact2.email}
                  name="email"
                  placeholder="youremail@gmail.com"
                  required
                  className="outline-none w-full text-black"
                />
                <img src={Pencil} alt="pencil" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="">
              <label className="">
                Contacts Relations<span className="text-red-500">*</span>
              </label>
              <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
                <input
                  onChange={handleChange2}
                  value={contact2.contactRelation}
                  name="contactRelation"
                  placeholder="Contacts Relations"
                  required
                  className="outline-none w-full text-black"
                />
                <img src={Pencil} alt="pencil" />
              </div>
            </div>
          </div>
        </div>
      </from>
      <div className="w-full  py-10 px-8 flex justify-end gap-5">
        <Link
          to={`/candidate/add-candidate/personal/profile`}
          className="text-secondary-700 bg-white border border-secondary-700 py-2 px-5 rounded-full text-base"
        >
          Previous
        </Link>
        <Link
          to={`/candidate/add-candidate/notes`}
          className="text-white bg-secondary-700 py-2 px-5 rounded-full text-base"
        >
          Save & Next
        </Link>
      </div>
    </div>
  );
};

export default EmergencyContacts;
