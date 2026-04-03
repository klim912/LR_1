import React from 'react';
import { clsx } from '../../utils/clsx';
import styles from './Button.module.css';

/**
 * Button — базовий UI-компонент кнопки.
 *
 * @param {'primary'|'secondary'|'danger'|'ghost'} variant  — варіант стилю
 * @param {'sm'|'md'|'lg'}                         size     — розмір
 * @param {boolean}                                disabled — стан блокування
 * @param {boolean}                                fullWidth — розтягнути на ширину
 * @param {Function}                               onClick  — обробник кліку
 * @param {React.ReactNode}                        children — вміст
 */
const Button = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  onClick,
  children,
  ...rest
}) => {
  const className = clsx(
    styles.btn,
    styles[variant],
    styles[size],
    { [styles.disabled]: disabled },
    { [styles.fullWidth]: fullWidth }
  );

  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
