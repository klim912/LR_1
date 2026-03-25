import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart, onToggleFavorite }) => {
  return (
    <article className="product-card">
      <div className="image-placeholder">Фото</div>
      <div className="card-body">
        <span className="category">{product.category}</span>
        <h3>{product.name}</h3>
        <p className="price">${product.price}</p>
        
        <div className="card-actions">
          <button className="buy-btn" onClick={() => onAddToCart(product)}>
            Купити
          </button>
          
          <button 
            className={`fav-btn ${product.isFavorite ? 'active' : ''}`}
            onClick={() => onToggleFavorite(product.id)}
          >
            {product.isFavorite ? '❤️ В обраному' : '🤍 В обране'}
          </button>
        </div>
        <Link to={`/product/${product.id}`} className="details-link" style={{ display: 'block', textAlign: 'center', marginTop: '10px' }}>
          Детальніше
        </Link>
      </div>
    </article>
  );
};

export default ProductCard;