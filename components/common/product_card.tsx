"use client";

import React from "react";
import { URL } from "@/constant/url";

const ProductCard = ({ product, index }: { product: any, index: any }) => {
    return (
        <div key={index} className="flex flex-col gap-2 border-gray-200 shadow-md hover:shadow-2xl" style={{ marginBottom: '40px', cursor: 'pointer', display: 'flex', backgroundColor: '#ffffff', borderRadius: '8px' }}>
            <div className="aspect-w-1 aspect-h-1" style={{ marginBottom: '20px' }}>
                <img className="aspect-w-1 object-cover rounded-md" src={URL.PRODUCT} alt="img" style={{ width: '100%' }} />
            </div>
            <div className="aspect-w-1 aspect-h-1" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1, padding: "8px 8px 16px" }}>
                <h1 className="text-[16px] font-semibold hover:font-bold hover:drop-shadow-lg" >{product?.name}</h1>
                <h1 className="text-[20px] hover:underline">${product?.price}</h1>
            </div>

        </div>
    );
};

export default ProductCard;