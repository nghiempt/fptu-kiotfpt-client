"use client";

import CategoryMenu from "@/components/common/category-menu";
import VoucherModal from "@/components/pop-up/voucher-modal";
import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Checkout() {
  const cartDataStore = localStorage.getItem("dataCart") as any;

  const [isVoucherPopupOpen, setIsVoucherPopupOpen] = useState(false);
  const [cartData, setCartData] = React.useState([] as any);

  const handleOpenVoucherPopup = () => {
    setIsVoucherPopupOpen(true);
  };

  const handleCloseVoucherPopup = () => {
    setIsVoucherPopupOpen(false);
  };

  const groupByShop = (cartData: any) => {
    return cartData.reduce((acc: any, item: any) => {
      const shopId = item?.shop?.id;
      if (!acc[shopId]) {
        acc[shopId] = {
          shop: item?.shop,
          products: [],
        };
      }
      acc[shopId]?.products?.push(item);
      return acc;
    }, {});
  };
  const groupedData = groupByShop(cartData);

  useEffect(() => {
    setCartData(JSON.parse(cartDataStore || "") || []);
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center pt-4 pb-10 relative">
      <VoucherModal
        open={isVoucherPopupOpen}
        handleClose={handleCloseVoucherPopup}
      />
      <CategoryMenu />
      <div className="w-3/4 flex pb-6">
        <div className="font-black text-2xl text-gray-700">Checkout</div>
      </div>
      <div className="w-3/4 flex gap-4">
        <div className="w-3/4 flex flex-col gap-4">
          <div className="w-full border border-gray-200 shadow-md rounded-md">
            <div className="p-4">
              <h1 className="text-[18px] font-semibold">
                Choose the Protocol Protocol
              </h1>
              <div>
                <div className="">
                  <div className="bg-gray-100 p-4 rounded-lg border border-gray-300 mt-4 mb-4">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="deliveryOption"
                        className="form-radio h-5 w-5 text-blue-600"
                      />
                      <div className="ml-2">
                        <span className="text-sm font-semibold ml-1">
                          Express delivery
                        </span>
                        <span className="ml-2 bg-[rgb(var(--quaternary-rgb))] text-white py-1 px-3 rounded-full text-xs">
                          - $15
                        </span>
                      </div>
                      <div className="flex-1 text-right">
                        <span className="text-xs">
                          Supports 2 products for this option
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {Object.values(groupedData).map((group: any, index: any) => (
                  <div key={index}>
                    <div className="bg-white rounded-lg border border-gray-200 box-border">
                      <div className="w-full bg-gray-200 p-2 flex items-center gap-2 rounded-t-lg mb-2">
                        <div className="flex items-center gap-2">
                          <img
                            src={group?.shop?.thumbnail}
                            alt="img"
                            style={{ width: 50 }}
                          />
                          <h1>{group?.shop?.name}</h1>
                        </div>
                      </div>
                      {group.products.map((item: any, productIndex: any) => (
                        <div
                          key={productIndex}
                          className="flex items-center justify-between px-4"
                        >
                          <div className="flex items-center">
                            <div className="mr-4 p-1 bg-gray-200 rounded-lg">
                              <img
                                src={item?.product?.thumbnail[0]?.link}
                                alt="img"
                                width={60}
                                className="rounded-md"
                              />
                            </div>
                            <div className="flex flex-col gap-1">
                              <p className="text-sm font-semibold">
                                {item?.product?.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                Quantity: {item?.variant?.quantity}
                              </p>
                              <p className="text-xs text-gray-500">
                                Color: {item?.variant?.color?.value}
                              </p>
                              <p className="text-xs text-gray-500">
                                Size: {item?.variant?.size?.value}
                              </p>
                            </div>
                          </div>
                          <div className="text-right flex flex-col gap-1">
                            <p className="text-lg font-bold">
                              ${item?.variant?.price * item?.variant?.quantity}
                            </p>
                          </div>
                        </div>
                      ))}
                      <div className="mt-4 flex items-center justify-between p-2">
                        <div className="flex items-center space-x-2">
                          <div className="h-3 w-3 bg-[rgb(var(--quaternary-rgb))] rounded-full"></div>
                          <p className="text-sm text-gray-700">
                            Delivered tomorrow, before 7pm, May 17
                          </p>
                        </div>
                        <div className="text-sm bg-blue-100 text-[rgb(var(--quaternary-rgb))] py-1 px-3 rounded-full">
                          Delivered by KIOTFPT Smart Logistics (delivered from
                          Can Tho)
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full border border-gray-200 shadow-md rounded-md">
            <div className="p-4">
              <h1 className="text-[18px] font-semibold">
                Choose the delivery addresses
              </h1>
              <div>
                <div className="">
                  <div className="bg-gray-100 p-4 rounded-lg border border-gray-300 mt-4 mb-4">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="deliveryOption"
                        className="form-radio h-5 w-5 text-blue-600"
                      />
                      <div className="ml-2">
                        <span className="text-sm font-semibold ml-1">
                          200 Tô Vĩnh Diện, Long Tuyền, Bình Thuỷ, Cần Thơ
                        </span>
                        <span className="ml-2 bg-[rgb(var(--quaternary-rgb))] text-white py-1 px-3 rounded-full text-xs">
                          default
                        </span>
                      </div>
                      <div className="flex-1 text-right">
                        <span className="text-xs font-bold text-[rgb(var(--quaternary-rgb))] cursor-pointer">
                          Change
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full border border-gray-200 shadow-md rounded-md">
            <div className="p-4">
              <h1 className="text-[18px] font-semibold">
                Choose a payment method
              </h1>
              <div>
                <div className="">
                  <div className="bg-gray-100 p-4 rounded-lg border border-gray-300 mt-4 mb-4">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="deliveryOption"
                        className="form-radio h-5 w-5 text-blue-600"
                      />
                      <div className="ml-2">
                        <span className="text-sm font-semibold ml-1">
                          Payment on delivery
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4 h-full p-4 border border-gray-200 shadow-md rounded-md flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-[18px] font-bold">Order</h1>
              <h1 className="text-[16px]">0 products</h1>
            </div>
            <button
              onClick={handleOpenVoucherPopup}
              className="bg-[rgb(var(--quaternary-rgb))] py-1 px-4 rounded-md text-white font-semibold"
            >
              Voucher
            </button>
          </div>
          <Divider />
          <div className="flex justify-between items-center">
            <h1>Subtotal</h1>
            <h1></h1>
          </div>
          <div className="flex justify-between items-center">
            <h1>Delivery cost</h1>
            <h1></h1>
          </div>
          <Divider />
          <div className="flex justify-between items-center">
            <h1 className="text-[18px] font-bold">Total</h1>
            <h1 className="text-[18px] font-bold"></h1>
          </div>
          <button className="w-full bg-[rgb(var(--primary-rgb))] py-2 rounded-md text-white font-semibold text-[16px]">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
