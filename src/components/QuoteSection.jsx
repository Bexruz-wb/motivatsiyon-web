import React from 'react';
import { useTranslation } from 'react-i18next';

function QuoteSection() {
  const { t } = useTranslation();

  const quotes = [
    t('quote1'),
    t('quote2'),
    t('quote3'),
    t('quote4'),
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  return (
    <section className="bg-gray-100 py-10 text-center">
      <h2 className="text-2xl font-bold mb-4">{t('todayMotivation')}</h2>
      <p className="text-lg italic">"{quote}"</p>
    </section>
  );
}

export default QuoteSection;
