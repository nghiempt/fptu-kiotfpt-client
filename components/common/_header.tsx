"use client";

import React, { useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';
import Divider from '@mui/material/Divider';


export default function Header({ translate }: { translate: any }) {
  return (
    <div className="w-full py-10 bg-white">
  <div className="w-3/4 mx-auto flex text-center justify-between items-center mb-5">
    <div className="text-black">icon nè</div>
    <div className="text-black font-bold flex items-center space-x-4">
      <div className="w-1/8 cursor-pointer hover:underline">Laptops</div>
      <div className="w-1/8 cursor-pointer hover:underline">Desktop PCs</div>
      <div className="w-1/8 cursor-pointer hover:underline">Networking Devices</div>
      <div className="w-1/8 cursor-pointer hover:underline">Printers & Scanners</div>
      <div className="w-1/8 cursor-pointer hover:underline">PC Parts</div>
      <div className="w-1/8 cursor-pointer hover:underline">All Other Products</div>
      <div className="w-1/8 cursor-pointer hover:underline">Repairs</div>
      <div className="w-1/8 border border-[#0156FF] text-[#0156FF] p-2 justify-center items-center rounded-full cursor-pointer">
        Our Deals
      </div>
    </div>
    <div className="text-black space-x-5">
      <SearchIcon/>
      <ShoppingCartIcon/>
      <NoAccountsIcon/>
    </div>
  </div>
  <Divider/>
</div>
  );
}
