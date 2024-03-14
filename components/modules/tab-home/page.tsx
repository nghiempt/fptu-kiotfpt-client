"use client";

import ProductCard from "@/components/common/product_card";
import { URL } from "@/constant/url";
import React, { useEffect } from "react";
import { PRODUCTS } from "@/constant/fake";

export default function TabHome({ translate }: { translate: any }) {

  const init = async () => { };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => { }, []);

  return (
    <div className="w-3/4 flex flex-col justify-center items-center py-10">

      <div className="w-full rounded-lg flex justify-center items-center gap-4">
        <div className="aspect-w-1 aspect-h-1">
          <img className="object-cover rounded-lg" src={URL.BANNER} alt="img" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img className="object-cover rounded-lg" src={URL.BANNER} alt="img" />
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

      <div className="w-full py-10 rounded-lg bg-green-100 text-center my-10">QUẢNG CÁO</div>

      <div className="w-full my-10 flex gap-4">
        <div className="w-1/5">
          <div className="aspect-w-1 aspect-h-1">
            <img className="object-cover rounded-lg" src={URL.PRODUCT} alt="img" />
          </div>
        </div>

        <div className="w-4/5">
          <div className="grid grid-cols-4 gap-4">
            {
              PRODUCTS?.map((item: any, index: any) => {
                return (
                  <ProductCard product={item} index={index} />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}
