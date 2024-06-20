"use client";

import React, { useEffect, useState } from "react";
import Divider from "@mui/material/Divider";
import DeleteIcon from '@mui/icons-material/Delete';
import { Pagination } from "@mui/material";
import Cookie from 'js-cookie';
import { ProfileService } from "@/service/profile";

export default function Notify() {

  const accountID = JSON.parse(Cookie.get('accountID') || "0");
  const [notifies, setNotifies] = useState([] as any);

  const handleGetNotify = async () => {
    const fetch = async () => {
      const prof = await ProfileService.getAllNotifyByAccountID(accountID);
      if (prof?.result) {
        setNotifies(prof?.data);
      } else {
        console.log("wrong");
      }
    }
    fetch();
  }

  const handleDeleteNotify = async (ID: string) => {
    const prof = await ProfileService.deleteNotifyByID(ID);
    if (prof?.result) {
      handleGetNotify();
    } else {
      console.log(prof.data);
    }
  }

  useEffect(() => {
    handleGetNotify();
  }, []);

  useEffect(() => { }, [notifies]);

  return (
    <div className="w-full box-border pb-36">
      <h1 className="font-semibold text-[20px] py-4">Notification</h1>
      <div className="w-full flex gap-x-4 bg-gray-50 rounded-lg p-5">
        <div className="w-full flex flex-col gap-2">

          {notifies?.length === 0 && <div className="w-full flex justify-center items-center">
            <h1 className="text-[14px] font-semibold">There is NO notification</h1></div>}
          {notifies?.map((item: any, index: any) => {
            return (
              <div key={index} className="w-full pt-2">
                <div className="flex justify-between items-center">
                  <div className="flex gap-x-4 items-center">
                    <div>
                      <div className="border rounded-md">
                        <img src="https://cdn-icons-png.flaticon.com/512/5220/5220625.png" alt="avatar" className="rounded-full w-16 h-16" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h1 className="font-medium">{item?.title}</h1>
                      <h1>{item?.description}</h1>
                      <h1 className="text-[12px]">11/12/2024 &nbsp; - &nbsp; 12:35:05</h1>
                    </div>
                  </div>
                  <div onClick={() => handleDeleteNotify(item?.id)} className="border rounded-full mr-2 p-2 bg-[rgb(var(--primary-rgb))] cursor-pointer">
                    <DeleteIcon className="text-white" />
                  </div>
                </div>
                <Divider className="pt-4" />
              </div>
            );
          })}
        </div>
      </div>
      {
        notifies?.length > 0 && <div className="flex justify-end gap-x-2 mt-8">
          <Pagination count={Math.ceil(notifies?.length / 10)} variant="outlined" shape="rounded" />
        </div>
      }

    </div>
  );
}
