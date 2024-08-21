import styles from './page.module.scss';
import localFont from 'next/font/local';
import Button from '@/components/Button';

const neco = localFont({
  src: 'fonts/Neco-Variable.woff2',
  display: 'swap',
});
export default function Home() {
  return (
    <main className={`${styles.main} ${neco.className}`}>
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
  );
}
