"use client";

import React from "react";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { limitString } from "@/utils/helper";
import Link from "next/link";
import { ROUTE } from "@/constant/route";

export default function CardProduct({ item, index, limit }: { item: any, index: any, limit: any }) {

  const renderStar = (rate: number) => {
    const stars = [];
    for (let i = 0; i < rate; i++) {
      stars.push(<StarIcon key={i} className="text-[#FF9017]" style={{ width: '14px' }} />);
    }
    if (stars.length < 5) {
      stars.push(<StarIcon key={5} className="text-[#D4CDC5]" style={{ width: '14px' }} />);
    }
    if (stars.length < 5) {
      stars.push(<StarIcon key={5} className="text-[#D4CDC5]" style={{ width: '14px' }} />);
    }
    if (stars.length < 5) {
      stars.push(<StarIcon key={5} className="text-[#D4CDC5]" style={{ width: '14px' }} />);
    }
    if (stars.length < 5) {
      stars.push(<StarIcon key={5} className="text-[#D4CDC5]" style={{ width: '14px' }} />);
    }
    return stars;
  }

  return (
    <Link
      href={{
        pathname: ROUTE.PRODUCT_DETAIL,
        query: { id: item?.id }
      }}
      key={index}
      className="border border-gray-200 rounded-md p-2 cursor-pointer"
    >
      <img src={item?.thumbnail[0]?.link} alt="img" />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex">
              <h1 className="font-semibold text-[16px]">$ {item?.maxPrice}</h1>
              <span className="ml-2 bg-gray-100 font-semibold text-gray-700 py-1 px-3 rounded-full text-xs">- {item?.discount}%</span>
            </div>
            <div className="flex items-center mt-1">
              {renderStar(item?.rate)}
              <h1 className="pl-2 text-xs">{item?.sold} sold</h1>
            </div>
          </div>
          <div className={`${item?.isFavourite ? 'bg-[rgb(var(--primary-rgb))]' : 'border border-gray-300'} rounded-md p-2`}>
            <FavoriteBorderIcon className={`${item?.isFavourite ? 'text-white' : 'text-gray-300'}`} />
          </div>
        </div>
        <h1 className="pt-2 text-[16px] font-medium">{limitString(item?.name, limit)}</h1>
      </div>
    </Link>
  );
}
