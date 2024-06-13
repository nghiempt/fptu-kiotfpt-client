"use client";

import React, { useState } from "react";
import CardProduct from "@/components/common/card-product";
import CategoryMenu from "@/components/common/category-menu";
import { ProductService } from "@/service/product";
import { useSearchParams } from "next/navigation";

export default function Search() {

  const searchParams = useSearchParams();

  const [products, setProducts] = useState([]);

  React.useEffect(() => {
    const fetch = async () => {
      const pros = await ProductService.searchProduct(searchParams.get('key') || "", "1", "15");
      if (pros?.result) {
        setProducts(pros?.data);
      }
    }
    fetch();
  }, [searchParams]);

  return (
    <div className="w-full flex flex-col justify-center items-center pb-10 pt-4">
      <CategoryMenu />
      <div className="w-3/4 flex justify-between items-center pb-8">
        <h1 className="text-xl font-semibold">Result for "{searchParams.get('key')}" ({products?.length} results)</h1>
        <div className="flex items-center ml-auto">
          <span className="text-gray-700 mr-4 text-[16px]">Sort:</span>
          <div className="p-2 border border-gray-300 rounded-lg">
            <select className="bg-white">
              <option>Popular</option>
              <option>Latest</option>
              <option>
                From low to high
              </option>
              <option>
                From high to low
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="w-3/4 flex flex-col justify-center items-center gap-10">
        <div className="w-full flex grid grid-cols-5 gap-4">
          {products?.map((item: any, index: any) => {
            return (
              <CardProduct key={index} item={item} index={index} limit={100} />
            );
          })}
        </div>
        <button className="bg-white font-bold text-[rgb(var(--quaternary-rgb))] border border-[rgb(var(--quaternary-rgb))] rounded-md px-10 py-2">View more</button>
      </div>
    </div>
  );
}
