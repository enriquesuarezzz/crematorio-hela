// src/LanguageSwitcher.tsx
import React from "react";
import { useTranslation } from "react-i18next";
import Spanish from "./svg/spanish";
import English from "./svg/english";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex gap-4 ">
      <button
        className="hover hover:scale-110 duration-300"
        onClick={() => changeLanguage("en")}
      >
        <English className="rounded-2xl" />
      </button>
      <button
        className="hover hover:scale-110 duration-300 "
        onClick={() => changeLanguage("es")}
      >
        <Spanish className="rounded-2xl" />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
