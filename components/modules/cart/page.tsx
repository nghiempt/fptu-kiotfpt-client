"use client";

import React from "react";
import { Divider } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import EuroIcon from '@mui/icons-material/Euro';
import PixIcon from '@mui/icons-material/Pix';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import StyleIcon from '@mui/icons-material/Style';
import LockIcon from "@mui/icons-material/Lock";
import MessageIcon from "@mui/icons-material/Message";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Link from "next/link";
import { ROUTE } from "@/constant/route";
import SuperDiscount from "@/components/common/super-discount";
import DeleteIcon from '@mui/icons-material/Delete';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import CardProduct from "@/components/common/card-product";
import CategoryMenu from "@/components/common/category-menu";
import Cookie from 'js-cookie';
import { CartService } from "@/service/cart";

export default function Card() {

  const accountID = Cookie.get('accountID');

  const [cart, setCart] = React.useState([] as any);

  React.useEffect(() => {
    const fetch = async () => {
      const c = await CartService.getCartByID(JSON.parse(accountID || ""));
      if (c?.result) {
        setCart(c?.data);
        localStorage.setItem('cart', JSON.stringify(c?.data));
      }
    }
    fetch();
  }, []);

  return (
    <div className="w-full pt-4 flex flex-col justify-center items-center">
      <CategoryMenu />
      <div className="w-3/4 flex justify-start font-black text-2xl text-gray-700">My Cart ()</div>
      <div className="w-3/4 flex gap-x-4">
        <div className="w-full border border-gray-200 rounded-md px-6 py-3 my-5">
          <div className="w-full flex flex-col justify-center items-center gap-6">
            {
              cart?.map((section: any, index: any) => {
                return (
                  <div key={index} className="w-full p-4">
                    <div className="w-full bg-gray-100 p-2 flex items-center gap-2 rounded-lg">
                      <img src={section?.shop?.thumbnail} alt="img" style={{ width: 50 }} />
                      <h1>{section?.shop?.name}</h1>
                    </div>
                    {section?.items?.map((item: any, index: any) => {
                      return (
                        <div key={index} className="w-full flex justify-between">
                          <div className="flex justify-center items-center gap-x-5">
                            <img
                              src={section?.shop?.thumbnail}
                              alt="img"
                              style={{
                                width: 100,
                              }}
                            />
                            <div>
                              <div className="font-medium text-[16px] mb-1">
                                {section?.shop?.name}
                              </div>
                              <div className="font-regular text-gray-500 mb-2">
                                <div>
                                  <span>Color: {item?.repo?.color?.value}</span>
                                  <span> / Size: {item?.repo?.size?.value}</span>
                                </div>
                              </div>

                              <div className="flex gap-x-2">
                                <div className="bg-[rgb(var(--primary-rgb))] p-1 rounded-md text-white">
                                  <DeleteIcon />
                                </div>
                                <div className="bg-[rgb(var(--quaternary-rgb))] p-1 rounded-md text-white">
                                  <BookmarkIcon />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="my-5">
                            <div className="mb-2 text-right text-xl font-semibold">
                              ${item?.total}
                            </div>
                            <div className="flex">
                              <div className="flex justify-end gap-x-1">
                                <button
                                  type="submit"
                                  className="px-4 text-[16px] font-semibold border border-gray-200 rounded-sx"
                                  style={{ color: "gray" }}
                                >
                                  -
                                </button>
                                <input
                                  type="text"
                                  className="w-12 text-center text-white font-bold border border-[rgb(var(--quaternary-rgb))] rounded-sx bg-[rgb(var(--quaternary-rgb))]"
                                  value="1"
                                />
                                <button
                                  type="submit"
                                  className="px-4 text-[16px] font-semibold border border-gray-200 rounded-sx"
                                  style={{ color: "gray" }}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )
              })
            }
          </div>
          <div className="flex justify-between pt-8 pb-4">
            <button
              type="submit"
              className="py-2 px-4 text-[12px] font-semibold border border-gray-200 rounded-md"
              style={{ color: "black" }}
            >
              <ArrowBackIcon />
              &nbsp;Back to shop
            </button>
            <button
              type="submit"
              className="bg-[rgb(var(--primary-rgb))] py-2 px-4 text-[14px] font-semibold rounded-md"
              style={{ color: "white" }}
            >
              Remove all
            </button>
          </div>
        </div>
        <div className="w-1/4">
          <div className="border border-gray-200 rounded-md p-3 pb-2 mt-5">
            <div>Have a coupon?</div>
            <div className="flex my-2">
              <input
                type="text"
                placeholder="Add a coupon"
                className="w-1/2 px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <button className="px-4 py-2 bg-[rgb(var(--quaternary-rgb))] text-white border-t border-r border-b border-[rgb(var(--quaternary-rgb))] rounded-r-md hover:font-bold">
                Apply
              </button>
            </div>
          </div>
          <div className="border border-gray-200 rounded-md p-5 mt-4">
            <div className="flex justify-between">
              <div className="pb-1 text-[16px]">Subtotal</div>
              <div className="text-black pb-1 text-[16px] text-left font-semibold"></div>
            </div>
            <div className="flex justify-between">
              <div className="pb-1 text-[16px]">Discount</div>
              <div className="text-[rgb(var(--primary-rgb))] pb-1 text-[16px] text-left font-semibold"></div>
            </div>
            <div className="flex justify-between">
              <div className="pb-1 text-[16px]">Tax</div>
              <div className="text-[rgb(var(--tertiary-rgb))] pb-1 text-[16px] text-left font-semibold"></div>
            </div>
            <Divider className="pt-2" />
            <div className="flex justify-between font-bold pt-2">
              <div className="text-[18px]">Total</div>
              <div className="text-[18px] font-bold"></div>
            </div>
            <div className="my-2">
              <Link
                href={{
                  pathname: ROUTE.CHECKOUT,
                }}
              >
                <button className="w-full py-3 bg-[rgb(var(--primary-rgb))] text-white text-[16px] border rounded-md hover:opacity-80 font-black mt-4">
                  PAY
                </button>
              </Link>

            </div>
            <div className="flex p-2 gap-2">
              <CreditCardIcon />
              <PixIcon />
              <PriceChangeIcon />
              <StyleIcon />
              <EuroIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/4 flex justify-start py-4 gap-20">
        <div className="flex items-center gap-x-2">
          <div className="p-2 border rounded-full bg-[#DEE2E7]">
            <LockIcon style={{ color: "#8B96A5" }} />
          </div>
          <div>
            <div className="font-regular text-[#1C1C1C]">Secure payment</div>
            <div className="font-regular text-[#A9ACB0]">
              Have you ever finally just
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <div className="p-2 border rounded-full bg-[#DEE2E7]">
            <MessageIcon style={{ color: "#8B96A5" }} />
          </div>
          <div>
            <div className="font-regular text-[#1C1C1C]">Customer support</div>
            <div className="font-regular text-[#A9ACB0]">
              Have you ever finally just
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <div className="p-2 border rounded-full bg-[#DEE2E7]">
            <LocalShippingIcon style={{ color: "#8B96A5" }} />
          </div>
          <div>
            <div className="font-regular text-[#1C1C1C]">Free delivery</div>
            <div className="font-regular text-[#A9ACB0]">
              Have you ever finally just
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/4">
        <SuperDiscount />
      </div>
      <div className="w-3/4 mt-6 mb-10">
        <div className="">
          <h1 className="font-black text-2xl mb-4 text-gray-700">Related Products</h1>
          <div className="flex grid grid-cols-5 gap-x-4">
            {[].slice(0, 5)?.map((item: any, index: any) => {
              return (
                <CardProduct item={item} index={index} limit={100} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
