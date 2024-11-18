import React from 'react';

import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setLanguage } from '@/redux/modules/languageSlice';
import i18n from '@/config/i18nConfig';
const Language: React.FC = () => {
  const { t } = useTranslation();
  const languages = [
    { name: t('language.en'), value: 'en' },
    { name: t('language.zh'), value: 'zh' },
  ];
  const dispatch = useDispatch();

  const handleLanguageChange = (lang: string) => {
    dispatch(setLanguage(lang));
    i18n.changeLanguage(lang);
    closeDropdown();
  };
  const closeDropdown = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  return (
    <div className="dropdown dropdown-end mr-3 ">
      <label tabIndex={0} className="flex space-x-1 text-xl cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="30"
          height=" 30"
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.93 6h-3.02c-.25-1.39-.74-2.69-1.4-3.82 1.96.45 3.64 1.62 4.42 3.26zM12 4c.88 1.23 1.5 2.65 1.83 4H10.17c.33-1.35.95-2.77 1.83-4zM8.5 8H5.48c.78-1.64 2.46-2.81 4.42-3.26-.66 1.13-1.15 2.43-1.4 3.82zM4.06 10h3.64c-.1.66-.16 1.32-.16 2s.06 1.34.16 2H4.06c-.27-.63-.06-1.34-.06-2s-.2-1.37.06-2zm1.42 6h3.02c.25 1.39.74 2.69 1.4 3.82-1.96-.45-3.64-1.62-4.42-3.26zm5.52 3.99c-.88-1.23-1.5-2.65-1.83-4h3.66c-.33 1.35-.95 2.77-1.83 4zM15.5 16h3.02c-.78 1.64-2.46 2.81-4.42 3.26.66-1.13 1.15-2.43 1.4-3.82zm1.8-4c.1-.66.16-1.32.16-2s-.06-1.34-.16-2h3.64c.27.63.06 1.34.06 2s.2 1.37-.06 2z" />
        </svg>

        <span> {t('language.' + i18n.language)}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="30"
          height="30"
          fill="currentColor"
        >
          <path d="M7 10l5 5 5-5H7z" />
        </svg>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-36"
      >
        {languages.map((item) => (
          <li key={item.value}>
            <a
              onClick={() => handleLanguageChange(item.value)}
              className={`text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Language;
