import React, { createContext, useContext, useState, useEffect } from 'react';

const SettingsContext = createContext(null);

const TRANSLATIONS = {
  uk: {
    home: 'Головна',
    catalog: 'Каталог',
    about: 'Про нас',
    cart: 'Кошик',
    categories: 'Категорії',
    all: 'Всі',
    buy: 'Купити',
    addToFav: '🤍 В обране',
    inFav: '❤️ В обраному',
    details: 'Детальніше',
    yourCart: 'Ваш кошик',
    emptyCart: 'Кошик порожній',
    total: 'Разом',
    toggleTheme: 'Тема',
    language: 'Мова',
  },
  en: {
    home: 'Home',
    catalog: 'Catalog',
    about: 'About',
    cart: 'Cart',
    categories: 'Categories',
    all: 'All',
    buy: 'Buy',
    addToFav: '🤍 Favorite',
    inFav: '❤️ In Favorites',
    details: 'Details',
    yourCart: 'Your Cart',
    emptyCart: 'Cart is empty',
    total: 'Total',
    toggleTheme: 'Theme',
    language: 'Language',
  },
};

export const SettingsProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('techstore-lang') || 'uk';
  });

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'uk' ? 'en' : 'uk'));
  };

  useEffect(() => {
    localStorage.setItem('techstore-lang', language);
  }, [language]);

  const t = (key) => TRANSLATIONS[language][key] || key;

  return (
    <SettingsContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};

export default SettingsContext;