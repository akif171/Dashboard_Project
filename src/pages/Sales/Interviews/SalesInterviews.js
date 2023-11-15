import React, { useState } from "react";
import Modal from "../../../components/ModalComponents/Modal";
import { RxReload } from "react-icons/rx";
import StarRating from "../../../components/StarRating";
import QrCode from "../../../images/Qr-code.png";

const SalesInterviews = () => {
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
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col w-72">
                <label htmlFor="job" className="text-text-hint mb-1">
                  Job
                </label>
                <input
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
                  type="text"
                  placeholder="Job Title"
                  id="job_title"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col w-72">
                <label htmlFor="client" className="text-text-hint mb-1">
                  Client
                </label>
                <input
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
                <input
                  type="text"
                  placeholder="Technology"
                  id="technology"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
            
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col w-72">
                <label htmlFor="sales_manager" className="text-text-hint mb-1">
                  Sales Manager
                </label>
                <input
                  type="text"
                  placeholder="Sales Manager"
                  id="sales_manager"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
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
              
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col w-72">
                <label htmlFor="state" className="text-text-hint mb-1">
                  State
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
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col w-72">
                <label htmlFor="created_date" className="text-text-hint mb-1">
                  Ceated on
                </label>
                <input
                  type="date"
                  id="created_date"
                  className="outline-none border-2 border-text-hint rounded-lg "
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col col-span-2">
                <label htmlFor="document_type" className="text-text-hint mb-1">
                  Status Reason
                </label>
                <textarea
                  type="text"
                  placeholder="Status Reason"
                  id="document_type"
                  className="focus:outline-none border  rounded-lg "
                  rows={4}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col w-72">
                <label htmlFor="job_contat" className="text-text-hint mb-1">
                  Job Contact Name
                </label>
                <input
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
                  type="text"
                  placeholder="Job Contact Email"
                  id="job_email"
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
