import React from 'react';
import styles from './Card.module.css';

/**
 * Card — контейнер-картка з підзонами.
 *
 * Використовуй підкомпоненти:
 *   <Card.Image>   — зона зображення (вгорі)
 *   <Card.Header>  — зона заголовка
 *   <Card.Body>    — основний вміст (займає весь простір)
 *   <Card.Footer>  — зона підвалу (відокремлена лінією)
 */
const Card = ({ children, className = '', ...rest }) => (
  <article className={`${styles.card} ${className}`} {...rest}>
    {children}
  </article>
);

Card.Image = ({ children, src, alt = '' }) => (
  <div className={styles.image}>
    {src ? <img src={src} alt={alt} /> : children}
  </div>
);

Card.Header = ({ children }) => (
  <div className={styles.header}>{children}</div>
);

Card.Body = ({ children }) => (
  <div className={styles.body}>{children}</div>
);

Card.Footer = ({ children }) => (
  <div className={styles.footer}>{children}</div>
);

export default Card;
