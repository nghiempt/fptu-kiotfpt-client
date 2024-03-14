"use client";

import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';
import Divider from '@mui/material/Divider';
import { URL } from "@/constant/url";
import Link from "next/link";
import { ROUTE } from "@/constant/route";

export default function Header({ translate }: { translate: any }) {
  return (
    <div className="w-full py-10 bg-white">
      <div className="w-3/4 mx-auto flex text-center justify-between items-center mb-5">
        <div className="w-[50px] h-[50px]">
          <Link href={{
            pathname: ROUTE.HOME
          }}>
            <img
              className="object-cover rounded-md"
              src={URL.LOGO}
              alt="img"
            />
          </Link>
        </div>
        <div className="text-black font-bold flex items-center space-x-4">
          <div className="w-1/8 cursor-pointer hover:underline">Laptops</div>
          <div className="w-1/8 cursor-pointer hover:underline">Desktop PCs</div>
          <div className="w-1/8 cursor-pointer hover:underline">Networking Devices</div>
          <div className="w-1/8 cursor-pointer hover:underline">Printers & Scanners</div>
          <div className="w-1/8 cursor-pointer hover:underline">PC Parts</div>
          <div className="w-1/8 cursor-pointer hover:underline">All Other Products</div>
          <div className="w-1/8 cursor-pointer hover:underline">Repairs</div>
          <div className="w-1/8 border border-[rgb(var(--primary-rgb))] text-[rgb(var(--primary-rgb))] p-2 justify-center items-center rounded-full cursor-pointer">
            Our Deals
          </div>
        </div>
        <div className="text-black space-x-5">
          <SearchIcon />
          <ShoppingCartIcon />
          <Link href={{
            pathname: ROUTE.SIGN_IN
          }}>
            <NoAccountsIcon />
          </Link>
        </div>
      </div>
      <Divider />
    </div>
  );
}
