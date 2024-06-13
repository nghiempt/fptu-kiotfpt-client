import React from "react";
import BoxWrapper from "@/components/common/box-wrapper";
import { NextPage } from "next";
import TranslationsProvider from "@/components/translation/translations-provider";
import LanguageChanger from "@/components/translation/language-changer";
import initTranslations from "@/app/i18n";

interface SamplePageProps {
  params: {
    locale: string;
  };
}

const i18nNamespaces = ["default"];

const SamplePage: NextPage<SamplePageProps> = async ({
  params: { locale },
}) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <BoxWrapper>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="flex flex-col">
          <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}
          >
            <h1 className="text-[22px]">{t("example")}</h1>
          </TranslationsProvider>
          <div className="my-4">----------------------</div>
          <LanguageChanger />
        </div>
      </div>
    </BoxWrapper>
  );
};

export default SamplePage;
