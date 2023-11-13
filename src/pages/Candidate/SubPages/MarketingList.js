import React, { useState } from "react";
import { RxReload } from "react-icons/rx";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { RiSoundModuleLine } from "react-icons/ri";
import StarRating from "../../../components/StarRating";
import { Link } from "react-router-dom";
import Modal from "../../../components/ModalComponents/Modal";

const tabelHeadArr = [
  "Sales Manager",
  "Sales Start Date",
  "Sales End Date",
  "Jobs Applied",
  "Interview Attend",
  "Sales Person",
  "Marketing Status",
];

const MarketingList = () => {
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
          <form className="flex flex-col gap-6 ">
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label htmlFor="sales_manager" className="text-text-hint mb-1">
                  Sales Manager
                </label>
                <input
                  type="text"
                  placeholder="Sales manager"
                  id="sales_manager"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="sales_person" className="text-text-hint mb-1">
                  Sales Person
                </label>
                <input
                  type="text"
                  placeholder="Sales Person"
                  id="sales_person"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label
                  htmlFor="sales_start_date"
                  className="text-text-hint mb-1"
                >
                  Sales Start Date
                </label>
                <input
                  type="date"
                  id="sales_start_date"
                  className="outline-none border-2 border-text-hint rounded-lg "
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="sales_end_date" className="text-text-hint mb-1">
                  Sales End Date
                </label>
                <input
                  type="date"
                  id="sales_end_date"
                  className="outline-none border-2 border-text-hint rounded-lg "
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label htmlFor="jobs_applied" className="text-text-hint mb-1">
                  Jobs Applied
                </label>
                <input
                  type="text"
                  placeholder="Sales manager"
                  id="jobs_applied"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="interview_attended"
                  className="text-text-hint mb-1"
                >
                  Interview Attended
                </label>
                <input
                  type="text"
                  placeholder="Interview Attended"
                  id="interview_attended"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
            </div>

            <div className="">
              <div className="w-96">
                <label className="text-text-hint ">Marketing Status</label>
                <ul className="grid grid-cols-3 mt-1">
                  <li className="relative">
                    <input
                      className="sr-only peer"
                      type="radio"
                      value="In Progress"
                      name="marketing_status"
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
                      className="sr-only peer"
                      type="radio"
                      value="shortlisted"
                      name="marketing_status"
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
                      className="sr-only peer"
                      type="radio"
                      value="Not Selected"
                      name="marketing_status"
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
              onClick={closeModal}
              className="bg-secondary-700 text-text-light py-2 px-5 rounded-full"
            >
              Save
            </button>
          </div>
        </div>
      </Modal>
      <div className="border border-gray-300 mt-5 rounded-lg ">
        <div className="flex justify-between items-center gap-2 p-3">
          <div className="flex ">
            <RxReload size={20} />
            <BsThreeDotsVertical size={20} />
          </div>
          <div>
            <div className="flex items-center ">
              <button
                onClick={openModal}
                className=" bg-secondary-700 text-white py-2 px-5 rounded-full font-normal"
              >
                <span className="text-lg mr-3">+</span>
                Active Marketing
              </button>
            </div>
          </div>
        </div>
        <div className="w-full overflow-x">
          <table class="table-auto overflow-scroll w-full">
            {/* Table headings */}
            <thead className="w-full">
              <tr className="grid grid-cols-7 items-center w-full text-left text-sm py-3 pl-3 pr-6 bg-secondary-50">
                {tabelHeadArr.map((heading) => (
                  <th>{heading}</th>
                ))}
              </tr>
            </thead>
            {/* table content/data */}
            <tbody className="flex flex-col items-center overflow-y-scroll w-full h-screen">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(() => (
                <tr className="grid grid-cols-7 items-center py-2 px-3 border border-gray-200 text-left w-full text-sm">
                  <td className="text-auxiliary-800">Bessie Cooper</td>
                  <td>10/10/10</td>
                  <td>10/10/10</td>
                  <td>
                    <div className=" px-6 py-3 bg-secondary-50 rounded-full justify-start items-center gap-2 inline-flex text-success-700 text-xs font-medium  leading-none">
                      12
                    </div>
                  </td>
                  <td>
                    <div className="px-6 py-3 bg-secondary-100 rounded-full justify-start items-center  inline-flex text-success-700 text-xs font-medium  leading-none">
                      12
                    </div>
                  </td>
                  <td>Floyed Miles</td>
                  <td>
                    <div className="px-6 py-3 rounded-full border border-success-700 justify-start items-center inline-flex text-success-700 text-xs font-medium leading-none">
                      Employed
                    </div>
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

export default MarketingList;
