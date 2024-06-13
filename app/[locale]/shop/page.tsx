'use client';

import React from "react";
import { Suspense } from 'react'
import BoxWrapper from "@/components/common/box-wrapper";
import { NextPage } from "next";
import { useParams } from "next/navigation";
import ShopContainer from "@/components/modules/shop/container";

function ShopFallback() {
  return <>...</>
}

const PageServer: NextPage<any> = async () => {
  const { locale } = useParams();
  return (
    <BoxWrapper>
      <Suspense fallback={<ShopFallback />}>
        <div className="w-full h-screen flex justify-center items-center">
          <ShopContainer
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
