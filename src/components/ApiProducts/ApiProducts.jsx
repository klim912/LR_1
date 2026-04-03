import React, { useState, useEffect } from 'react';

const ApiProducts = ({ onAddToCart, onToggleFavorite }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products?limit=4');
        
        if (!response.ok) {
          throw new Error(`Помилка HTTP: ${response.status}`);
        }
        
        const data = await response.json();

        const formattedData = data.products.map(product => ({
          ...product,
          id: `api-${product.id}`,
          name: product.title,
          image: product.thumbnail,
          isFavorite: false
        }));
        
        setProducts(formattedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) {
    return <div className="api-status loading" style={{textAlign: 'center', padding: '20px'}}>Завантаження рекомендацій з API...</div>;
  }

  if (error) {
    return <div className="api-status error" style={{textAlign: 'center', color: 'red', padding: '20px'}}>Сталася помилка: {error}</div>;
  }

  return (
    <div className="api-products-section" style={{ marginTop: '40px' }}>
      <h2 style={{ marginBottom: '20px' }}>Рекомендації для вас</h2>

      <div className="products-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.map((product) => (

          <article key={product.id} className="product-card" style={{ flex: '1 1 calc(25% - 20px)', minWidth: '220px' }}>
            <div className="image-placeholder">
              <img 
                src={product.thumbnail} 
                alt={product.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            
            <div className="card-body">
              <span className="category">{product.category}</span>
              <h3>{product.title}</h3>
              <p className="price">${product.price}</p>
              
              <div className="card-actions">
                <button 
                  className="buy-btn" 
                  onClick={() => onAddToCart && onAddToCart(product)}
                >
                  Купити
                </button>
                <button 
                  className={`fav-btn ${product.isFavorite ? 'active' : ''}`}
                  onClick={() => onToggleFavorite && onToggleFavorite(product.id)}
                >
                  {product.isFavorite ? '❤️ В обраному' : '🤍 В обране'}
                </button>
              </div>
            </div>
          </article>
          
        ))}
      </div>
    </div>
  );
};

export default ApiProducts;