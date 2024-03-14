"use client";

import React from "react";
import BoxWrapper from "@/components/common/box-wrapper";
import { NextPage } from "next";
import Header from "@/components/common/_header";
import Footer from "@/components/common/_footer";
import Cart from "./page";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/translation/translations-provider";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import PersonPinIcon from '@mui/icons-material/PersonPin';
import DiscountIcon from '@mui/icons-material/Discount';
import PromotionPolicy from "@/components/common/promotion-policy";

interface CartContainerProps {
  params: {
    locale: string;
  };
}

const i18nNamespaces = ["default"];

const CartContainer: NextPage<CartContainerProps> = async ({
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
              <h1>Home / Cart</h1>
              <h1
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                }}
              >
                Shopping Cart
              </h1>
            </div>
            <Cart translate={t} />
            <PromotionPolicy/>
            <Footer translate={t} />
          </TranslationsProvider>
        </div>
      </div>
    </BoxWrapper>
  );
};

export default CartContainer;
