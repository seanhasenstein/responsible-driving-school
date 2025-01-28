'use client';

import React from 'react';

export default function usePreventBodyScroll({ preventScroll }: { preventScroll: boolean }) {
  React.useEffect(() => {
    if (preventScroll) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [preventScroll]);
}
