"use client";

import { URL } from "@/constant/url";
import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import { PRODUCTS } from "@/constant/fake";
import ProductCard from "@/components/common/product_card";

export default function Shop({ translate }: { translate: any }) {

  const init = async () => { };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => { }, []);

  return (
    <div className="w-3/4 flex flex-col justify-center items-center my-10">

      <div className="w-full flex justify-center items-center gap-4 border border-gray-200 py-10 shadow-lg" style={{ backgroundColor: '#ffffff', borderRadius: '8px' }}>
        <div className="w-1/3 flex justify-start items-center gap-4" style={{ paddingLeft: '3%' }}>
          <Avatar src={URL.AVATAR} className="cursor-pointer drop-shadow-2xl" style={{ width: "25%", height: 'auto', minWidth: "40px" }} />
          <h1 className="text-lg font-bold hover:underline cursor-pointer drop-shadow-2xl">Shop Name</h1>
        </div>

        <div className="w-2/3 grid grid-cols-3 relative">
          <div className="flex flex-col">
            <div className="flex items-end">
              <HourglassEmptyIcon className="mr-2" />
              <span>Thời gian bán hàng</span>
            </div>

            <span style={{ color: '#FF4155', fontWeight: 'bold', fontSize: '14px' }} className="drop-shadow-lg">3 năm 6 tháng</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-end">
              <Inventory2Icon className="mr-2" />
              <span>Số lượng sản phẩm</span>
            </div>
            <span style={{ color: '#FF4155', fontWeight: 'bold', fontSize: '14px' }} className="drop-shadow-lg">36</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-end">
              <AccessTimeIcon className="mr-2" />
              <span>Thời gian chuẩn bị hàng</span>
            </div>
            <span style={{ color: '#FF4155', fontWeight: 'bold', fontSize: '14px' }} className="drop-shadow-lg">9 giờ</span>
          </div>
        </div>
      </div>

      <div className="w-full mt-10 grid grid-cols-5 gap-4">
        {
          PRODUCTS?.map((item: any, index: any) => {
            return (
              <ProductCard product={item} index={index} />
            )
          })
        }
      </div>



    </div>
  );
}
