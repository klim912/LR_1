import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = ({ cartCount }) => {
  return (
    <header className="header" style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px", background: "#f8f9fa" }}>
      <div className="logo">TechStore</div>
      <nav style={{ display: "flex", gap: "20px" }}>
        {/* Використовуємо NavLink для переходу без перезавантаження */}
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Головна</NavLink>
        <NavLink to="/catalog" className={({ isActive }) => isActive ? "active" : ""}>Каталог</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>Про нас</NavLink>
      </nav>
      <div className="cart-info">
        🛒 Кошик: <strong>{cartCount}</strong>
      </div>
    </header>
  );
};

export default Header;