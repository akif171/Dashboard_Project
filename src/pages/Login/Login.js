import React from "react";

const Login = () => {
  return (
   
      <div className="w-96 h-96 px-16 py-24 bg-gradient-to-b from-slate-700 to-cyan-600 flex-col justify-between items-start inline-flex">
        <div className="self-stretch py-4 justify-start items-center gap-4 inline-flex">
          <div className="justify-start items-center gap-4 flex" />
          <div className="text-center text-white text-4xl font-normal font-['Poppins'] leading-10">
            Name.com
          </div>
        </div>
        <div className="self-stretch h-96 px-10 shadow flex-col justify-center items-start gap-2.5 flex">
          <img
            className="w-96 h-96 shadow-inner"
            src="https://via.placeholder.com/400x400"
          />
        </div>
        <div className="w-96 text-center text-white text-6xl font-medium font-['Poppins'] leading-10">
          Candidate Onboarding and Training
        </div>
      </div>
  );
};

export default Login;
