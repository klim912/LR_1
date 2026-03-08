import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./Catalog.css";

const Catalog = ({ items, onAddToCart, onToggleFavorite }) => {
  
if (items.length === 0) {
    return (
      <div className="no-products">
        <p>Товарів у цій категорії поки що немає 📦</p>
      </div>
    );
  }

  return (
    <div className="catalog-grid">
      {items.map((item) => (
        <ProductCard
          key={item.id}
          product={item}
          onAddToCart={onAddToCart}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};

export default Catalog;
