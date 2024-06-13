"use client";

import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

interface UpdateAddressProps {
  onCancel: () => void;
}

const UpdateAddress: React.FC<UpdateAddressProps> = ({ onCancel }) => {
  return (
    <div className="w-full box-border pb-36">
      <h1 className="font-semibold text-[20px] py-4">Update Address</h1>
      <div className="w-full flex flex-col gap-4 bg-gray-50 rounded-lg p-5">
        <div className="w-3/4 flex justify-between items-center">
          <h1 className="w-1/4">Fullname</h1>
          <div className="w-3/4 p-2 bg-white rounded-md">
            <h1 className="font-medium">Nghiem Thanh Pham</h1>
          </div>
        </div>
        <div className="w-3/4 flex justify-between items-center">
          <h1 className="w-1/4">Company</h1>
          <input
            className="w-3/4 p-2 outline-none rounded-md"
            type="text"
            placeholder="Enter company"
          />
        </div>
        <div className="w-3/4 flex justify-between items-center">
          <h1 className="w-1/4">Phone</h1>
          <input
            className="w-3/4 p-2 outline-none rounded-md"
            type="text"
            placeholder="Enter phone number"
          />
        </div>
        <div className="w-3/4 flex justify-between items-center">
          <h1 className="w-1/4">Province/City</h1>
          <div className="w-3/4 p-2 flex justify-between bg-white rounded-md">
            <h1 className="font-medium">Can Tho</h1>
            <KeyboardArrowDownIcon />
          </div>
        </div>
        <div className="w-3/4 flex justify-between items-center">
          <h1 className="w-1/4">District</h1>
          <div className="w-3/4 p-2 flex justify-between bg-white rounded-md">
            <h1 className="font-medium">Quan Ninh Kieu</h1>
            <KeyboardArrowDownIcon />
          </div>
        </div>
        <div className="w-3/4 flex justify-between items-center">
          <h1 className="w-1/4">Wards</h1>
          <div className="w-3/4 p-2 flex justify-between bg-white rounded-md">
            <h1 className="font-medium">Phuong An Binh</h1>
            <KeyboardArrowDownIcon />
          </div>
        </div>
        <div className="w-3/4 flex justify-between items-center">
          <h1 className="w-1/4">Address</h1>
          <textarea
            className="w-3/4 p-2 outline-none rounded-md"
            placeholder="Enter address"
          />
        </div>
        <div className="w-3/4 flex justify-between items-center">
          <h1 className="w-1/4">Address Type</h1>
          <div className="w-3/4 flex gap-x-4">
            <div className="flex gap-x-4">
              <RadioButtonCheckedIcon />
              <h1>Private house/Apartment</h1>
            </div>
            <div className="flex gap-x-4">
              <RadioButtonUncheckedIcon />
              <h1>Agency/Company</h1>
            </div>
          </div>
        </div>
        <div className="w-3/4 flex justify-between items-center">
          <h1 className="w-1/4"></h1>
          <div className="w-3/4 flex gap-2">
            <CheckBoxOutlineBlankIcon />
            <h1>Set as default address</h1>
          </div>
        </div>
        <div className="w-3/4 flex justify-between items-center mt-6">
          <h1 className="w-1/4"></h1>
          <div className="w-3/4 flex gap-2">
            <button className="bg-[rgb(var(--quaternary-rgb))] text-white rounded-md py-2 px-16">
              Update
            </button>
            <button
              className="bg-gray-300 rounded-md py-2 px-16 text-gray-700"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UpdateAddress;