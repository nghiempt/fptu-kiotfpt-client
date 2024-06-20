"use client";

import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import LockIcon from '@mui/icons-material/Lock';
import Divider from "@mui/material/Divider";
import GoogleIcon from '@mui/icons-material/Google';
import SuperDiscount from "@/components/common/super-discount";
import { ProfileService } from "@/service/profile";
import Cookie from 'js-cookie';

export default function AccountProfile() {

  const accountID = JSON.parse(Cookie.get('accountID') || "0");

  const [profile, setProfile] = useState({} as any);
  const [img, setImg] = useState('' as any);

  const handleUpload = async (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImg(reader.result);
    }
    reader.readAsDataURL(file);
    setProfile({
      ...profile,
      thumbnail: 'https://cdn-icons-png.flaticon.com/128/2202/2202112.png'
    });
  };

  React.useEffect(() => {
    const fetch = async () => {
      const prof = await ProfileService.getProfileByID(accountID);
      if (prof?.result) {
        setProfile(prof?.data);
        setImg(prof?.data?.thumbnail)
      }
    }
    fetch();
  }, []);

  const handleUpdateProfile = async () => {
    const prof = await ProfileService.updateProfile(profile);
    console.log(profile);
    console.log(prof);
    if (prof?.result) {
      alert(prof?.message);
      window.location.reload();
    } else {
      alert(prof?.message);
      window.location.reload();
    }
  };

  useEffect(() => { }, [img]);

  return (
    <div className="w-full border-box pb-36">
      <h1 className="font-semibold text-[20px] py-4">Account Information</h1>
      <div className="w-full flex gap-x-4 bg-gray-50 rounded-lg  shadow-md">
        <div className="w-3/5 flex flex-col gap-6 p-4">
          <h1 className="text-[14px] font-semibold">Personal Information</h1>
          <div className="flex w-full gap-x-2 justify-between items-center">
            <div className="w-1/5 cursor-pointer relative">
              <img src={profile?.thumbnail} alt="avatar" className="rounded-full w-16 h-16" />
              <input type="file" className="absolute" onChange={handleUpload} />
            </div>
            <div className="w-4/5 flex flex-col justify-center items-start gap-2">
              <div className="w-full flex justify-center items-center">
                <h1 className="w-40">Fullname</h1>
                <input
                  className="p-2 rounded-md outline-none w-full"
                  type="text"
                  placeholder=""
                  value={profile?.name}
                />
              </div>
              <div className="w-full flex justify-center items-center">
                <h1 className="w-40">Email</h1>
                <input
                  className="p-2 rounded-md outline-none w-full"
                  type="text"
                  placeholder="nghiempt.dev+5@gmail.com"
                  value={profile?.email}
                />
              </div>
            </div>
          </div>
          <div className="w-full flex font-medium items-center">
            <h1 className="w-1/5 font-semibold">Birthday</h1>
            <div className="w-4/5 flex gap-x-4">
              <div className="flex justify-between p-1 border rounded-sm">
                <h1 className="pr-10"></h1>
                <KeyboardArrowDownIcon />
              </div>
              <div className="flex justify-between p-1 border rounded-sm">
                <h1 className="pr-10"></h1>
                <KeyboardArrowDownIcon />
              </div>
              <div className="flex justify-between p-1 border rounded-sm">
                <h1 className="pr-10"></h1>
                <KeyboardArrowDownIcon />
              </div>
            </div>
          </div>
          <div className="w-full flex font-medium items-center">
            <h1 className="w-1/5 font-semibold">Sex</h1>
            <div className="w-4/5 flex gap-x-4">
              <div className="flex gap-x-2">
                <RadioButtonUncheckedIcon />
                <h1>Male</h1>
              </div>
              <div className="flex gap-x-2">
                <RadioButtonUncheckedIcon />
                <h1>Female</h1>
              </div>
              <div className="flex gap-x-2">
                <RadioButtonUncheckedIcon />
                <h1>Other</h1>
              </div>
            </div>
          </div>
          <div className="w-full flex font-medium items-center">
            <h1 className="w-1/5 font-semibold">Nationality</h1>
            <div className="w-4/5">
              <div className="flex justify-between p-1 border rounded-sm">
                <h1>Choose nationality</h1>
                <KeyboardArrowDownIcon />
              </div>
            </div>
          </div>
          <div className="w-full flex font-medium items-center">
            <div className="w-1/5"></div>
            <div className="w-4/5">
              <button onClick={handleUpdateProfile} className="bg-[rgb(var(--quaternary-rgb))] py-1 px-8 rounded-md text-white">
                Save
              </button>
            </div>
          </div>
        </div>
        <Divider orientation="vertical" flexItem />
        <div className="w-2/5 flex flex-col gap-6 p-4">
          <div>
            <h1 className="font-semibold">Phone and Email</h1>
            <div className="flex justify-between pt-5">
              <div className="flex gap-x-2 items-center">
                <LocalPhoneOutlinedIcon />
                <div>
                  <h1></h1>
                </div>
              </div>
              <div>
                <button className="text-[rgb(var(--quaternary-rgb))] border border-[rgb(var(--quaternary-rgb))] rounded-md py-1 px-2">
                  Update
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-x-2 items-center">
              <EmailOutlinedIcon />
              <div>
                <h1>nghiempt.dev+5@gmail.com</h1>
              </div>
            </div>
            <div>
              <button className="text-[rgb(var(--quaternary-rgb))] border border-[rgb(var(--quaternary-rgb))] rounded-md py-1 px-2">
                Update
              </button>
            </div>
          </div>
          <div>
            <h1 className="font-semibold">Security</h1>
            <div className="flex justify-between pt-5">
              <div className="flex gap-x-2 items-center">
                <LockIcon />
                <div>
                  <h1>Change password</h1>
                </div>
              </div>
              <div>
                <button className="text-[rgb(var(--quaternary-rgb))] border border-[rgb(var(--quaternary-rgb))] rounded-md py-1 px-2">
                  Update
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-x-2 items-center">
              <VerifiedUserOutlinedIcon />
              <div>
                <h1>Set up pin code</h1>
              </div>
            </div>
            <div>
              <button className="text-[rgb(var(--quaternary-rgb))] border border-[rgb(var(--quaternary-rgb))] rounded-md py-1 px-2">
                Establish
              </button>
            </div>
          </div>
          <div>
            <h1 className="font-semibold">Social Network Link</h1>
            <div className="flex justify-between pt-5">
              <div className="flex gap-x-2 items-center">
                <GoogleIcon />
                <div>
                  <h1>Google</h1>
                </div>
              </div>
              <div>
                <button className="text-[rgb(var(--quaternary-rgb))] border border-[rgb(var(--quaternary-rgb))] rounded-md py-1 px-2">
                  Link
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SuperDiscount />
    </div>
  );
}
