'use client';

import { ArrowRightIcon } from '@heroicons/react/20/solid';

import styles from './Hero.module.css';

type Props = {
  handleContactUsClick: () => void;
};

export default function Hero({ handleContactUsClick }: Props) {
  const handleFaqsClick = () => {
    const faqsSection = document.getElementById('faqs');
    if (faqsSection) {
      faqsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.hero}>
      <h2 className={styles.primaryTitle}>
        Teaching Safe Habits for
        <br />
        <span className={styles.italic}>Responsible Driving</span>
      </h2>
      <h3 className={styles.secondaryTitle}>
        Welcome to one of Sheboygan County's <br className={styles.lineBreak} />
        top driver education programs, with 25+ years
        <br className={styles.lineBreak} /> of{' '}
        <span className={styles.underline}>online drivers education instruction</span> and{' '}
        <span className={styles.underline}>behind-the-wheel training</span>.
      </h3>
      <div className={styles.actions}>
        <button type="button" className={styles.primaryButton} onClick={handleFaqsClick}>
          FAQs
        </button>
        <button type="button" onClick={handleContactUsClick} className={styles.secondaryButton}>
          Contact us
          <ArrowRightIcon className={styles.icon} />
        </button>
      </div>
    </div>
  );
}
