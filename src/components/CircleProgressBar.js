import React from "react";

const CircleProgressBar = ({ percentage, color }) => {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-40 h-40">
      <svg className="absolute top-0 left-0 w-full h-full">
        <circle
          className={`${color} transition-all duration-1000 ease-in-out transform origin-center stroke-current stroke-4 `}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeWidth="10"
          fill="transparent"
          r={radius}
          cx="50%"
          cy="50%"
        />
      </svg>
      <div
        className={`flex items-center justify-center w-full h-full text-2xl font-bold ${color}  `}
      >
        {percentage}%
      </div>
    </div>
  );
};

export default CircleProgressBar;
