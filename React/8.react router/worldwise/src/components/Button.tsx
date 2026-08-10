import type { MouseEventHandler, ReactNode } from 'react';
import styles from './Button.module.css';

export default function Button({
  children,
  onClick,
  type,
}: {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  type: string;
}) {
  return (
    <>
      <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
        {children}
      </button>
    </>
  );
}
