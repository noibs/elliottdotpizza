import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Elliott's Pizza</h2>
          <p className={styles.cardText}>
            123 Pizza St.
            <br />
            Pizzaville, PZ 12345
          </p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Hours</h2>
          <p className={styles.cardText}>
            Mon - Thu: 11am - 10pm
            <br />
            Fri - Sat: 11am - 11pm
            <br />
            Sun: 12pm - 9pm
          </p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Contact</h2>
          <p className={styles.cardText}>
            Phone: 123-456-7890
            <br />
            Email: info@elliotts.pizza
            <br />
          </p>
          <div className={styles.icons}>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={styles.line}></div>
        <p className={styles.copy}>
          &copy; 2024 Elliott's Pizza. All rights reserved.
        </p>
      </div>
    </main>
  );
};

export default Footer;
