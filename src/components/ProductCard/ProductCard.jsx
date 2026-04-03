import React from 'react';
import { Link } from 'react-router-dom';
import { useSettings } from '../../context/SettingsContext';
import { Card, Button, Badge } from '../ui';
import styles from './ProductCard.module.css';

const ProductCard = ({ product, onAddToCart, onToggleFavorite }) => {
  const { t } = useSettings();

  return (
    <Card>
      <Card.Image>
        <span className={styles.photoPlaceholder}>📦</span>
      </Card.Image>

      <Card.Body>
        <div className={styles.topRow}>
          <span className={styles.category}>{product.category}</span>
          {product.isNew  && <Badge variant="new">NEW</Badge>}
          {product.isSale && <Badge variant="sale">SALE</Badge>}
        </div>

        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.price}>${product.price}</p>
      </Card.Body>

      <Card.Footer>
        <Button
          variant="primary"
          size="sm"
          onClick={() => onAddToCart(product)}
        >
          🛒 {t('buy')}
        </Button>

        <Button
          variant={product.isFavorite ? 'danger' : 'secondary'}
          size="sm"
          onClick={() => onToggleFavorite(product.id)}
        >
          {product.isFavorite ? t('inFav') : t('addToFav')}
        </Button>

        <Link to={`/product/${product.id}`} className={styles.detailsLink}>
          {t('details')} →
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;
