import React, { useState } from "react";
import Modal from "../../components/ModalComponents/Modal";
import { RxReload } from "react-icons/rx";
import { BsThreeDotsVertical } from "react-icons/bs";

const Users = () => {
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
                <label htmlFor="last_name" className="text-text-hint mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  id="last_name"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>

              <div className="flex flex-col w-72">
                <label htmlFor="job_title" className="text-text-hint mb-1">
                  User ID
                </label>
                <input
                  type="text"
                  placeholder="user id"
                  id="job_title"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-5">
              <div className="">
                <label className="">Email ID</label>
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
                <label htmlFor="first_name" className="text-text-hint mb-1">
                  Role
                </label>
                <input
                  type="text"
                  placeholder="role"
                  id="first_name"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
              <div className="flex flex-col w-72">
                <label htmlFor="middle_name" className="text-text-hint mb-1">
                  Login Type
                </label>
                <input
                  type="text"
                  placeholder="login type"
                  id="middle_name"
                  className="outline-none border-2 border-secondary-500 rounded-lg "
                />
              </div>
             
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="">
                <label>User Status</label>
                <ul className="grid grid-cols-3 mt-1">
                  <li className="relative">
                    <input
                      className="sr-only peer"
                      type="radio"
                      value="Active"
                      name="user_status"
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
                      value="completed"
                      name="user_status"
                      id="inactive"
                    />
                    <label
                      className="flex justify-center items-center py-2 px-3 bg-white  border border-secondary-800 rounded-tr-full rounded-br-full cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:bg-secondary-500 peer-checked:text-white peer-checked:border-secondary-800"
                      htmlFor="inactive"
                    >
                      Inactive
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
            Add User
          </button>
        </div>
        <div className="w-full overflow-x">
          <table class="table-auto overflow-scroll w-full">
            {/* Table headings */}
            <thead className="w-full">
              <tr className="grid grid-cols-9  text-left py-3 pl-3 pr-6 bg-secondary-50 text-sm">
                <th>Name (User ID)</th>
                <th>Email ID</th>
                <th>Login Type</th>
                <th>Role</th>
                <th>Created By</th>
                <th>Date Created</th>
                <th>Updated By</th>
                <th>Updated Date</th>
                <th>Status</th>
              </tr>
            </thead>
            {/* table content/data */}
            <tbody
              className="flex flex-col items-center  overflow-y-scroll w-full h-screen"
              // style={{ height: "90vh" }}
            >
              {[1, 2, 3].map(() => (
                <tr className="grid grid-cols-9 justify-center items-center py-2 px-3 gap-1 border border-gray-200 text-left w-full text-sm">
                  <td className="">
                    <h3 className="text-base text-auxiliary-800">Some Name</h3>
                    <p className="text-text-hint text-xs">salesforce</p>
                  </td>
                  <td className="">
                    <p className="truncate">bessiecooper@gmail.com</p>
                  </td>
                  <td className="">Type</td>
                  <td className="">Sales</td>
                  <td className="">Sam</td>
                  <td className="">10/10/10</td>
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

export default Users;
