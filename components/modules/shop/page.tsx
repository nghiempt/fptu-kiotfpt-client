"use client";

import { URL } from "@/constant/url";
import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Shop({ translate }: { translate: any }) {

  const init = async () => {};

  useEffect(() => {
    init();
  }, []);

  useEffect(() => { }, []);

  return (
    <div className="w-3/4 flex flex-col justify-center items-center my-10">

      <div className="w-full flex justify-center items-center gap-4 border border-gray-200 py-10">
        <div className="w-1/3 flex justify-center items-center gap-4">
          <Avatar src={URL.AVATAR} />
          <h1>Shop Name</h1>
        </div>

        <div className="w-2/3 grid grid-cols-2">
          <h1>Dia Chi: Nguyen Van Cu, Can Tho</h1>
          <h1>Dia Chi: Nguyen Van Cu, Can Tho</h1>
          <h1>Dia Chi: Nguyen Van Cu, Can Tho</h1>
          <h1>Dia Chi: Nguyen Van Cu, Can Tho</h1>
          <h1>Dia Chi: Nguyen Van Cu, Can Tho</h1>
          <h1>Dia Chi: Nguyen Van Cu, Can Tho</h1>
        </div>
      </div>

      <div className="w-full mt-10 grid grid-cols-6 gap-8">
        {
          ['', '', '', '', '', '']?.map((item: any, index: any) => {
            return (
              <div key={index} className="flex flex-col gap-2">
                <div className="aspect-w-1 aspect-h-1">
                  <img className="object-cover rounded-lg" src={URL.PRODUCT} alt="img" />
                </div>
                <h1 className="text-[16px] font-semibold">Iphone 15 ProMax</h1>
                <h1 className="text-[20px]">$1099.9</h1>
              </div>
            )
          })
        }
      </div>

    </div>
  );
}
