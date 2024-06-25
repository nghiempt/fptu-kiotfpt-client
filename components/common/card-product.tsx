"use client";

import React, { useEffect } from "react";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { limitString } from "@/utils/helper";
import Link from "next/link";
import { ROUTE } from "@/constant/route";

export default function CardProduct({
  item,
  index,
  limit,
}: {
  item: any;
  index: any;
  limit: any;
}) {
  const renderStar = (rate: number) => {
    const stars = [];

    for (let i = 0; i < rate; i++) {
      stars.push(
        <StarIcon
          key={`filled-${i}`}
          className="text-[#FF9017]"
          style={{ width: "14px" }}
        />
      );
    }

    for (let i = rate; i < 5; i++) {
      stars.push(
        <StarIcon
          key={`unfilled-${i}`}
          className="text-[#D4CDC5]"
          style={{ width: "14px" }}
        />
      );
    }

    return stars;
  };


  return (
    <Link
      href={{
        pathname: ROUTE.PRODUCT_DETAIL,
        query: { id: item?.id },
      }}
      key={index}
      className="border border-gray-200 rounded-md p-2 cursor-pointer"
    >
      <img src={item?.thumbnail[0]?.link} alt="img" />
      <div className="p-4">
        <div className="flex gap-x-2 items-center">
          <div className="w-full">
            <div className="flex gap-x-2 items-center">
              <h1 className="font-semibold text-[14px]">
                {item?.minPrice === item?.maxPrice
                  ? `$${item?.minPrice}`
                  : `$${item?.minPrice} - $${item?.maxPrice}`}
              </h1>
              <span className="font-semibold text-red-600 text-[10px]">
                -{item?.discount}%
              </span>
            </div>
            <div className="flex items-center mt-1">
              {renderStar(item?.rate)}
            </div>
            <h1 className="text-xs">{item?.sold} sold</h1>
          </div>
        </div>
        <h1 className="pt-2 text-[16px] font-medium">
          {limitString(item?.name, limit)}
        </h1>
        <div className="flex justify-center">
          <div
            className={`${
              item?.isFavourite
                ? "bg-[rgb(var(--primary-rgb))]"
                : "border border-gray-300"
            } rounded-md p-2`}
          >
            <FavoriteBorderIcon
              className={`${
                item?.isFavourite ? "text-white" : "text-gray-300"
              }`}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
