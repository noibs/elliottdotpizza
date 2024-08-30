import Footer from "@/components/Footer";
import styles from "./about.module.scss";

export default function About() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.card}>
          <h1 className={styles.title}>About</h1>
          <p className={styles.desc}>
            This is a simple pizza restaurant website built with Next.js. <br />
            It was made for fun to practice building websites with React and
            Next.js.
            <br></br>
            Check out my other projects on{" "}
            <a href="https://github.com/noibs">Github</a>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
