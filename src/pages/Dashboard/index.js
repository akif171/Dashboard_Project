import React from "react";
import CircleProgressBar from "../../components/CircleProgressBar";

const Dashboard = () => {
  const percentage = 40;

  const radius = 70; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const strokeWidth = 8; // Width of the circle bar
  const trackWidth = strokeWidth + 4; // Width of the outer border

  const trackDasharray = `${circumference} ${circumference}`;

  const barDasharray = `${circumference} ${circumference}`;
  const barDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="p-3">
      {/* <h5>Dashboard</h5> */}

      <div className="flex items-center bg-auxiliary-50 rounded-lg p-3 ">
        <h5 className="px-3 whitespace-nowrap">Active Jobs</h5>

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
          <div className="w-full flex justify-center items-center">
            {/* <CircleProgressBar progress={percentage} size={250} /> */}
            <CircleProgressBar
              progress={47}
              size={200}
              bgColor="bg-success-500"
              stroke="#36B37E"
              emptyStroke="#EBF7F2"
            />
          </div>
          <div className="w-full flex justify-around items-center">
            <div className="flex justify-center items-center gap-1">
              <span className="w-4 h-4 bg-success-500 rounded-full"></span>
              <p>Employed</p>
            </div>
            <div className="flex justify-center items-center gap-1">
              <span className="w-4 h-4 bg-success-50 rounded-full"></span>{" "}
              <p>Unemployed</p>
            </div>
          </div>
          <div className="border border-1 p-3 rounded-lg">
            <h3>Description</h3>
            <p className="text-sm">Description</p>
          </div>
        </div>
        <div className="border border-1 p-3 rounded-lg flex flex-col justify-between">
          <h5>Jobs By Sales Manager </h5>
          <div className="w-full flex justify-center items-center">
            {/* <CircleProgressBar progress={percentage} size={250} /> */}
            <CircleProgressBar
              progress={75}
              size={200}
              bgColor="bg-danger-500"
              stroke="#D03423"
              emptyStroke="#F6D6D3"
            />
          </div>
          <div className="w-full flex justify-around items-center">
            <div className="flex justify-center items-center gap-1">
              <span className="w-4 h-4 bg-danger-500 rounded-full"></span>
              <p>Employed</p>
            </div>
            <div className="flex justify-center items-center gap-1">
              <span className="w-4 h-4 bg-danger-50 rounded-full"></span>{" "}
              <p>Unemployed</p>
            </div>
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
