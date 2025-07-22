import React from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div style={{
      background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
      color: "#fff",
      padding: "100px 0",
      textAlign: "center",
    }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <h1 style={{ fontWeight: "bold" }}>{t("hero_title")}</h1>
        <p style={{ marginBottom: 40 }}>{t("hero_description")}</p>
        <button style={{
          backgroundColor: "#f50057",
          color: "#fff",
          padding: "10px 20px",
          border: "none",
          borderRadius: 4,
          cursor: "pointer"
        }}>
          {t("hero_button")}
        </button>
      </div>
    </div>
  );
};

export default Hero;
