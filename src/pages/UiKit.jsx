import React, { useState } from 'react';
import { Button, Card, Input, Badge } from '../components/ui';
import styles from './UiKit.module.css';

/* ---- Допоміжний компонент секції ---- */
const Section = ({ title, children }) => (
  <section className={styles.section}>
    <h2 className={styles.sectionTitle}>{title}</h2>
    <div className={styles.sectionBody}>{children}</div>
  </section>
);

/* ---- Рядок демонстрації ---- */
const Row = ({ label, children }) => (
  <div className={styles.row}>
    <span className={styles.rowLabel}>{label}</span>
    <div className={styles.rowItems}>{children}</div>
  </div>
);

const UiKit = () => {
  const [inputValue, setInputValue]   = useState('');
  const [inputError, setInputError]   = useState('');

  const triggerError = () =>
    setInputError(inputValue ? '' : 'Поле не може бути порожнім');

  return (
    <div className={styles.page}>
      <header className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>🎨 UI Kit — TechStore</h1>
        <p className={styles.pageSubtitle}>
          Документація та демонстрація всіх UI-компонентів застосунку
        </p>
      </header>

      {/* ===== BUTTON ===== */}
      <Section title="Button">
        <Row label="Варіанти">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="ghost">Ghost</Button>
        </Row>

        <Row label="Розміри (primary)">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </Row>

        <Row label="Disabled">
          <Button variant="primary"   disabled>Primary</Button>
          <Button variant="secondary" disabled>Secondary</Button>
          <Button variant="danger"    disabled>Danger</Button>
        </Row>

        <Row label="З іконкою">
          <Button variant="primary">🛒 В кошик</Button>
          <Button variant="danger">🗑 Видалити</Button>
          <Button variant="ghost">🔍 Деталі →</Button>
        </Row>

        <div className={styles.propTable}>
          <h3 className={styles.propTitle}>Props</h3>
          <table className={styles.table}>
            <thead>
              <tr><th>Prop</th><th>Тип</th><th>За замовчуванням</th><th>Опис</th></tr>
            </thead>
            <tbody>
              <tr><td>variant</td><td>string</td><td>'primary'</td><td>primary | secondary | danger | ghost</td></tr>
              <tr><td>size</td><td>string</td><td>'md'</td><td>sm | md | lg</td></tr>
              <tr><td>disabled</td><td>boolean</td><td>false</td><td>Блокує взаємодію</td></tr>
              <tr><td>fullWidth</td><td>boolean</td><td>false</td><td>Розтягує на ширину контейнера</td></tr>
              <tr><td>onClick</td><td>function</td><td>—</td><td>Обробник кліку</td></tr>
              <tr><td>...rest</td><td>any</td><td>—</td><td>Передається на &lt;button&gt;</td></tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* ===== INPUT ===== */}
      <Section title="Input">
        <Row label="Звичайний">
          <Input label="Назва товару" placeholder="Введіть назву..." />
        </Row>

        <Row label="З помилкою">
          <Input
            label="Email"
            placeholder="user@example.com"
            value={inputValue}
            onChange={(e) => { setInputValue(e.target.value); setInputError(''); }}
            error={inputError}
          />
          <Button variant="secondary" size="sm" onClick={triggerError}>
            Перевірити
          </Button>
        </Row>

        <Row label="Disabled">
          <Input label="Заблоковане поле" placeholder="Недоступно" disabled />
        </Row>

        <Row label="Число">
          <Input label="Ціна ($)" type="number" placeholder="0" />
        </Row>

        <div className={styles.propTable}>
          <h3 className={styles.propTitle}>Props</h3>
          <table className={styles.table}>
            <thead>
              <tr><th>Prop</th><th>Тип</th><th>За замовчуванням</th><th>Опис</th></tr>
            </thead>
            <tbody>
              <tr><td>label</td><td>string</td><td>—</td><td>Підпис над полем</td></tr>
              <tr><td>placeholder</td><td>string</td><td>—</td><td>Підказка у полі</td></tr>
              <tr><td>disabled</td><td>boolean</td><td>false</td><td>Блокує введення</td></tr>
              <tr><td>error</td><td>string</td><td>—</td><td>Текст помилки (червона рамка)</td></tr>
              <tr><td>type</td><td>string</td><td>'text'</td><td>Тип input</td></tr>
              <tr><td>...rest</td><td>any</td><td>—</td><td>Передається на &lt;input&gt;</td></tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* ===== BADGE ===== */}
      <Section title="Badge">
        <Row label="Варіанти">
          <Badge variant="new">NEW</Badge>
          <Badge variant="sale">SALE −20%</Badge>
          <Badge variant="hit">ХІТ</Badge>
          <Badge variant="danger">Розпродано</Badge>
        </Row>

        <div className={styles.propTable}>
          <h3 className={styles.propTitle}>Props</h3>
          <table className={styles.table}>
            <thead>
              <tr><th>Prop</th><th>Тип</th><th>За замовчуванням</th><th>Опис</th></tr>
            </thead>
            <tbody>
              <tr><td>variant</td><td>string</td><td>'new'</td><td>new | sale | hit | danger</td></tr>
              <tr><td>children</td><td>ReactNode</td><td>—</td><td>Текст мітки</td></tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* ===== CARD ===== */}
      <Section title="Card">
        <Row label="Повна картка">
          <Card className={styles.demoCard}>
            <Card.Image>
              <span style={{ fontSize: '3rem' }}>📦</span>
            </Card.Image>
            <Card.Body>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', textTransform: 'uppercase' }}>
                  Ноутбуки
                </span>
                <Badge variant="new">NEW</Badge>
              </div>
              <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Ноутбук TechPro 15</p>
              <p style={{ color: 'var(--color-primary)', fontWeight: 'bold', fontSize: '1.25rem' }}>$1 200</p>
            </Card.Body>
            <Card.Footer>
              <Button variant="primary" size="sm">🛒 Купити</Button>
              <Button variant="secondary" size="sm">🤍 Обране</Button>
              <span style={{ marginLeft: 'auto', fontSize: '0.75rem', color: 'var(--color-primary)', cursor: 'pointer' }}>
                Детальніше →
              </span>
            </Card.Footer>
          </Card>

          <Card className={styles.demoCard}>
            <Card.Image>
              <span style={{ fontSize: '3rem' }}>📱</span>
            </Card.Image>
            <Card.Body>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', textTransform: 'uppercase' }}>
                  Смартфони
                </span>
                <Badge variant="sale">SALE</Badge>
              </div>
              <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Galaxy S23</p>
              <p style={{ color: 'var(--color-primary)', fontWeight: 'bold', fontSize: '1.25rem' }}>$850</p>
            </Card.Body>
            <Card.Footer>
              <Button variant="primary" size="sm">🛒 Купити</Button>
              <Button variant="danger" size="sm">❤️ В обраному</Button>
            </Card.Footer>
          </Card>
        </Row>

        <div className={styles.propTable}>
          <h3 className={styles.propTitle}>Підкомпоненти</h3>
          <table className={styles.table}>
            <thead>
              <tr><th>Компонент</th><th>Опис</th></tr>
            </thead>
            <tbody>
              <tr><td>Card</td><td>Кореневий контейнер</td></tr>
              <tr><td>Card.Image</td><td>Зона зображення (вгорі, 160px висота)</td></tr>
              <tr><td>Card.Header</td><td>Зона заголовка (без фону)</td></tr>
              <tr><td>Card.Body</td><td>Основний вміст, flex grow</td></tr>
              <tr><td>Card.Footer</td><td>Підвал з лінією, для кнопок</td></tr>
            </tbody>
          </table>
        </div>
      </Section>
    </div>
  );
};

export default UiKit;
