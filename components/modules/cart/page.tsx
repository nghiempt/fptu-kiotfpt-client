"use client";

import React, { useEffect, useState } from "react";
import { Divider } from "@mui/material";
import { FetchData } from "@/fetch/fetch_data";
import { useSearchParams } from "next/navigation";
import { convertStringToMoney } from "@/utils/helper";

export default function Cart({ translate }: { translate: any }) {
  const searchParams = useSearchParams();

  const [product, setProduct] = useState<any>([]);

  const init = async () => {
    const fetchproduct = await FetchData.GET_ALL_PRODUCTS();
    setProduct(fetchproduct);
    console.log(product);
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {}, [product]);

  return (
    <div className="lg:w-4/5 flex flex-col lg:flex-row justify-center lg:px-0 gap-x-5 mb-10 mt-10">
      <div className=" px-2 lg:py-2 w-4/5">
        <div className="flex grid grid-cols-1">
          <div className="lg:col-span-6 rounded-lg">
            <div className="flex text-[14px] font-bold">
              <div className="w-2/5">
                <h1 className="">Item</h1>
              </div>
              <div className="flex w-3/5 gap-x-20">
                <h1>Price</h1>
                <h1 className="pl-10">Qty </h1>
                <h1>Subtotal</h1>
              </div>
            </div>
            <Divider className="pt-2" />
            <div className="flex text-[14px] flex-col">
              {product?.map((item: any, index: any) => {
                return (
                  <div>
                    <div key={index} className="flex pt-5">
                      <div className="w-2/5 flex gap-x-5">
                        <img
                          className="aspect-w-1 object-cover rounded-md w-20 h-20"
                          src={item?.p_thumbnail}
                          alt="img"
                        />
                        <h1 className="">{item?.p_name}</h1>
                      </div>
                      <div className="flex w-3/5 gap-x-20">
                        <h1 className="font-bold">
                          {convertStringToMoney(
                            item?.p_price || "0"
                          ).toString()}{" "}
                          VND
                        </h1>
                        <h1>{item?.p_quantity} </h1>
                        <h1 className="font-bold">
                          {convertStringToMoney(
                            item?.p_quantity * item?.p_price || "0"
                          ).toString()}{" "}
                          VND
                        </h1>
                      </div>
                    </div>
                    <Divider className="pt-2" />
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between">
              <div className="w-1/2 flex gap-x-2">
                <button
                  type="submit"
                  className="mt-4 w-full h-8 rounded-full text-[14px] border border-gray-500"
                  style={{ color: "gray" }}
                >
                  Continue Shopping
                </button>
                <button
                  type="submit"
                  className="bg-black mt-4 w-full h-8 rounded-full text-[14px] border border-gray-500"
                  style={{ color: "white" }}
                >
                  Clear Shopping Cart
                </button>
              </div>
              <div className="w-1/4">
                <button
                  type="submit"
                  className="bg-black mt-4 w-full h-8 rounded-full text-[14px] border border-gray-500"
                  style={{ color: "white" }}
                >
                  Update Shopping Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-6 p-2 lg:p-8 bg-[rgb(var(--tertiary-rgb))] rounded-lg">
        <h1 className="text-[24px] font-bold mb-4">Summary</h1>
        <h1 className="text-[18px] mb-4">Estimate Shipping and Tax</h1>
        <h1 className="text-[14px] mb-4">
          Enter your destination to get a shipping estimate.
        </h1>
        <h1 className="text-[18px] mb-4">Apply Discount Code</h1>
        <Divider className="pt-2" />
        <div className="flex justify-between mb-4 pt-2">
          <h1 className="text-[14px] font-bold">Subtotal</h1>
          <h1 className="text-[14px] font-bold">0 VND</h1>
        </div>
        <div className="flex justify-between">
          <h1 className="text-[14px] font-bold">Shipping</h1>
          <h1 className="text-[14px] font-bold">0 VND</h1>
        </div>
        <h1 className="text-[10px] text-gray-500 mb-4">
          (Standard Rate - Price may vary depending on the item/destination.
          TECS Staff will contact you.)
        </h1>
        <div className="flex justify-between mb-4">
          <h1 className="text-[14px] font-bold">Tax</h1>
          <h1 className="text-[14px] font-bold">0 VND</h1>
        </div>
        <div className="flex justify-between mb-4">
          <h1 className="text-[14px] font-bold">GST(10%)</h1>
          <h1 className="text-[14px] font-bold">0 VND</h1>
        </div>
        <div className="flex justify-between mb-4">
          <h1 className="text-[14px] font-bold">Order Total</h1>
          <h1 className="text-[14px] font-bold">0 VND</h1>
        </div>
        <button
          type="submit"
          className="mt-2 w-full h-8 bg-[rgb(var(--primary-rgb))] rounded-full text-[14px]"
          style={{ color: "white" }}
        >
          Proceed to Checkout
        </button>
        <button
          type="submit"
          className="mt-3 w-full h-8 bg-[rgb(var(--secondary-rgb))] rounded-full text-[14px]"
          style={{ color: "black" }}
        >
          Check out with ABC
        </button>
        <button
          type="submit"
          className="mt-3 w-full h-8 bg-white rounded-full text-[14px] border border-gray-500"
          style={{ color: "gray" }}
        >
          Check Out with Multiple Addresses
        </button>
        <div className="mt-3 flex text-center justify-center items-center gap-x-2">
          <div className="w-[20px] h-[20px]">
            <img src="https://cdn-icons-png.flaticon.com/128/9130/9130402.png" />
          </div>
          <div className="w-[1px] h-[10px] bg-[rgb(var(--primary-rgb))]"></div>
          <span className="text-[12px] font-semibold">
            own it now, up to 6 months interest free
          </span>
          <span className="underline">learn more</span>
        </div>
      </div>
    </div>
  );
}
