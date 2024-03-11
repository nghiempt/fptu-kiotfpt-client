"use client";

import React from "react";
import { Suspense } from 'react'
import BoxWrapper from "@/components/common/box-wrapper";
import { NextPage } from "next";
import { useParams } from "next/navigation";
import AdminShopContainer from "@/components/modules/admin-shop/container";

function AdminShopFallback() {
  return <>loading ...</>
}

const AdminShopServer: NextPage<any> = async () => {
  const { locale } = useParams();
  return (
    <BoxWrapper>
      <Suspense fallback={<AdminShopFallback />}>
        <div className="w-full h-screen flex justify-center items-center">
          <AdminShopContainer
            params={{
              locale: locale,
            }}
          />
        </div>
      </Suspense>
    </BoxWrapper>
  );
};

export default AdminShopServer;
