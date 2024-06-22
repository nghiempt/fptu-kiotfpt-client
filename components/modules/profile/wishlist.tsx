"use client";

import React, { useEffect, useState } from "react";
import CardProduct from "@/components/common/card-product";
import { ProfileService } from "@/service/profile";
import Cookie from 'js-cookie';

export default function Wishlist() {
  const accountID = JSON.parse(Cookie.get('accountID') || "0");
  const [products, setProducts] = useState([]);

  const handleGetWishList = async () => {
    const fetch = async () => {
      const prof = await ProfileService.getAllWishListByAccountID(accountID);
      if (prof?.result) {
        setProducts(prof?.data);
        console.log(prof.data);
      } else {
        console.log(prof.data);
      }
    }
    fetch();
  }

  const handleDeleteFavouriteProduct = async (id: string) => {
    const fetch = async () => {
      const prof = await ProfileService.deleteFavouriteProduct(id);
      if (prof?.result) {
        handleGetWishList();
      } else {
        console.log(prof.data);
      }
    }
    fetch();
  }

  useEffect(() => {
    handleGetWishList()
  }, []);

  useEffect(() => { }, [products]);

  return (
    <div className="w-full box-border pb-32">
      <h1 className="font-semibold text-[20px] py-4">Wishlist Product ({products?.length})</h1>
      <div className="w-full rounded-md flex grid grid-cols-4 gap-4">
        {products.slice(0, 6)?.map((item: any, index: any) => {
          return (
            <CardProduct key={index} item={item} index={index} limit={100} isFavouriteProductCart={handleDeleteFavouriteProduct} />

          );
        })}
      </div>
    </div>
  );
}
