import React from "react";
import CircleProgressBar from "../../components/CircleProgressBar";

const Dashboard = () => {
  return (
    <div className="p-3">
      <h5>Dashboard</h5>

      <div className="flex items-center bg-amber-100 rounded-lg p-3 ">
        <h5 className="px-3">Active Jobs</h5>

        <div className="grid grid-cols-3 gap-5 w-full  rounded-lg">
          <div className="h-60 bg-white col-span-1 p-5 flex flex-col justify-between rounded-lg w-full">
            <div>
              <span className="bg-blue-100 p-2 rounded-lg text-blue-900">
                Active
              </span>
              <h3 className="mt-3">Title</h3>
              <p className="text-sm text-gray-500 mt-1">
                Description <br></br> description or content
              </p>
            </div>
            <span className="text-gray-500">More</span>
          </div>
          <div className="h-60 bg-white col-span-1 p-5 flex flex-col justify-between rounded-lg w-full">
            <div>
              <span className="bg-blue-100 p-2 rounded-lg text-blue-900">
                Active
              </span>
              <h3 className="mt-3">Title</h3>
              <p className="text-sm text-gray-500 mt-1">
                Description <br></br> description or content
              </p>
            </div>
            <span className="text-gray-500">More</span>
          </div>
          <div className="h-60 bg-white col-span-1 p-5 flex flex-col justify-between rounded-lg w-full">
            <div>
              <span className="bg-blue-100 p-2 rounded-lg text-blue-900">
                Active
              </span>
              <h3 className="mt-3">Title</h3>
              <p className="text-sm text-gray-500 mt-1">
                Description <br></br> description or content
              </p>
            </div>
            <span className="text-gray-500">More</span>
          </div>{" "}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className="border border-1 p-3 rounded-lg flex flex-col justify-between ">
          <h5>Jobs By Sales Manager </h5>
          <div className="w-full flex justify-center">
            <CircleProgressBar percentage={75} color="text-green-500" />
          </div>
          <div className="border border-1 p-3 rounded-lg">
            <h3>Description</h3>
            <p className="text-sm">Description</p>
          </div>
        </div>
        <div className="border border-1 p-3 rounded-lg flex flex-col justify-between">
          <h5>Jobs By Sales Manager </h5>
          <div className="w-full flex justify-center">
            <CircleProgressBar percentage={75} color="text-red-500" />
          </div>
          <div className="border border-1 p-3 rounded-lg">
            <h3>Description</h3>
            <p className="text-sm">Description</p>
          </div>{" "}
        </div>
        <div className="">
          <div className="p-3 rounded-lg border border-1 mb-5">
            <h5 className="mb-5">Jobs By Sales Manager</h5>

            <div className="border border-1 p-3 rounded-lg mb-3 ">
              <h3>Description</h3>
              <p className="text-sm">Description</p>
            </div>
            <div className="border border-1 p-3 rounded-lg">
              <h3>Description</h3>
              <p className="text-sm">Description</p>
            </div>
          </div>
          <div className="p-3 rounded-lg border border-1 ">
            <h5 className="mb-5">Jobs By Sales Manager</h5>

            <div className="border border-1 p-3 rounded-lg mb-3 ">
              <h3>Description</h3>
              <p className="text-sm">Description</p>
            </div>
            <div className="border border-1 p-3 rounded-lg">
              <h3>Description</h3>
              <p className="text-sm">Description</p>
            </div>
          </div>
        </div>
        <div className="border border-1 p-3 rounded-lg flex flex-col justify-between ">
          <h5>Jobs By Sales Manager </h5>
          <div className="w-full flex justify-center">
            <CircleProgressBar percentage={75} color="text-green-500" />
          </div>
          <div className="border border-1 p-3 rounded-lg">
            <h3>Description</h3>
            <p className="text-sm">Description</p>
          </div>
        </div>
        <div className="border border-1 p-3 rounded-lg flex flex-col justify-between ">
          <h5>Jobs By Sales Manager </h5>
          <div className="w-full flex justify-center">
            <CircleProgressBar percentage={75} color="text-green-500" />
          </div>
          <div className="border border-1 p-3 rounded-lg">
            <h3>Description</h3>
            <p className="text-sm">Description</p>
          </div>
          <div className="border border-1 p-3 rounded-lg">
            <h3>Description</h3>
            <p className="text-sm">Description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
