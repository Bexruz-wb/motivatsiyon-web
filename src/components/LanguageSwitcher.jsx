// src/components/LanguageSwitcher.jsx
import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <select
      value={i18n.language}
      onChange={(e) => changeLanguage(e.target.value)}
      className="px-3 py-2 border rounded"
    >
      <option value="uz">O‘zbekcha</option>
      <option value="ru">Русский</option>
      <option value="en">English</option>
    </select>
  );
};

export default LanguageSwitcher;
