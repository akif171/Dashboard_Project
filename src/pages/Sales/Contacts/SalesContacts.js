import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RxReload } from "react-icons/rx";
import { Link } from "react-router-dom";
import Modal from "../../../components/ModalComponents/Modal";
import Pencil from "../../../images/pencil.png";
import { createSalesContact } from "../../../api/sales";

const options = [
  { value: "", text: "--Choose an option--" },
  { value: "option1", text: "option1" },
  { value: "option2", text: "option2" },
  { value: "option3", text: "option3" },
  { value: "option4", text: "option4" },
  { value: "option5", text: "option5" },
];

const SalesContacts = () => {
  const initialSalesContact = {
    firstName: "",
    middleName: "",
    lastName: "",
    preferredName: "",
    email: "",
    jobTitle: "",
    mobileNum1: "",
    mobileNum2: "",
    fox: "",
    contactType: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    notes: "",
    vendorStatus: "",
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [salesContact, setSalesContact] = useState(initialSalesContact);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSalesContact((pervData) => ({
      ...pervData,
      [name]: value,
    }));
  };
  console.log(salesContact);

  const handleSubmit = async () => {
    const response = await createSalesContact(salesContact);
    console.log(salesContact);
    closeModal();
    setSalesContact(initialSalesContact);
  };

  return (
    <div className="p-5">
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="">
          <form className="flex flex-col gap-6 text-text-hint">
            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col w-72">
                <label htmlFor="first_name" className="text-text-hint mb-1">
                  First Name
                </label>
                <input
                  onChange={handleChange}
                  value={salesContact.firstName}
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  id="first_name"
                  className="outline-none border-2 border-secondary-500 rounded-lg text-black"
                />
              </div>
              <div className="flex flex-col w-72">
                <label htmlFor="middle_name" className="text-text-hint mb-1">
                  Middle Name
                </label>
                <input
                  onChange={handleChange}
                  value={salesContact.middleName}
                  name="middleName"
                  type="text"
                  placeholder="Middle Name"
                  id="middle_name"
                  className="outline-none border-2 border-secondary-500 rounded-lg text-black"
                />
              </div>
              <div className="flex flex-col w-72">
                <label htmlFor="last_name" className="text-text-hint mb-1">
                  Last Name
                </label>
                <input
                  onChange={handleChange}
                  value={salesContact.lastName}
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  id="last_name"
                  className="outline-none border-2 border-secondary-500 rounded-lg text-black"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col w-72">
                <label htmlFor="last_name" className="text-text-hint mb-1">
                  Preferred Name<span className="text-danger-500">*</span>
                </label>
                <input
                  onChange={handleChange}
                  value={salesContact.preferredName}
                  name="preferredName"
                  type="text"
                  placeholder="Last Name"
                  id="last_name"
                  className="outline-none border-2 border-secondary-500 rounded-lg text-black"
                />
              </div>
              <div className="">
                <label className="">
                  Email<span className="text-danger-500">*</span>
                </label>
                <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
                  <input
                    onChange={handleChange}
                    value={salesContact.email}
                    name="email"
                    placeholder="youremail@gmail.com"
                    required
                    className="outline-none w-fulltext-black"
                  />
                  {/* <img src={Pencil} alt="pencil" /> */}
                </div>
              </div>
              <div className="flex flex-col w-72">
                <label htmlFor="job_title" className="text-text-hint mb-1">
                  Job Title<span className="text-danger-500">*</span>
                </label>
                <input
                  onChange={handleChange}
                  value={salesContact.jobTitle}
                  name="jobTitle"
                  type="text"
                  placeholder="Job"
                  id="job_title"
                  className="outline-none border-2 border-secondary-500 rounded-lg text-black"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col w-72">
                <label htmlFor="mobile_number" className="text-text-hint mb-1">
                  Mobile Number<span className="text-danger-500">*</span>
                </label>
                <input
                  onChange={handleChange}
                  value={salesContact.mobileNum1}
                  name="mobileNum1"
                  type="text"
                  placeholder="Mobile Numbner"
                  id="mobile_number"
                  className="outline-none border-2 border-secondary-500 rounded-lg text-black"
                />
              </div>
              <div className="flex flex-col w-72">
                <label htmlFor="mobile_number" className="text-text-hint mb-1">
                  Mobile Number<span className="text-danger-500">*</span>
                </label>
                <input
                  onChange={handleChange}
                  value={salesContact.mobileNum2}
                  name="mobileNum2"
                  type="text"
                  placeholder="Mobile Numbner"
                  id="mobile_number"
                  className="outline-none border-2 border-secondary-500 rounded-lg text-black"
                />
              </div>
              <div className="flex flex-col w-72">
                <label htmlFor="fox" className="text-text-hint mb-1">
                  Fox<span className="text-danger-500">*</span>
                </label>
                <input
                  onChange={handleChange}
                  value={salesContact.fox}
                  name="fox"
                  type="text"
                  placeholder="Fox"
                  id="fox"
                  className="outline-none border-2 border-secondary-500 rounded-lg text-black"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col w-72">
                <label htmlFor="address_line_1" className="text-text-hint mb-1">
                  Contact Type<span className="text-danger-500">*</span>
                </label>
                <select
                  onChange={handleChange}
                  value={salesContact.contactType}
                  name="contactType"
                  className="flex justify-center items-center text-black focus:ring-0 px-3 py-2 mt-1 border border-neutral-500 rounded-lg outline-none w-full"
                >
                  {options.map((option) => (
                    <option
                      className=""
                      key={option.value}
                      value={option.value}
                    >
                      {option.text}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col w-72">
                <label htmlFor="address_line_1" className="text-text-hint mb-1">
                  Address Line 1<span className="text-danger-500">*</span>
                </label>
                <input
                  onChange={handleChange}
                  value={salesContact.address1}
                  name="address1"
                  type="text"
                  placeholder="Address Line 1"
                  id="address_line_1"
                  className="outline-none border-2 border-secondary-500 rounded-lg text-black"
                />
              </div>
              <div className="flex flex-col w-72">
                <label htmlFor="address_line_2" className="text-text-hint mb-1">
                  Address Line 2<span className="text-danger-500">*</span>
                </label>
                <input
                  onChange={handleChange}
                  value={salesContact.address2}
                  name="address2"
                  type="text"
                  placeholder="Address Line 2"
                  id="address_line_2"
                  className="outline-none border-2 border-secondary-500 rounded-lg text-black"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col w-72">
                <label htmlFor="state" className="text-text-hint mb-1">
                  State<span className="text-danger-500">*</span>
                </label>
                <select
                  onChange={handleChange}
                  value={salesContact.state}
                  name="state"
                  className="flex justify-center items-center text-black focus:ring-0 px-3 py-2 mt-1 border border-neutral-500 rounded-lg outline-none w-full"
                >
                  {options.map((option) => (
                    <option
                      className=""
                      key={option.value}
                      value={option.value}
                    >
                      {option.text}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col w-72">
                <label htmlFor="city" className="text-text-hint mb-1">
                  City<span className="text-danger-500">*</span>
                </label>
                <select
                  onChange={handleChange}
                  value={salesContact.city}
                  name="city"
                  className="flex justify-center items-center text-black focus:ring-0 px-3 py-2 mt-1 border border-neutral-500 rounded-lg outline-none w-full"
                >
                  {options.map((option) => (
                    <option
                      className=""
                      key={option.value}
                      value={option.value}
                    >
                      {option.text}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col w-72">
                <label htmlFor="zip_code" className="text-text-hint mb-1">
                  Zip Code<span className="text-danger-500">*</span>
                </label>
                <input
                  onChange={handleChange}
                  value={salesContact.zipCode}
                  name="zipCode"
                  type="text"
                  placeholder="Zip Code"
                  id="zip_code"
                  className="outline-none border-2 border-secondary-500 rounded-lg text-black"
                />
              </div>
              <div className="flex flex-col w-72">
                <label htmlFor="country" className="text-text-hint mb-1">
                  Country<span className="text-danger-500">*</span>
                </label>
                <select
                  onChange={handleChange}
                  value={salesContact.country}
                  name="country"
                  className="flex justify-center items-center text-black focus:ring-0 px-3 py-2 mt-1 border border-neutral-500 rounded-lg outline-none w-full"
                >
                  {options.map((option) => (
                    <option
                      className=""
                      key={option.value}
                      value={option.value}
                    >
                      {option.text}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col w-72 ">
                <label htmlFor="date" className="text-gray-300 mb-1">
                  Created - Date
                </label>
                <input
                  disabled
                  type="date"
                  id="date"
                  className="outline-none border-2 disabled:border-gray-300 text-gray-300 border-text-hint rounded-lg "
                />
              </div>
              <div className="flex flex-col w-72">
                <label htmlFor="date" className="text-gray-300 mb-1">
                  Created - Time
                </label>
                <input
                  disabled
                  type="time"
                  id="date"
                  className="outline-none border-2 border-text-hint rounded-lg   disabled:border-gray-300 text-gray-300"
                />
              </div>
              <div className="flex flex-col w-72">
                <label htmlFor="created_by" className="text-gray-300  mb-1">
                  Created By
                </label>
                <input
                  disabled
                  type="text"
                  placeholder="Created By"
                  id="created_by"
                  className="outline-none placeholder:text-gray-300 border-2 border-secondary-500 rounded-lg  disabled:border-gray-300 text-gray-300"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col w-72">
                <label htmlFor="date" className="text-gray-300 mb-1">
                  Updated - Date
                </label>
                <input
                  disabled
                  type="date"
                  id="date"
                  className="outline-none border-2 border-text-hint rounded-lg  disabled:border-gray-300 text-gray-300 "
                />
              </div>
              <div className="flex flex-col w-72">
                <label htmlFor="date" className="text-gray-300 mb-1">
                  Updated - Time
                </label>
                <input
                  disabled
                  type="time"
                  id="date"
                  className="outline-none border-2 border-text-hint rounded-lg   disabled:border-gray-300 text-gray-300"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col col-span-3 ">
                <label htmlFor="document_type" className="text-text-hint mb-1">
                  Notes
                </label>
                <textarea
                  onChange={handleChange}
                  value={salesContact.notes}
                  name="notes"
                  type="text"
                  placeholder="Notes"
                  id="document_type"
                  className="focus:outline-none border  rounded-lg text-black"
                  rows={4}
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="">
                <label>
                  Vendor Status<span className="text-red-500">*</span>
                </label>
                <ul className="grid grid-cols-3 mt-1">
                  <li className="relative">
                    <input
                      onChange={handleChange}
                      checked={salesContact.vendorStatus === "active"}
                      name="vendorStatus"
                      className="sr-only peer"
                      type="radio"
                      value="active"
                      id="active"
                    />
                    <label
                      className="flex justify-center items-center py-2 px-3 bg-white border border-secondary-800 rounded-tl-full rounded-bl-full cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:bg-secondary-500 peer-checked:text-white peer-checked:border-secondary-800"
                      htmlFor="active"
                    >
                      Active
                    </label>
                  </li>
                  <li className="relative">
                    <input
                      onChange={handleChange}
                      checked={salesContact.vendorStatus === "in active"}
                      className="sr-only peer"
                      type="radio"
                      value="in active"
                      name="vendorStatus"
                      id="in_active"
                    />
                    <label
                      className="flex justify-center items-center py-2 px-3 bg-white border border-t-secondary-800 border-b-secondary-800 cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:bg-secondary-500 peer-checked:text-white peer-checked:border-secondary-800"
                      htmlFor="in_active"
                    >
                      In Active
                    </label>
                  </li>

                  <li className="relative">
                    <input
                      onChange={handleChange}
                      checked={salesContact.vendorStatus === "fraud"}
                      className="sr-only peer"
                      type="radio"
                      value="fraud"
                      name="vendorStatus"
                      id="fraud"
                    />
                    <label
                      className="flex justify-center items-center py-2 px-3 bg-white text-danger-500 border border-secondary-800 rounded-tr-full rounded-br-full cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:bg-secondary-500 peer-checked:text-white peer-checked:border-secondary-800"
                      htmlFor="fraud"
                    >
                      Fraud
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </form>
          <div className="flex justify-between p-6 mt-6">
            <button
              onClick={closeModal}
              className="border border-secondary-800 text-secondary-800 py-2 px-5 rounded-full"
            >
              Close
            </button>
            <button
              onClick={handleSubmit}
              className="bg-secondary-700 text-text-light py-2 px-5 rounded-full"
            >
              Save
            </button>
          </div>
        </div>
      </Modal>
      <div className="border border-gray-300 rounded-lg ">
        <div className="flex justify-between items-center gap-2 p-3">
          <div className="flex">
            <RxReload size={20} />
            <BsThreeDotsVertical size={20} />
          </div>

          <button
            onClick={openModal}
            className="py-3 px-6 bg-secondary-700 text-white rounded-full"
          >
            <span className="mr-3">+</span>
            New Contact
          </button>
        </div>
        <div className="w-full overflow-x">
          <table class="table-auto overflow-scroll w-full">
            {/* Table headings */}
            <thead className="w-full">
              <tr className="grid grid-cols-6  text-left py-3 pl-3 pr-6 bg-secondary-50 text-sm">
                <th>Contact Name</th>
                <th>Contact Type</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Address</th>
                <th>Status</th>
              </tr>
            </thead>
            {/* table content/data */}
            <tbody
              className="flex flex-col items-center  overflow-y-scroll w-full h-screen"
              // style={{ height: "90vh" }}
            >
              {[1, 2, 3].map(() => (
                <tr className="grid grid-cols-6 justify-center items-center py-2 px-3 gap-1 border border-gray-200 text-left w-full text-sm">
                  <td className="">
                    <h3 className="text-base text-auxiliary-800">Some Name</h3>
                  </td>
                  <td className="">Sales Tech</td>
                  <td className="">Sales Tech</td>
                  <td className="">
                    <p className="">bessiecooper@gmail.com</p>
                  </td>
                  <td className="">Sales Tech</td>
                  <td className="flex">
                    <p className="border border-danger-500 text-danger-500 py-2 px-6 rounded-full">
                      Done
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="w-full h-14 py-2 bg-secondary-50 justify-end items-center gap-4 inline-flex">
          <div className="w-24 bg-white flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-10 flex-col justify-start items-start gap-1 flex">
              <div className="self-stretch h-10 px-4 py-2 rounded-lg border border-neutral-500 justify-between items-center inline-flex">
                <div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['Poppins'] leading-tight">
                  15
                </div>
                <div className="w-6 h-6 relative" />
              </div>
            </div>
          </div>
          <div className="text-neutral-700 text-base font-medium font-['Poppins'] leading-normal">
            1-15{" "}
          </div>
          <div className="text-neutral-700 text-base font-medium font-['Poppins'] leading-normal">
            of
          </div>
          <div className="text-neutral-700 text-base font-medium font-['Poppins'] leading-normal">
            126
          </div>
          <div className="w-6 h-6 relative" />
          <div className="w-6 h-6 relative" />
        </div>
      </div>
    </div>
  );
};

export default SalesContacts;
