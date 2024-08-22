import React from 'react';
import styles from './board.module.scss';
import Image from 'next/image';

const Board = () => {
  return (
    <main className={styles.main}>
      <div className={styles.info}>
        <h2><span className={styles.number}>1.</span> Pepperoni Pizza</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        </p>
      </div>
      <div className={styles.image}>
        <Image src="/assets/images/pizza/1.webp" alt="Pepperoni Pizza" width={300} height={300} />
      </div>
    </main>
  );
};

export default Board;
