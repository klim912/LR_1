import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './Catalog.css';

const Catalog = ({ products }) => {
  return (
    <main className="catalog-main">
      <h2>Каталог товарів</h2>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default Catalog;