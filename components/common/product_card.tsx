"use client";

import React from "react";
import { convertStringToMoney, limitString } from "@/utils/helper";
import Link from "next/link";
import { ROUTE } from "@/constant/route";
import Rating from '@mui/material/Rating';

const ProductCard = ({ product, index }: { product: any, index: any }) => {
    return (
        <Link
            key={index}
            className="flex flex-col gap-2 border-gray-200 shadow-md hover:shadow-2xl"
            style={{ marginBottom: '40px', cursor: 'pointer', display: 'flex', backgroundColor: '#ffffff', borderRadius: '8px' }}
            href={{
                pathname: ROUTE.PRODUCT,
                query: { productId: product?.p_id.toString() }
            }}
        >
            <div className="aspect-w-1 aspect-h-1 p-2">
                <img className="aspect-w-1 object-cover rounded-md" src={product?.p_thumbnail} alt="img" style={{ width: '100%' }} />
            </div>
            <div className="aspect-w-1 aspect-h-1" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1, padding: "0px 8px 8px" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Rating name="read-only" value={4.5} readOnly size="small" />
                    <span className="ml-2">Review &#40;4&#41;</span>
                </div>
                <h1 className="text-[16px] text-base mb-2 hover:font-bold hover:drop-shadow-lg" >{limitString(product?.p_name, 40)}</h1>
                {245000 && (
                    <div className="flex gap-x-2">
                        <h1 className="text-[20px] text-sm text-gray-600 line-through">{convertStringToMoney(product?.p_price*0.9 || '0').toString()} VND</h1>
                        <h1 className="bg-gray-100 px-2 rounded-md">10%</h1>
                    </div>
                )
                }
                <h1 className="text-[20px] text-lg font-semibold hover:underline">{convertStringToMoney(product?.p_price || '0').toString()} VND</h1>
            </div>
        </Link>
    );
};

export default ProductCard;