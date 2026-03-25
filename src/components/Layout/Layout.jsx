import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Layout.css';

const Layout = ({ cartCount }) => {
  return (
    <div className="app-container">
      <header className="main-header">
        <div className="logo">TechStore</div>
        <nav className="main-nav">
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Головна</NavLink>
          <NavLink to="/catalog" className={({ isActive }) => isActive ? "active" : ""}>Каталог</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>Про нас</NavLink>
        </nav>
        <div className="cart-widget">
          🛒 Кошик ({cartCount})
        </div>
      </header>
      
      {/* Outlet вказує, куди рендерити дочірні маршрути (сторінки) */}
      <main className="main-content">
        <Outlet />
      </main>
      
      <footer className="main-footer">
        <p>© 2026 TechStore Catalog. Всі права захищені.</p>
      </footer>
    </div>
  );
};

export default Layout;