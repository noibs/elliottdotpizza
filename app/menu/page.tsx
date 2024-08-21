import React from 'react';
import styles from './menu.module.scss';
import Board from '@/components/Board';
import localFont from 'next/font/local';

const neco = localFont({
  src: '../fonts/Neco-Variable.woff2',
  display: 'swap',
});

export default function Menu() {
  return (
    <>
      <div className={styles.bg}>
        <main className={styles.main}>
          <h1 className={neco.className}>Menu</h1>
          <Board />
        </main>
      </div>
    </>
  );
}
