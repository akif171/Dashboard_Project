import React, { useState } from "react";
import { RxReload } from "react-icons/rx";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { RiSoundModuleLine } from "react-icons/ri";
import StarRating from "../../components/StarRating";
import { Link } from "react-router-dom";
import QrCodeIcon from "../../images/Qr-code.png";
import Modal from "../../components/ModalComponents/Modal";

const Interviews = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="">
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col">
                <label htmlFor="course_name" className="text-text-hint mb-1">
                  Course Name
                </label>
                <input
                  type="text"
                  placeholder="Course Name"
                  id="course_name"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="course_name" className="text-text-hint mb-1">
                  Course Name
                </label>
                <input
                  type="text"
                  placeholder="Course Name"
                  id="course_name"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col">
                <label htmlFor="vendor" className="text-text-hint mb-1">
                  Vendor
                </label>
                <input
                  type="text"
                  placeholder="Vendor"
                  id="vendor"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="vendor" className="text-text-hint mb-1">
                  Vendor
                </label>
                <input
                  type="text"
                  placeholder="Vendor"
                  id="vendor"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="client" className="text-text-hint mb-1">
                  Client
                </label>
                <input
                  type="text"
                  placeholder="client"
                  id="client"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col">
                <label htmlFor="course_name" className="text-text-hint mb-1">
                  Course Name
                </label>
                <input
                  type="text"
                  placeholder="Course Name"
                  id="course_name"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="course_name" className="text-text-hint mb-1">
                  Course Name
                </label>
                <input
                  type="text"
                  placeholder="Course Name"
                  id="course_name"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col">
                <label htmlFor="course_name" className="text-text-hint mb-1">
                  Course Name
                </label>
                <input
                  type="text"
                  placeholder="Course Name"
                  id="course_name"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="course_name" className="text-text-hint mb-1">
                  Course Name
                </label>
                <input
                  type="text"
                  placeholder="Course Name"
                  id="course_name"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col">
                <label htmlFor="date" className="text-text-hint mb-1">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="outline-none border-2 border-text-hint rounded-lg "
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col ">
                <label htmlFor="document_type" className="text-text-hint mb-1">
                  Interview Panel Details
                </label>
                <textarea
                  type="text"
                  placeholder="Link"
                  id="document_type"
                  className="focus:outline-none border  rounded-lg "
                  rows={4}
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col col-span-3 ">
                <label htmlFor="document_type" className="text-text-hint mb-1">
                  FeedBack
                </label>
                <textarea
                  type="text"
                  placeholder="Link"
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
      <div className="border  border-gray-300 mt-5 rounded-lg ">
        <div className="flex justify-between items-center gap-2 p-3">
          <div className="flex items-center gap-3">
            <RxReload size={20} />
            {/* <BsThreeDotsVertical size={20} /> */}
          </div>
          {/* <div className="flex items-center gap-3 flex-grow p-3 border-2 border-gray-200 bg-gray-100 rounded-lg ">
        <FiSearch color="gray" size={20} />
        <input className="outline-none w-full h-full bg-gray-100" />
      </div> */}
          <div className="flex items-center ">
            <button
              onClick={openModal}
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
              <tr className="grid grid-cols-11 gap-1 text-left py-3 pl-3 pr-6 bg-secondary-50 text-sm">
                <th className="col-span-2">Job</th>
                <th>Technology</th>
                <th>Client</th>
                <th>Vendor</th>
                <th>Date</th>
                <th>Bill Rate</th>
                <th>Interviewer</th>
                <th>FeedBack</th>
                <th className="col-span-2">Status</th>
              </tr>
            </thead>
            {/* table content/data */}
            <tbody
              className="flex flex-col items-center justify-between overflow-y-scroll w-full h-screen"
              // style={{ height: "90vh" }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
                <tr
                  className={`grid grid-cols-11 justify-center items-center py-2 px-3 gap-1 border border-gray-200 text-left w-full text-sm`}
                >
                  <td className="flex gap-2 col-span-2">
                    <div>
                      <h3 className="text-auxiliary-800 text-base">
                        Sales Tech
                      </h3>
                      <p className="text-text-hint text-sm font-normal">
                        Salesforce
                      </p>
                    </div>
                  </td>
                  <td className="">Technology</td>
                  <td className="">
                    <h5 className="text-sm">InfraSol</h5>
                    <p className="text-xs text-text-hint">Jenny Wilson</p>
                  </td>
                  <td className="">Technology</td>
                  <td className="">10/10/2023</td>
                  <td className="">120</td>
                  <td className="">Jenny Wilson</td>
                  <td className="">
                    <StarRating initialRating={3} fontSize={18} />
                  </td>

                  <td className="col-span-2 flex  justify-between">
                    <p className="py-2 px-5 border border-success-700 text-success-700 text-xs rounded-full ">
                      Remote
                    </p>
                    <img
                      className="w-6 h-6"
                      src={QrCodeIcon}
                      alt="qr code icon"
                    />
                  </td>
                  {/* <td className=" text-xs">
                    <p className="flex gap-3">
                      <span>12</span>
                      <span className="text-text-hint">Months</span>
                    </p>
                  </td>
                  <td className="py-2 border border-success-700 text-success-700 text-xs rounded-full flex justify-center items-center">
                    Employed
                  </td> */}
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

export default Interviews;
