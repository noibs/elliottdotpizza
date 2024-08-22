import React from 'react';
import styles from './menu.module.scss';
import Board from '@/components/Board';

export default function Menu() {
  return (
    <>
      <div className={styles.bg}>
        <main className={styles.main}>
          <h1 className={styles.title}>Menu</h1>
          <div className={styles.boards}>
            <Board pizza="1" />
          </div>

        </main>
      </div>
    </>
  );
}
