"use client";

import React, { useEffect } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import Link from "next/link";
import { ROUTE } from "@/constant/route";

export default function SignIn({ translate }: { translate: any }) {
  const init = async () => { };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => { }, []);

  return (
    <div className="lg:w-3/4 flex flex-col lg:flex-row justify-center items-center lg:px-0 gap-x-10">
      <div className="items-center px-6 lg:py-6 ">
        <div className="flex items-center grid grid-cols-1 gap-x-10">
          <div className="lg:col-span-6 p-6 lg:p-20 bg-[rgb(var(--tertiary-rgb))] rounded-lg">
            <h1 className="text-[24px] font-bold mb-4">Login</h1>
            <h1 className="text-[16px] font-light mb-4">
              If you have an account, sign in with your email address.
            </h1>
            <div className="w-full flex items-start flex-col mt-4">
              <h1 className="text-[16px] mb-2">Email*</h1>
              <div className="w-full flex rounded-lg border border-gray-200">
                <span className="flex items-center pl-1 bg-white rounded-lg">
                  <EmailOutlinedIcon className="px-2" />
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
                  <LockOpenOutlinedIcon className="px-2" />
                </span>
                <input
                  type="text"
                  placeholder="Enter your password"
                  className="py-2 w-full placeholder-gray-400 font-medium rounded-lg text-gray-500 outline-none border-transparent focus:border-transparent focus:ring-0"
                />
              </div>
            </div>
            <div className="flex">
              <button
                type="submit"
                className="login-button mt-10 mb-5 w-2/5 h-12 bg-[rgb(var(--primary-rgb))] rounded-full text-[16px]"
                style={{ color: "white" }}
              >
                Sign In
              </button>
              <h1 className="mt-14 mb-5 ml-10 w-2/5 h-12 text-[rgb(var(--primary-rgb))] cursor-pointer hover:underline">
                Forgot Your Password?
              </h1>
            </div>
          </div>
        </div>
      </div> 
      <div className="lg:col-span-6 p-6 lg:p-20 bg-[rgb(var(--tertiary-rgb))] rounded-lg">
        <h1 className="text-[24px] font-bold mb-4">New Customer?</h1>
        <h1 className="text-[16px] mb-4">
          Creating an account has many benefits:
        </h1>
        <h1 className="text-[16px]">
          • Check out faster
        </h1>
        <h1 className="text-[16px]">
          • Keep more than one address
        </h1>
        <h1 className="text-[16px]">
          • Track orders and more
        </h1>
        <Link href={{
          pathname: ROUTE.SIGN_UP
        }}>
          <button
          type="submit"
          className="login-button mt-10 mb-5 w-3/5 h-12 bg-[rgb(var(--primary-rgb))] rounded-full text-[16px]"
          style={{ color: "white" }}
        >
          Create An Account
        </button>
        </Link>
      </div>
    </div>
  );
}
