"use client";

import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IMAGE } from "@/constant/image";
import { ROUTE } from "@/constant/route";
import Link from "next/link";

export default function CategoryMenu() {
  return (
    <div className="w-full flex justify-center border mb-5 py-3">
      <div className="w-3/4 flex justify-between font-medium">
        <div className="flex gap-x-5">
          <div className="flex gap-x-2">
            <MenuIcon />
            <Link href={ROUTE.PRODUCT}>All category</Link>
          </div>
          <Link href={ROUTE.PRODUCT}>Top Deals</Link>
          <Link href={ROUTE.PRODUCT}>Popular Brand</Link>
          <Link href={ROUTE.PRODUCT}>Popular Category</Link>
          <Link href={ROUTE.PRODUCT}>Discount</Link>
          <div className="flex">
            <div>Help&nbsp;</div>
            <ExpandMoreIcon />
          </div>
        </div>
        <div className="flex gap-x-5 ">
          <div>
            English, USD
            <ExpandMoreIcon />
          </div>
          <div className="flex gap-x-2 items-center">
            Ship to
            <img
              src={IMAGE.VN_FLAG}
              alt="img"
              style={{ width: "20px", height: "20px" }}
            />
            <ExpandMoreIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
