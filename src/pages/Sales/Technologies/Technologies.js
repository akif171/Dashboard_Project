import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RxReload } from "react-icons/rx";
import { Link } from "react-router-dom";
import Pencil from "../../../images/pencil.png";
import Modal from "../../../components/ModalComponents/Modal";
import { createTechnology } from "../../../api/sales";

const Technologies = () => {
  const initialTechnology = {
    technologyName: "",
    terminology: "",
    description: "",
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [technology, setTechnology] = useState(initialTechnology);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTechnology((pervData) => ({
      ...pervData,
      [name]: value,
    }));
  };

  console.log(technology);

  const handleSubmit = async () => {
    const response = await createTechnology(technology);
    setTechnology(initialTechnology);
    closeModal();
  };

  return (
    <div className="p-5">
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="">
          <form className="flex flex-col gap-6 text-text-hint">
            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col w-72">
                <label
                  htmlFor="technology_name"
                  className="text-text-hint mb-1"
                >
                  Technology Name
                </label>
                <input
                  onChange={handleChange}
                  value={technology.technologyName}
                  name="technologyName"
                  type="text"
                  placeholder="Technology Name"
                  id="technology_name"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
              <div className="flex flex-col w-72">
                <label htmlFor="terminology" className="text-text-hint mb-1">
                  Terminology
                </label>
                <input
                  onChange={handleChange}
                  value={technology.terminology}
                  name="terminology"
                  type="text"
                  placeholder="Terminology"
                  id="terminology"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col col-span-3 ">
                <label htmlFor="document_type" className="text-text-hint mb-1">
                  Description
                </label>
                <textarea
                  onChange={handleChange}
                  value={technology.description}
                  name="description"
                  type="text"
                  placeholder="Description"
                  id="document_type"
                  className="focus:outline-none border  rounded-lg "
                  rows={4}
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col w-72">
                <label htmlFor="date" className="text-gray-300 mb-1">
                  Created - Date
                </label>
                <input
                  disabled
                  type="date"
                  id="date"
                  className="outline-none border-2 border-text-hint rounded-lg  disabled:border-gray-300   text-gray-300"
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
                  className="outline-none border-2 border-text-hint rounded-lg  disabled:border-gray-300   text-gray-300"
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
                  className="outline-none border-2 border-text-hint rounded-lg   disabled:border-gray-300 text-gray-300"
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
                  className="outline-none border-2 border-text-hint rounded-lg disabled:border-gray-300  text-gray-300"
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
          <div className="flex">
            <RxReload size={20} />
            <BsThreeDotsVertical size={20} />
          </div>

          <button
            onClick={openModal}
            className="py-3 px-6 bg-secondary-700 text-white rounded-full"
          >
            <span className="mr-3">+</span>
            Add Technologies
          </button>
        </div>
        <div className="w-full overflow-x">
          <table class="table-auto overflow-scroll w-full">
            {/* Table headings */}
            <thead className="w-full">
              <tr className="grid grid-cols-12  text-left py-3 pl-3 pr-6 bg-secondary-50 text-sm">
                <th className="col-span-3">Technology</th>

                <th className="col-span-9">Decription</th>
              </tr>
            </thead>
            {/* table content/data */}
            <tbody
              className="flex flex-col items-center  overflow-y-scroll w-full h-screen"
              // style={{ height: "90vh" }}
            >
              {[1, 2, 3].map(() => (
                <tr className="grid grid-cols-12 justify-center items-center py-2 px-3 gap-1 border border-gray-200 text-left w-full text-sm">
                  <td className="col-span-3">
                    <h3 className="text-base text-auxiliary-800">
                      InfoSys Technologies
                    </h3>
                  </td>
                  <td className="col-span-9">Consulting</td>
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

export default Technologies;
