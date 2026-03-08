import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <article className="product-card">
      <div className="image-placeholder">Фото</div>
      <div className="card-body">
        <span className="category">{product.category}</span>
        <h3>{product.name}</h3>
        <p className="price">${product.price}</p>
        <button>Купити</button>
      </div>
    </article>
  );
};

export default ProductCard;