import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h2>404 - Сторінку не знайдено</h2>
    <p>Схоже, ви перейшли за неправильним посиланням.</p>
    <Link to="/">Повернутися на головну</Link>
  </div>
);

export default NotFound;