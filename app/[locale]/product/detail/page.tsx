'use client';

import React from "react";
import { Suspense } from 'react'
import BoxWrapper from "@/components/common/box-wrapper";
import { NextPage } from "next";
import { useParams } from "next/navigation";
import ProductDetailContainer from "@/components/modules/product-detail/container";

function ProductDetailFallback() {
  return <>...</>
}

const PageServer: NextPage<any> = async () => {
  const { locale } = useParams();
  return (
    <BoxWrapper>
      <Suspense fallback={<ProductDetailFallback />}>
        <div className="w-full h-screen flex justify-center items-center">
          <ProductDetailContainer
            params={{
              locale: locale as string,
            }}
          />
        </div>
      </Suspense>
    </BoxWrapper>
  );
};

export default PageServer;
