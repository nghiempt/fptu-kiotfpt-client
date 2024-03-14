"use client";

import ProductCard from "@/components/common/product_card";
import { URL } from "@/constant/url";
import React, { useEffect, useState } from "react";
import { FetchData } from "@/fetch/fetch_data";
import Link from "next/link";
import { ROUTE } from "@/constant/route";

export default function TabHome({ translate }: { translate: any }) {

  const [products, setProducts] = useState<any>([]);
  const [shops, setShops] = useState<any>([]);

  const init = async () => {
    const fetchProducts = await FetchData.GET_ALL_PRODUCTS()
    setProducts(fetchProducts)

    const fetchShops = await FetchData.GET_ALL_SHOPS()
    setShops(fetchShops)
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => { }, [products, shops]);

  return (
    <div className="w-3/4 flex flex-col justify-center items-center">

      <div className="w-full rounded-lg flex justify-center items-center gap-4">
        <div className="aspect-w-1 aspect-h-1">
          <img className="object-cover rounded-lg" src={URL.BANNER} alt="img" />
        </div>
      </div>

      <div className="w-full mt-10 grid grid-cols-5 gap-4">
        {
          products?.map((item: any, index: any) => {
            return (
              <ProductCard product={item} index={index} />
            )
          })
        }
      </div>

      <div className="w-full py-4 rounded-lg bg-[rgb(var(--tertiary-rgb))] text-center my-4 flex justify-center items-center gap-x-4">
        <div className="w-[40px] h-[40px]">
          <img src="https://cdn-icons-png.flaticon.com/128/9130/9130402.png" />
        </div>
        <div className="w-[1px] h-[20px] bg-[rgb(var(--primary-rgb))]"></div>
        <span className="text-[16px] font-semibold">own it now, up to 6 months interest free</span>
        <span className="underline">learn more</span>
      </div>

      {
        shops?.map((item: any, index: any) => {
          return (
            <div key={index} className="w-full my-10 flex flex-col">
              <div className="flex gap-8">
                <div
                  className="w-1/5 relative text-white flex flex-col justify-between items-center rounded-lg py-10"
                  style={{
                    backgroundImage: `url(https://i.pinimg.com/736x/a3/f5/e2/a3f5e2d63138e2023901cb8c70408de1.jpg)`,
                    backgroundSize: "cover",
                  }}
                >
                  <h1 className="text-[20px] font-semibold"></h1>
                  <h1 className="text-[20px] font-semibold">{item?.s_name}</h1>
                  <Link href={{
                    pathname: ROUTE.SHOP,
                    query: { shopId: item?.s_id.toString() }
                  }}>
                    <h1 className="text-[16px] font-medium underline">See all products</h1>
                  </Link>
                </div>
                <div className="w-4/5">
                  <div className="grid grid-cols-4 gap-4">
                    {
                      item?.products?.map((item: any, index: any) => {
                        return (
                          <ProductCard product={item} index={index} />
                        )
                      })
                    }
                  </div>
                </div>
              </div>
              <div className="w-full h-[2px] bg-[rgb(var(--tertiary-rgb))] mt-10"></div>
            </div>
          )
        })
      }

    </div>
  );
}
