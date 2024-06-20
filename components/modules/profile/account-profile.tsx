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
import UpdatePasswordModal from "@/components/pop-up/update-password-modal";
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import Alert from '@mui/material/Alert';
import { log } from "console";

export default function AccountProfile() {

  const accountID = JSON.parse(Cookie.get('accountID') || "0");

  const [profile, setProfile] = useState({} as any);
  const [phone, setPhone] = useState('' as any);
  const [email, setEmail] = useState('' as any);
  const [name, setName] = useState('' as any);
  const [birthday, setBirthday] = useState('' as any);
  const [img, setImg] = useState('' as any);
  const [isUpdatePassword, setIsUpdatePassword] = useState(false);

  const handleOpenUpdatePassword = () => {
    setIsUpdatePassword(true);
  }

  const handleCloseUpdatePassword = () => {
    setIsUpdatePassword(false);
  }

  const handleUpload = async (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImg(reader.result);
    }
    reader.readAsDataURL(file);
  };

  React.useEffect(() => {
    const fetch = async () => {
      const prof = await ProfileService.getProfileByID(accountID);
      if (prof?.result) {
        setProfile(prof?.data);
        setPhone(prof?.data?.phone);
        setEmail(prof?.data?.email);
        setName(prof?.data?.name);
        setBirthday(prof?.data?.birthday.substring(0, 10));
        setImg(prof?.data?.thumbnail)
      }
    }
    fetch();
  }, []);

  const handleUpdateProfile = async () => {
    if (name.length < 6) {
      handleOpenAtleastAlert();
      return;
    }
    if (name.length > 255) {
      handleOpenTooLongAlert();
      return;
    }
    if (phone.length !== 10) {
      handleOpenPhoneAlert();
      return;
    }
    if (!email.includes('@')) {
      handleOpenEmailsAlert();
      return;
    }
    let payload = {
      id: accountID,
      name: name,
      thumbnail: img,
      phone: phone,
      email: email,
      birthday: birthday,
    };

    const prof = await ProfileService.updateProfile(payload);
    if (prof?.result) {
      handleOpenSuccessAlert();
      console.log(prof);
    } else {
      alert(prof?.message);
      window.location.reload();
    }
  };

  useEffect(() => { }, [img, phone, email, name, birthday]);

  const handleOpenSuccessAlert = () => {
    const alertSuccess = document.getElementById('alertSuccess');
    if (alertSuccess) {
      alertSuccess.style.display = 'flex';
      setTimeout(() => {
        alertSuccess.style.display = 'none';
      }, 5000);
    }
  }
  const handleOpenAtleastAlert = () => {
    const alertSuccess = document.getElementById('alertAtleast');
    if (alertSuccess) {
      alertSuccess.style.display = 'flex';
      setTimeout(() => {
        alertSuccess.style.display = 'none';
      }, 5000);
    }
  }
  const handleOpenTooLongAlert = () => {
    const alertSuccess = document.getElementById('alertTooLong');
    if (alertSuccess) {
      alertSuccess.style.display = 'flex';
      setTimeout(() => {
        alertSuccess.style.display = 'none';
      }, 5000);
    }
  }
  const handleOpenPhoneAlert = () => {
    const alertSuccess = document.getElementById('alertPhone');
    if (alertSuccess) {
      alertSuccess.style.display = 'flex';
      setTimeout(() => {
        alertSuccess.style.display = 'none';
      }, 5000);
    }
  }
  const handleOpenEmailsAlert = () => {
    const alertSuccess = document.getElementById('alertEmail');
    if (alertSuccess) {
      alertSuccess.style.display = 'flex';
      setTimeout(() => {
        alertSuccess.style.display = 'none';
      }, 5000);
    }
  }

  return (
    <div className="w-full border-box pb-36">
      <div style={{
        position: 'fixed',
        top: '150px',
        right: '20px',
        zIndex: 10,
        width: '300px',
      }}>
        <Alert variant="filled" severity="success" className='w-full' id="alertSuccess" style={{ display: 'none', alignItems: 'center' }}>
          Update profile successfully!
        </Alert>
        <Alert variant="filled" severity="warning" className='w-full' id="alertAtleast" style={{ display: 'none', alignItems: 'center' }}>
          Full name must be at least 6 characters!
        </Alert>
        <Alert variant="filled" severity="warning" className='w-full' id="alertTooLong" style={{ display: 'none', alignItems: 'center' }}>
          Full name is too long, must shorter than 256 characters!
        </Alert>
        <Alert variant="filled" severity="warning" className='w-full' id="alertPhone" style={{ display: 'none', alignItems: 'center' }}>
          Phone number must be ten characters!
        </Alert>
        <Alert variant="filled" severity="warning" className='w-full' id="alertEmail" style={{ display: 'none', alignItems: 'center' }}>
          Email is invalid!
        </Alert>
      </div>

      <UpdatePasswordModal open={isUpdatePassword} handleClose={handleCloseUpdatePassword} />
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
                <TextField
                  className="w-full"
                  id="outlined-multiline-static"
                  label="Full name"
                  value={name}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setName(event.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="w-full flex font-medium items-center">
            <h1 className="w-40">Birthday</h1>
            <LocalizationProvider dateAdapter={AdapterDayjs} >
              <DatePicker format="YYYY/MM/DD" value={dayjs(birthday)} onChange={(newValue) => setBirthday(newValue)} />
            </LocalizationProvider>
          </div>
          <div className="w-full flex font-medium items-center">
            <h1 className="w-40">Email</h1>
            <TextField
              className="w-full"
              id="outlined-multiline-static"
              label="Email"
              value={email}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className="w-full flex font-medium items-center">
            <h1 className="w-40">Phone</h1>
            <TextField
              className="w-full"
              id="outlined-multiline-static"
              label="Phone number"
              value={phone}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setPhone(event.target.value);
              }}
            />
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
          {/* <div>
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
          </div> */}
          {/* <div className="flex justify-between">
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
          </div> */}
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
                <button onClick={handleOpenUpdatePassword} className="text-[rgb(var(--quaternary-rgb))] border border-[rgb(var(--quaternary-rgb))] rounded-md py-1 px-2">
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
