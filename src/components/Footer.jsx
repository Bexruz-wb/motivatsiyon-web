import React from "react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-200 text-center p-4">
      <p>{t("footer.text")}</p>
    </footer>
  );
}

export default Footer;
