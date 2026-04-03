import React from "react";
import "./Cart.css";

const Cart = ({ items, onUpdate, onRemove }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.count, 0);

  return (
    <aside className="cart-container">
      <h3>Ваш кошик</h3>
      {items.length === 0 ? (
        <p>Кошик порожній</p>
      ) : (
        <>
          <ul className="cart-list">
            {items.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="item-info">
                  <span>{item.name}</span>
                  <small>
                    ${item.price} x {item.count}
                  </small>
                </div>

                <div className="item-controls">
                  <button onClick={() => onUpdate(item.id, -1)}>-</button>
                  <span>{item.count}</span>
                  <button onClick={() => onUpdate(item.id, 1)}>+</button>
                  <button
                    className="remove-btn"
                    onClick={() => onRemove(item.id)}
                  >
                    ×
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-total">
            <strong>Разом: ${total}</strong>
          </div>
        </>
      )}
    </aside>
  );
};

export default Cart;
