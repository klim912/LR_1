import React from 'react';
import { Link } from 'react-router-dom';
import { useSettings } from '../../context/SettingsContext';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart, onToggleFavorite }) => {
  const { t } = useSettings();

  return (
    <article className="product-card">
      <div className="image-placeholder">Фото</div>
      <div className="card-body">
        <span className="category">{product.category}</span>
        <h3>{product.name}</h3>
        <p className="price">${product.price}</p>

        <div className="card-actions">
          <button className="buy-btn" onClick={() => onAddToCart(product)}>
            {t('buy')}
          </button>
          <button
            className={`fav-btn ${product.isFavorite ? 'active' : ''}`}
            onClick={() => onToggleFavorite(product.id)}
          >
            {product.isFavorite ? t('inFav') : t('addToFav')}
          </button>
        </div>

        <Link to={`/product/${product.id}`} className="details-link">
          {t('details')}
        </Link>
      </div>
    </article>
  );
};

export default ProductCard;