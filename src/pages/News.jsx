import React from 'react';
import { useTranslation } from 'react-i18next';

const News = () => {
  const { t } = useTranslation();

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold">{t('news_title')}</h1>
      <p className="mt-4">{t('news_subtitle')}</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
        {t('news_readMore')}
      </button>
    </section>
  );
};

export default News;
