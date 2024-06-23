"use client";

import CategoryMenu from "@/components/common/category-menu";
import VoucherModal from "@/components/pop-up/voucher-modal";
import { CheckoutService } from "@/service/checkout";
import Cookie from "js-cookie";
import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Checkout() {
  const cartDataStore = localStorage.getItem("dataCart") as any;
  const idVoucher = localStorage.getItem("idVoucher");
  const valueVoucherStr = localStorage.getItem("valueVoucher");
  const valueVoucher = valueVoucherStr ? parseInt(valueVoucherStr, 10) : 0;
  const [isVoucherPopupOpen, setIsVoucherPopupOpen] = useState(false);
  const [cartData, setCartData] = React.useState([] as any);
  const accountID = Cookie.get("accountID");
  const [address, setAddress] = useState([] as any);
  const [selectedAddress, setSelectedAddress] = useState<any>(null);
  const [showPanel, setShowPanel] = useState(false);
  const [shopID, setShopID] = useState([] as any);
  const [idAddresses, setIdAddresses] = useState([] as any);

  const togglePanel = () => setShowPanel(!showPanel);

  const selectAddress = (address: any) => {
    setSelectedAddress(address);
    setShowPanel(false);
  };
  const getShopIDs = (cartData: any) => {
    const shopIDs = cartData.reduce((acc: any, item: any) => {
      const shopID = item?.shop?.id;
      if (shopID && !acc.includes(shopID)) {
        acc.push(shopID);
      }
      return acc;
    }, []);
    setShopID(shopIDs);
  };

  useEffect(() => {
    if (cartDataStore) {
      const parsedCartData = JSON.parse(cartDataStore);
      setCartData(parsedCartData);
      getShopIDs(parsedCartData);
    }
  }, []);

  const handleOpenVoucherPopup = () => {
    localStorage.removeItem("idVoucher");
    localStorage.removeItem("valueVoucher");
    setIsVoucherPopupOpen(true);
  };

  const handleCloseVoucherPopup = () => {
    setIsVoucherPopupOpen(false);
  };

  const handleCheckout = async () => {
    const dataC = {
      accountId: JSON.parse(accountID || ""),
      address_id: idAddresses,
      sections: cartData.map((item: any) => ({
        desc: item?.product?.name,
        item_id: item?.product?.id,
        section_id: item?.variant?.id,
      })),
      voucherId: idVoucher ? parseInt(idVoucher) : 0,
    };
    const c = await CheckoutService.checkout(JSON.stringify(dataC));
    if (c?.result) {
      alert("Checkout success");
    } else {
      alert("Checkout failed");
    }
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
  React.useEffect(() => {
    const fetch = async () => {
      const a = await CheckoutService.getAllAddressByAccountID(
        JSON.parse(accountID || "")
      );
      if (a?.result) {
        setAddress(a?.data);
      }
    };
    fetch();
  }, []);

  const groupedData = groupByShop(cartData);

  useEffect(() => {
    setCartData(JSON.parse(cartDataStore || "") || []);
    setSelectedAddress(address[0]);
  }, [address, idAddresses, valueVoucherStr]);

  const productCount = Object.values(groupedData).reduce(
    (count: number, group: any) => count + group.products.length,
    0
  );

  const handleRadioClick = (id: string) => {
    setIdAddresses(id);
  };

  const subtotal = Object.values(groupedData)?.reduce(
    (acc: number, group: any) => {
      const groupTotal = group.products.reduce(
        (groupAcc: number, item: any) => {
          return groupAcc + item.total;
        },
        0
      );
      return acc + groupTotal;
    },
    0
  );

  return (
    <div className="w-full flex flex-col justify-center items-center pt-4 pb-10 relative">
      <VoucherModal
        open={isVoucherPopupOpen}
        handleClose={handleCloseVoucherPopup}
        shopID={shopID}
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

              <div className="flex flex-col gap-4 mt-4">
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
                                Price: ${item?.variant?.price}
                              </p>
                              <p className="text-xs text-gray-500">
                                Quantity: {item?.quantity}
                              </p>
                              <p className="text-xs text-gray-500">
                                Classtify: {item?.variant?.color?.value} /{" "}
                                {item?.variant?.size?.value}
                              </p>
                            </div>
                          </div>
                          <div className="text-right flex flex-col gap-1">
                            <p className="text-lg font-bold">${item?.total}</p>
                          </div>
                        </div>
                      ))}
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
                    <div className="relative">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="deliveryOption"
                          className="form-radio h-5 w-5 text-blue-600"
                          onClick={() =>
                            handleRadioClick(address[0]?.address_id)
                          }
                        />
                        <div className="ml-2 flex items-center">
                          <span className="text-sm font-semibold ml-1">
                            <div>
                              {selectedAddress ? (
                                <div>
                                  {selectedAddress.address_value},{" "}
                                  {selectedAddress.district?.district_value},{" "}
                                  {selectedAddress.province?.province_value}
                                </div>
                              ) : (
                                "Please select an address"
                              )}
                            </div>
                          </span>
                          {selectedAddress === address[0] && (
                            <span className="ml-2 bg-[rgb(var(--quaternary-rgb))] text-white py-1 px-3 rounded-full text-xs">
                              default
                            </span>
                          )}
                        </div>
                        <div className="flex-1 text-right">
                          <span
                            className="text-xs font-bold text-[rgb(var(--quaternary-rgb))] cursor-pointer"
                            onClick={togglePanel}
                          >
                            Change
                          </span>
                        </div>
                      </div>
                      {showPanel && (
                        <div
                          className="cursor-pointer p-4 rounded-b-lg text-sm font-semibold flex flex-col gap-2"
                          style={{
                            position: "absolute",
                            top: 32,
                            left: -15,
                            backgroundColor: "white",
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                            width: "100%",
                            zIndex: 1000,
                          }}
                        >
                          {address.map((address: any, index: any) => (
                            <div
                              key={index}
                              onClick={() => selectAddress(address)}
                              className=" hover:underline"
                            >
                              {address.address_value},{" "}
                              {address.district?.district_value},{" "}
                              {address.province?.province_value}
                              {index === 0 ? " (default)" : ""}
                            </div>
                          ))}
                        </div>
                      )}
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
              <h1 className="text-[16px]">
                {productCount} product{productCount > 1 ? "s" : ""}
              </h1>
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
            <h1>${subtotal}</h1>
          </div>
          <div className="flex justify-between items-center">
            <h1>Voucher</h1>
            <h1>-{valueVoucher}%</h1>
          </div>
          <Divider />
          <div className="flex justify-between items-center">
            <h1 className="text-[18px] font-bold">Total</h1>
            <h1 className="text-[18px] font-bold">
              ${subtotal * (1 - valueVoucher / 100)}
            </h1>
          </div>
          <button
            onClick={handleCheckout}
            className="w-full bg-[rgb(var(--primary-rgb))] py-2 rounded-md text-white font-semibold text-[16px]"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
