import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold">{t('about_title')}</h1>
      <p className="mt-4">{t('about_description')}</p>
      <p className="mt-2">{t('about_mission')}</p>
    </section>
  );
};

export default About;
