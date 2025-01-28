import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid';

import styles from './ContactUsSuccess.module.css';

type Props = {
  closeModal: () => void;
};

export default function ContactUsSuccess({ closeModal }: Props) {
  return (
    <div className={styles.contactUsSuccess}>
      <button type="button" className={styles.closeIconButton} onClick={closeModal}>
        <XMarkIcon className={styles.closeIcon} />
      </button>
      <CheckCircleIcon className={styles.icon} />
      <div className={styles.content}>
        <p className={styles.title}>Message sent successfully</p>
        <p className={styles.text}>
          Thank you for contacting <i>Responsible Driving School LLC</i>. We'll be with you as soon
          as we can.
        </p>
      </div>
    </div>
  );
}
