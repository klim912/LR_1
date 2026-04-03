import React from 'react';
import { clsx } from '../../utils/clsx';
import styles from './Badge.module.css';

/**
 * Badge — мітка статусу / пріоритету.
 *
 * @param {'new'|'sale'|'hit'|'danger'} variant — варіант кольору
 * @param {React.ReactNode}             children — текст мітки
 */
const Badge = ({ variant = 'new', children, className = '', ...rest }) => (
  <span
    className={clsx(styles.badge, styles[variant], className)}
    {...rest}
  >
    {children}
  </span>
);

export default Badge;
