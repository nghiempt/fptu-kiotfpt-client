"use client";

import React from "react";
import Divider from "@mui/material/Divider";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import { Pagination } from "@mui/material";

export default function Notify() {
  return (
    <div className="w-full box-border pb-36">
      <h1 className="font-semibold text-[20px] py-4">Notification</h1>
      <div className="w-full flex gap-x-4 bg-gray-50 rounded-lg p-5">
        <div className="w-full flex flex-col gap-2">
          {[1, 2, 3, 4, 5, 6]?.map((item: any, index: any) => {
            return (
              <div className="w-full pt-2">
                <div className="flex justify-between items-center">
                  <div className="flex gap-x-4 items-center">
                    <div>
                      <div className="border rounded-md">
                        <img src="https://cdn-icons-png.flaticon.com/512/5220/5220625.png" alt="avatar" className="rounded-full w-16 h-16" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h1 className="font-medium">Order #KIOT3602</h1>
                      <h1>Product: Iphone 15 Pro Max Pink</h1>
                      <h1 className="text-[12px]">11/12/2024 &nbsp; - &nbsp; 12:35:05</h1>
                    </div>
                  </div>
                  <div className="border rounded-full mr-2 p-2 bg-[rgb(var(--primary-rgb))] cursor-pointer">
                    <RestoreFromTrashIcon className="text-white" />
                  </div>
                </div>
                <Divider className="pt-4" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-end gap-x-2 mt-8">
        <Pagination count={10} variant="outlined" shape="rounded" />
      </div>
    </div>
  );
}
