import React from "react";
import { useTranslation } from "react-i18next";

export default function MotivationalCards({ searchTerm, darkMode }) {
  const { t } = useTranslation();

  const cards = [
    { quote: t("quote1"), author: "Napoleon Hill" },
    { quote: t("quote2"), author: "Bexruz Diyorjonov" },
    { quote: t("quote3"), author: "Winston Churchill" },
  ];

  return (
    <section
      id="cards"
      className="cards"
      style={{
        backgroundColor: darkMode ? "#1e1e1e" : "#fafafa",
        color: darkMode ? "#ddd" : "#222",
        padding: "1rem",
        borderRadius: "8px",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <h2>{t("todayMotivation")}</h2>
      <div>
        {cards.map((card, idx) => (
          <div key={idx}>
            <p>"{card.quote}"</p>
            <p>— {card.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
