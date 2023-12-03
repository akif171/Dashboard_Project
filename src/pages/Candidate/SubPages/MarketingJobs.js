import React, { useState } from "react";
import { RxReload } from "react-icons/rx";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { RiSoundModuleLine } from "react-icons/ri";
import StarRating from "../../../components/StarRating";
import { Link } from "react-router-dom";
import Modal from "../../../components/ModalComponents/Modal";
import Dropdown from "../../../components/Dropdown";
import { createMarketingJob } from "../../../api/candidiate";

const MarketingJobs = () => {
  const initialMarketingJobs = {
    jobId: "",
    jobTitle: "",
    vendorName: "",
    vendorEmail: "",
    vendorNumber: "",
    technology: "",
    city: "",
    state: "",
    jobType: "",
    salesPerson: "",
    billRate: "",
    duration: "",
    status: "",
  };

  const [marketingJob, setMarketingJob] = useState(initialMarketingJobs);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonId, setButtonId] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddJobsModal = () => {
    setButtonId("add-jobs");
    openModal();
  };
  const handleNewInterviewModal = () => {
    setButtonId("add-new-modal");
    openModal();
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setMarketingJob((pervDate) => ({
      ...pervDate,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const response = await createMarketingJob(marketingJob);
    closeModal();
  };

  console.log(marketingJob);
  return (
    <div>
      {buttonId === "add-jobs" ? (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className="">
            <form className="flex flex-col gap-6 ">
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col w-72">
                  <label htmlFor="job_id" className="text-text-hint mb-1">
                    Job ID
                  </label>
                  <input
                    onChange={handleChange}
                    value={marketingJob.jobId}
                    name="jobId"
                    type="text"
                    placeholder="Job ID"
                    id="job_id"
                    className="outline-none border-2 border-secondary-500 rounded-lg "
                  />
                </div>
                <div className="flex flex-col w-72">
                  <label htmlFor="job_title" className="text-text-hint mb-1">
                    Job Title
                  </label>
                  <input
                    onChange={handleChange}
                    value={marketingJob.jobTitle}
                    name="jobTitle"
                    type="text"
                    placeholder="Job Title"
                    id="job_title"
                    className="outline-none border-2 border-secondary-500 rounded-lg "
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col w-72">
                  <label htmlFor="vendor_name" className="text-text-hint mb-1">
                    Vendor Name
                  </label>
                  <input
                    onChange={handleChange}
                    value={marketingJob.vendorName}
                    name="vendorName"
                    type="text"
                    placeholder="Vendor Name"
                    id="vendor_name"
                    className="outline-none border-2 border-secondary-500 rounded-lg "
                  />
                </div>
                <div className="flex flex-col w-72">
                  <label htmlFor="vendor_email" className="text-text-hint mb-1">
                    Vendor Email
                  </label>
                  <input
                    onChange={handleChange}
                    value={marketingJob.vendorEmail}
                    name="vendorEmail"
                    type="text"
                    placeholder="Vendor Email"
                    id="vendor_email"
                    className="outline-none border-2 border-secondary-500 rounded-lg "
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col w-72">
                  <label htmlFor="city" className="text-text-hint mb-1">
                    Vendor Number
                  </label>
                  <input
                    onChange={handleChange}
                    value={marketingJob.vendorNumber}
                    name="vendorNumber"
                    type="text"
                    placeholder="Vendor Number"
                    id="city"
                    className="outline-none border-2 border-secondary-500 rounded-lg "
                  />
                </div>
                <div className="flex flex-col w-72">
                  <label htmlFor="technology" className="text-text-hint mb-1">
                    Technology
                  </label>
                  <input
                    onChange={handleChange}
                    value={marketingJob.technology}
                    name="technology"
                    type="text"
                    placeholder="Technology"
                    id="technology"
                    className="outline-none border-2 border-secondary-500 rounded-lg "
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col w-72">
                  <label htmlFor="city" className="text-text-hint mb-1">
                    City
                  </label>
                  <input
                    onChange={handleChange}
                    value={marketingJob.city}
                    name="city"
                    type="text"
                    placeholder="City"
                    id="city"
                    className="outline-none border-2 border-secondary-500 rounded-lg "
                  />
                </div>
                <div className="flex flex-col w-72">
                  <label htmlFor="state" className="text-text-hint mb-1">
                    State
                  </label>
                  <input
                    onChange={handleChange}
                    value={marketingJob.state}
                    name="state"
                    type="text"
                    placeholder="State"
                    id="state"
                    className="outline-none border-2 border-secondary-500 rounded-lg "
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="">
                  <div className="w-64">
                    <label className="text-text-hint ">Job Type</label>
                    <ul className="grid grid-cols-3 mt-1">
                      <li className="relative">
                        <input
                          onChange={handleChange}
                          checked={marketingJob.jobType === "Remote"}
                          className="sr-only peer"
                          type="radio"
                          value="Remote"
                          name="jobType"
                          id="remote"
                        />
                        <label
                          className="flex justify-center items-center py-2 px-3 text-sm text-text-hint bg-white border border-secondary-800 rounded-tl-full rounded-bl-full cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:bg-secondary-500 peer-checked:text-white peer-checked:border-secondary-800"
                          htmlFor="remote"
                        >
                          Remote
                        </label>
                      </li>
                      <li className="relative">
                        <input
                          onChange={handleChange}
                          checked={marketingJob.jobType === "On-Site"}
                          className="sr-only peer"
                          type="radio"
                          value="On-Site"
                          name="jobType"
                          id="on-site"
                        />
                        <label
                          className="flex justify-center items-center py-2 px-3 text-sm text-text-hint bg-white border border-t-secondary-800 border-b-secondary-800 cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:bg-secondary-500 peer-checked:text-white peer-checked:border-secondary-800"
                          htmlFor="on-site"
                        >
                          On-Site
                        </label>
                      </li>

                      <li className="relative">
                        <input
                          onChange={handleChange}
                          checked={marketingJob.jobType === "Hybrid"}
                          className="sr-only peer"
                          type="radio"
                          value="Hybrid"
                          name="jobType"
                          id="hybrid"
                        />
                        <label
                          className="flex justify-center items-center py-2 px-3 text-sm text-text-hint bg-white border border-secondary-800 rounded-tr-full rounded-br-full cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:bg-secondary-500 peer-checked:text-white peer-checked:border-secondary-800"
                          htmlFor="hybrid"
                        >
                          Hybrid
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="sales-person" className="text-text-hint mb-1">
                    Sales Person
                  </label>
                  <input
                    onChange={handleChange}
                    value={marketingJob.salesPerson}
                    name="salesPerson"
                    type="text"
                    placeholder="Sales Person"
                    id="sales-person"
                    className="outline-none border-2 border-secondary-500 rounded-lg "
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col w-72">
                  <label htmlFor="bill-rate" className="text-text-hint mb-1">
                    Bill Rate
                  </label>
                  <input
                    onChange={handleChange}
                    value={marketingJob.billRate}
                    name="billRate"
                    type="text"
                    placeholder="Bill Rate"
                    id="bill-rate"
                    className="outline-none border-2 border-secondary-500 rounded-lg "
                  />
                </div>
                <div className="flex flex-col w-72">
                  <label htmlFor="duration" className="text-text-hint mb-1">
                    Duration
                  </label>
                  <input
                    onChange={handleChange}
                    value={marketingJob.duration}
                    name="duration"
                    type="text"
                    placeholder="Duration"
                    id="duration"
                    className="outline-none border-2 border-secondary-500 rounded-lg "
                  />
                </div>
              </div>
              <div className="">
                <div className="w-96">
                  <label className="text-text-hint "> Status</label>
                  <ul className="grid grid-cols-3 mt-1">
                    <li className="relative">
                      <input
                        onChange={handleChange}
                        checked={marketingJob.status === "In Progress"}
                        className="sr-only peer"
                        type="radio"
                        value="In Progress"
                        name="status"
                        id="not_completed"
                      />
                      <label
                        className="flex justify-center items-center py-2 px-3 text-sm text-text-hint bg-white border border-secondary-800 rounded-tl-full rounded-bl-full cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:bg-secondary-500 peer-checked:text-white peer-checked:border-secondary-800"
                        htmlFor="not_completed"
                      >
                        In Progress
                      </label>
                    </li>
                    <li className="relative">
                      <input
                        onChange={handleChange}
                        checked={marketingJob.status === "shortlisted"}
                        className="sr-only peer"
                        type="radio"
                        value="shortlisted"
                        name="status"
                        id="in_progress"
                      />
                      <label
                        className="flex justify-center items-center py-2 px-3 text-sm text-text-hint bg-white border border-t-secondary-800 border-b-secondary-800 cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:bg-secondary-500 peer-checked:text-white peer-checked:border-secondary-800"
                        htmlFor="in_progress"
                      >
                        Shortlisted
                      </label>
                    </li>

                    <li className="relative">
                      <input
                        onChange={handleChange}
                        checked={marketingJob.status === "Not Selected"}
                        className="sr-only peer"
                        type="radio"
                        value="Not Selected"
                        name="status"
                        id="completed"
                      />
                      <label
                        className="flex justify-center items-center py-2 px-3 text-sm text-text-hint bg-white border border-secondary-800 rounded-tr-full rounded-br-full cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:bg-secondary-500 peer-checked:text-white peer-checked:border-secondary-800"
                        htmlFor="completed"
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
                onClick={handleSubmit}
                className="bg-secondary-700 text-text-light py-2 px-5 rounded-full"
              >
                Save
              </button>
            </div>
          </div>
        </Modal>
      ) : (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className="">
            <form className="flex flex-col gap-7 ">
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col  ">
                  <label
                    htmlFor="interview_date"
                    className="text-text-hint mb-1"
                  >
                    Interview Date
                  </label>
                  <input
                    type="date"
                    id="interview_date"
                    className="outline-none border-2 border-text-hint rounded-lg "
                  />
                </div>

                <div className="flex flex-col ">
                  <label
                    htmlFor="interview_time"
                    className="text-text-hint mb-1"
                  >
                    Interview Time
                  </label>
                  <div className="flex outline-none border-2 border-text-hint rounded-lg px-1">
                    <input
                      type="time"
                      id="interview_time"
                      className="outline-none border-none focus:ring-0"
                    />{" "}
                    <input
                      type="text"
                      id="interview_time"
                      placeholder="IST"
                      className="outline-none border-none focus:ring-0"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col ">
                  <label
                    htmlFor="appointment_details"
                    className="text-text-hint mb-1"
                  >
                    Appointment Details
                  </label>
                  <textarea
                    type="text"
                    placeholder="Appointment Details"
                    id="appointment_details"
                    className="focus:outline-none border  rounded-lg "
                    rows={4}
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <button className=" bg-secondary-50 text-secondary-800 rounded-full py-2 px-6">
                      <span className="pr-3">+</span>
                      Add Links Available
                    </button>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="add_link" className="text-text-hint mb-1">
                      Add Link
                    </label>
                    <input
                      type="text"
                      placeholder="Link"
                      id="add_link"
                      className="outline-none border-2 border-secondary-500 rounded-lg "
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col ">
                  <label
                    htmlFor="interview-panel"
                    className="text-text-hint mb-1"
                  >
                    Interview Panel Details
                  </label>
                  <textarea
                    type="text"
                    placeholder="Interview Panel Details"
                    id="interview-panel"
                    className="focus:outline-none border  rounded-lg "
                    rows={4}
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <button className=" bg-secondary-50 text-secondary-800 rounded-full py-2 px-6">
                      <span className="pr-3">+</span>
                      Add Links Available
                    </button>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="add_link" className="text-text-hint mb-1">
                      Add Link
                    </label>
                    <input
                      type="text"
                      placeholder="Link"
                      id="add_link"
                      className="outline-none border-2 border-secondary-500 rounded-lg "
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col ">
                <label htmlFor="feedback" className="text-text-hint mb-1">
                  FeedBack
                </label>
                <textarea
                  type="text"
                  placeholder="FeedBack"
                  id="feedback"
                  className="focus:outline-none border  rounded-lg "
                  rows={4}
                />
              </div>
              <div>
                <label className="text-text-hint mb-1">Rating</label>
                <StarRating initialRating={3} fontSize={24} />
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
      )}

      <div className="border  border-gray-300 mt-5 rounded-lg ">
        <div className="flex justify-between items-center gap-2 p-3">
          <div className="flex items-center gap-3">
            <RxReload size={20} />
            <BsThreeDotsVertical size={20} />
          </div>
          <div className="flex items-center gap-5">
            <Dropdown />
            <button
              onClick={handleAddJobsModal}
              id="add_jobs"
              className=" border border-secondary-700 text-secondary-700 bg-white py-2 px-5 rounded-full font-normal "
            >
              <span className="text-lg mr-3">+</span>
              Add Jobs
            </button>
            <button
              onClick={handleNewInterviewModal}
              id="add_new_interview"
              className=" bg-secondary-700 text-white py-2 px-5 rounded-full font-normal"
            >
              <span className="text-lg mr-3">+</span>
              Add New Interview
            </button>
          </div>
        </div>
        <div className="w-full overflow-x">
          <table class="table-auto overflow-scroll w-full">
            {/* Table headings */}
            <thead className="w-full">
              <tr className="grid grid-cols-11 gap-1 text-left py-3 pl-3 pr-6 bg-secondary-50 text-xs">
                <th className="col-span-2">Job</th>
                <th className="col-span-2">Vendor Info</th>
                <th>Technology</th>
                <th>Location</th>
                <th>Job Type</th>
                <th>Bill Rate</th>
                <th>Duration</th>
                <th>Sales Person</th>
                <th>Status</th>
              </tr>
            </thead>
            {/* table content/data */}
            <tbody
              className="flex flex-col items-center justify-between overflow-y-scroll w-full h-screen"
              // style={{ height: "90vh" }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
                <tr
                  className={`grid grid-cols-11 justify-center items-center py-2 px-3 gap-1 border border-gray-200 text-left w-full text-sm  
                  `}
                  // ${
                  //   isActive ? "bg-auxiliary-50" : "bg-white"
                  // }
                >
                  <td className="flex gap-2 col-span-2">
                    <div>
                      <input
                        type="checkbox"
                        className="rounded form-checkbox focus:outline-none focus-visible:outline-none  "
                        // onClick={(e) => handleCheck(e.target.checked)}
                      />
                    </div>
                    <div>
                      <h3 className="text-auxiliary-800 text-base">
                        Bessie Cooper
                      </h3>
                      <p className="text-text-hint break-words font-normal">
                        Back-End <br></br> Developer
                      </p>
                    </div>
                  </td>
                  <td className="col-span-2">
                    <h5 className="text-sm">Miles Esther</h5>
                    <p className="text-xs text-text-hint">
                      bessiecooper@gmail.com
                    </p>
                    <p className="text-xs text-text-hint">10/10/10</p>
                  </td>
                  <td className="">Technology</td>
                  <td className="">
                    <h5 className="text-sm">City</h5>
                    <p className="text-xs text-text-hint">State</p>
                  </td>
                  <td className="py-2 border border-success-700 text-success-700 text-xs rounded-full flex justify-center items-center">
                    Remote
                  </td>
                  <td className="pl-3">120</td>
                  <td className=" text-xs">
                    <p className="flex gap-3">
                      <span>12</span>
                      <span className="text-text-hint">Months</span>
                    </p>
                  </td>
                  <td className="text-sm pl-3">Person</td>
                  <td className="py-2 border border-success-700 text-success-700 text-xs rounded-full flex justify-center items-center">
                    Employed
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

export default MarketingJobs;
