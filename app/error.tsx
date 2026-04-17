'use client';

import styles from './status.module.css';

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ reset }: Props) {
  return (
    <main className={styles.status}>
      <p className={styles.eyebrow}>Error</p>
      <h1 className={styles.title}>Something went wrong</h1>
      <p className={styles.message}>
        An unexpected error occurred. Please try again, or reload the page.
      </p>
      <button type="button" onClick={reset} className={styles.button}>
        Try again
      </button>
    </main>
  );
}
