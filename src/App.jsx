import React, { useState } from "react";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import AddProductForm from "./components/AddProductForm/AddProductForm";
import "./styles/global.css";

const PRODUCTS = [
  { id: 1, name: "Ноутбук TechPro 15", price: 1200, category: "Ноутбуки" },
  { id: 2, name: "Смартфон Galaxy S23", price: 850, category: "Смартфони" },
  { id: 3, name: "Бездротові навушники", price: 150, category: "Аксесуари" },
  { id: 4, name: "Механічна клавіатура", price: 120, category: "Аксесуари" },
  { id: 5, name: 'Монітор UltraView 27"', price: 350, category: "Монітори" },
];

function App() {
  const [products, setProducts] = useState(PRODUCTS);
  const [currentCategory, setCurrentCategory] = useState('Всі');
  const [cartItems, setCartItems] = useState([]);

  const filteredProducts = currentCategory === 'Всі' 
    ? products 
    : products.filter(p => p.category === currentCategory);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item,
        );
      }

      return [...prev, { ...product, count: 1 }];
    });
  };

  const updateCount = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newCount = item.count + delta;
          return { ...item, count: newCount > 0 ? newCount : 1 };
        }
        return item;
      }),
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleToggleFavorite = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, isFavorite: !product.isFavorite }
          : product,
      ),
    );
  };

  const handleAddProduct = (newProduct) => {
    setProducts(prev => [...prev, newProduct]);
  };

  return (
    <>
      <div className="app-container">
        <Header
          cartCount={cartItems.reduce((sum, item) => sum + item.count, 0)}
        />
        <div
          className="main-layout"
          style={{ display: "flex", gap: "20px", padding: "20px" }}
        >

        <Sidebar 
          activeCategory={currentCategory} 
          onSelectCategory={setCurrentCategory} 
        />

          <div className="content-area" style={{ flex: 1, display: "flex", flexDirection: "column", gap: "20px" }}>
            <AddProductForm onAddProduct={handleAddProduct} />
            
            <MainContent
              allProducts={filteredProducts}
              onAddToCart={addToCart}
              onToggleFavorite={handleToggleFavorite}
            />
          </div>
          
          <Cart
            items={cartItems}
            onUpdate={updateCount}
            onRemove={removeFromCart}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
