"use client";

import React, { useEffect, useState } from "react";
import Cookie from 'js-cookie';
import { ProfileService } from "@/service/profile";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';

interface UpdateAddressProps {
  onCancel: () => void;
  addressID: any;
}

const UpdateAddress: React.FC<UpdateAddressProps> = ({ onCancel, addressID }) => {
  const accountID = JSON.parse(Cookie.get('accountID') || "0");
  const [province, setProvince] = useState('' as string);
  const [district, setDistrict] = useState('' as string);
  const [addressDetail, setAddressDetail] = useState('' as any);
  const [provinces, setProvinces] = useState([] as any);
  const [districts, setDistricts] = useState([] as any);
  const [isdefault, setIsdefault] = useState(false as boolean);

  const handleUpdateAddress = async () => {
    console.log(province, district, addressDetail);
    if (province === '' || district === '' || addressDetail === '') {
      alert('Please fill in all fields');
      return;
    } else {
      let person = {
        account_profile_id: accountID,
        address_id: addressID,
        address_value: addressDetail,
        district_id: district,
        province_id: province
      };
      const fetch = async () => {
        const prof = await ProfileService.updateAddress(person);
        if (prof?.result) {
          console.log(prof?.data);
          alert('Update Address successfully');
          window.location.reload();
        }
      }
      fetch();

      if (isdefault) {
        const fetch2 = async () => {
          const prof = await ProfileService.setAddressDefault(addressID);
          if (prof?.result) {
            console.log(prof?.data);
            alert('Update Address successfully');
            window.location.reload();
          }
        }
        fetch2();
      }

    }
  }

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

  const handleGetAddress = async () => {
    const fetch = async () => {
      const prof = await ProfileService.getAddressByID(addressID);
      if (prof?.result) {
        console.log(prof?.data);
        setAddressDetail(prof?.data?.value);
        setProvince(prof?.data?.province?.id);

        const fetch2 = async () => {
          const prof2 = await ProfileService.getAllDistrictByProvinceID(prof?.data?.province?.id);
          if (prof2?.result) {
            setDistricts(prof2?.data);
          } else {
            console.log("wrong");
          }
        }
        fetch2();

        setDistrict(prof?.data?.district?.id);
      } else {
        console.log("wrong");
      }
    }
    fetch();
  }

  const handleChangeDefault = () => {
    console.log(!isdefault);
    setIsdefault(!isdefault);
  }

  useEffect(() => {
    handleGetAddress();
  }, []);

  useEffect(() => { }, [provinces, districts, province, district]);

  return (
    <div className="w-full box-border pb-36">
      <h1 className="font-semibold text-[20px] py-4">Update Address</h1>
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
        </div> */}
        {/* <div className="w-3/4 flex justify-between items-center">
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
                    <MenuItem key={index} value={item?.id}>{item?.value}</MenuItem>
                  );
                })};
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="w-3/4 flex justify-between items-center">
          <h1 className="w-1/4">District</h1>
          <div className="w-3/4 p-2 flex justify-between bg-white rounded-md">
            {districts.length > 0 && <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">District</InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={''}
                label="District"
                onChange={handleChangeDistrict}
              >
                {districts.map((item: any, index: any) => {
                  return (
                    <MenuItem key={index} value={item?.id}>{item?.value}</MenuItem>
                  );
                })};
              </Select>
            </FormControl>
            }

          </div>
        </div>

        <div className="w-3/4 flex justify-between items-center">
          <h1 className="w-1/4">Address</h1>
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

        <div className="w-3/4 flex justify-between items-center">
          <h1 className="w-1/4"></h1>
          <div className="w-3/4 flex gap-2">
            <Checkbox onChange={handleChangeDefault} />
            <h1>Set as default address</h1>
          </div>
        </div>
        <div className="w-3/4 flex justify-between items-center mt-6">
          <h1 className="w-1/4"></h1>
          <div className="w-3/4 flex gap-2">
            <button onClick={handleUpdateAddress} className="bg-[rgb(var(--quaternary-rgb))] text-white rounded-md py-2 px-16">
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