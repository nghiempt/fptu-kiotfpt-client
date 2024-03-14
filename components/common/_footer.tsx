"use client";

import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PaymentIcon from "@mui/icons-material/Payment";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";

export default function Footer({ translate }: { translate: any }) {
  return (
    <div className="w-full bg-black mt-10 py-6 flex justify-center items-center">
      <div className="lg:w-3/4 flex flex-col ">
        <div className="flex justify-between mt-3 items-start">
          <div className="w-2/3">
            <h4 className="text-[30px] text-white">Sign Up</h4>
            <h6 className="text-[12px] text-white mt-2">Be the first ...</h6>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-black flex border border-white-500 rounded-lg pl-2 pr-10 mr-2">
              <span className="flex items-center pl-1">
                <PersonIcon className="text-gray-200" />
              </span>
              <input
                type="text"
                placeholder="Your Email"
                className="pl-2 py-2 w-full bg-black placeholder-gray-500 font-medium text-gray-200 outline-none border-transparent focus:border-transparent focus:ring-0"
              />
            </div>
            <button className="bg-[rgb(var(--primary-rgb))] !text-white text-[14px] py-[10px] px-8 rounded-lg font-semibold border border-white-500">
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex mt-6">
          <div className="flex flex-col w-1/5">
            <h1 className="text-[14px] text-gray-500 font-bold mb-2 mt-4">
              Information
            </h1>
            <h1 className="text-[13px] text-white cursor-pointer hover:underline">
              About Us
            </h1>
            <h1 className="text-[13px] text-white cursor-pointer hover:underline">
              About Zip
            </h1>
            <h1 className="text-[13px] text-white cursor-pointer hover:underline">
              Privacy Policy
            </h1>
            <h1 className="text-[13px] text-white cursor-pointer hover:underline">
              Search
            </h1>
            <h1 className="text-[13px] text-white cursor-pointer hover:underline">
              Terms
            </h1>
            <h1 className="text-[13px] text-white cursor-pointer hover:underline">
              Orders and Returns
            </h1>
            <h1 className="text-[13px] text-white cursor-pointer hover:underline">
              Contact Us
            </h1>
          </div>
          <div className="flex flex-col w-1/5">
            <h1 className="text-[14px] text-gray-500 font-bold mb-2 mt-4">
              Information
            </h1>
            <h1 className="text-[13px] text-white cursor-pointer hover:underline">
              About Us
            </h1>
            <h1 className="text-[13px] text-white cursor-pointer hover:underline">
              About Zip
            </h1>
            <h1 className="text-[13px] text-white cursor-pointer hover:underline">
              Privacy Policy
            </h1>
            <h1 className="text-[13px] text-white cursor-pointer hover:underline">
              Search
            </h1>
            <h1 className="text-[13px] text-white cursor-pointer hover:underline">
              Terms
            </h1>
            <h1 className="text-[13px] text-white cursor-pointer hover:underline">
              Orders and Returns
            </h1>
            <h1 className="text-[13px] text-white cursor-pointer hover:underline">
              Contact Us
            </h1>
          </div>
          <div className="flex flex-col w-1/5">
            <h1 className="text-[14px] text-gray-500 font-bold mb-2 mt-4">
              Information
            </h1>
            <h1 className="text-[13px] text-white cursor-pointer hover:underline">
              About Us
            </h1>
            <h1 className="text-[13px] text-white cursor-pointer hover:underline">
              About Zip
            </h1>
            <h1 className="text-[13px] text-white cursor-pointer hover:underline">
              Privacy Policy
            </h1>
            <h1 className="text-[13px] text-white cursor-pointer hover:underline">
              Search
            </h1>
            <h1 className="text-[13px] text-white cursor-pointer hover:underline">
              Terms
            </h1>
            <h1 className="text-[13px] text-white cursor-pointer hover:underline">
              Orders and Returns
            </h1>
            <h1 className="text-[13px] text-white cursor-pointer hover:underline">
              Contact Us
            </h1>
          </div>
          <div className="flex flex-col w-1/5">
            <h1 className="text-[14px] text-gray-500 font-bold mb-2 mt-4">
              Information
            </h1>
            <h1 className="text-[13px] text-white cursor-pointer hover:underline">
              About Us
            </h1>
            <h1 className="text-[13px] text-white cursor-pointer hover:underline">
              About Zip
            </h1>
            <h1 className="text-[13px] text-white cursor-pointer hover:underline">
              Privacy Policy
            </h1>
            <h1 className="text-[13px] text-white cursor-pointer hover:underline">
              Search
            </h1>
            <h1 className="text-[13px] text-white cursor-pointer hover:underline">
              Terms
            </h1>
            <h1 className="text-[13px] text-white cursor-pointer hover:underline">
              Orders and Returns
            </h1>
            <h1 className="text-[13px] text-white cursor-pointer hover:underline">
              Contact Us
            </h1>
          </div>

          <div className="flex flex-col w-1/5">
            <h1 className="text-[14px] text-gray-500 font-bold mb-2 mt-4">
              Address
            </h1>

            <h1 className="text-[13px] text-white">
              Address: 1234 Street Adress City Address, 1234
            </h1>
            <h1 className="text-[13px] text-white">Phones: (00) 1234 5678</h1>
            <h1 className="text-[13px] text-white">
              We are open: Monday-Thursday: 9:00 AM - 5:30 PM
            </h1>
            <h1 className="text-[13px] text-white">
              Friday: 9:00 AM - 6:00 PM
            </h1>
            <h1 className="text-[13px] text-white">
              Saturday: 11:00 AM - 5:00 PM
            </h1>
            <h1 className="text-[13px] text-white">E-mail: shop@email.com</h1>
          </div>
        </div>

        <div className="w-full flex items-start mt-[40px] border-t border-gray-700 pt-2 pb-6">
          <div className="w-full text-white text-[14px] flex items-center justify-between">
            <div style={{ display: "flex", alignItems: "center" }}>
              <FacebookIcon /> &nbsp;
              <InstagramIcon />
            </div>
            <div>
              <LocalAtmIcon /> &nbsp; <PaymentIcon /> &nbsp; <PaymentIcon />{" "}
              &nbsp; <PaymentIcon /> &nbsp; <PaymentIcon />
            </div>
            <h1 className="text-[12px] text-gray-500 ">
              Copyright © 2023 KIOTFPT. Powered by FPTU.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
