"use client";

import { URL } from "@/constant/url";
import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import ProductCard from "@/components/common/product_card";
import { FetchData } from "@/fetch/fetch_data";
import { useSearchParams } from "next/navigation";
import Rating from '@mui/material/Rating';
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

export default function Shop({ translate }: { translate: any }) {

  const searchParams = useSearchParams()

  const [shop, setShop] = useState<any>([]);

  const init = async () => {
    const fetchShop = await FetchData.GET_ALL_SHOPS()
    let foundItem: any = fetchShop?.find((item: any) => item?.s_id.toString() === (searchParams.get('shopId') || '1'));
    setShop(foundItem)
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => { }, [shop]);

  return (
    <div className="w-3/4 flex flex-col justify-center items-center my-10">

      <div className="w-full flex justify-center items-center gap-4 border border-gray-200 py-6 shadow-lg" style={{ backgroundColor: '#ffffff', borderRadius: '8px' }}>
        <div className="w-1/3 flex justify-start items-center gap-8" style={{ paddingLeft: '3%' }}>
          <Avatar src={URL.AVATAR} className="cursor-pointer drop-shadow-2xl" style={{ width: "16%", height: 'auto', minWidth: "40px" }} />
          <div className="flex justify-between flex-col gap-2" >
            <h1 className="text-lg font-bold hover:underline cursor-pointer drop-shadow-2xl">{shop?.s_name}</h1>
            <span><b>Email: </b>{shop?.s_email}</span>
          </div>
        </div>

        <div className="w-2/3 grid grid-cols-2 relative pl-14">
          <div className="items-left py-2">
            <LocalPhoneIcon className="mr-2" />
            <span className="text-[14px]">Số điện thoại: </span>
            <span className="text-[14px]" style={{ color: "#0156ff" }}>{shop?.s_phone}</span>
          </div>
          <div className="items-left py-2">
            <ThumbUpOffAltIcon className="mr-2" />
            <span className="text-[14px]">Rating: </span>
            <Rating name="read-only" value={5} readOnly size="small" />
          </div>
          <div className="items-left py-2">
            <HourglassEmptyIcon className="mr-2" />
            <span className="text-[14px]">Thời gian bán hàng: </span>
            <span className="text-[14px]" style={{ color: "#0156ff" }}>1 tháng</span>
          </div>
          <div className="items-left py-2">
            <Inventory2Icon className="mr-2" />
            <span className="text-[14px]">Số lượng sản phẩm: </span>
            <span className="text-[14px]" style={{ color: "#0156ff" }}>1</span>
          </div>
          <div className="items-left py-2">
            <AccessTimeIcon className="mr-2" />
            <span className="text-[14px]">Thời gian chuẩn bị hàng: </span>
            <span className="text-[14px]" style={{ color: "#0156ff" }}>10 giờ</span>
          </div>
          <div className="items-left py-2">
            <HomeIcon className="mr-2" />
            <span className="text-[14px]">Địa chỉ: </span>
            <span className="text-[14px]" style={{ color: "#0156ff" }}>{shop?.s_address}</span>
          </div>
        </div>
      </div>

      <div className="w-full mt-10 grid grid-cols-5 gap-4">
        {
          shop?.products?.map((item: any, index: any) => {
            return (
              <ProductCard product={item} index={index} />
            )
          })
        }
      </div>
    </div>
  );
}
