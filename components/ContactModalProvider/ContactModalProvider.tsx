'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const ContactUsModal = dynamic(() => import('../Modals/ContactUsModal'));

type ContactModalContextValue = {
  open: () => void;
};

const ContactModalContext = React.createContext<ContactModalContextValue | null>(null);

export function useContactModal(): ContactModalContextValue {
  const ctx = React.useContext(ContactModalContext);
  if (!ctx) {
    throw new Error('useContactModal must be used inside ContactModalProvider');
  }
  return ctx;
}

type Props = {
  children: React.ReactNode;
};

export default function ContactModalProvider({ children }: Props) {
  const [isVisible, setIsVisible] = React.useState(false);
  const open = React.useCallback(() => setIsVisible(true), []);
  const value = React.useMemo(() => ({ open }), [open]);

  return (
    <ContactModalContext.Provider value={value}>
      {children}
      <ContactUsModal isVisible={isVisible} setIsVisible={setIsVisible} />
    </ContactModalContext.Provider>
  );
}
