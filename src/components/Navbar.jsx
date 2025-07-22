import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Navbar({ darkMode, setDarkMode }) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className={`flex justify-between items-center p-4 shadow ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <h1 className="text-xl font-bold">Motivatsiya</h1>
      <ul className="flex gap-4 items-center">
        <li><Link to="/">{t('nav.home')}</Link></li>
        <li><Link to="/about">{t('nav.about')}</Link></li>
        <li><Link to="/news">{t('nav.news')}</Link></li>
        <li>
          <select
            value={i18n.language}
            onChange={(e) => changeLanguage(e.target.value)}
            className={`${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'} border rounded px-2 py-1`}
          >
            <option value="uz">O‘zbekcha</option>
            <option value="ru">Русский</option>
            <option value="en">English</option>
          </select>
        </li>
        <li>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="border px-2 py-1 rounded"
          >
            {darkMode ? t('nav.lightMode') : t('nav.darkMode')}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
