"use client";

import { URL } from "@/constant/url";
import React, { useEffect, useState } from "react";

export default function Product({ translate }: { translate: any }) {

  const init = async () => {};

  useEffect(() => {
    init();
  }, []);

  useEffect(() => { }, []);

  return (
    <div className="w-3/4 grid grid-cols-2 gap-10 my-10">

      <div className="w-full flex flex-col justify-center items-center">
        <div className="aspect-w-1 aspect-h-1">
          <img className="object-cover rounded-lg" src={URL.PRODUCT} alt="img" />
        </div>
        <div className="w-full mt-10 grid grid-cols-6 gap-8">
          {
            ['', '', '', '', '', '']?.map((item: any, index: any) => {
              return (
                <div key={index} className="flex flex-col gap-2">
                  <div className="aspect-w-1 aspect-h-1">
                    <img className="object-cover rounded-lg" src={URL.PRODUCT} alt="img" />
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className="w-full">
        <h1 className="text-[24px] font-semibold">Ten San Pham</h1>
        <h1 className="text-[16px]">Trang thai: Con Hang</h1>
        <h1 className="text-[20px] mt-6">Gia goc: 50.000 VND</h1>
        <h1 className="text-[28px] mt-2">Gia: 29.000 VND</h1>
        <h1 className="text-[16px] mt-6">Mo ta san pham</h1>
      </div>
    </div>
  );
}
