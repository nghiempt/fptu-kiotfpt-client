"use client";

import React, { useEffect, useState } from "react";
import Cookie from 'js-cookie';
import { ProfileService } from "@/service/profile";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';

interface CreateAddressProps {
  onCancel: () => void;
}

const CreateAddress: React.FC<CreateAddressProps> = ({ onCancel }) => {
  const accountID = JSON.parse(Cookie.get('accountID') || "0");
  const [province, setProvince] = useState('' as any);
  const [district, setDistrict] = useState('' as any);
  const [addressDetail, setAddressDetail] = useState('' as any);
  const [provinces, setProvinces] = useState([] as any);
  const [districts, setDistricts] = useState([] as any);

  const handleChangeProvince = (event: SelectChangeEvent) => {
    setProvince(event.target.value as string);

    const fetch = async () => {
      const prof = await ProfileService.getAllDistrictByProvinceID(event.target.value as string);
      if (prof?.result) {
        setDistricts(prof?.data);
      } else {
        console.log("wrong");
      }
    }
    fetch();
  };

  const handleChangeDistrict = (event: SelectChangeEvent) => {
    setDistrict(event.target.value as string);
  };

  const handleCreateAddress = async () => {
    if (province === '' || district === '' || addressDetail === '') {
      alert('Please fill in all fields');
      return;
    } else {
      let person = {
        account_profile_id: accountID,
        address_value: addressDetail,
        district_id: district,
        province_id: province
      };
      const fetch = async () => {
        const prof = await ProfileService.createAddress(person);
        if (prof?.result) {
          console.log(prof?.data);
          alert('Create Address successfully');
          window.location.reload();
        }

      }
      fetch();
    }
  }

  useEffect(() => {
    const fetch = async () => {
      const prof = await ProfileService.getAllProvince();
      if (prof?.result) {
        setProvinces(prof?.data);
      } else {
        console.log("wrong");
      }
    }
    fetch();
  }, []);

  useEffect(() => { }, [provinces, districts]);

  return (
    <div className="w-full box-border pb-36">
      <h1 className="font-semibold text-[20px] py-4">Create Address</h1>
      <div className="w-full flex flex-col gap-4 bg-gray-50 rounded-lg p-5">
        {/* <div className="w-3/4 flex justify-between items-center">
          <h1 className="w-1/4">Fullname</h1>
          <div className="w-3/4 p-2 bg-white rounded-md">
            <h1 className="font-medium">Nghiem Thanh Pham</h1>
          </div>
        </div> */}
        {/* <div className="w-3/4 flex justify-between items-center">
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
        </div> */}
        <div className="w-3/4 flex justify-between items-center">
          <h1 className="w-1/4">Province/City</h1>
          <div className="w-3/4 p-2 flex justify-between bg-white rounded-md">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Province</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={province}
                label="Province"
                onChange={handleChangeProvince}
              >
                {provinces.map((item: any, index: any) => {
                  return (
                    <MenuItem value={item?.id}>{item?.value}</MenuItem>
                  );
                })};
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="w-3/4 flex justify-between items-center">
          <h1 className="w-1/4">District</h1>
          <div className="w-3/4 p-2 flex justify-between bg-white rounded-md">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">District</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={district}
                label="District"
                onChange={handleChangeDistrict}
              >
                {districts.map((item: any, index: any) => {
                  return (
                    <MenuItem value={item?.id}>{item?.value}</MenuItem>
                  );
                })};
              </Select>
            </FormControl>
          </div>
        </div>
        {/* <div className="w-3/4 flex justify-between items-center">
          <h1 className="w-1/4">Wards</h1>
          <div className="w-3/4 p-2 flex justify-between bg-white rounded-md">
            <h1 className="font-medium">Select Wards</h1>
            <KeyboardArrowDownIcon />
          </div>
        </div> */}
        <div className="w-3/4 flex justify-between items-center">
          <h1 className="w-1/4">Address</h1>
          {/* <textarea
            className="w-3/4 p-2 outline-none rounded-md"
            placeholder="Enter address"
          /> */}
          <div className="w-3/4 p-2 flex justify-between bg-white rounded-md">
            <TextField
              className="w-full"
              id="outlined-multiline-static"
              label="Detail Address"
              multiline
              rows={4}
              placeholder="Enter more detail address"
              value={addressDetail}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setAddressDetail(event.target.value);
              }}
            />
          </div>
        </div>
        {/* <div className="w-3/4 flex justify-between items-center">
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
        </div> */}
        {/* <div className="w-3/4 flex justify-between items-center">
          <h1 className="w-1/4"></h1>
          <div className="w-3/4 flex gap-2">
            <CheckBoxOutlineBlankIcon />
            <h1>Set as default address</h1>
          </div>
        </div> */}
        <div className="w-3/4 flex justify-between items-center mt-6">
          <h1 className="w-1/4"></h1>
          <div className="w-3/4 flex gap-2">
            <button onClick={handleCreateAddress} className="bg-[rgb(var(--quaternary-rgb))] text-white rounded-md py-2 px-16">
              Create
            </button>
            <button
              className="bg-gray-300 text-gray-700 rounded-md py-2 px-16"
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

export default CreateAddress;