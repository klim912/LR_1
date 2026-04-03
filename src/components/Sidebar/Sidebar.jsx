import React from 'react';
import { useSettings } from '../../context/SettingsContext';
import './Sidebar.css';

const Sidebar = ({ activeCategory, onSelectCategory }) => {
  const { t } = useSettings();
  const categories = [t('all'), 'Ноутбуки', 'Смартфони', 'Аксесуари', 'Монітори'];

  const handleSelect = (cat) => {
    onSelectCategory(cat === t('all') ? 'Всі' : cat);
  };

  const isActive = (cat) =>
    cat === t('all') ? activeCategory === 'Всі' : activeCategory === cat;

  return (
    <aside className="sidebar">
      <h3>{t('categories')}</h3>
      <ul>
        {categories.map(cat => (
          <li
            key={cat}
            className={isActive(cat) ? 'active' : ''}
            onClick={() => handleSelect(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;