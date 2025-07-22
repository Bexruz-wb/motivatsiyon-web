import React from 'react';
import { useTranslation } from 'react-i18next';

const SuccessStories = () => {
  const { t } = useTranslation();

  const stories = t('successStories.stories', { returnObjects: true });

  if (!Array.isArray(stories)) {
    return <p>{t('successStories_intro') || 'No stories available.'}</p>;
  }

  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">
          {t('successStories.title')}
        </h2>
        <p className="text-center mb-8 text-gray-600 dark:text-gray-300">
          {t('successStories_intro')}
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {stories.map(({ name, story }, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md"
            >
              <h3 className="font-semibold text-xl mb-2">{name}</h3>
              <p className="text-gray-700 dark:text-gray-200">{story}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
