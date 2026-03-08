import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Catalog from '../Catalog/Catalog';
import './MainContent.css';

const MainContent = ({ allProducts }) => {
  return (
    <main className="main-content">
      <Sidebar />
      <section className="catalog-section">
        <h2>Наш асортимент</h2>
        <Catalog items={allProducts} />
      </section>
    </main>
  );
};

export default MainContent;