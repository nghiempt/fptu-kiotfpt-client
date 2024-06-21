"use client";

import CardProduct from "@/components/common/card-product";
import CategoryMenu from "@/components/common/category-menu";
import SuperDiscount from "@/components/common/super-discount";
import { IMAGE } from "@/constant/image";
import { ROUTE } from "@/constant/route";
import { CartService } from "@/service/cart";
import { ProductService } from "@/service/product";
import CheckIcon from "@mui/icons-material/Check";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import LanguageIcon from "@mui/icons-material/Language";
import MessageIcon from "@mui/icons-material/Message";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StarIcon from "@mui/icons-material/Star";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import Rating from "@mui/material/Rating";
import { Divider } from "@mui/material";
import Cookie from "js-cookie";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function ProductDetail() {
  const searchParams = useSearchParams();
  const defaultImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTed7ytmvKOdAhKD4DibQ3xEuFuBozev9PjLp3a00xpu94MUrWzIcX_pideQYkSK91kydw&usqp=CAU";
  const [hoveredImage, setHoveredImage] = useState(null);
  const accountID = Cookie.get("accountID");
  const [products, setProducts] = useState([]);
  const account_id = JSON.parse(accountID || "");
  const [selectedClassify, setSelectedClassify] = useState<{ id: any } | null>(
    null
  );
  const [variantId, setVariantId] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [note, setNote] = useState("");
  const trueDay = (item: any) => {
    const date = new Date(item);
    const utcDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
    const formattedDate = utcDate.toLocaleDateString("en-GB");
    return formattedDate;
  };
  const states = [
    { key: "bestSeller", label: "Best Seller" },
    { key: "official", label: "Official" },
    { key: "topDeal", label: "Top Deal" },
    { key: "popular", label: "Popular" },
  ];
  const isAllSelected = selectedClassify && quantity > 0;
  const buttonClass = isAllSelected
    ? "border px-2 py-2 bg-[rgb(var(--quaternary-rgb))] rounded-md w-full cursor-pointer text-white"
    : "border px-2 py-2 bg-gray-300 rounded-md w-full cursor-not-allowed";

  const handleSelectClassify = (classtify: any) => {
    setSelectedClassify(classtify);
    setVariantId(classtify?.id);
    console.log(selectedClassify);
    setPrice(classtify?.price);
  };

  const handleQuantityChange = (event: any) => {
    const amount = event.target.value;
    setQuantity(amount);
    setDataAddToCart((prevData) => ({
      ...prevData,
      amount: amount,
    }));
  };

  const [currentProduct, setCurrentProduct] = useState({
    thumbnail: [
      {
        link: defaultImage,
      },
      {
        link: defaultImage,
      },
      {
        link: defaultImage,
      },
      {
        link: defaultImage,
      },
      {
        link: defaultImage,
      },
      {
        link: defaultImage,
      },
    ],
  } as any);

  const [selectedImage, setSelectedImage] = useState(
    currentProduct?.thumbnail[0]?.link
  );

  const addItemToCart = async () => {
    const dataC = await CartService.addToCart(dataAddToCart);
    if (dataC?.result) {
      alert("Added to cart");
    } else {
      alert("Add to cart failed");
    }
  };
  const [price, setPrice] = useState(0);

  React.useEffect(() => {
    const fetch = async () => {
      const pros = await ProductService.searchProduct("", "1", "10");
      if (pros?.result) {
        setProducts(pros?.data);
      }
      const proDetail = await ProductService.getProductByID(
        searchParams.get("id") || "0"
      );
      if (proDetail?.result) {
        setCurrentProduct(proDetail?.data);
        setSelectedImage(currentProduct?.thumbnail[0]?.link);
      }
      console.log(proDetail?.data);
    };
    fetch();
  }, [currentProduct?.thumbnail[0]?.link]);

  useEffect(() => {
    if (selectedClassify) {
      setVariantId(selectedClassify?.id);
      setDataAddToCart((prevData) => ({
        ...prevData,
        variant_id: selectedClassify?.id,
      }));
    }
  }, [selectedClassify, variantId]);

  const [dataAddToCart, setDataAddToCart] = useState({
    account_id: account_id,
    amount: quantity,
    note: note,
    variant_id: variantId,
  });
  const handleNoteChange = (event: any) => {
    const newNote = event.target.value;
    setNote(newNote);
    setDataAddToCart((prevData) => ({
      ...prevData,
      note: newNote,
    }));
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <CategoryMenu />
      <div className="w-3/4 text-gray-400 text-[14px]">
        <h1>Home / Clothings / Men’s wear / Summer Clothing</h1>
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
                currentProduct?.thumbnail[0]?.link || defaultImage,
                currentProduct?.thumbnail[1]?.link || defaultImage,
                currentProduct?.thumbnail[2]?.link || defaultImage,
                currentProduct?.thumbnail[3]?.link || defaultImage,
                currentProduct?.thumbnail[4]?.link || defaultImage,
                currentProduct?.thumbnail[5]?.link || defaultImage,
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
            <div className="grid grid-cols-4 gap-x-2 text-white text-[10px]">
              {states.map((state) =>
                currentProduct?.[state.key] ? (
                  <div
                    key={state.key}
                    className="flex items-center bg-[rgb(var(--quaternary-rgb))] px-4 py-1 rounded-md gap-1"
                  >
                    <CheckIcon style={{ width: "12px" }} />
                    <h1>{state.label}</h1>
                  </div>
                ) : null
              )}
            </div>
            <div className="flex gap-x-2 items-center">
              <h1 className="font-semibold text-[20px] my-2">
                {currentProduct?.name}
              </h1>
              <span className="font-semibold text-red-500 rounded-full text-xs">
                {currentProduct?.discount === 0
                  ? ""
                  : "-" + currentProduct?.discount + "%"}
              </span>
            </div>

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
                <h1 className="text-[#787A80]">
                  {currentProduct?.rate} reviews
                </h1>
                <FiberManualRecordIcon
                  className=" text-[#DBDBDB]"
                  style={{ width: "8px" }}
                />
                <ShoppingBasketIcon className="text-[#787A80]" />
                <h1 className="text-[#787A80]">{currentProduct?.sold} sold</h1>
              </div>
            </div>
            <div className="flex w-full pt-2 items-center gap-x-2">
              <h1 className="text-gray-700 font-medium">Price:</h1>
              <h1 className=" font-semibold text-[14px]">
                {currentProduct?.minPrice === currentProduct?.maxPrice
                  ? `$${currentProduct?.minPrice}`
                  : `$${currentProduct?.minPrice} - $${currentProduct?.maxPrice}`}
              </h1>
            </div>
            <Divider className="pt-2" />
            <div className="flex w-full pt-2">
              <h1 className="text-gray-700 font-medium w-1/3">Description:</h1>
              <h1 className="text-[#606060] w-2/3">
                {currentProduct?.description}
              </h1>
            </div>

            <Divider className="pt-2" />
            <div className="flex pt-2 items-center">
              <h1 className="text-gray-700 font-medium w-1/3 mt-2">
                Classify:
              </h1>
              <div className="grid grid-cols-3 gap-x-2 pt-2">
                {currentProduct?.variants?.map((item: any, index: any) => {
                  const classifyClass =
                    item === selectedClassify
                      ? "border-2 border-gray-700"
                      : "border";
                  return (
                    <div
                      key={index}
                      className={`flex w-full ${classifyClass} rounded-md px-3 py-1 items-center cursor-pointer`}
                      onClick={() => handleSelectClassify(item)}
                    >
                      <h1 className="text-[#606060] w-full text-[12px]">
                        {item?.color?.value} - {item?.size?.value}
                      </h1>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex w-full pt-2">
              <h1 className="text-gray-700 font-medium w-1/3 pt-2">
                Quantity:
              </h1>
              <div className="flex gap-x-2 pt-2">
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className=" w-full border rounded-md px-2 py-1 outline-none"
                />
              </div>
            </div>
            <div className="flex w-full pt-2">
              <h1 className="text-gray-700 font-medium w-1/3 pt-2">Total:</h1>
              <h1 className=" font-semibold border rounded-md px-2 py-1">
                ${price * quantity}
              </h1>
            </div>
            <div className="flex items-center justify-center pt-5 ">
              <button
                onClick={addItemToCart}
                className={buttonClass}
                disabled={!isAllSelected}
              >
                Add to cart
              </button>
            </div>
            <div className="pt-4 flex flex-col gap-2">
              <h1 className="text-gray-700 font-medium">Note:</h1>
              <textarea
                name="Note:"
                id=""
                placeholder="....."
                value={note}
                onChange={handleNoteChange}
                className="border rounded-md w-full p-2 outline-none min-h-20"
              />
            </div>
          </div>
          <div className="w-1/5">
            <div className="border rounded-md p-4 flex flex-col">
              <Link
                href={{
                  pathname: ROUTE.SHOP,
                }}
              >
                <div className="flex gap-x-2 cursor-pointer">
                  <img
                    src={currentProduct?.shop?.thumbnail}
                    alt="img"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div className="text-[12px] flex flex-col justify-center">
                    <h1 className="text-[16px] font-semibold">
                      {currentProduct?.shop?.name}
                    </h1>
                    <h1>
                      <Rating value={currentProduct?.shop?.rate} />
                    </h1>
                  </div>
                </div>
              </Link>
              <Divider className="pt-5" />
              <div className="flex gap-x-4 pt-3 text-[#787A80]">
                <img
                  src={IMAGE.VN_FLAG}
                  alt="img"
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
            <div className="flex gap-x-2 py-2 justify-center mt-2 cursor-pointer border rounded-md">
              <FavoriteBorderOutlinedIcon className="text-[rgb(var(--quaternary-rgb))]" />
              <h1 className="text-[rgb(var(--quaternary-rgb))]">
                {" "}
                Save for later
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/4  flex flex-col justify-center items-center">
        <div className="w-full flex gap-x-4">
          <div className="w-3/4">
            <div className=" border rounded-md border-[#E0E0E0] p-4 ">
              <h1 className="font-bold text-[18px]">Review</h1>
              <Divider className="pt-2" />
              {currentProduct.comments?.length > 0 ? (
                currentProduct.comments.map((item: any, index: any) => {
                  return (
                    <div className="pt-4" key={index}>
                      <div className="flex justify-between">
                        <div className="flex gap-x-2 mt-2">
                          <div className="p-2 border rounded-full bg-white">
                            <img
                              src={item?.profile?.avatar}
                              alt="img"
                              style={{ width: "24px", height: "24px" }}
                            />
                          </div>
                          <div>
                            <h1 className="font-semibold text-[#1C1C1C]">
                              {item?.profile?.name}
                            </h1>
                            <div className="flex">
                              {Array.from(
                                { length: Math.floor(item?.rate) },
                                (_, index) => (
                                  <StarIcon
                                    key={index}
                                    className="text-[#FF9017]"
                                  />
                                )
                              )}
                              {item?.rate % 1 !== 0 && (
                                <StarHalfIcon className="text-[#FF9017]" />
                              )}
                              {Array.from(
                                { length: 5 - Math.ceil(item?.rate) },
                                (_, index) => (
                                  <StarIcon
                                    key={`empty-${index}`}
                                    className="text-[#D4CDC5]"
                                  />
                                )
                              )}
                              <div className="flex gap-x-2 justify-center items-center ml-2">
                                <FiberManualRecordIcon
                                  className="text-[#DBDBDB]"
                                  style={{ width: "8px" }}
                                />
                                <h1 className="text-xs text-gray-500">
                                  purchased {trueDay(item?.date)}
                                </h1>
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
                      <h1 className="py-4">{item?.content}</h1>
                      {currentProduct.comments.length > 1 &&
                        index < currentProduct.comments.length - 1 && (
                          <Divider className="pt-2" />
                        )}
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-4">No comment</div>
              )}
            </div>
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
            <h1 className="font-black text-2xl mb-4 text-gray-700">
              Related Products
            </h1>
            <div className="grid grid-cols-5 gap-x-4">
              {products.slice(0, 5)?.map((item: any, index: any) => {
                return <CardProduct item={item} index={index} limit={100} />;
              })}
            </div>
          </div>
        </div>
        <SuperDiscount />
      </div>
    </div>
  );
}
