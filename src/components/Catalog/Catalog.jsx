import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './Catalog.css';

const Catalog = ({ items }) => {
  return (
    <div className="catalog-grid">
      {items.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default Catalog;