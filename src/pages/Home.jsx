import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    { icon: "💻", title: "Потужні ноутбуки", desc: "Для роботи, навчання та геймінгу" },
    { icon: "📱", title: "Сучасні смартфони", desc: "Завжди на зв'язку з найкращими камерами" },
    { icon: "🎧", title: "Якісні аксесуари", desc: "Звук та периферія преміум класу" },
    { icon: "🖥️", title: "Професійні монітори", desc: "Чіткість зображення без компромісів" }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Майбутнє технологій вже тут 🚀</h1>
          <p>Найкращий вибір гаджетів для професіоналів та ентузіастів. Обирай якість, перевірену часом.</p>
          <div className="hero-btns">
            <Link to="/catalog" className="cta-button primary">Перейти до каталогу</Link>
            <Link to="/about" className="cta-button secondary">Про проєкт</Link>
          </div>
        </div>
        <div className="hero-decoration">
          <div className="blob"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="home-features">
        <h2 className="section-title">Що ми пропонуємо?</h2>
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card">
              <span className="feature-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Bar */}
      <section className="stats-bar">
        <div className="stat-item"><strong>1000+</strong><span>Товарів</span></div>
        <div className="stat-item"><strong>24/7</strong><span>Підтримка</span></div>
        <div className="stat-item"><strong>100%</strong><span>Гарантія</span></div>
      </section>
    </div>
  );
};

export default Home;