"use client";

import React, { useEffect } from "react";
import { Checkbox, Divider } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function SignIn({ translate }: { translate: any }) {

  const init = async () => {};

  useEffect(() => {
    init();
  }, []);

  useEffect(() => { }, []);

  return (
    <div className="lg:w-3/4 flex flex-col justify-center items-center lg:px-0">
      <div className="items-center text-center px-6 lg:py-6">
        <div className="flex items-center text-center grid grid-cols-1 lg:grid-cols-10 gap-x-10">
          <div className="lg:col-span-6 text-center p-6 lg:p-20">
            <h1 className="text-[24px] font-bold mb-4">
              Chao Mung Quay Lai KIOTFPT
            </h1>
            <h1 className="text-[16px] text-[rgb(var(--primary-rgb))] font-light mb-4">
              Dang nhap de su dung dich vu
            </h1>
            <div className="w-full flex items-start flex-col mt-4">
              <h1 className="text-[16px] mb-2">{translate('si-03')}</h1>
              <div className="w-full bg-[#FBF7F4] flex rounded-lg border border-[#E1DEDB]">
                <span className="flex items-center pl-1">
                  <EmailOutlinedIcon className="px-2" />
                </span>
                <input
                  type="text"
                  placeholder={translate('si-04')}
                  className="py-2 w-full bg-[#FBF7F4] placeholder-gray-400 font-medium rounded-lg text-gray-500 outline-none border-transparent focus:border-transparent focus:ring-0"
                />
              </div>
            </div>
            <div className="w-full flex items-start flex-col mt-4 mb-6">
              <h1 className="text-[16px] mb-2">{translate('si-05')}</h1>
              <div className="w-full bg-[#FBF7F4] flex rounded-lg border border-[#E1DEDB]">
                <span className="flex items-center pl-1">
                  <LockOpenOutlinedIcon className="px-2" />
                </span>
                <input
                  type="text"
                  placeholder={translate('si-06')}
                  className="py-2 w-full bg-[#FBF7F4] placeholder-gray-400 font-medium rounded-lg text-gray-500 outline-none border-transparent focus:border-transparent focus:ring-0"
                />
              </div>
            </div>
            <div className="w-full flex justify-between items-center">
              <div className="flex justify-center items-center">
                <Checkbox className="p-0" />
                <h1 className="text-[14px] text-[rgb(var(--primary-rgb))] ml-1">
                  {translate('si-07')}
                </h1>
              </div>
              <div className="">
                <h1 className="text-[14px] text-[rgb(var(--tertiary-rgb))] font-bold">
                  {translate('si-08')}
                </h1>
              </div>
            </div>
            <button
              type="submit"
              className="login-button mt-8 mb-5 w-full h-10 bg-[rgb(var(--tertiary-rgb))] rounded-lg font-bold text-[16px]"
              style={{ color: "white" }}
            >
              {translate('si-09')}
            </button>
            <div className="flex items-center justify-center mb-8">
              <h1 className="text-[14px] text-[rgb(var(--primary-rgb))] mr-2">
                {translate('si-10')}
              </h1>
              <Link href={{
                pathname: '/sign-up',
              }}>
                <h1
                  className="text-[14px] text-[rgb(var(--tertiary-rgb))] cursor-pointer font-bold"
                >
                  {translate('si-11')}
                </h1></Link>
            </div>
            <>
              <style>{`
                                .semi-divider-with-text::before, .semi-divider-with-text::after {
                                    border-bottom: 2px solid rgb(var(--primary-rgb));
                                }
                        `}</style>
              <Divider>
                <h1 className="text-[12px] text-[rgb(var(--primary-rgb))] font-bold mr-2 ml-2">
                  {translate('si-12')}
                </h1>
              </Divider>
            </>
            <div className="grid grid-cols-1 gap-4">
              <button
                type="submit"
                className="span-col-1 mt-8 mb-5 w-full h-10 bg-[rgb(var(--quaternary-rgb))] rounded-lg flex justify-center items-center"
                style={{ color: "black" }}
              >
                <div className="flex" onClick={() => signIn("google")}>
                  <GoogleIcon />
                  <h1 className="text-[14px] text-[rgb(var(--primary-rgb))] ml-2 font-semibold">
                    {translate('si-13')} Google
                  </h1>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
