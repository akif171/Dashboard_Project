import React, { useState } from "react";
import Modal from "../../../components/ModalComponents/Modal";
import StarRating from "../../../components/StarRating";
import { RxReload } from "react-icons/rx";
import QrCode from "../../../images/Qr-code.png";

const SalesProjects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-5 ">
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="">
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col w-72">
                <label htmlFor="project_tiel" className="text-text-hint mb-1">
                  Project Title
                </label>
                <input
                  type="text"
                  placeholder="Project Title"
                  id="project_tiel"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
              <div className="flex flex-col w-72">
                <label htmlFor="project" className="text-text-hint mb-1">
                  Project
                </label>
                <input
                  type="text"
                  placeholder="Project"
                  id="project"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
              <div className="flex flex-col w-72">
                <label htmlFor="client" className="text-text-hint mb-1">
                  Client
                </label>
                <input
                  type="text"
                  placeholder="Client"
                  id="client"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col w-72">
                <label htmlFor="vendor" className="text-text-hint mb-1">
                  Vendor
                </label>
                <input
                  type="text"
                  placeholder="Vedor "
                  id="vendor"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
              <div className="flex flex-col w-72">
                <label htmlFor="cnadidate_name" className="text-text-hint mb-1">
                  Candidate Name
                </label>
                <input
                  type="text"
                  placeholder="Candidate Name "
                  id="cnadidate_name"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
              <div className="flex flex-col w-72">
                <label htmlFor="sales_manager" className="text-text-hint mb-1">
                  Sales Manager
                </label>
                <input
                  type="text"
                  placeholder="Sales Manager "
                  id="sales_manager"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col w-72">
                <label htmlFor="hr_contact" className="text-text-hint mb-1">
                  HR Contact
                </label>
                <input
                  type="text"
                  placeholder="HR Contact"
                  id="hr_contact"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
              <div className="flex flex-col w-72">
                <label htmlFor="vendor_contact" className="text-text-hint mb-1">
                  Vendor Contact
                </label>
                <input
                  type="text"
                  placeholder="Vendor Contact"
                  id="vendor_contact"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col w-72">
                <label htmlFor="bill_rate" className="text-text-hint mb-1">
                  Bill Rate
                </label>
                <input
                  type="text"
                  placeholder="Bill Rate"
                  id="bill_rate"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
              <div className="flex flex-col w-72">
                <label htmlFor="pay_type" className="text-text-hint mb-1">
                  Pay Type
                </label>
                <input
                  type="text"
                  placeholder="Pay Type"
                  id="pay_type"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col w-72">
                <label
                  htmlFor="marketing_start_date"
                  className="text-text-hint mb-1"
                >
                  Marketing Start Date
                </label>
                <input
                  type="date"
                  id="marketing_start_date"
                  className="outline-none border-2 border-text-hint rounded-lg "
                />
              </div>
              <div className="flex flex-col w-72">
                <label
                  htmlFor="marketing_end_date"
                  className="text-text-hint mb-1"
                >
                  Marketing End Date
                </label>
                <input
                  type="date"
                  id="marketing_end_date"
                  className="outline-none border-2 border-text-hint rounded-lg "
                />
              </div>
              <div className="flex flex-col w-72">
                <label htmlFor="duration" className="text-text-hint mb-1">
                  Duration
                </label>
                <input
                  type="text"
                  placeholder="Duration"
                  id="duration"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col w-72">
                <label htmlFor="State" className="text-text-hint mb-1">
                  State
                </label>
                <input
                  type="text"
                  placeholder="State"
                  id="State"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
              <div className="flex flex-col w-72">
                <label htmlFor="city" className="text-text-hint mb-1">
                  City
                </label>
                <input
                  type="text"
                  placeholder="City"
                  id="city"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col w-72">
                <label htmlFor="start_date" className="text-text-hint mb-1">
                  Start Date
                </label>
                <input
                  type="date"
                  id="start_date"
                  className="outline-none border-2 border-text-hint rounded-lg "
                />
              </div>
              <div className="flex flex-col w-72">
                <label
                  htmlFor="marketing_end_date"
                  className="text-text-hint mb-1"
                >
                  End Date
                </label>
                <input
                  type="date"
                  id="end_date"
                  className="outline-none border-2 border-text-hint rounded-lg "
                />
              </div>
            </div>

            <div className="">
              <div className="w-96">
                <label className="text-text-hint ">Project Status</label>
                <ul className="grid grid-cols-3 mt-1">
                  <li className="relative">
                    <input
                      className="sr-only peer"
                      type="radio"
                      value="InPrgress"
                      name="interview_status"
                      id="in_progress"
                    />
                    <label
                      className="flex justify-center items-center py-2 px-3 text-sm text-text-hint bg-white border border-secondary-800 rounded-tl-full rounded-bl-full cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:bg-secondary-500 peer-checked:text-white peer-checked:border-secondary-800"
                      htmlFor="in_progress"
                    >
                      InPrgress
                    </label>
                  </li>
                  <li className="relative">
                    <input
                      className="sr-only peer"
                      type="radio"
                      value="ShortListed"
                      name="interview_status"
                      id="shortlisted"
                    />
                    <label
                      className="flex justify-center items-center py-2 px-3 text-sm text-text-hint bg-white border border-t-secondary-800 border-b-secondary-800 cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:bg-secondary-500 peer-checked:text-white peer-checked:border-secondary-800"
                      htmlFor="shortlisted"
                    >
                      ShortListed
                    </label>
                  </li>

                  <li className="relative">
                    <input
                      className="sr-only peer"
                      type="radio"
                      value="Not Selected"
                      name="interview_status"
                      id="not_selected"
                    />
                    <label
                      className="flex justify-center items-center py-2 px-3 text-sm text-text-hint bg-white border border-secondary-800 rounded-tr-full rounded-br-full cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:bg-secondary-500 peer-checked:text-white peer-checked:border-secondary-800"
                      htmlFor="not_selected"
                    >
                      Not Selected
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
          <RxReload size={20} />

          {/* <button
            onClick={openModal}
            className="py-3 px-6 bg-secondary-700 text-white rounded-full"
          >
            <span className="mr-3">+</span>
            Add New Interview
          </button> */}
        </div>
        <div className="w-full overflow-x">
          <table class="table-auto overflow-scroll w-full">
            {/* Table headings */}
            <thead className="w-full">
              <tr className="grid grid-cols-10  text-left py-3 pl-3 pr-6 bg-secondary-50 text-sm">
                <th>Project Info</th>
                <th>Candidate</th>
                <th>Vendor</th>
                <th>Client</th>
                <th>City</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Created on</th>
                <th>Duration</th>
                <th>Project Status</th>
              </tr>
            </thead>
            {/* table content/data */}
            <tbody
              className="flex flex-col items-center  overflow-y-scroll w-full h-screen"
              // style={{ height: "90vh" }}
            >
              {[1, 2, 3].map(() => (
                <tr className="grid grid-cols-10 justify-center items-center py-2 px-3 gap-1 border border-gray-200 text-left w-full text-sm">
                  <td className="">
                    <button onClick={openModal}>
                      <h3 className="text-base text-auxiliary-800">
                        Sales Tech
                      </h3>
                    </button>
                    <p className="text-text-hint">salesforce</p>
                  </td>
                  <td className="">Bessie </td>
                  <td className="">Technology</td>
                  <td className="">Technology</td>
                  <td className="">DuR</td>
                  <td className="">10/10/2023</td>
                  <td className="">10/10/2023</td>
                  <td className="">10/10/2023</td>
                  <td className="">12 months</td>
                  <td className="flex">
                    <p className="py-2 px-4 text-danger-700 border border-danger-700 rounded-full text-xs">
                      Not Selected
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

export default SalesProjects;
