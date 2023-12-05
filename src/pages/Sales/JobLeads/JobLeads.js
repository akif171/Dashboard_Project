import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { RxReload } from "react-icons/rx";
import { Link } from "react-router-dom";
import Dropdown from "../../../components/Dropdown";
import Filter from "../../../components/Filter";
import StarRating from "../../../components/StarRating";
import Modal from "../../../components/ModalComponents/Modal";
import { createJobLead } from "../../../api/sales";

const options = [
  { value: "", text: "--Choose an option--" },
  { value: "option1", text: "option1" },
  { value: "option2", text: "option2" },
  { value: "option3", text: "option3" },
  { value: "option4", text: "option4" },
  { value: "option5", text: "option5" },
];

const JobLeads = () => {
  const initialJobLead = {
    jobTitle: "",
    vendor: "",
    durationMonths: "",
    client: "",
    technology: "",
    numOfPositions: "",
    salesManager: "",
    billRate: "",
    payType: "",
    state: "",
    city: "",
    createdOn: "",
    city: "",
    statusReason: "",
    jobContactName: "",
    jobContactEmail: "",
    jobContactPhoneNum: "",
    jobDescription: "",
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jobLead, setJobLead] = useState(initialJobLead);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobLead((pervData) => ({
      ...pervData,
      [name]: value,
    }));
  };

  console.log(jobLead);

  const handleSubmit = async () => {
    const response = await createJobLead(jobLead);
    closeModal();
    setJobLead(initialJobLead);
  };

  return (
    <div className="p-5 ">
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="">
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col w-72">
                <label htmlFor="job_title" className="text-text-hint mb-1">
                  Job Title
                </label>
                <input
                  onChange={handleChange}
                  value={jobLead.jobTitle}
                  name="jobTitle"
                  type="text"
                  placeholder="Job Title"
                  id="job_title"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
              <div className="flex flex-col w-72">
                <label htmlFor="vendor" className="text-text-hint mb-1">
                  Vendor
                </label>
                <input
                  onChange={handleChange}
                  value={jobLead.vendor}
                  name="vendor"
                  type="text"
                  placeholder="Vendor"
                  id="vendor"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
              <div className="flex flex-col w-72">
                <label htmlFor="duration" className="text-text-hint mb-1">
                  Duration in Months
                </label>
                <select
                  onChange={handleChange}
                  value={jobLead.durationMonths}
                  name="durationMonths"
                  className="flex justify-center items-center focus:ring-0 px-3 py-2  border border-neutral-500 rounded-lg outline-none w-full"
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
                <label htmlFor="client" className="text-text-hint mb-1">
                  Client
                </label>
                <input
                  onChange={handleChange}
                  value={jobLead.client}
                  name="client"
                  type="text"
                  placeholder="Client "
                  id="client"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
              <div className="flex flex-col w-72">
                <label htmlFor="technology" className="text-text-hint mb-1">
                  Technology
                </label>
                <select
                  onChange={handleChange}
                  value={jobLead.technology}
                  name="technology"
                  className="flex justify-center items-center focus:ring-0 px-3 py-2  border border-neutral-500 rounded-lg outline-none w-full"
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
                <label htmlFor="client" className="text-text-hint mb-1">
                  Number of Positions
                </label>
                <input
                  onChange={handleChange}
                  value={jobLead.numOfPositions}
                  name="numOfPositions"
                  type="text"
                  placeholder="Number of Positions"
                  id="client"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col w-72">
                <label htmlFor="sales_manager" className="text-text-hint mb-1">
                  Sales Manager
                </label>
                <select
                  onChange={handleChange}
                  value={jobLead.salesManager}
                  name="salesManager"
                  className="flex justify-center items-center focus:ring-0 px-3 py-2  border border-neutral-500 rounded-lg outline-none w-full"
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
                <label htmlFor="bill_rate" className="text-text-hint mb-1">
                  Bill Rate
                </label>
                <input
                  onChange={handleChange}
                  value={jobLead.billRate}
                  name="billRate"
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
                <select
                  onChange={handleChange}
                  value={jobLead.payType}
                  name="payType"
                  className="flex justify-center items-center focus:ring-0 px-3 py-2  border border-neutral-500 rounded-lg outline-none w-full"
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
                <label htmlFor="state" className="text-text-hint mb-1">
                  State
                </label>
                <select
                  onChange={handleChange}
                  value={jobLead.state}
                  name="state"
                  className="flex justify-center items-center focus:ring-0 px-3 py-2  border border-neutral-500 rounded-lg outline-none w-full"
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
                  City
                </label>
                <select
                  onChange={handleChange}
                  value={jobLead.city}
                  name="city"
                  className="flex justify-center items-center focus:ring-0 px-3 py-2  border border-neutral-500 rounded-lg outline-none w-full"
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
              <div className="flex flex-col w-72">
                <label htmlFor="created_date" className="text-text-hint mb-1">
                  Ceated on
                </label>
                <input
                  onChange={handleChange}
                  value={jobLead.createdOn}
                  name="createdOn"
                  type="date"
                  id="created_date"
                  className="outline-none border-2 border-text-hint rounded-lg "
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col col-span-2">
                <label htmlFor="document_type" className="text-text-hint mb-1">
                  Status Reason
                </label>
                <textarea
                  onChange={handleChange}
                  value={jobLead.statusReason}
                  name="statusReason"
                  type="text"
                  placeholder="Status Reason"
                  id="document_type"
                  className="focus:outline-none border  rounded-lg "
                  rows={4}
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col w-72">
                <label htmlFor="job_contat" className="text-text-hint mb-1">
                  Job Contact Name
                </label>
                <input
                  onChange={handleChange}
                  value={jobLead.jobContactName}
                  name="jobContactName"
                  type="text"
                  placeholder="Job Contact Name"
                  id="job_contat"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
              <div className="flex flex-col w-72">
                <label htmlFor="job_email" className="text-text-hint mb-1">
                  Job Contact Email
                </label>
                <input
                  onChange={handleChange}
                  value={jobLead.jobContactEmail}
                  name="jobContactEmail"
                  type="text"
                  placeholder="Job Contact Email"
                  id="job_email"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
              <div className="flex flex-col w-72">
                <label htmlFor="job_phone" className="text-text-hint mb-1">
                  Job Contact Phone Number
                </label>
                <input
                  onChange={handleChange}
                  value={jobLead.jobContactPhoneNum}
                  name="jobContactPhoneNum"
                  type="text"
                  placeholder="Job Contact Phone Number "
                  id="job_phone"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col col-span-2 ">
                <label htmlFor="document_type" className="text-text-hint mb-1">
                  Job Description
                </label>
                <textarea
                  onChange={handleChange}
                  value={jobLead.jobDescription}
                  name="jobDescription"
                  type="text"
                  placeholder="Description"
                  id="document_type"
                  className="focus:outline-none border  rounded-lg "
                  rows={4}
                />
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
        <div className="flex items-center gap-2 p-3">
          <RxReload size={20} />
          <BsThreeDotsVertical size={20} />
          <div className="flex items-center gap-3 flex-grow p-3 border-2 border-gray-200 bg-gray-100 rounded-lg ">
            <FiSearch color="gray" size={20} />
            <input className="outline-none w-full h-full bg-gray-100" />
          </div>
          <button
            onClick={openModal}
            className="py-3 px-6 bg-secondary-700 text-white rounded-full"
          >
            Add Job
          </button>

          <Filter />
          {/* <div className="flex items-center text-teal-500 gap-2 py-2 px-4 border border-teal-500 rounded-full">
          <RiSoundModuleLine />
          <p>Filter</p>
        </div> */}
        </div>
        <div className="w-full overflow-x">
          <table class="table-auto overflow-scroll w-full">
            {/* Table headings */}
            <thead className="w-full">
              <tr className="grid grid-cols-11  text-left py-3 pl-3 pr-6 bg-secondary-50 text-sm">
                <th>Job Title</th>
                <th>Vendor</th>
                <th>Client</th>
                <th>Duration</th>
                <th>Bill Rate</th>
                <th>Sales Manager</th>
                <th>Job Location</th>
                <th>Created on</th>
                <th>Status Reason</th>
                <th className="col-span-2">Jon Contact</th>
              </tr>
            </thead>
            {/* table content/data */}
            <tbody
              className="flex flex-col items-center  overflow-y-scroll w-full h-screen"
              // style={{ height: "90vh" }}
            >
              {[1, 2, 3].map(() => (
                <tr className="grid grid-cols-11 justify-center items-center py-2 px-3 gap-1 border border-gray-200 text-left w-full text-sm">
                  <td className="">
                    <h3 className="text-base text-auxiliary-800">FrontEnd</h3>
                    <p className="text-text-hint">Data Engineer</p>
                  </td>
                  <td className="">Bessie Cooper</td>
                  <td className="">Jenny Wilson</td>
                  <td className="">12 month</td>

                  <td className="">124 USD</td>
                  <td className="">Sal Manar</td>
                  <td className="">
                    <h3>NY</h3>
                    <p className="text-text-hint text-xs">NY</p>
                  </td>
                  <td className="">10/10/2023</td>

                  <td className="py-2 border border-success-700 text-success-700 text-xs rounded-full flex justify-center items-center">
                    Completed
                  </td>

                  <td className="col-span-2">
                    <h3 className="text-auxiliary-800 text-base">
                      Bessie Cooper
                    </h3>
                    <p>bessiecooper@gmail.com</p>
                    <p>010-919-923-23</p>
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

export default JobLeads;
