'use client';

import React from "react";
import { Suspense } from 'react'
import BoxWrapper from "@/components/common/box-wrapper";
import { NextPage } from "next";
import { useParams } from "next/navigation";
import ProductContainer from "@/components/modules/product/container";

function ProductFallback() {
  return <>...</>
}

const PageServer: NextPage<any> = async () => {
  const { locale } = useParams();
  return (
    <BoxWrapper>
      <Suspense fallback={<ProductFallback />}>
        <div className="w-full h-screen flex justify-center items-center">
          <ProductContainer
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
