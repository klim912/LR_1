import React, { useState } from 'react';
import './AddProductForm.css';

const AddProductForm = ({ onAddProduct }) => {
  // Керовані стани для полів форми
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Ноутбуки');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert('Будь ласка, введіть коректну назву товару!');
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: name.trim(),
      price: Number(price) || 0,
      category: category,
      isFavorite: false
    };

    onAddProduct(newProduct);

    setName('');
    setPrice('');
    setCategory('Ноутбуки');
  };

  return (
    <div className="form-container">
      <h3>Додати новий товар</h3>
      <form onSubmit={handleSubmit} className="add-product-form">
        <input
          type="text"
          placeholder="Назва товару..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
        <input
          type="number"
          placeholder="Ціна ($)..."
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Ноутбуки">Ноутбуки</option>
          <option value="Смартфони">Смартфони</option>
          <option value="Аксесуари">Аксесуари</option>
          <option value="Монітори">Монітори</option>
        </select>

        <button type="submit" className="submit-btn">Додати в каталог</button>
      </form>
    </div>
  );
};

export default AddProductForm;