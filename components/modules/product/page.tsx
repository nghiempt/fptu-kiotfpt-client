"use client";

import { Divider } from "@mui/material";
import React, { useState, useEffect } from "react";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import KeyboardReturnOutlinedIcon from "@mui/icons-material/KeyboardReturnOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import Filter7OutlinedIcon from "@mui/icons-material/Filter7Outlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useSearchParams } from "next/navigation";
import { FetchData } from "@/fetch/fetch_data";
import { convertStringToMoney } from "@/utils/helper";

export default function ProductContainer({ translate }: { translate: any }) {

  const searchParams = useSearchParams()

  const [product, setProduct] = useState<any>([]);

  const init = async () => {
    const fetchproduct = await FetchData.GET_ALL_PRODUCTS()
    let foundItem: any = fetchproduct?.find((item: any) => item?.p_id.toString() === (searchParams.get('productId') || '1'));
    setProduct(foundItem)
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => { }, [product]);

  return (
    <div className="lg:w-3/4 flex flex-col justify-center items-center px-4 lg:px-0">
      <div></div>
      <div className="lg:w-full mt-10">
        <div className="lg:w-full flex flex-col lg:flex-row gap-x-10">
          <div className="lg:w-1/2 flex flex-col justify-center items-center mb-10 lg:mb-0">
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg p-2">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  className="object-cover rounded-md"
                  src={product?.p_thumbnail}
                  alt="Product Image"
                />
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <div className="grid grid-cols-5 gap-4">
                {
                  ['', '', '', '', '']?.map((item: any, index: any) => {
                    return (
                      <img
                        key={index}
                        src={product?.p_thumbnail}
                        alt="img"
                        className="rounded-lg cursor-pointer"
                      />
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-[22px] font-bold">
              {product?.p_name}
            </h1>
            <h1 className="text-[12px] mt-2 mb-4">Tình trạng: Còn hàng</h1>
            <div className="flex items-center">
              <h1 className="text-[28px] font-bold mr-4">{convertStringToMoney(product?.p_price || '0').toString()}</h1>
              <button className="bg-red-500 rounded-lg text-white text-[12px] px-4 py-1">
                Giảm 10%
              </button>
            </div>
            <div className="flex mt-4 items-center">
              <h1 className="text-[12px] mr-4">Mã Sản Phẩm:</h1>
              <button className="bg-[rgb(var(--primary-rgb))] rounded-lg text-white text-[12px] px-4 py-1 border border-[rgb(var(--tertiary-rgb))] mr-2">
                {product?.p_id}
              </button>
            </div>
            <div className="flex mt-4 items-center">
              <h1 className="text-[12px] mr-4">Số Lượng:</h1>

              <div className="border border-gray-300 px-1 rounded-lg">
                <button className="w-[40px] text-[20px]">-</button>
                <input type="text" value="1" className="w-[30px] ml-[20px]" />
                <button className="w-[40px] text-[20px]">+</button>
              </div>
            </div>
            <div className="my-4">
              <Divider />
            </div>
            <div className="w-full flex justify-center items-center ">
              <div className="w-1/2 flex flex-col gap-4">
                <div className="flex justifty-center items-center">
                  <VerifiedUserOutlinedIcon />
                  <h1 className="text-[12px] lg:text-[14px] ml-2">
                    Cam kết 100% chính hãng
                  </h1>
                </div>
                <div className="flex justifty-center items-center">
                  <LocalShippingOutlinedIcon />
                  <h1 className="text-[12px] lg:text-[14px] ml-2">
                    Miễn phí giao hàng
                  </h1>
                </div>
                <div className="flex justifty-center items-center">
                  <HeadphonesOutlinedIcon />
                  <h1 className="text-[12px] lg:text-[14px] ml-2">
                    Hỗ trợ 24/7
                  </h1>
                </div>
              </div>
              <div className="w-1/2 flex flex-col gap-4">
                <div className="flex justifty-center items-center">
                  <KeyboardReturnOutlinedIcon />
                  <h1 className="text-[12px] lg:text-[14px] ml-2">
                    Hoàn tiền 111% nếu hàng giả
                  </h1>
                </div>
                <div className="flex justifty-center items-center">
                  <Inventory2OutlinedIcon />
                  <h1 className="text-[12px] lg:text-[14px] ml-2">
                    Mở hộp kiểm tra nhận hàng
                  </h1>
                </div>
                <div className="flex justifty-center items-center">
                  <Filter7OutlinedIcon />
                  <h1 className="text-[12px] lg:text-[14px] ml-2">
                    Đổi trả trong 7 ngày
                  </h1>
                </div>
              </div>
            </div>
            <div className="my-4">
              <Divider />
            </div>
            <div className="w-full flex gap-x-[4px]">
              <div className="w-1/2 flex flex-col gap-y-[4px]">
                <div className="bg-[rgb(var(--quaternary-rgb))] rounded-md flex p-3 items-center justify-center">
                  <div className="w-1/3 flex justify-center items-center flex-col">
                    <h1 className="text-[10px] lg:text-[12px] font-bold mb-1">
                      Miễn Phí
                    </h1>
                    <LocalShippingOutlinedIcon fontSize="large" />
                  </div>
                  <div className="!bg-[rgb(var(--primary-rgb))] w-[2px] h-[60px] mr-4"></div>
                  <div className="w-2/3">
                    <div className="flex justify-between items-center">
                      <h1 className="text-[8px] lg:text-[12px] font-bold">
                        Vận chuyển miễn phí
                      </h1>
                      <InfoOutlinedIcon />
                    </div>
                    <h1 className="text-[8px] lg:text-[12px] font-medium">
                      Đơn hàng từ 300k
                    </h1>
                    <h1 className="text-[8px] lg:text-[12px] font-light">
                      Hạn: 10/04/2024
                    </h1>
                    <div className="flex items-center justify-between mt-2">
                      <h1 className="text-[8px] lg:text-[12px]">
                        Mã: A87TYRT55
                      </h1>
                      <button className="bg-white rounded-md text-[8px] lg:text-[12px] px-2 text-gray-700">
                        Sao Chép
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-[rgb(var(--quaternary-rgb))] rounded-md flex p-3 items-center justify-center">
                  <div className="w-1/3 flex justify-center items-center flex-col">
                    <h1 className="text-[10px] lg:text-[12px] font-bold mb-1">
                      Miễn Phí
                    </h1>
                    <LocalShippingOutlinedIcon fontSize="large" />
                  </div>
                  <div className="!bg-[rgb(var(--primary-rgb))] w-[2px] h-[60px] mr-4"></div>
                  <div className="w-2/3">
                    <div className="flex justify-between items-center">
                      <h1 className="text-[8px] lg:text-[12px] font-bold">
                        Vận chuyển miễn phí
                      </h1>
                      <InfoOutlinedIcon />
                    </div>
                    <h1 className="text-[8px] lg:text-[12px] font-medium">
                      Đơn hàng từ 300k
                    </h1>
                    <h1 className="text-[8px] lg:text-[12px] font-light">
                      Hạn: 10/04/2024
                    </h1>
                    <div className="flex items-center justify-between mt-2">
                      <h1 className="text-[8px] lg:text-[12px]">
                        Mã: A87TYRT55
                      </h1>
                      <button className="bg-white rounded-md text-[8px] lg:text-[12px] px-2 text-gray-700">
                        Sao Chép
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/2 flex flex-col gap-y-[4px]">
                <div className="bg-[rgb(var(--quaternary-rgb))] rounded-md flex p-3 items-center justify-center">
                  <div className="w-1/3 flex justify-center items-center flex-col">
                    <h1 className="text-[10px] lg:text-[12px] font-bold mb-1">
                      Miễn Phí
                    </h1>
                    <LocalShippingOutlinedIcon fontSize="large" />
                  </div>
                  <div className="!bg-[rgb(var(--primary-rgb))] w-[2px] h-[60px] mr-4"></div>
                  <div className="w-2/3">
                    <div className="flex justify-between items-center">
                      <h1 className="text-[8px] lg:text-[12px] font-bold">
                        Vận chuyển miễn phí
                      </h1>
                      <InfoOutlinedIcon />
                    </div>
                    <h1 className="text-[8px] lg:text-[12px] font-medium">
                      Đơn hàng từ 300k
                    </h1>
                    <h1 className="text-[8px] lg:text-[12px] font-light">
                      Hạn: 10/04/2024
                    </h1>
                    <div className="flex items-center justify-between mt-2">
                      <h1 className="text-[8px] lg:text-[12px]">
                        Mã: A87TYRT55
                      </h1>
                      <button className="bg-white rounded-md text-[8px] lg:text-[12px] px-2 text-gray-700">
                        Sao Chép
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-[rgb(var(--quaternary-rgb))] rounded-md flex p-3 items-center justify-center">
                  <div className="w-1/3 flex justify-center items-center flex-col">
                    <h1 className="text-[10px] lg:text-[12px] font-bold mb-1">
                      Miễn Phí
                    </h1>
                    <LocalShippingOutlinedIcon fontSize="large" />
                  </div>
                  <div className="!bg-[rgb(var(--primary-rgb))] w-[2px] h-[60px] mr-4"></div>
                  <div className="w-2/3">
                    <div className="flex justify-between items-center">
                      <h1 className="text-[8px] lg:text-[12px] font-bold">
                        Vận chuyển miễn phí
                      </h1>
                      <InfoOutlinedIcon />
                    </div>
                    <h1 className="text-[8px] lg:text-[12px] font-medium">
                      Đơn hàng từ 300k
                    </h1>
                    <h1 className="text-[8px] lg:text-[12px] font-light">
                      Hạn: 10/04/2024
                    </h1>
                    <div className="flex items-center justify-between mt-2">
                      <h1 className="text-[8px] lg:text-[12px]">
                        Mã: A87TYRT55
                      </h1>
                      <button className="bg-white rounded-md text-[8px] lg:text-[12px] px-2 text-gray-700">
                        Sao Chép
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[80px]"></div>
    </div>
  );
}
