import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { RiSoundModuleLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const filterArr = [
  "Status",
  "Marketing",
  "Interviews",
  "Sales Person",
  "Woerk Status",
  "Job Title",
  "Technology",
];

export default function SettingsPopUp() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className="flex items-center">
        <Menu.Button className="">
          <BsThreeDotsVertical size={20} />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute  left-0 z-10 mt-2 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="flex flex-col gap-4 p-2">
            {/* {filterArr.map((item, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    {item}
                  </a>
                )}
              </Menu.Item>
            ))} */}
            <div className="flex gap-4 ">
              <h3 className="text-text-hint w-24">User Name</h3>
              <p className="font-medium">Robert Cooper</p>
            </div>
            <div className="flex gap-4 ">
              <h3 className="text-text-hint w-24">User ID</h3>
              <p className="font-medium">1237869</p>
            </div>
            <div className="flex gap-4 ">
              <h3 className="text-text-hint w-24">Roles</h3>
              <p className="font-medium">Sales Manager</p>
            </div>
            <div className="flex gap-4 ">
              <h3 className="text-text-hint w-24">Last Sign In</h3>
              <p className="font-medium">
                <span>10/10/2023</span>
                <br></br>
                <span>10:00 PM</span>
              </p>
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
