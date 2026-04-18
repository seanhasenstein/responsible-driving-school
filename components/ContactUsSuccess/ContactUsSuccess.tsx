'use client';

import React from 'react';
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid';

import { formattedPhone, rawPhone } from '@/constants';

import styles from './ContactUsSuccess.module.css';

type Props = {
  closeModal: () => void;
  referenceId: string | null;
  onFaqClick: () => void;
};

export default function ContactUsSuccess({ closeModal, referenceId, onFaqClick }: Props) {
  const primaryButtonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    primaryButtonRef.current?.focus();
  }, []);

  return (
    <div className={styles.contactUsSuccess} role="status" aria-live="polite">
      <div className={styles.gradient} aria-hidden="true" />
      <button
        type="button"
        className={styles.closeIconButton}
        onClick={closeModal}
        aria-label="Close"
      >
        <XMarkIcon className={styles.closeIcon} />
      </button>
      <CheckCircleIcon className={styles.icon} />
      <p className={styles.title}>
        Message sent <span className={styles.italic}>successfully</span>
      </p>
      <p className={styles.body}>
        Thank you for contacting <i>Responsible Driving School LLC</i>. We typically reply within a
        day.
      </p>
      <p className={styles.fallback}>
        For urgent matters, call{' '}
        <a href={`tel:${rawPhone}`} className={styles.link}>
          {formattedPhone}
        </a>
        .
      </p>
      {referenceId ? (
        <>
          <div className={styles.referenceLabel}>
            <span className={styles.referenceLabelText}>Reference number</span>
          </div>
          <p className={styles.referenceId}>#{referenceId}</p>
        </>
      ) : null}
      <button
        ref={primaryButtonRef}
        type="button"
        className={styles.primaryButton}
        onClick={closeModal}
      >
        Back to site
      </button>
      <button type="button" className={styles.secondaryLink} onClick={onFaqClick}>
        Read our FAQs
      </button>
    </div>
  );
}
