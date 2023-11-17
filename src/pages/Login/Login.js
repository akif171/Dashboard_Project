import React from "react";
import AuthLogo from "../../images/auth-screen-logo.png";
import GifLogo from "../../images/main-logo.gif";
import GoogleIcon from "../../images/google-icon.png";
import Pencil from "../../images/pencil.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-between  w-full h-auto min-h-screen bg-gradient-to-b from-primary-500 to-secondary-500 py-10 px-16">
      <div className="flex flex-col gap-5 h-full">
        <div className="flex items-center gap-3">
          <img src={AuthLogo} alt="logo" className="w-[60px]" />
          <h3 className="text-2xl text-white">Name.com</h3>
        </div>
        {/* <div className="flex flex-col justify-between "> */}
        <div className="flex justify-center w-[485px]">
          <img src={GifLogo} alt="main-logo" className="w-[350px]" />
        </div>
        <div className="w-[485px]">
          <h1 className="text-center text-6xl text-text-light">
            Candidate <br></br>
            Onboarding and <br></br>
            Training
          </h1>
        </div>
        {/* </div> */}
      </div>
      <div className="flex flex-col justify-between items-center p-16 bg-white rounded-lg">
        <h1 className="text-4xl">Login</h1>
        <div>
          <div className="flex flex-col gap-8">
            <div className="flex gap-3 py-2 px-3 shadow-lg rounded-full">
              <img src={GoogleIcon} alt="google icon" className="w-6" />
              <p>Continue with your Account</p>
            </div>
            <div className="">
              <label htmlFor="email-id" className="text-text-hint">
                Email ID<span className="text-red-500">*</span>
              </label>
              <div className="flex  items-center px-2 border border-neutral-500 rounded-lg">
                <input
                  type="email"
                  required
                  placeholder="email"
                  className="outline-none border-none focus:ring-0 flex-grow"
                />
                <img src={Pencil} alt="pencil" className="w-6 h-6" />
              </div>
            </div>
            <div className="">
              <label htmlFor="password" className="text-text-hint">
                Password<span className="text-red-500">*</span>
              </label>
              <div className="flex  items-center  px-2 border border-neutral-500 rounded-lg">
                <input
                  type="password"
                  required
                  placeholder="password"
                  className="outline-none border-none focus:ring-0 flex-grow"
                />
                <img src={Pencil} alt="pencil" className="w-6 h-6" />
              </div>
            </div>
          </div>
          <div className="flex justify-between text-xs mt-4">
            <div className="flex gap-2">
              <input type="checkbox" className="rounded-md" />
              <p>Remember me</p>
            </div>
            <p className="text-info-500">Forget Password?</p>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2 items-center w-full">
          <button
            disabled={true}
            className="w-full py-2 px-4 text-base rounded-full text-white bg-secondary-600"
          >
            Login
          </button>
          <p className="text-sm text-center ">
            Don't you have an account?{" "}
            <Link to="/signup" className="text-info-500">
              SignUp
            </Link>
          </p>
          <p className="text-text-hint">or</p>
          <p>
            <Link to="/subscribe" className="text-info-500 font-bold">
              Subscribe
            </Link>{" "}
            for your Business
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
