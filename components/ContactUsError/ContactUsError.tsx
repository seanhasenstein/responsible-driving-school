import { ExclamationCircleIcon, XMarkIcon } from '@heroicons/react/20/solid';

import { email, formattedPhone, rawPhone } from '@/constants';

import styles from './ContactUsError.module.css';

type Props = {
  closeModal: () => void;
};

export default function ContactUsError({ closeModal }: Props) {
  return (
    <div className={styles.contactUsError}>
      <button type="button" className={styles.closeIconButton} onClick={closeModal}>
        <XMarkIcon className={styles.closeIcon} />
      </button>
      <ExclamationCircleIcon className={styles.icon} />
      <div className={styles.content}>
        <p className={styles.title}>Send message error</p>
        <p className={styles.text}>
          We're sorry, something went wrong trying to send your message. Please contact us directly.
        </p>
        <div className={styles.contactInfo}>
          <h3 className={styles.sectionTitle}>
            <span className={styles.span}>Contact information</span>
          </h3>
          <p className={styles.name}>Al Holzheimer</p>
          <div className={styles.row}>
            <div>
              <p className={styles.phone}>
                <a href={`tel:${rawPhone}`} className={styles.link}>
                  {formattedPhone}
                </a>
              </p>
              <p className={styles.email}>
                <a href={email} className={styles.link}>
                  {email}
                </a>
              </p>
            </div>
            <div>
              <p className={styles.address}>
                525 N 6th Street
                <br />
                Oostburg, WI 53070
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
