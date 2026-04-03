import React from 'react';
import Catalog from '../Catalog/Catalog';
import './MainContent.css';

const MainContent = ({ allProducts, onAddToCart, onToggleFavorite }) => {
  return (
    <main className="main-content">
      <section className="catalog-section">
        <h2>Наш асортимент</h2>
        <Catalog 
        items={allProducts}
        onAddToCart={onAddToCart}
        onToggleFavorite={onToggleFavorite}
        />
      </section>
    </main>
  );
};

export default MainContent;