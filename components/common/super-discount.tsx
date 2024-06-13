"use client";

import { ROUTE } from "@/constant/route";
import Link from "next/link";
import React from "react";

export default function SuperDiscount() {
  return (
    <div className="bg-[rgb(var(--quaternary-rgb))] rounded-md py-5 my-5 w-full border-box">
      <div className="flex justify-between items-center px-10 ">
        <div >
          <div className="font-bold text-[18px] text-[#f5f5f5]">
            Super discount on more than 100 USD
          </div>
          <div className="text-[#f5f5f5]">Have you ever finally just write dummy info</div>
        </div>
        <Link href={ROUTE.PRODUCT} className="px-4 py-2 bg-yellow-500 text-white rounded-md font-black">
          Shop now
        </Link>
      </div>
    </div>
  );
}
