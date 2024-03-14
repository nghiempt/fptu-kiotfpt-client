"use client";

import React from "react";
import BoxWrapper from "@/components/common/box-wrapper";
import { NextPage } from "next";
import Header from "@/components/common/_header";
import Footer from "@/components/common/_footer";
import SignUp from "./page";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/translation/translations-provider";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import PersonPinIcon from '@mui/icons-material/PersonPin';
import DiscountIcon from '@mui/icons-material/Discount';

interface SignUpContainerProps {
  params: {
    locale: string;
  };
}

const i18nNamespaces = ["default"];

const SignUpContainer: NextPage<SignUpContainerProps> = async ({
  params: { locale },
}) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <BoxWrapper>
      <div className="w-full flex justify-center items-center">
        <div className="w-full flex flex-col justify-start items-center">
          <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}
          >
            <Header translate={t} />
            <div className="lg:w-3/4 justify-left items-left">
              <h1 style={{ margin: 10, paddingLeft: 10 }}>Home / Login</h1>
              <h1
                style={{
                  margin: 10,
                  paddingLeft: 10,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Customer Login
              </h1>
            </div>
            <SignUp translate={t} />
            <div className="w-full bg-[#F5F7FF]">
              <div className="w-3/4 flex justify-between items-center  mx-auto">
                <div className="m-20 text-center">
                  <div className="flex justify-center items-center">
                    <div className="bg-[rgb(var(--primary-rgb))] rounded-full p-2">
                      <HeadsetMicIcon style={{ color: "#ffffff" }} />
                    </div>
                  </div>
                  <h1 className="text-[20px] font-bold mt-5">Product Support</h1>
                  <h1 className="text-[14px] mt-2">
                    Up to 3 years on-site warranty available for your peace of
                    mind.
                  </h1>
                </div>

                <div className="m-20 text-center">
                  <div className="flex justify-center items-center">
                    <div className="bg-[rgb(var(--primary-rgb))] rounded-full p-2">
                      <PersonPinIcon style={{ color: "#ffffff" }} />
                    </div>
                  </div>
                  <h1 className="text-[20px] font-bold mt-5">Personal Account</h1>
                  <h1 className="text-[14px] mt-2">
                    With big discounts, free delivery and a dedicated support specialist.
                  </h1>
                </div>
                <div className="m-20 text-center">
                  <div className="flex justify-center items-center">
                    <div className="bg-[rgb(var(--primary-rgb))] rounded-full p-2">
                      <DiscountIcon style={{ color: "#ffffff" }} />
                    </div>
                  </div>
                  <h1 className="text-[20px] font-bold mt-5">Amazing Savings</h1>
                  <h1 className="text-[14px] mt-2">
                    Up to 70% off new Products, you can be sure of the best price.
                  </h1>
                </div>
              </div>
            </div>
            <Footer translate={t} />
          </TranslationsProvider>
        </div>
      </div>
    </BoxWrapper>
  );
};

export default SignUpContainer;
