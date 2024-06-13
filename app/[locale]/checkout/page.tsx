'use client';

import React from "react";
import { Suspense } from 'react'
import BoxWrapper from "@/components/common/box-wrapper";
import { NextPage } from "next";
import { useParams } from "next/navigation";
import CheckoutContainer from "@/components/modules/checkout/container";

function CheckoutFallback() {
  return <>...</>
}

const PageServer: NextPage<any> = async () => {
  const { locale } = useParams();
  return (
    <BoxWrapper>
      <Suspense fallback={<CheckoutFallback />}>
        <div className="w-full h-screen flex justify-center items-center">
          <CheckoutContainer
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
