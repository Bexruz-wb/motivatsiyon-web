import React from 'react';
import { useTranslation } from 'react-i18next';

const CardList = () => {
  const { t } = useTranslation();

  const cards = [
    { quote: t("quote1"), author: "Napoleon Hill" },
    { quote: t("quote2"), author: "Bexruz Diyorjonov" },
    { quote: t("quote3"), author: "Winston Churchill" },
  ];

  return (
    <section className="py-10 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">{t("todayMotivation")}</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((card, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl">
            <p className="text-lg italic mb-4">"{card.quote}"</p>
            <p className="text-right font-semibold">– {card.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardList;
