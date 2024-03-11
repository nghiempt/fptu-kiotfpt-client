"use client";

import React from "react";
import { Suspense } from 'react'
import BoxWrapper from "@/components/common/box-wrapper";
import { NextPage } from "next";
import { useParams } from "next/navigation";
import SignInContainer from "@/components/modules/sign-in/container";

function SignInFallback() {
  return <>loading ...</>
}

const SignInServer: NextPage<any> = async () => {
  const { locale } = useParams();
  return (
    <BoxWrapper>
      <Suspense fallback={<SignInFallback />}>
        <div className="w-full h-screen flex justify-center items-center">
          <SignInContainer
            params={{
              locale: locale,
            }}
          />
        </div>
      </Suspense>
    </BoxWrapper>
  );
};

export default SignInServer;
