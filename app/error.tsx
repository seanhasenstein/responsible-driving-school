'use client';

import Link from 'next/link';

import Header from '@/components/Header';

import styles from './status.module.css';

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ reset }: Props) {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.status}>
        <div className={styles.card}>
          <p className={styles.eyebrow}>Error</p>
          <h1 className={styles.title}>Something went wrong</h1>
          <p className={styles.message}>
            An unexpected error occurred. Please try again, or return to the home page.
          </p>
          <button type="button" onClick={reset} className={styles.button}>
            Try again
          </button>
          <Link href="/" className={styles.secondaryLink}>
            Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}
