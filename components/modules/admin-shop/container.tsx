"use client";

import React from "react";
import BoxWrapper from "@/components/common/box-wrapper";
import { NextPage } from "next";
import AdminShop from "./page";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/translation/translations-provider";

interface AdminShopContainerProps {
  params: {
    locale: string;
  };
}

const i18nNamespaces = ["default"];

const AdminShopContainer: NextPage<AdminShopContainerProps> = async ({
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
            <AdminShop />
          </TranslationsProvider>
        </div>
      </div>
    </BoxWrapper>
  );
};

export default AdminShopContainer;
