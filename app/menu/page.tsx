import React from "react";
import styles from "./menu.module.scss";
import Card from "@/components/Card";
import Footer from "@/components/Footer";

export default function Menu() {
  return (
    <>
      <div className={styles.bg}>
        <main className={styles.main}>
          <h1 className={styles.title}>Menu</h1>
          <div className={styles.boards}>
            <Card pizza="pepperoni" />
            <Card pizza="margherita" />
            <Card pizza="vegetarian" />
            <Card pizza="bbq_chicken" />
            <Card pizza="meat_lovers" />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
