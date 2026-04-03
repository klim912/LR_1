import React from 'react';
import { clsx } from '../../utils/clsx';
import styles from './Input.module.css';

/**
 * Input — UI-компонент текстового поля.
 *
 * @param {string}   label       — підпис над полем
 * @param {string}   placeholder — плейсхолдер
 * @param {boolean}  disabled    — стан блокування
 * @param {string}   error       — текст помилки (якщо є — червона рамка)
 * @param {string}   type        — тип input (text, number, email…)
 */
const Input = ({
  label,
  placeholder,
  disabled = false,
  error,
  type = 'text',
  id,
  ...rest
}) => {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className={styles.wrapper}>
      {label && (
        <label
          htmlFor={inputId}
          className={clsx(styles.label, { [styles.disabledLabel]: disabled })}
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className={clsx(styles.input, { [styles.error]: !!error })}
        {...rest}
      />
      {error && <span className={styles.errorMsg}>{error}</span>}
    </div>
  );
};

export default Input;
