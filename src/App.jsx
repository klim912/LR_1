import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import AddProductForm from "./components/AddProductForm/AddProductForm";
import ApiProducts from "./components/ApiProducts/ApiProducts";
import { ThemeProvider } from "./context/ThemeContext";
import { SettingsProvider } from "./context/SettingsContext";
import "./styles/global.css";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";

const PRODUCTS = [
  { id: 1, name: "Ноутбук TechPro 15", price: 1200, category: "Ноутбуки" },
  { id: 2, name: "Смартфон Galaxy S23", price: 850, category: "Смартфони" },
  { id: 3, name: "Бездротові навушники", price: 150, category: "Аксесуари" },
  { id: 4, name: "Механічна клавіатура", price: 120, category: "Аксесуари" },
  { id: 5, name: 'Монітор UltraView 27"', price: 350, category: "Монітори" },
];

function App() {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('techstore-products');
    return saved ? JSON.parse(saved) : PRODUCTS;
  });

  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('techstore-cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [currentCategory, setCurrentCategory] = useState('Всі');

  useEffect(() => {
    localStorage.setItem('techstore-products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('techstore-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const filteredProducts = currentCategory === 'Всі'
    ? products
    : products.filter(p => p.category === currentCategory);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
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
      })
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
          : product
      )
    );
  };

  const handleAddProduct = (newProduct) => {
    setProducts(prev => [...prev, newProduct]);
  };

  const CatalogContent = (
    <div className="main-layout">
      <Sidebar
        activeCategory={currentCategory}
        onSelectCategory={setCurrentCategory}
      />
      <div className="content-area">
        <AddProductForm onAddProduct={handleAddProduct} />
        <MainContent
          allProducts={filteredProducts}
          onAddToCart={addToCart}
          onToggleFavorite={handleToggleFavorite}
        />
        <ApiProducts
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
  );

  return (
    <ThemeProvider>
      <SettingsProvider>
        <div className="app-container">
          <Header cartCount={cartItems.reduce((sum, item) => sum + item.count, 0)} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={CatalogContent} />
            <Route path="/about" element={<About />} />
            <Route path="/product/:id" element={<ProductDetails products={products} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </SettingsProvider>
    </ThemeProvider>
  );
}

export default App;