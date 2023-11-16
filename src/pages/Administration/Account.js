import React, { useState } from "react";
import Modal from "../../components/ModalComponents/Modal";
import { RxReload } from "react-icons/rx";
import { BsThreeDotsVertical } from "react-icons/bs";

const Account = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
                  type="text"
                  placeholder="First Name"
                  id="first_name"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
              <div className="flex flex-col w-72">
                <label htmlFor="middle_name" className="text-text-hint mb-1">
                  Middle Name
                </label>
                <input
                  type="text"
                  placeholder="Middle Name"
                  id="middle_name"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
              <div className="flex flex-col w-72">
                <label htmlFor="last_name" className="text-text-hint mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  id="last_name"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col w-72">
                <label htmlFor="last_name" className="text-text-hint mb-1">
                  Preferred Name<span className="text-danger-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  id="last_name"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
              <div className="">
                <label className="">
                  Email<span className="text-danger-500">*</span>
                </label>
                <div className="flex justify-center items-center px-3 py-2 mt-1 border border-neutral-500 rounded-lg">
                  <input
                    placeholder="youremail@gmail.com"
                    required
                    className="outline-none w-full"
                  />
                  {/* <img src={Pencil} alt="pencil" /> */}
                </div>
              </div>
              <div className="flex flex-col w-72">
                <label htmlFor="job_title" className="text-text-hint mb-1">
                  Job Title<span className="text-danger-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Job"
                  id="job_title"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col w-72">
                <label htmlFor="mobile_number" className="text-text-hint mb-1">
                  Mobile Numbner<span className="text-danger-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Mobile Numbner"
                  id="mobile_number"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
              <div className="flex flex-col w-72">
                <label htmlFor="mobile_number" className="text-text-hint mb-1">
                  Mobile Numbner<span className="text-danger-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Mobile Numbner"
                  id="mobile_number"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
              <div className="flex flex-col w-72">
                <label htmlFor="fox" className="text-text-hint mb-1">
                  Fox<span className="text-danger-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Fox"
                  id="fox"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col w-72">
                <label htmlFor="address_line_1" className="text-text-hint mb-1">
                  Address Line 1<span className="text-danger-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Address Line 1"
                  id="address_line_1"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
              <div className="flex flex-col w-72">
                <label htmlFor="address_line_2" className="text-text-hint mb-1">
                  Address Line 2<span className="text-danger-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Address Line 2"
                  id="address_line_2"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col w-72">
                <label htmlFor="state" className="text-text-hint mb-1">
                  State<span className="text-danger-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="State"
                  id="state"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
              <div className="flex flex-col w-72">
                <label htmlFor="city" className="text-text-hint mb-1">
                  City<span className="text-danger-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="City"
                  id="city"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col w-72">
                <label htmlFor="zip_code" className="text-text-hint mb-1">
                  Zip Code<span className="text-danger-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Zip Code"
                  id="zip_code"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
              <div className="flex flex-col w-72">
                <label htmlFor="country" className="text-text-hint mb-1">
                  Country<span className="text-danger-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Country"
                  id="country"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col w-72">
                <label htmlFor="date" className="text-text-hint mb-1">
                  Created - Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="outline-none border-2 border-text-hint rounded-lg "
                />
              </div>
              <div className="flex flex-col w-72">
                <label htmlFor="date" className="text-text-hint mb-1">
                  Created - Time
                </label>
                <input
                  type="time"
                  id="date"
                  className="outline-none border-2 border-text-hint rounded-lg "
                />
              </div>
              <div className="flex flex-col w-72">
                <label htmlFor="created_by" className="text-text-hint mb-1">
                  Created By
                </label>
                <input
                  type="text"
                  placeholder="Created By"
                  id="created_by"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col w-72">
                <label htmlFor="date" className="text-text-hint mb-1">
                  Updated - Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="outline-none border-2 border-text-hint rounded-lg "
                />
              </div>
              <div className="flex flex-col w-72">
                <label htmlFor="date" className="text-text-hint mb-1">
                  Updated - Time
                </label>
                <input
                  type="time"
                  id="date"
                  className="outline-none border-2 border-text-hint rounded-lg "
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col col-span-3 ">
                <label htmlFor="document_type" className="text-text-hint mb-1">
                  Notes
                </label>
                <textarea
                  type="text"
                  placeholder="Notes"
                  id="document_type"
                  className="focus:outline-none border  rounded-lg "
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
                      className="sr-only peer"
                      type="radio"
                      value="active"
                      name="vendor_status"
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
                      className="sr-only peer"
                      type="radio"
                      value="in active"
                      name="vendor_status"
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
                      className="sr-only peer"
                      type="radio"
                      value="fraud"
                      name="vendor_status"
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
              onClick={closeModal}
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
            Add Account
          </button>
        </div>
        <div className="w-full overflow-x">
          <table class="table-auto overflow-scroll w-full">
            {/* Table headings */}
            <thead className="w-full">
              <tr className="grid grid-cols-7  text-left py-3 pl-3 pr-6 bg-secondary-50 text-sm">
                <th>Business Name</th>
                <th>Email ID</th>
                <th>Phone Number</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Date Created</th>
                <th>Status</th>
              </tr>
            </thead>
            {/* table content/data */}
            <tbody
              className="flex flex-col items-center  overflow-y-scroll w-full h-screen"
              // style={{ height: "90vh" }}
            >
              {[1, 2, 3].map(() => (
                <tr className="grid grid-cols-7 justify-center items-center py-2 px-3 gap-1 border border-gray-200 text-left w-full text-sm">
                  <td className="">
                    <h3 className="text-base text-auxiliary-800">Some Name</h3>
                  </td>
                  <td className="">
                    <p className="">bessiecooper@gmail.com</p>
                  </td>
                  <td className="">+91 9999999999</td>
                  <td className="">Sam</td>
                  <td className="">Jhon</td>
                  <td className="">10/10/10</td>
                  <td className="flex">
                    <p className="border border-success-700 text-success-700 py-2 px-6 rounded-full">
                      Active
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

export default Account;
