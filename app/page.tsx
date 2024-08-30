import styles from "./page.module.scss";
import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
        <h3>Welcome To</h3>
        <h1>
          Elliott&rsquo;s
          <br />
          Pizza
        </h1>
        <Button
          link="/menu"
          text="Check Menu"
          icon="fa-solid fa-fork-knife"
          color="#7D4646"
        />
        <div className={styles.bg}></div>
      </main>
    </>
  );
}
