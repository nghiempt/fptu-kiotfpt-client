"use client";

import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from '@mui/icons-material/Notifications';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import { ROUTE } from "@/constant/route";
import SearchIcon from '@mui/icons-material/Search';
import LocalImage from "./local-image";
import { IMAGE } from "@/constant/image";
import { FAKE } from "@/constant/fake";
import Cookie from 'js-cookie';
import SignInModal from "../pop-up/sign-in-modal";

export default function Header() {

  const accountID = JSON.parse(Cookie.get('accountID') || "0");

  const [focusSearch, setFocusSearch] = React.useState(false);
  const [isSignIn, setIsSignIn] = React.useState(false);

  const [searchInput, setSearchInput] = React.useState("");

  const handleOpenSignIn = () => {
    setIsSignIn(true);
  }

  const handleCloseSignIn = () => {
    setIsSignIn(false);
  }

  const showFocusSearch = () => {
    setFocusSearch(true);
  }

  const hideFocusSearch = (e: any) => {
    if (e.target.tagName === "INPUT") return;
    setFocusSearch(false);
  }

  return (
    <div className="w-full flex justify-center items-center" onClick={(e) => hideFocusSearch(e)}>
      <SignInModal open={isSignIn} handleClose={handleCloseSignIn} />
      <div className="w-3/4 flex gap-x-10 p-5 items-center">
        <div className="w-1/6">
          <Link
            href={{
              pathname: ROUTE.HOME,
            }}
          >
            <div className="flex gap-x-2 items-center">
              <LocalImage url={IMAGE.LOGO} width={50} height={50} alt="img" cN="" />
              <div className="text-2xl font-bold text-[rgb(var(--quaternary-rgb))]">KIOTFPT</div>
            </div>
          </Link>
        </div>
        <div className="w-2/3 px-10 relative">
          <div className="w-full flex">
            <input
              type="text"
              placeholder="Search"
              onFocus={showFocusSearch}
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="w-5/6 px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:border-[rgb(var(--quaternary-rgb))]"
            />
            <div className="w-1/6 flex justify-center items-center">
              <Link
                replace
                scroll={true}
                prefetch={true}
                href={{
                  pathname: ROUTE.SEARCH,
                  query: { key: searchInput }
                }}
                className="w-full px-4 py-2 text-center border font-semibold border-[rgb(var(--quaternary-rgb))] bg-[rgb(var(--quaternary-rgb))] text-white rounded-r-md hover:bg-[rgb(var(--tertiary-rgb))] focus:outline-none">
                Search
              </Link>
            </div>
          </div>
          {
            focusSearch && (
              <div className="w-5/6 bg-white border border-gray-200 shadow-lg absolute top-10 left-10 z-20 rounded-md">
                <div>
                  {
                    FAKE.PRODUCTS.slice(0, 5)?.map((item: any, index: any) => {
                      return (
                        <div key={index} className="flex gap-x-2 p-2 border-b border-gray-200">
                          <SearchIcon />
                          <div>
                            {item?.name}
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
                <div className="pl-2">
                  <h1 className="text-[16px] font-semibold py-2">Popular Search</h1>
                  <div className="flex grid grid-cols-3">
                    {
                      FAKE.PRODUCTS.slice(0, 6)?.map((item: any, index: any) => {
                        return (
                          <div key={index} className="flex jusitfy-center items-center gap-x-2 p-2 border-b border-gray-200">
                            <img src={item?.img} alt="img" width={40} />
                            <div>
                              {item?.name}
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
                <div className="pl-2">
                  <h1 className="text-[16px] font-semibold py-2">Popular Category</h1>
                  <div className="flex grid grid-cols-4">
                    {
                      FAKE.CATEGORIES.slice(0, 8)?.map((item: any, index: any) => {
                        return (
                          <div key={index} className="flex jusitfy-center items-center gap-x-2 p-2 border-b border-gray-200">
                            <img src={item?.img} alt="img" width={30} />
                            <div>
                              {item?.name}
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            )
          }
        </div>
        <div className="flex gap-x-3 text-gray-500">
          <div className="flex flex-col justify-center items-center">
            <Link
              href={{
                pathname: ROUTE.PROFILE,
              }}
              className="flex flex-col justify-center items-center gap-1"
              onClick={(e) => {
                if (accountID === 0) {
                  e.preventDefault();
                  handleOpenSignIn();
                }
              }}
            >
              <PersonIcon />
              <div>Profile</div>
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Link
              href={{
                pathname: ROUTE.PROFILE,
              }}
              className="flex flex-col justify-center items-center gap-1"
              onClick={(e) => {
                if (accountID === 0) {
                  e.preventDefault();
                  handleOpenSignIn();
                }
              }}
            >
              <NotificationsIcon />
              <div>Notify</div>
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Link
              href={{
                pathname: ROUTE.PROFILE,
              }}
              className="flex flex-col justify-center items-center gap-1"
              onClick={(e) => {
                if (accountID === 0) {
                  e.preventDefault();
                  handleOpenSignIn();
                }
              }}
            >
              <InventoryIcon />
              <div>Order</div>
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Link
              href={{
                pathname: ROUTE.CART,
              }}
              className="flex flex-col justify-center items-center gap-1"
              onClick={(e) => {
                if (accountID === 0) {
                  e.preventDefault();
                  handleOpenSignIn();
                }
              }}
            >
              <ShoppingCartIcon />
              <div>Cart</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
