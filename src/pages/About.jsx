import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-container">
      {/* Секція заголовку */}
      <section className="about-hero">
        <h1>Про TechStore Catalog</h1>
        <p>
          Ми — провідна платформа для пошуку та підбору сучасної техніки. 
          Наш проект створений для того, щоб зробити процес вибору гаджетів простим та приємним.
        </p>
      </section>

      {/* Секція переваг */}
      <div className="values-grid">
        <div className="value-card">
          <span className="value-icon">🚀</span>
          <h3>Швидкість</h3>
          <p>Миттєвий доступ до тисяч товарів та синхронізація вашого кошика в реальному часі.</p>
        </div>

        <div className="value-card">
          <span className="value-icon">💎</span>
          <h3>Якість</h3>
          <p>Тільки перевірені бренди та актуальні пропозиції з нашого власного та зовнішніх API.</p>
        </div>

        <div className="value-card">
          <span className="value-icon">🛡️</span>
          <h3>Надійність</h3>
          <p>Ваші дані зберігаються локально (LocalStorage), тому обране завжди під рукою.</p>
        </div>
      </div>

      {/* Заклик до дії */}
      <section className="about-cta">
        <h2>Готові оновити свою техніку?</h2>
        <p>Зазирніть до нашого каталогу та знайдіть свій ідеальний девайс вже сьогодні.</p>
        <Link to="/catalog" className="cta-button" style={{display: 'inline-block', textDecoration: 'none'}}>
          Відкрити каталог
        </Link>
      </section>
    </div>
  );
};

export default About;