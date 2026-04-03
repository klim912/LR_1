import React, { useState } from 'react';
import { Button, Input } from '../ui';
import styles from './AddProductForm.module.css';

const AddProductForm = ({ onAddProduct }) => {
  const [name, setName]         = useState('');
  const [price, setPrice]       = useState('');
  const [category, setCategory] = useState('Ноутбуки');
  const [nameError, setNameError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setNameError('Будь ласка, введіть назву товару');
      return;
    }
    setNameError('');

    onAddProduct({
      id: Date.now(),
      name: name.trim(),
      price: Number(price) || 0,
      category,
      isFavorite: false,
    });

    setName('');
    setPrice('');
    setCategory('Ноутбуки');
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Додати новий товар</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          label="Назва товару"
          placeholder="Введіть назву..."
          value={name}
          onChange={(e) => { setName(e.target.value); setNameError(''); }}
          error={nameError}
        />

        <Input
          label="Ціна ($)"
          type="number"
          placeholder="0"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <div className={styles.selectWrapper}>
          <label className={styles.selectLabel}>Категорія</label>
          <select
            className={styles.select}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Ноутбуки">Ноутбуки</option>
            <option value="Смартфони">Смартфони</option>
            <option value="Аксесуари">Аксесуари</option>
            <option value="Монітори">Монітори</option>
          </select>
        </div>

        <Button type="submit" variant="primary" size="md">
          ＋ Додати в каталог
        </Button>
      </form>
    </div>
  );
};

export default AddProductForm;
