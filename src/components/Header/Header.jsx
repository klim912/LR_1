import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { useSettings } from "../../context/SettingsContext";
import './Header.css';

const Header = ({ cartCount }) => {
  const { theme, toggleTheme } = useTheme();
  const { t, toggleLanguage, language } = useSettings();

  return (
    <header className="header">
      <div className="logo">TechStore</div>

      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>{t('home')}</NavLink>
        <NavLink to="/catalog" className={({ isActive }) => isActive ? "active" : ""}>{t('catalog')}</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>{t('about')}</NavLink>
      </nav>

      <div className="header-controls">
        <button className="lang-btn" onClick={toggleLanguage} title={t('language')}>
          {language === 'uk' ? '🇺🇦 UA' : '🇬🇧 EN'}
        </button>

        <button className="theme-toggle" onClick={toggleTheme} title={t('toggleTheme')}>
          <span className="toggle-track">
            <span className="toggle-thumb"></span>
          </span>
          <span className="toggle-label">
            {theme === 'light' ? '☀️' : '🌙'}
          </span>
        </button>

        <div className="cart-info">
          🛒 {t('cart')}: <strong>{cartCount}</strong>
        </div>
      </div>
    </header>
  );
};

export default Header;