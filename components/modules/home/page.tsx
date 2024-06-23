"use client";
import React, { useContext } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { ROUTE } from "@/constant/route";
import Link from "next/link";
import CategoryMenu from "@/components/common/category-menu";
import { FAKE } from "@/constant/fake";
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

  const [amountCart, setAmountCart] = React.useState(0);
  const [allCategories, setAllCategories] = React.useState([] as any);
  const [popularCategories, setPopularCategories] = React.useState([] as any);
  const [popularShop, setPopularShop] = React.useState([] as any);
  const [productTopDeal, setProductTopDeal] = React.useState([] as any);
  const [products, setProducts] = React.useState([] as any);

  React.useEffect(() => {
    const fetch = async () => {
      const amount = await HomeService.getAmountCartByAccountID(accountID);
      if (amount?.result) {
        setAmountCart(amount?.data);
      }

      const allCat = await HomeService.getAllCategories();
      if (allCat?.result) {
        setAllCategories(allCat?.data);
      }

      const popularCat = await HomeService.getPopularCategories();
      if (popularCat?.result) {
        setPopularCategories(popularCat?.data);
      }

      const popularS = await HomeService.getPopularShop();
      if (popularS?.result) {
        setPopularShop(popularS?.data);
      }

      const productTD = await HomeService.getProductTopDeal();
      if (productTD?.result) {
        setProductTopDeal(productTD?.data);
      }

      const pros = await ProductService.getAllProducts("1", "16");
      if (pros?.result) {
        setProducts(pros?.data);
      }
    }
    fetch();
  }, []);

  const signIn = async () => {
    const fetch = await HomeService.signIn("nghiempt.dev@gmail.com", "Nghiempt123");
    if (fetch.result) {
      Cookie.set('accountID', JSON.stringify(fetch?.data?.account_id), { expires: 1 });
      window.location.reload();
    } else {
      snackBarContext.setSnackBar({
        open: true,
        message: fetch?.message || "Sign in failed",
        severity: "error",
        duration: 2000,
        vertical: "top",
        horizontal: "center",
      });
    }
  }

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <SignInModal open={isSignIn} handleClose={handleCloseSignIn} />
      <SignUpModal open={isSignUp} handleClose={handleCloseSignUp} />
      <CategoryMenu />
      <div className="w-3/4 h-[380px] flex gap-x-4 border border-[#E0E0E0] rounded-[6px] p-5 box-border">
        <div className="font-regular w-1/5 text-[16px]">
          <div className="font-black text-gray-700 hover:bg-[#E5F1FF] rounded-[6px] hover:cursor-pointer py-2 pl-2">
            Categories
          </div>
          {
            allCategories.slice(0, 7)?.map((item: any, index: any) => {
              return (
                <Link key={index} href={ROUTE.PRODUCT}>
                  <div className="focus:font-medium hover:bg-[#eee] rounded-[6px] hover:cursor-pointer py-2 pl-2">
                    {item?.name}
                  </div>
                </Link>
              )
            })
          }
        </div>
        <div className="w-3/5 h-full">
          <div className="relative h-full">
            <img
              src='https://t4.ftcdn.net/jpg/05/18/58/69/360_F_518586907_6ltCsOJx7pqkQzoi8CB7yNRKjRLKQixh.jpg'
              alt="img"
              style={{ width: "100%", height: "100%" }}
              className="rounded-md"
            />
            <div className="absolute top-[80px] left-[-5px] w-[250px] h-[40px] flex justify-center items-center">
              <div className="text-gray-700 text-[20px] ">Latest trending</div>
            </div>
            <div className="absolute top-[110px] left-6 w-[250px] h-[40px] flex justify-center items-center">
              <div className="text-gray-700 text-[25px] font-bold ">
                Electronic items
              </div>
            </div>
            <div className="absolute top-[150px] left-10 w-[120px] h-[40px] flex justify-center items-center">
              <Link href={ROUTE.PRODUCT} className="bg-white text-black px-4 py-2 rounded-[6px] shadow-md">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="w-1/5">
          {
            accountID === 0 ? (
              <div className="bg-blue-100 p-2 rounded-[6px]">
                <div className="flex gap-x-2 ">
                  <div className="p-2 rounded-full bg-blue-300">
                    <PersonIcon
                      style={{ color: "white", width: "30px", height: "30px" }}
                    />
                  </div>
                  <div>
                    <div>Hi, user</div>
                    <div>let’s get stated</div>
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
            ) : (
              <div className="flex justify-between items-center bg-blue-100 p-2 rounded-[6px]">
                <div>Sign Out</div>
                <ExitToAppIcon
                  onClick={signOut}
                  className="cursor-pointer"
                  style={{ color: "gray", width: "30px", height: "30px" }}
                />
              </div>
            )
          }
          <Link href={ROUTE.PRODUCT} className="flex bg-[rgb(var(--primary-rgb))] p-4 rounded-[6px] mt-3 text-white text-[16px] cursor-pointer">
            Get US $10 off with a new supplier
          </Link>
          <Link href={ROUTE.PRODUCT} className="flex bg-[rgb(var(--secondary-rgb))] p-4 rounded-[6px] mt-3 text-white text-[16px] cursor-pointer">
            Send quotes with supplier preferences
          </Link>
        </div>
      </div>
      <div className="w-3/4 flex mb-5 mt-8 flex-col">
        <h1 className="font-black text-xl text-gray-700">Popular Category</h1>
        <div className=" grid grid-cols-10 mt-4 gap-4">
          {popularCategories?.map((item: any, index: any) => {
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
      <div className="w-3/4 flex border border-[#E0E0E0] rounded-[6px] my-5">
        <div className="p-4 w-1/5">
          <div className="font-bold text-[18px] mt-2">Deals and offers</div>
          <div className="text-[#8B96A5] mb-4">Hygiene equipments</div>
          <div className="flex">
            <div className="border bg-[#606060] w-[40px] h-[40px] p-1 justify-center items-center text-center text-white rounded-[6px]">
              <div className="font-bold">04</div>
              <div>Days</div>
            </div>
            <div className="border bg-[#606060] w-[40px] h-[40px] p-1 justify-center items-center text-center text-white rounded-[6px]">
              <div className="font-bold">13</div>
              <div>Hour</div>
            </div>
            <div className="border bg-[#606060] w-[40px] h-[40px] p-1 justify-center items-center text-center text-white rounded-[6px]">
              <div className="font-bold">34</div>
              <div>Min</div>
            </div>
            <div className="border bg-[#606060] w-[40px] h-[40px] p-1 justify-center items-center text-center text-white rounded-[6px]">
              <div className="font-bold">56</div>
              <div>Sec</div>
            </div>
          </div>
        </div>
        <div className="w-4/5 grid grid-cols-5">
          {products.slice(0, 5)?.map((item: any, index: any) => {
            return (
              <Link
                href={{
                  pathname: ROUTE.PRODUCT_DETAIL,
                  query: { id: item?.id },
                }}
                key={index}
                className="flex flex-col items-center justify-center text-center border-l border-[#E0E0E0] p-2 cursor-pointer"
              >
                <img
                  src={item?.thumbnail[0]?.link}
                  alt="img"
                  style={{ width: "180px", height: "180px" }}
                />
                <div className="pt-2">{limitString(item?.name, 20)}</div>
                <div className="w-1/3 rounded-full px-2 bg-red-100 text-[rgb(var(--primary-rgb))] m-2">
                  -{item?.discount}%
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="w-3/4 flex flex-col my-5">
        <h1 className="font-black text-xl text-gray-700 pb-4">Popular Brand</h1>
        <div className=" grid grid-cols-6 gap-x-24 pb-4">
          {FAKE.BRANDS.slice(0, 6)?.map((item: any, index: any) => {
            return (
              <Link href={ROUTE.PRODUCT} key={index} className="flex gap-x-2 items-center">
                <img
                  src={item?.img}
                  alt="img"
                  style={{ width: "40px", height: "40px" }}
                  className="border p-1 rounded-md"
                />
                <div className="flex flex-col">
                  <h1 className="text-[16px]">{item?.name}</h1>
                  <h1 className="text-[13px] text-[#8B96A5]">{item?.url}</h1>
                </div>
              </Link>
            );
          })}
        </div>
        <div className=" grid grid-cols-6 gap-x-24 mt-2">
          {FAKE.BRANDS.slice(6, 12)?.map((item: any, index: any) => {
            return (
              <div key={index} className="flex gap-x-2 items-center">
                <img
                  src={item?.img}
                  alt="img"
                  style={{ width: "40px", height: "40px" }}
                  className="border p-1 rounded-md"
                />
                <div className="flex flex-col">
                  <h1 className="text-[16px]">{item?.name}</h1>
                  <h1 className="text-[13px] text-[#8B96A5]">{item?.url}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-3/4 flex flex-col">
        {popularShop?.map((item: any, index: any) => {
          return (
            <div key={index} className="w-full flex border border-[#E0E0E0] rounded-md my-5">
              <div className="p-4 w-1/5 relative">
                <img
                  src={item?.thumbnail}
                  alt="img"
                  style={{ width: "100%", height: "100%" }}
                  className="rounded-md"
                />
                <div className="absolute top-10 left-10 flex flex-col justify-center items-start gap-2">
                  <h1 className="text-white text-[18px] font-black bg-[rgb(var(--primary-rgb))] px-2 rounded-md">
                    {item?.name}
                  </h1>
                  <Link
                    href={{
                      pathname: ROUTE.SHOP,
                      query: { id: item?.id }
                    }}
                    className="bg-white text-black px-4 py-2 rounded-md shadow-md"
                  >
                    Source now
                  </Link>
                </div>
              </div>
              <div className="w-4/5 flex flex-col justify-center items-center">
                <div className="w-full grid grid-cols-4">
                  {products?.slice(0, 4).map((item: any, index: any) => {
                    return (
                      <div key={index} className="border-l border-[#E0E0E0] p-2">
                        <div className="text-[#1C1C1C] text-[16px] p-2">
                          {item?.name}
                        </div>
                        <div className="flex justify-between px-2">
                          <div className="text-[#8B96A5] text-[13px] mt-2">
                            <div>{item?.rate} stars review</div>
                            <div>{item?.price}</div>
                          </div>
                          <img
                            src={item?.thumbnail[0]?.link}
                            alt="img"
                            style={{ width: "82px", height: "82px" }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="w-full grid grid-cols-4">
                  {products.slice(4, 8)?.map((item: any, index: any) => {
                    return (
                      <div
                        key={index}
                        className="border-l border-t border-[#E0E0E0] p-2"
                      >
                        <div className="text-[#1C1C1C] text-[16px] p-2">
                          {item?.name}
                        </div>
                        <div className="flex justify-between px-2">
                          <div className="text-[#8B96A5] text-[13px] mt-2">
                            <div>{item?.rate} stars review</div>
                            <div>{item?.price}</div>
                          </div>
                          <img
                            src={item?.thumbnail[0]?.link}
                            alt="img"
                            style={{ width: "82px", height: "82px" }}
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
      <div className="w-3/4">
        <SuperDiscount />
      </div>
      <div className="w-3/4 p-4 my-5">
        <div className="font-black text-2xl text-gray-700">Recommended Items</div>
        <div className="py-5 grid grid-cols-5 gap-4">
          {products.slice(0, 10)?.map((item: any, index: any) => {
            return (
              <CardProduct key={index} item={item} index={index} limit={100} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
