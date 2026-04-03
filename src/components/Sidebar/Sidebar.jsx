import React from 'react';
import './Sidebar.css';

const Sidebar = ({ activeCategory, onSelectCategory }) => {
  const categories = ['Всі', 'Ноутбуки', 'Смартфони', 'Аксесуари', 'Монітори'];

  return (
    <aside className="sidebar">
      <h3>Категорії</h3>
      <ul>
        {categories.map(cat => (
          <li 
            key={cat} 
            className={activeCategory === cat ? 'active' : ''} 
            onClick={() => onSelectCategory(cat)}
            style={{ 
              cursor: 'pointer', 
              fontWeight: activeCategory === cat ? 'bold' : 'normal',
              color: activeCategory === cat ? '#2563eb' : 'inherit'
            }}
          >
            {cat}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;