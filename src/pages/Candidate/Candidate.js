import React, { useState } from "react";
import { RxReload } from "react-icons/rx";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { RiSoundModuleLine } from "react-icons/ri";
import StarRating from "../../components/StarRating";
import { Link } from "react-router-dom";

const Candidate = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="p-5 ">
      <div className="flex items-center justify-between">
        <h5>Candidate</h5>
        <Link to={`add-candidate`} className="bg-teal-500 text-white py-2 px-4 rounded-full">
          Add Candidate
        </Link>
      </div>
      <div className="border border-gray-300 mt-5 rounded-lg ">
        <div className="flex items-center gap-2 p-3">
          <RxReload size={20} />
          <BsThreeDotsVertical size={20} />
          <div className="flex items-center gap-3 flex-grow p-3 border-2 border-gray-200 bg-gray-100 rounded-lg ">
            <FiSearch color="gray" size={20} />
            <input className="outline-none w-full h-full bg-gray-100" />
          </div>
          <div className="flex items-center text-teal-500 gap-2 py-2 px-4 border border-teal-500 rounded-full">
            <RiSoundModuleLine />
            <p>Filter</p>
          </div>
          <div className="flex items-center text-teal-500 gap-2 py-2 px-4 border border-teal-500 rounded-full">
            <RiSoundModuleLine />
            <p>Filter</p>
          </div>
        </div>
        {/* Grid table start */}
        {/* <div className="grid grid-cols-9 py-2 px-3 bg-teal-200 gap-1">
          <div className="col-span-2">Candidate</div>
          <div className="">Technology</div>
          <div className="">Job Title</div>
          <div className="">Worl Status</div>
          <div className="">Sales Person</div>
          <div className="">Interviews</div>
          <div className="">Marketing</div>
          <div className="">Status</div>
        </div>
        <div className="overflow-auto">
          <div className="grid grid-cols-9 justify-center items-center py-2 px-3 gap-1 border border-gray-200 ">
            <div className="col-span-2">
              <h3 className="text-amber-500 text-lg">Bessie Cooper</h3>
              <p>bessiecooper@gmail.com</p>
              <p>010-919-923-23</p>
              <StarRating />
            </div>
            <div className="">Technology</div>
            <div className="">Department 1</div>
            <div className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              Employed
            </div>
            <div className="">Employed</div>
            <div className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              12
            </div>
            <div className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              Employed
            </div>
            <div className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              Employed
            </div>
          </div>
          <div className="grid grid-cols-9 justify-center items-center py-2 px-3 gap-1 border border-gray-200 ">
            <div className="col-span-2">
              <h3 className="text-amber-500 text-lg">Bessie Cooper</h3>
              <p>bessiecooper@gmail.com</p>
              <p>010-919-923-23</p>
              <StarRating />
            </div>
            <div className="">Technology</div>
            <div className="">Department 1</div>
            <div className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              Employed
            </div>
            <div className="">Employed</div>
            <div className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              12
            </div>
            <div className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              Employed
            </div>
            <div className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              Employed
            </div>
          </div>
          <div className="grid grid-cols-9 justify-center items-center py-2 px-3 gap-1 border border-gray-200 ">
            <div className="col-span-2">
              <h3 className="text-amber-500 text-lg">Bessie Cooper</h3>
              <p>bessiecooper@gmail.com</p>
              <p>010-919-923-23</p>
              <StarRating />
            </div>
            <div className="">Technology</div>
            <div className="">Department 1</div>
            <div className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              Employed
            </div>
            <div className="">Employed</div>
            <div className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              12
            </div>
            <div className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              Employed
            </div>
            <div className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              Employed
            </div>
          </div>
          <div className="grid grid-cols-9 justify-center items-center py-2 px-3 gap-1 border border-gray-200 ">
            <div className="col-span-2">
              <h3 className="text-amber-500 text-lg">Bessie Cooper</h3>
              <p>bessiecooper@gmail.com</p>
              <p>010-919-923-23</p>
              <StarRating />
            </div>
            <div className="">Technology</div>
            <div className="">Department 1</div>
            <div className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              Employed
            </div>
            <div className="">Employed</div>
            <div className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              12
            </div>
            <div className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              Employed
            </div>
            <div className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              Employed
            </div>
          </div>
          <div className="grid grid-cols-9 justify-center items-center py-2 px-3 gap-1 border border-gray-200 ">
            <div className="col-span-2">
              <h3 className="text-amber-500 text-lg">Bessie Cooper</h3>
              <p>bessiecooper@gmail.com</p>
              <p>010-919-923-23</p>
              <StarRating />
            </div>
            <div className="">Technology</div>
            <div className="">Department 1</div>
            <div className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              Employed
            </div>
            <div className="">Employed</div>
            <div className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              12
            </div>
            <div className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              Employed
            </div>
            <div className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              Employed
            </div>
          </div>
          <div className="grid grid-cols-9 justify-center items-center py-2 px-3 gap-1 border border-gray-200 ">
            <div className="col-span-2">
              <h3 className="text-amber-500 text-lg">Bessie Cooper</h3>
              <p>bessiecooper@gmail.com</p>
              <p>010-919-923-23</p>
              <StarRating />
            </div>
            <div className="">Technology</div>
            <div className="">Department 1</div>
            <div className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              Employed
            </div>
            <div className="">Employed</div>
            <div className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              12
            </div>
            <div className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              Employed
            </div>
            <div className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              Employed
            </div>
          </div>
        </div> */}
        {/* Grid table End */}
        <table className="w-full">
          {/* Table headings */}
          <tr className="grid grid-cols-9 text-left py-2 px-3 bg-teal-200">
            <th className="col-span-2">Candidate Info</th>
            <th>Tehnology</th>
            <th>Job Title</th>
            <th>Work Status</th>
            <th>Sales Persons</th>
            <th>Interviews</th>
            <th>Marketing</th>
            <th>Status</th>
          </tr>
          {/* table content/data */}
          <tr className="grid grid-cols-9 justify-center items-center py-2 px-3 gap-1 border border-gray-200 text-left">
            <td className="col-span-2">
              <h3 className="text-amber-500 text-lg">Bessie Cooper</h3>
              <p>bessiecooper@gmail.com</p>
              <p>010-919-923-23</p>
              <StarRating />
            </td>
            <td className="">Technology</td>
            <td className="">Department 1</td>
            <td className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              Employed
            </td>
            <td className="">Employed</td>
            <td className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              12
            </td>
            <td className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              Employed
            </td>
            <td className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              Employed
            </td>
          </tr>
          <tr className="grid grid-cols-9 justify-center items-center py-2 px-3 gap-1 border border-gray-200 text-left">
            <td className="col-span-2">
              <h3 className="text-amber-500 text-lg">Bessie Cooper</h3>
              <p>bessiecooper@gmail.com</p>
              <p>010-919-923-23</p>
              <StarRating />
            </td>
            <td className="">Technology</td>
            <td className="">Department 1</td>
            <td className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              Employed
            </td>
            <td className="">Employed</td>
            <td className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              12
            </td>
            <td className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              Employed
            </td>
            <td className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              Employed
            </td>
          </tr>
          <tr className="grid grid-cols-9 justify-center items-center py-2 px-3 gap-1 border border-gray-200 text-left">
            <td className="col-span-2">
              <h3 className="text-amber-500 text-lg">Bessie Cooper</h3>
              <p>bessiecooper@gmail.com</p>
              <p>010-919-923-23</p>
              <StarRating />
            </td>
            <td className="">Technology</td>
            <td className="">Department 1</td>
            <td className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              Employed
            </td>
            <td className="">Employed</td>
            <td className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              12
            </td>
            <td className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              Employed
            </td>
            <td className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              Employed
            </td>
          </tr>
          <tr className="grid grid-cols-9 justify-center items-center py-2 px-3 gap-1 border border-gray-200 text-left">
            <td className="col-span-2">
              <h3 className="text-amber-500 text-lg">Bessie Cooper</h3>
              <p>bessiecooper@gmail.com</p>
              <p>010-919-923-23</p>
              <StarRating />
            </td>
            <td className="">Technology</td>
            <td className="">Department 1</td>
            <td className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              Employed
            </td>
            <td className="">Employed</td>
            <td className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              12
            </td>
            <td className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              Employed
            </td>
            <td className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              Employed
            </td>
          </tr>
          <tr className="grid grid-cols-9 justify-center items-center py-2 px-3 gap-1 border border-gray-200 text-left">
            <td className="col-span-2">
              <h3 className="text-amber-500 text-lg">Bessie Cooper</h3>
              <p>bessiecooper@gmail.com</p>
              <p>010-919-923-23</p>
              <StarRating />
            </td>
            <td className="">Technology</td>
            <td className="">Department 1</td>
            <td className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              Employed
            </td>
            <td className="">Employed</td>
            <td className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              12
            </td>
            <td className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              Employed
            </td>
            <td className="py-2 border border-teal-500 text-teal-500 rounded-full flex justify-center items-center">
              Employed
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Candidate;
