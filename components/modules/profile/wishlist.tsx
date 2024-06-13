"use client";

import React, { useState } from "react";
import CardProduct from "@/components/common/card-product";
import { ProductService } from "@/service/product";

export default function Wishlist() {

  const [products, setProducts] = useState([]);

  React.useEffect(() => {
    const fetch = async () => {
      const pros = await ProductService.searchProduct("", "1", "4");
      if (pros?.result) {
        setProducts(pros?.data);
      }
    }
    fetch();
  }, []);

  return (
    <div className="w-full box-border pb-32">
      <h1 className="font-semibold text-[20px] py-4">Wishlist Product (4)</h1>
      <div className="w-full rounded-md flex grid grid-cols-4 gap-4">
        {products.slice(0, 6)?.map((item: any, index: any) => {
          return (
            <CardProduct item={item} index={index} limit={100} />
          );
        })}
      </div>
    </div>
  );
}
