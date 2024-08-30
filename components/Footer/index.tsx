import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Elliott&rsquo;s Pizza</h2>
          <p className={styles.cardText}>
            <i className="fa-regular fa-location-dot" /> 123 Pizza St.
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
            <i className="fa-regular fa-phone" />{" "}
            <a href="tel:123-456-7890">123-456-7890</a>
            <br />
            <i className="fa-regular fa-envelope" />{" "}
            <a href="mailto:info@elliotts.pizza">info@elliotts.pizza</a>
            <br />
          </p>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={styles.line}></div>
        <div className={styles.btmThing}>
          <p className={styles.copy}>
            &copy; 2024 Elliott&rsquo;s Pizza. All rights reserved.
          </p>
          <div className={styles.icons}>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Footer;
