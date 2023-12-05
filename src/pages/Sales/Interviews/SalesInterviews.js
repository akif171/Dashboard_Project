import React, { useState } from "react";
import Modal from "../../../components/ModalComponents/Modal";
import { RxReload } from "react-icons/rx";
import StarRating from "../../../components/StarRating";
import QrCode from "../../../images/Qr-code.png";
import { createSalesInterview } from "../../../api/sales";

const options = [
  { value: "", text: "--Choose an option--" },
  { value: "option1", text: "option1" },
  { value: "option2", text: "option2" },
  { value: "option3", text: "option3" },
  { value: "option4", text: "option4" },
  { value: "option5", text: "option5" },
];

const SalesInterviews = () => {
  const initialSalesInterview = {
    job: "",
    jobTitle: "",
    candidateName: "",
    technology: "",
    vendor: "",
    clientCompany: "",
    clientName: "",
    createdOn: "",
    interviewer1: "",
    interviewer2: "",
    jobDescription: "",
    link: "",
    interviewStatus: "",
    rating: 0,
    feedBack: "",
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [salesInterview, setSalesInterview] = useState(initialSalesInterview);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onRatingChange = (rating) => {
    setSalesInterview((pervData) => ({
      ...pervData,
      rating: rating,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSalesInterview((pervData) => ({
      ...pervData,
      [name]: value,
    }));
  };

  console.log(salesInterview);

  const handleSubmit = async () => {
    const response = await createSalesInterview(salesInterview);
    closeModal();
    setSalesInterview(initialSalesInterview);
  };

  return (
    <div className="p-5 ">
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="">
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col w-72">
                <label htmlFor="job" className="text-text-hint mb-1">
                  Job
                </label>
                <input
                  onChange={handleChange}
                  value={salesInterview.job}
                  name="job"
                  type="text"
                  placeholder="Job"
                  id="job"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
              <div className="flex flex-col w-72">
                <label htmlFor="job_title" className="text-text-hint mb-1">
                  Job Title
                </label>
                <input
                  onChange={handleChange}
                  value={salesInterview.jobTitle}
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
                <label htmlFor="cnadidate_name" className="text-text-hint mb-1">
                  Candidate Name
                </label>
                <select
                  onChange={handleChange}
                  value={salesInterview.candidateName}
                  name="candidateName"
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
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col w-72">
                <label htmlFor="technology" className="text-text-hint mb-1">
                  Technology
                </label>
                <select
                  onChange={handleChange}
                  value={salesInterview.technology}
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
                <label htmlFor="vendor" className="text-text-hint mb-1">
                  Vendor
                </label>
                <select
                  onChange={handleChange}
                  value={salesInterview.vendor}
                  name="vendor"
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
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col w-72">
                <label htmlFor="client_company" className="text-text-hint mb-1">
                  Client Company
                </label>
                <input
                  onChange={handleChange}
                  value={salesInterview.clientCompany}
                  name="clientCompany"
                  type="text"
                  placeholder="Client Company"
                  id="client_company"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
              <div className="flex flex-col w-72">
                <label htmlFor="client_name" className="text-text-hint mb-1">
                  Client Name
                </label>
                <input
                  onChange={handleChange}
                  value={salesInterview.clientName}
                  name="clientName"
                  type="text"
                  placeholder="Client Name"
                  id="client_name"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col w-72">
                <label htmlFor="created_date" className="text-text-hint mb-1">
                  Ceated on
                </label>
                <input
                  onChange={handleChange}
                  value={salesInterview.createdOn}
                  name="createdOn"
                  type="date"
                  id="created_date"
                  className="outline-none border-2 border-text-hint rounded-lg "
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col w-72">
                <label htmlFor="interviewer_1" className="text-text-hint mb-1">
                  Interviewer 1
                </label>
                <input
                  onChange={handleChange}
                  value={salesInterview.interviewer1}
                  name="interviewer1"
                  type="text"
                  placeholder="Interviewer 1"
                  id="interviewer_1"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
              <div className="flex flex-col w-72">
                <label htmlFor="interviewer_2" className="text-text-hint mb-1">
                  Interviewer 2
                </label>
                <input
                  onChange={handleChange}
                  value={salesInterview.interviewer2}
                  name="interviewer2"
                  type="text"
                  placeholder="Interviewer 2"
                  id="interviewer_2"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col col-span-3 ">
                <label htmlFor="document_type" className="text-text-hint mb-1">
                  Job Description
                </label>
                <textarea
                  onChange={handleChange}
                  value={salesInterview.jobDescription}
                  name="jobDescription"
                  type="text"
                  placeholder="Description"
                  id="document_type"
                  className="focus:outline-none border  rounded-lg "
                  rows={4}
                />
              </div>
            </div>
            <div className="flex flex-col justify-between w-96 gap-5">
              <div className="flex flex-col ">
                <label htmlFor="add_link" className="text-text-hint mb-1">
                  Add Link
                </label>
                <input
                  onChange={handleChange}
                  value={salesInterview.link}
                  name="link"
                  type="text"
                  placeholder="Link"
                  id="add_link"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
              <div>
                <button className=" bg-secondary-50 text-secondary-800 rounded-full py-2 px-6">
                  <span className="pr-3">+</span>
                  Add Links Available
                </button>
              </div>
            </div>
            <div className="">
              <div className="w-96">
                <label className="text-text-hint ">Interview Status</label>
                <ul className="grid grid-cols-3 mt-1">
                  <li className="relative">
                    <input
                      onChange={handleChange}
                      checked={salesInterview.interviewStatus === "InPrgress"}
                      className="sr-only peer"
                      type="radio"
                      value="InPrgress"
                      name="interviewStatus"
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
                      onChange={handleChange}
                      checked={salesInterview.interviewStatus === "ShortListed"}
                      className="sr-only peer"
                      type="radio"
                      value="ShortListed"
                      name="interviewStatus"
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
                      onChange={handleChange}
                      checked={
                        salesInterview.interviewStatus === "Not Selected"
                      }
                      className="sr-only peer"
                      type="radio"
                      value="Not Selected"
                      name="interviewStatus"
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
            <div>
              <h3>Rating</h3>
              <StarRating
                initialRating={salesInterview.rating}
                fontSize={24}
                onRatingChange={onRatingChange}
              />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col col-span-3 ">
                <label htmlFor="feedback" className="text-text-hint mb-1">
                  Feedback
                </label>
                <textarea
                  onChange={handleChange}
                  value={salesInterview.feedBack}
                  name="feedBack"
                  type="text"
                  placeholder="Feedback"
                  id="feedback"
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
        <div className="flex justify-between items-center gap-2 p-3">
          <RxReload size={20} />

          <button
            onClick={openModal}
            className="py-3 px-6 bg-secondary-700 text-white rounded-full"
          >
            <span className="mr-3">+</span>
            Add New Interview
          </button>
        </div>
        <div className="w-full overflow-x">
          <table class="table-auto overflow-scroll w-full">
            {/* Table headings */}
            <thead className="w-full">
              <tr className="grid grid-cols-10  text-left py-3 pl-3 pr-6 bg-secondary-50 text-sm">
                <th>Job</th>
                <th>Candidate</th>
                <th>Technology</th>
                <th>Client</th>
                <th>Vendor</th>
                <th>Created on</th>
                <th>Bill Rate</th>
                <th>Interviewer</th>
                <th>Rating</th>
                <th>Feedback</th>
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
                    <h3 className="text-base text-auxiliary-800">FrontEnd</h3>
                    <p className="text-text-hint">Data Engineer</p>
                  </td>
                  <td className="">Bessie Cooper</td>
                  <td className="">Technology</td>
                  <td className="">
                    <h3>Jenny Wilson</h3>
                    <p className="text-xs text-text-hint w-">salesforce</p>
                  </td>

                  <td className="">Technology</td>
                  <td className="">10/10/2023</td>
                  <td className="">124</td>
                  <td className="">Jenny Wilson</td>
                  <td>
                    <StarRating fontSize={16} initialRating={3} />
                  </td>
                  <td className="flex justify-between w-full">
                    <p>Good</p>
                    <img src={QrCode} alt="qr-code" />
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

export default SalesInterviews;
