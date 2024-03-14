"use client";

import React, { useEffect } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import ContactEmergencyOutlinedIcon from "@mui/icons-material/ContactEmergencyOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import { ROUTE } from "@/constant/route";
import Link from "next/link";

export default function SignUp({ translate }: { translate: any }) {
  const init = async () => {};

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {}, []);

  return (
    <div className="lg:w-3/4 flex flex-col lg:flex-row justify-center items-center lg:px-0 ">
      <div className="items-center px-6 lg:py-6 ">
        <div className="flex items-center grid grid-cols-1">
          <div className="lg:col-span-6 p-6 lg:p-20 bg-[rgb(var(--tertiary-rgb))] rounded-lg">
            <h1 className="text-[24px] font-bold mb-4">Create An Account</h1>
            <h1 className="text-[16px] font-light mb-4">
              Fill out the form to sign up our service.
            </h1>
            <div className="w-full flex items-start flex-col mt-4">
              <h1 className="text-[16px] mb-2">Name*</h1>
              <div className="w-full flex rounded-lg border border-gray-200">
                <span className="flex items-center pl-1 bg-white rounded-lg">
                  <ContactEmergencyOutlinedIcon className="px-3" />
                </span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="py-2 w-full placeholder-gray-400 font-medium rounded-lg text-gray-500 outline-none border-transparent focus:border-transparent focus:ring-0"
                />
              </div>
            </div>
            <div className="w-full flex items-start flex-col mt-4">
              <h1 className="text-[16px] mb-2">Address*</h1>
              <div className="w-full flex rounded-lg border border-gray-200">
                <span className="flex items-center pl-1 bg-white rounded-lg">
                  <FmdGoodOutlinedIcon className="px-3" />
                </span>
                <input
                  type="text"
                  placeholder="Enter your address"
                  className="py-2 w-full placeholder-gray-400 font-medium rounded-lg text-gray-500 outline-none border-transparent focus:border-transparent focus:ring-0"
                />
              </div>
            </div>
            <div className="w-full flex items-start flex-col mt-4">
              <h1 className="text-[16px] mb-2">Phone*</h1>
              <div className="w-full flex rounded-lg border border-gray-200">
                <span className="flex items-center pl-1 bg-white rounded-lg">
                  <PhoneOutlinedIcon className="px-3" />
                </span>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="py-2 w-full placeholder-gray-400 font-medium rounded-lg text-gray-500 outline-none border-transparent focus:border-transparent focus:ring-0"
                />
              </div>
            </div>
            <div className="w-full flex items-start flex-col mt-4">
              <h1 className="text-[16px] mb-2">Email*</h1>
              <div className="w-full flex rounded-lg border border-gray-200">
                <span className="flex items-center pl-1 bg-white rounded-lg">
                  <EmailOutlinedIcon className="px-3" />
                </span>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="py-2 w-full placeholder-gray-400 font-medium rounded-lg text-gray-500 outline-none border-transparent focus:border-transparent focus:ring-0"
                />
              </div>
            </div>
            <div className="w-full flex items-start flex-col mt-4 mb-6">
              <h1 className="text-[16px] mb-2">Password*</h1>
              <div className="w-full  flex rounded-lg border border-gray-200">
                <span className="flex items-center pl-1 bg-white rounded-lg">
                  <LockOpenOutlinedIcon className="px-3" />
                </span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="py-2 w-full placeholder-gray-400 font-medium rounded-lg text-gray-500 outline-none border-transparent focus:border-transparent focus:ring-0"
                />
              </div>
            </div>
            <div className="w-full flex items-start flex-col mt-4 mb-6">
              <h1 className="text-[16px] mb-2">Confirm Password*</h1>
              <div className="w-full  flex rounded-lg border border-gray-200">
                <span className="flex items-center pl-1 bg-white rounded-lg">
                  <LockOpenOutlinedIcon className="px-3" />
                </span>
                <input
                  type="password"
                  placeholder="Re-enter the password again"
                  className="py-2 w-full placeholder-gray-400 font-medium rounded-lg text-gray-500 outline-none border-transparent focus:border-transparent focus:ring-0"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <button
                type="submit"
                className="login-button mt-10 mb-3 w-4/5 h-12 bg-[rgb(var(--primary-rgb))] rounded-lg text-[16px]"
                style={{ color: "white" }}
              >
                Sign Up
              </button>
              <div className="flex mb-5 ml-10 w-full h-12 text-[rgb(var(--primary-rgb))]">
                <h1>
                  Already have an account?&nbsp;
                </h1>
                <Link
                  href={{
                    pathname: ROUTE.SIGN_IN,
                  }}
                >
                  <h1 className="text-black font-medium cursor-pointer hover:underline">
                    {" "}
                    Login here
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
