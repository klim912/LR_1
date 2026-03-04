import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">TechStore</div>
      <nav className="header-nav">
        <ul>
          <li><a href="#all">Всі товари</a></li>
          <li><a href="#laptops">Ноутбуки</a></li>
          <li><a href="#phones">Смартфони</a></li>
          <li><a href="#accessories">Аксесуари</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;