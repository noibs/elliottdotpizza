import React from "react";
import styles from "./menu.module.scss";
import Card from "@/components/Card";

export default function Menu() {
  return (
    <>
      <div className={styles.bg}>
        <main className={styles.main}>
          <h1 className={styles.title}>Menu</h1>
          <div className={styles.boards}>
            <Card pizza="pepperoni" />
          </div>
        </main>
      </div>
    </>
  );
}
