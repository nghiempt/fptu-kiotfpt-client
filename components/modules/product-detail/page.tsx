"use client";

import CategoryMenu from "@/components/common/category-menu";
import CheckIcon from "@mui/icons-material/Check";
import React, { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import MessageIcon from "@mui/icons-material/Message";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Divider } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import LanguageIcon from "@mui/icons-material/Language";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SuperDiscount from "@/components/common/super-discount";
import { IMAGE } from "@/constant/image";
import CardProduct from "@/components/common/card-product";
import Link from "next/link";
import { ROUTE } from "@/constant/route";
import { ProductService } from "@/service/product";
import { useSearchParams } from "next/navigation";

export default function ProductDetail() {

  const searchParams = useSearchParams();

  const [currentProduct, setCurrentProduct] = useState({
    thumbnail: [
      {
        link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTed7ytmvKOdAhKD4DibQ3xEuFuBozev9PjLp3a00xpu94MUrWzIcX_pideQYkSK91kydw&usqp=CAU'
      },
      {
        link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTed7ytmvKOdAhKD4DibQ3xEuFuBozev9PjLp3a00xpu94MUrWzIcX_pideQYkSK91kydw&usqp=CAU'
      },
      {
        link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTed7ytmvKOdAhKD4DibQ3xEuFuBozev9PjLp3a00xpu94MUrWzIcX_pideQYkSK91kydw&usqp=CAU'
      },
      {
        link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTed7ytmvKOdAhKD4DibQ3xEuFuBozev9PjLp3a00xpu94MUrWzIcX_pideQYkSK91kydw&usqp=CAU'
      },
      {
        link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTed7ytmvKOdAhKD4DibQ3xEuFuBozev9PjLp3a00xpu94MUrWzIcX_pideQYkSK91kydw&usqp=CAU'
      },
      {
        link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTed7ytmvKOdAhKD4DibQ3xEuFuBozev9PjLp3a00xpu94MUrWzIcX_pideQYkSK91kydw&usqp=CAU'
      }
    ],
  } as any);

  const [hoveredImage, setHoveredImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTed7ytmvKOdAhKD4DibQ3xEuFuBozev9PjLp3a00xpu94MUrWzIcX_pideQYkSK91kydw&usqp=CAU');

  const [products, setProducts] = useState([]);

  React.useEffect(() => {
    const fetch = async () => {
      const pros = await ProductService.searchProduct("", "1", "10");
      if (pros?.result) {
        setProducts(pros?.data);
      }

      const proDetail = await ProductService.getProductByID(searchParams.get('id') || "0");
      if (proDetail?.result) {
        setCurrentProduct(proDetail?.data);
      }
    }
    fetch();
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <CategoryMenu />
      <div className="w-3/4 text-gray-400 text-[14px]">
        <h1>
          Home / Clothings / Men’s wear / Summer Clothing
        </h1>
      </div>
      <div className="w-3/4 flex gap-x-4 border border-[#E0E0E0] rounded-[6px] p-5 my-5 box-border">
        <div className="w-full flex gap-x-5">
          <div className="w-2/5 flex flex-col gap-4">
            <div className="flex justify-center">
              <img
                className="border rounded-md"
                src={selectedImage}
                alt="img"
                style={{ width: "100%" }}
              />
            </div>
            <div className="grid grid-cols-6 gap-x-2">
              {[
                currentProduct?.thumbnail[0]?.link || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTed7ytmvKOdAhKD4DibQ3xEuFuBozev9PjLp3a00xpu94MUrWzIcX_pideQYkSK91kydw&usqp=CAU',
                currentProduct?.thumbnail[1]?.link || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTed7ytmvKOdAhKD4DibQ3xEuFuBozev9PjLp3a00xpu94MUrWzIcX_pideQYkSK91kydw&usqp=CAU',
                currentProduct?.thumbnail[2]?.link || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTed7ytmvKOdAhKD4DibQ3xEuFuBozev9PjLp3a00xpu94MUrWzIcX_pideQYkSK91kydw&usqp=CAU',
                currentProduct?.thumbnail[3]?.link || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTed7ytmvKOdAhKD4DibQ3xEuFuBozev9PjLp3a00xpu94MUrWzIcX_pideQYkSK91kydw&usqp=CAU',
                currentProduct?.thumbnail[4]?.link || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTed7ytmvKOdAhKD4DibQ3xEuFuBozev9PjLp3a00xpu94MUrWzIcX_pideQYkSK91kydw&usqp=CAU',
                currentProduct?.thumbnail[5]?.link || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTed7ytmvKOdAhKD4DibQ3xEuFuBozev9PjLp3a00xpu94MUrWzIcX_pideQYkSK91kydw&usqp=CAU',
              ]?.map((item: any, index: any) => {
                return (
                  <img
                    className="border rounded-md"
                    key={index}
                    src={item}
                    alt="img"
                    onMouseEnter={() => {
                      setSelectedImage(item);
                      setHoveredImage(index);
                    }}
                    style={{
                      cursor: "pointer",
                      border:
                        hoveredImage === index
                          ? "1px solid black"
                          : "1px solid #E0E0E0",
                    }}
                  />
                );
              })}
            </div>
          </div>
          <div className="w-2/5">
            <div className="flex gap-x-2 text-white">
              <div className="flex bg-[rgb(var(--quaternary-rgb))] px-4 py-1 rounded-md gap-1">
                <CheckIcon />
                <h1>Official</h1>
              </div>
            </div>
            <h1 className="font-semibold text-[20px] my-2">
              {currentProduct?.name}
            </h1>
            <div className="flex items-center">
              {[1, 2, 3, 4]?.map((item: any, index: any) => {
                return <StarIcon className="text-[#FF9017]" />;
              })}
              <div className="flex jusitfy-center items-center gap-x-2">
                <StarIcon className="text-[#D4CDC5]" />
                <FiberManualRecordIcon
                  className=" text-[#DBDBDB]"
                  style={{ width: "8px" }}
                />
                <MessageIcon className="text-[#787A80]" />
                <h1 className="text-[#787A80]">{currentProduct?.rate} reviews</h1>
                <FiberManualRecordIcon
                  className=" text-[#DBDBDB]"
                  style={{ width: "8px" }}
                />
                <ShoppingBasketIcon className="text-[#787A80]" />
                <h1 className="text-[#787A80]">{currentProduct?.sold} sold</h1>
              </div>
            </div>
            <div className="rounded-md my-5 bg-blue-50 flex px-4 py-2 items-center justify-between text-center">
              <h1 className="font-semibold text-[20px]">${currentProduct?.maxPrice}</h1>
              <span className="font-semibold text-gray-700 rounded-full text-xs">Discount {currentProduct?.discount}%</span>
            </div>
            <div className="flex w-full">
              <h1 className="text-[#8B96A5] w-1/3">Price:</h1>
              <h1 className="text-[#606060] w-2/3">Negotiable</h1>
            </div>
            <Divider className="pt-5" />
            <div className="flex w-full">
              <h1 className="text-[#8B96A5] w-1/3 pt-2">Type:</h1>
              <h1 className="text-[#606060] w-2/3 pt-2">Classic shoes</h1>
            </div>
            <div className="flex w-full">
              <h1 className="text-[#8B96A5] w-1/3 pt-2">Material:</h1>
              <h1 className="text-[#606060] w-2/3 pt-2">Plastic material</h1>
            </div>
            <div className="flex w-full">
              <h1 className="text-[#8B96A5] w-1/3 pt-2">Design:</h1>
              <h1 className="text-[#606060] w-2/3 pt-2">Modern nice</h1>
            </div>
            <Divider className="pt-5" />
            <div className="flex w-full">
              <h1 className="text-[#8B96A5] w-1/3 pt-2">Customization:</h1>
              <h1 className="text-[#606060] w-2/3 pt-2">
                Customized logo and design custom packages
              </h1>
            </div>
            <div className="flex w-full">
              <h1 className="text-[#8B96A5] w-1/3 pt-2">Protection:</h1>
              <h1 className="text-[#606060] w-2/3 pt-2">Refund Policy</h1>
            </div>
            <div className="flex w-full">
              <h1 className="text-[#8B96A5] w-1/3 pt-2">Warranty:</h1>
              <h1 className="text-[#606060] w-2/3 pt-2">
                2 years full warranty{" "}
              </h1>
            </div>
            <Divider className="pt-5" />
          </div>
          <div className="w-1/5">
            <div className="border rounded-md p-4 flex flex-col">
              <Link href={{
                pathname: ROUTE.SHOP,
              }}>
                <div className="flex gap-x-2 cursor-pointer">
                  <img src='https://vcdn.tikicdn.com/ts/seller/8e/25/1b/c8c4bb3dd19235890818a8284cad3658.png' alt="img" style={{ width: "50px", height: "50px" }} />
                  <div className="text-[12px] flex flex-col justify-center">
                    <h1>Supplier</h1>
                    <h1 className="text-[16px] font-semibold">Minh Tuan Mobile</h1>
                  </div>
                </div>
              </Link>
              <Divider className="pt-5" />
              <div className="flex gap-x-4 pt-3 text-[#787A80]">
                <img
                  src={IMAGE.VN_FLAG}
                  alt="coduc"
                  style={{ width: "20px", height: "20px" }}
                />
                <h1>Can Tho, Vietnam</h1>
              </div>
              <div className="flex gap-x-4 pt-3 text-[#787A80]">
                <VerifiedUserIcon style={{ width: "20px", height: "20px" }} />
                <h1>Verified Seller</h1>
              </div>
              <div className="flex gap-x-4 pt-3 text-[#787A80]">
                <LanguageIcon style={{ width: "20px", height: "20px" }} />
                <h1>Worldwide Shipping</h1>
              </div>
              <button className="w-full py-2 bg-[rgb(var(--quaternary-rgb))] text-white border rounded-[6px] mt-5 mb-2">
                Send inquiry
              </button>
              <button className="w-full py-2 bg-white text-[rgb(var(--quaternary-rgb))] border rounded-[6px]">
                Seller’s profile
              </button>
            </div>
            <div className="flex gap-x-2 justify-center pt-5 cursor-pointer">
              <FavoriteBorderOutlinedIcon className="text-[rgb(var(--quaternary-rgb))]" />
              <h1 className="text-[rgb(var(--quaternary-rgb))]"> Save for later</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/4  flex flex-col justify-center items-center">
        <div className="w-full flex gap-x-4">
          <div className="w-3/4 border rounded-md border-[#E0E0E0] p-4 ">
            <h1 className="font-bold text-[18px]">Review</h1>
            <Divider className="pt-4" />
            {[1, 2, 3]?.map((item: any, index: any) => {
              return (
                <div className="pt-4">
                  <div className="flex justify-between">
                    <div className="flex gap-x-2 mt-2">
                      <div className="p-2 border rounded-full bg-white">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6fJuz8nUzHaTJ-Uyj_1JC89WavzpO_CS-g&usqp=CAU" alt="img" style={{ width: "24px", height: "24px" }} />
                      </div>
                      <div>
                        <h1 className="font-semibold text-[#1C1C1C]">
                          Nguyen Van A
                        </h1>
                        <div className="flex">
                          {[1, 2, 3, 4]?.map((item: any, index: any) => {
                            return <StarIcon className="text-[#FF9017]" />;
                          })}
                          <StarIcon className="text-[#D4CDC5]" />
                          <div className="flex gap-x-2 justify-center items-center ml-2">
                            <FiberManualRecordIcon
                              className="text-[#DBDBDB]"
                              style={{ width: "8px" }}
                            />
                            <h1 className="text-xs text-gray-500">purchased 31/05/2024</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex mt-2 gap-x-2">
                      <div className="flex">
                        <ThumbUpOutlinedIcon className="border-t border-b border-l rounded-l-xs p-2" />
                        <ThumbDownOutlinedIcon className="border border-r rounded-r-xs p-2" />
                      </div>
                      <div>
                        <MoreVertIcon className="border rounded-xs p-2" />
                      </div>
                    </div>
                  </div>
                  <h1 className="py-4">
                    Mua trên shop chính hãng nhưng lần đâu mua hàng giá trị cao
                    nên cũng lo lắng.Nhưng nhận hàng về thì okie không có lỗi gì
                    về vận chuyển, lại mua đc vs giá rẻ hơn các cửa hàng bán
                    điện thoại.Chưa sử dụng nên k biết có lỗi gì k, đánh giá 5
                    sao trc cho shop
                  </h1>
                  <Divider className="pt-2" />
                </div>
              );
            })}
          </div>
          <div className="w-1/4 border rounded-md border-[#E0E0E0] p-4">
            <h1 className="font-semibold text-[18px] mb-4">You may like</h1>
            {products.slice(0, 4)?.map((item: any, index: any) => {
              return (
                <div key={index} className="flex gap-x-2 mb-4">
                  <img
                    className="border rounded-md"
                    src={item?.thumbnail[0]?.link}
                    alt="img"
                    style={{ width: "30%" }}
                  />
                  <div className="flex flex-col gap-1">
                    <h1 className="text-gray-700 text-[14px] font-semibold">
                      {item?.name}
                    </h1>
                    <h1 className="text-gray-500">{item?.price}</h1>
                    <h1 className="text-gray-500">{item?.sold} sold</h1>
                    <div className="flex gap-1 justify-start items-center">
                      <CheckIcon />
                      <h1>Official</h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full my-8">
          <div className="">
            <h1 className="font-black text-2xl mb-4 text-gray-700">Related Products</h1>
            <div className="flex grid grid-cols-5 gap-x-4">
              {products.slice(0, 5)?.map((item: any, index: any) => {
                return (
                  <CardProduct item={item} index={index} limit={100} />
                );
              })}
            </div>
          </div>
        </div>
        <SuperDiscount />
      </div>
    </div>
  );
}
