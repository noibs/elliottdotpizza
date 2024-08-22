import React from 'react';
import styles from './board.module.scss';
import Image from 'next/image';

const Board = ({ pizza }: { pizza: string }) => {
  return (
    <main className={styles.main}>
      <div className={styles.info}>
        <h2 className={styles.title}><span className={styles.number}>{pizza}.</span> Pepperoni Pizza</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        </p>
        <div className={styles.priceAndBuy}>
          <span className={styles.price}>$12.99</span>
          <button className={styles.buyButton}>
            <i className="fa-regular fa-cart-shopping"></i>
            Add to Cart
          </button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src={`/assets/images/pizza/${pizza}.webp`} alt="Pepperoni Pizza" width={500} height={1000} />
      </div>
      <div>
      </div>
    </main>
  );
};

export default Board;
