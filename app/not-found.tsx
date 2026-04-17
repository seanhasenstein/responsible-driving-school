import type { Metadata } from 'next';
import Link from 'next/link';

import styles from './status.module.css';

export const metadata: Metadata = {
  title: 'Page not found | Responsible Driving School',
  robots: { index: false, follow: false }
};

export default function NotFound() {
  return (
    <main className={styles.status}>
      <p className={styles.eyebrow}>404</p>
      <h1 className={styles.title}>Page not found</h1>
      <p className={styles.message}>
        We couldn't find the page you were looking for.
      </p>
      <Link href="/" className={styles.link}>
        Back to home
      </Link>
    </main>
  );
}
