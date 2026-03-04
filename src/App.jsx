import React from 'react';
import Header from './components/Header/Header';
import Catalog from './components/Catalog/Catalog';
import Footer from './components/Footer/Footer';
import './styles/global.css';

const productsData = [
  { id: 1, name: 'Ноутбук TechPro 15', price: 1200, category: 'Ноутбуки' },
  { id: 2, name: 'Смартфон Galaxy S23', price: 850, category: 'Смартфони' },
  { id: 3, name: 'Бездротові навушники', price: 150, category: 'Аксесуари' },
  { id: 4, name: 'Механічна клавіатура', price: 120, category: 'Аксесуари' },
  { id: 5, name: 'Монітор UltraView 27"', price: 350, category: 'Монітори' }
];

function App() {
  return (
    <div className="app-container">
      <Header />
      <Catalog products={productsData} />
      <Footer />
    </div>
  );
}

export default App;