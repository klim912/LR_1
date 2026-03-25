import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => String(p.id) === id);

  if (!product) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h2>Товар не знайдено! ❌</h2>
        <button onClick={() => navigate("/catalog")}>
          Повернутися до каталогу
        </button>
      </div>
    );
  }

  return (
    <div className="product-details-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Назад
      </button>
      <div className="details-card">
        <div className="details-image">
          <img
            src={product.image || "https://via.placeholder.com/400"}
            alt={product.name}
          />
        </div>
        <div className="details-info">
          <span className="details-category">{product.category}</span>
          <h2>{product.name}</h2>
          <p className="details-price">${product.price}</p>
          <p>
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
