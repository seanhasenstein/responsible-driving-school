import Image from 'next/image';

import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Image
          src="/logo.png"
          height={181}
          width={98}
          alt="Responsible Drving School LLC"
          className={styles.logo}
        />
        <a href="/" target="_blank" rel="noopener noreferrer" className={styles.loginLink}>
          Login
        </a>
      </header>
      <main className={styles.main}>
        <p>Add components here...</p>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
