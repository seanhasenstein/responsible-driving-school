import { XMarkIcon } from '@heroicons/react/20/solid';

import Modal from '../Modal';

import styles from './GrantProgramModal.module.css';

type Props = {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
};

export default function GrantProgramModal({ isVisible, setIsVisible }: Props) {
  const closeModal = () => {
    setIsVisible(false);
  };

  return (
    <Modal {...{ isVisible, setIsVisible, closeModal, customModalClassName: styles.modal }}>
      <div className={styles.grantProgramModal}>
        <div className={styles.header}>
          <h3 className={styles.title}>Driver Education Grant Program</h3>
          <button type="button" className={styles.closeButton} onClick={closeModal}>
            <XMarkIcon className={styles.xIcon} />
          </button>
        </div>
        <div className={styles.content}>
          <p className={styles.p}>Funding has been paused.</p>
          <p className={styles.p}>
            If you have already been approved for a grant, you will be required to enter the code
            you received from the state. You will receive a separate code for online courses and
            behind the wheel and it will specify which code is required when you register.
          </p>
          <p className={styles.p}>
            For more information visit{' '}
            <a
              href="https://wisconsindot.gov/Pages/dmv/teen-driver/teen-sfty/degrant.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              wisconsindmv.gov/degrant
            </a>
            .
          </p>
        </div>
      </div>
    </Modal>
  );
}
