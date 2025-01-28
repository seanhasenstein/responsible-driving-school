'use client';

import React from 'react';
import classNames from 'classnames';

import usePreventBodyScroll from '@/hooks/usePreventBodyScroll';

import styles from './Modal.module.css';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import useEscapeKeyClick from '@/hooks/useEscapeKeyClick';

type Props = {
  children: React.ReactNode;
  closeModal: () => void;
  customModalClassName?: string;
  disableOutsideClick?: boolean;
  isVisible: boolean;
};

export default function Modal({
  children,
  closeModal,
  customModalClassName,
  disableOutsideClick = false,
  isVisible
}: Props) {
  const modalRef = React.useRef<HTMLDivElement>(null);

  usePreventBodyScroll({ preventScroll: isVisible });
  useOutsideClick(modalRef, closeModal, disableOutsideClick);
  useEscapeKeyClick(closeModal);

  return (
    <div className={classNames(styles.modalOverlay, { [styles.isVisible]: isVisible })}>
      <div ref={modalRef} className={classNames(styles.modalContainer, customModalClassName)}>
        <div className={styles.modal}>{children}</div>
      </div>
    </div>
  );
}
