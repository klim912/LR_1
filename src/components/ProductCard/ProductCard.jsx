import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <article className="product-card">
      <div className="product-image-placeholder">
        <span>Image</span>
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price}</p>
        <button className="buy-button">Купити</button>
      </div>
    </article>
  );
};

export default ProductCard;