"use client";

import React, { useContext } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { ROUTE } from "@/constant/route";
import Link from "next/link";
import CategoryMenu from "@/components/common/category-menu";
import StorefrontIcon from '@mui/icons-material/Storefront';
import SuperDiscount from "@/components/common/super-discount";
import CardProduct from "@/components/common/card-product";
import { HomeService } from "@/service/home";
import Cookie from 'js-cookie';
import SnackBarContext from "@/context/snackbar-context";
import SignInModal from "@/components/pop-up/sign-in-modal";
import SignUpModal from "@/components/pop-up/sign-up-modal";
import { limitString } from "@/utils/helper";
import { ProductService } from "@/service/product";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export default function Home() {

  const accountID = JSON.parse(Cookie.get('accountID') || "0");
  const snackBarContext = useContext(SnackBarContext);

  const [isSignIn, setIsSignIn] = React.useState(false);
  const [isSignUp, setIsSignUp] = React.useState(false);

  const handleOpenSignIn = () => {
    setIsSignIn(true);
  }

  const handleCloseSignIn = () => {
    setIsSignIn(false);
  }

  const handleOpenSignUp = () => {
    setIsSignUp(true);
  }

  const handleCloseSignUp = () => {
    setIsSignUp(false);
  }

  const signOut = () => {
    Cookie.remove('accountID');
    window.location.reload();
  }

  const [allCategories, setAllCategories] = React.useState([] as any);
  const [popularCategories, setPopularCategories] = React.useState([] as any);
  const [popularShop, setPopularShop] = React.useState([] as any);
  const [productTopDeal, setProductTopDeal] = React.useState([] as any);
  const [brands, setBrands] = React.useState([] as any);
  const [products, setProducts] = React.useState([] as any);

  React.useEffect(() => {
    const fetch = async () => {
      try {
        const [
          allCat,
          popularCat,
          popularS,
          productTD,
          pros,
          bras
        ] = await Promise.all([
          HomeService.getAllCategories(),
          HomeService.getPopularCategories(),
          HomeService.getPopularShop(),
          HomeService.getProductTopDeal(),
          ProductService.searchProduct("", "1", "16"),
          HomeService.getAllBrands(),
        ]);

        if (allCat?.result) {
          setAllCategories(allCat?.data);
        }
        if (popularCat?.result) {
          setPopularCategories(popularCat?.data);
        }
        if (popularS?.result) {
          setPopularShop(popularS?.data);
        }
        if (productTD?.result) {
          setProductTopDeal(productTD?.data);
        }
        if (pros?.result) {
          setProducts(pros?.data);
        }
        if (bras?.result) {
          setBrands(bras?.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetch();
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <SignInModal open={isSignIn} handleClose={handleCloseSignIn} />
      <SignUpModal open={isSignUp} handleClose={handleCloseSignUp} />
      <CategoryMenu />
      <div className="w-3/4 h-[380px] flex gap-x-4 border border-[#E0E0E0] rounded-[6px] p-5 box-border">
        <div className="font-regular w-1/5 text-[16px]">
          <div className="font-black text-[20px] text-gray-700 hover:bg-[#E5F1FF] rounded-[6px] hover:cursor-pointer py-2 pl-2">
            Popular Categories
          </div>
          {
            popularCategories?.map((item: any, index: any) => {
              return (
                <Link key={index} href={ROUTE.PRODUCT}>
                  <div className="focus:font-medium hover:bg-[#eee] rounded-[6px] hover:cursor-pointer py-2 pl-2">
                    {item?.name} ({item?.product_total} products)
                  </div>
                </Link>
              )
            })
          }
        </div>
        <div className="w-3/5 h-full">
          <div className="h-full">
            <img
              src='https://static.vecteezy.com/system/resources/previews/004/617/319/non_2x/electronics-word-concepts-banner-manufacture-maintenance-and-repair-of-household-appliances-presentation-website-isolated-lettering-typography-idea-with-linear-icons-outline-illustration-vector.jpg'
              alt="img"
              style={{ width: "100%", height: "100%" }}
              className="rounded-md"
            />
          </div>
        </div>
        {
          accountID === 0 ? (
            <div className="w-1/5">
              <div className="bg-blue-100 p-2 rounded-[6px]">
                <div className="flex gap-x-2 ">
                  <div>
                    <div>You are a guest</div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={handleOpenSignUp}
                    className="w-full py-2 bg-[rgb(var(--quaternary-rgb))] text-white rounded-[6px] mt-2"
                  >
                    Join now
                  </button>
                </div>
                <div>
                  <button
                    onClick={handleOpenSignIn}
                    className="w-full py-2 bg-white text-[rgb(var(--quaternary-rgb))] rounded-[6px] mt-2"
                  >
                    Sign In
                  </button>
                </div>
              </div>
              <div className="mt-2">
                <div className="flex gap-x-2 ">
                  <img
                    src="https://img.freepik.com/premium-vector/best-seller-banner-thumbs-up_97458-366.jpg"
                    alt="img"
                    style={{ width: "100%", height: "100%" }}
                    className="rounded-md"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="w-1/5 flex flex-col">
              <div className="bg-blue-100 p-2 rounded-[6px] relative">
                <div className="flex gap-x-2 mb-0.5">
                  <div>
                    <div>Bạn đã đăng nhập</div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={handleOpenSignUp}
                    className="w-full py-2 bg-[rgb(var(--quaternary-rgb))] text-white rounded-[6px] mt-2"
                  >
                    Buy now
                  </button>
                </div>
                <ExitToAppIcon
                  onClick={signOut}
                  className="cursor-pointer absolute top-2 right-2"
                  style={{ color: "#666", width: "20px", height: "20px" }}
                />
              </div>
              <div className="mt-2">
                <div className="flex gap-x-2 ">
                  <img
                    src="https://img.freepik.com/premium-vector/best-seller-banner-thumbs-up_97458-366.jpg"
                    alt="img"
                    style={{ width: "100%", height: "100%" }}
                    className="rounded-md"
                  />
                </div>
                <div>
                  <button
                    className="w-full py-2 bg-[rgb(var(--primary-rgb))] text-white rounded-[6px] mt-2 flex justify-center items-center font-semibold  gap-x-2"
                  >
                    <StorefrontIcon /> Begin to Seller
                  </button>
                </div>
              </div>
            </div>
          )
        }
      </div>
      <div className="w-3/4 flex mb-5 mt-8 flex-col">
        <h1 className="font-black text-xl text-gray-700">All Categories</h1>
        <div className=" grid grid-cols-10 mt-4 gap-4">
          {allCategories?.slice(0, 10)?.map((item: any, index: any) => {
            return (
              <Link href={ROUTE.PRODUCT} key={index} className="flex border border-[#E0E0E0] rounded-lg items-center justify-center">
                <div
                  className="flex flex-col items-center justify-center text-center p-4 gap-4"
                >
                  <img
                    src={item?.thumbnail}
                    alt="img"
                    style={{ width: "80px", height: "80px" }}
                  />
                  <div>{item?.name}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="w-3/4 flex border border-[#E0E0E0] box-border p-2 rounded-[6px] my-5">
        <div className="p-4 w-1/6">
          <div className="font-bold text-[18px] mt-2">Top Deal Products</div>
          <div className="text-[#8B96A5] mb-4">Thời gian đang trôi</div>
          <div className="flex">
            <div className="border bg-[#606060] p-3 justify-center items-center text-center text-white rounded-[6px]">
              <div className="font-bold">04</div>
            </div>
            <div className="border bg-[#606060] p-3 justify-center items-center text-center text-white rounded-[6px]">
              <div className="font-bold">13</div>
            </div>
            <div className="border bg-[#606060] p-3 justify-center items-center text-center text-white rounded-[6px]">
              <div className="font-bold">34</div>
            </div>
            <div className="border bg-[#606060] p-3 justify-center items-center text-center text-white rounded-[6px]">
              <div className="font-bold">56</div>
            </div>
          </div>
        </div>
        <div className="w-5/6 grid grid-cols-4 gap-2">
          {productTopDeal.slice(0, 4)?.map((item: any, index: any) => {
            return (
              <Link
                href={{
                  pathname: ROUTE.PRODUCT_DETAIL,
                  query: { id: item?.id },
                }}
                key={index}
                className="flex flex-col items-center justify-center text-center border border-[#E0E0E0] rounded-md p-2 cursor-pointer"
              >
                <img
                  src={item?.thumbnail[0]?.link}
                  alt="img"
                  style={{ width: "280px", height: "280px" }}
                />
                <div className="pt-2 text-[rgb(var(--primary-rgb))] text-[16px] font-semibold">{limitString(item?.name, 20)}</div>
                <div className="w-1/3 rounded-full px-2 bg-red-100 text-[rgb(var(--primary-rgb))] m-2">
                  - {item?.discount} %
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="w-3/4 flex flex-col my-5">
        <h1 className="font-black text-xl text-gray-700 pb-4">All Brands</h1>
        <div className="grid grid-cols-6 pb-4 gap-4">
          {brands?.slice(0, 6)?.map((item: any, index: any) => {
            return (
              <Link href={ROUTE.PRODUCT} key={index} className="flex gap-x-2 items-center border p-2 rounded-md">
                <img
                  src={item?.brand_thumbnail}
                  alt="img"
                  style={{ width: "40px", height: "40px" }}
                  className=""
                />
                <div className="flex flex-col">
                  <h1 className="text-[16px]">{item?.brand_name}</h1>
                  <h1 className="text-[13px] text-[#8B96A5]">{item?.total_product} products</h1>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="w-3/4 flex flex-col">
        {popularShop.slice(0, 2)?.map((item: any, index: any) => {
          return (
            <div key={index} className="w-full flex border border-[#E0E0E0] rounded-md my-5">
              <div className="p-4 w-1/5 relative">
                <img
                  src={item?.thumbnail}
                  alt="img"
                  style={{ width: "100%", height: "100%" }}
                  className="rounded-md"
                />
                <div className="absolute top-4 left-4 flex flex-col justify-center items-start gap-2">
                  <h1 className="text-white text-[18px] font-black bg-[rgb(var(--primary-rgb))] px-4 py-2 rounded-md">
                    {item?.name}
                  </h1>
                </div>
              </div>
              <div className="w-4/5 flex flex-col justify-center items-center">
                <div className="w-full grid grid-cols-4">
                  {item?.product.slice(0, 4)?.map((item: any, index: any) => {
                    return (
                      <div key={index} className="border-l border-[#E0E0E0] p-2">
                        <div className="text-[#1C1C1C] text-[16px] p-2">
                          {limitString(item?.name, 20)}
                        </div>
                        <div className="flex justify-between px-2">
                          <div className="text-[#8B96A5] text-[13px] mt-2">
                            <div>5 stars review</div>
                            <div>$189.7</div>
                          </div>
                          <img
                            src={item?.thumbnail[0]?.link}
                            alt="img"
                            style={{ width: "82px", height: "82px" }}
                            className="rounded-md"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="w-full grid grid-cols-4">
                  {item?.product.slice(4, 8)?.map((item: any, index: any) => {
                    return (
                      <div
                        key={index}
                        className="border-l border-t border-[#E0E0E0] p-2"
                      >
                        <div className="text-[#1C1C1C] text-[16px] p-2">
                          {limitString(item?.name, 20)}
                        </div>
                        <div className="flex justify-between px-2">
                          <div className="text-[#8B96A5] text-[13px] mt-2">
                            <div>5 stars review</div>
                            <div>$189.7</div>
                          </div>
                          <img
                            src={item?.thumbnail[0]?.link}
                            alt="img"
                            style={{ width: "82px", height: "82px" }}
                            className="rounded-md"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )
        }
        )}
      </div>
      <div className="w-3/4 p-4 my-5">
        <div className="font-black text-2xl text-gray-700">Recommended Items</div>
        <div className="py-5 grid grid-cols-5 gap-4">
          {products.slice(0, 10)?.map((item: any, index: any) => {
            return (
              <CardProduct key={index} item={item} index={index} limit={20} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
