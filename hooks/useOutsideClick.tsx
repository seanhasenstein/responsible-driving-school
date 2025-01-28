'use client';

import React from 'react';

export function useOutsideClick(
  ref: React.RefObject<HTMLDivElement | null>,
  callback: () => void,
  disable: boolean = false
) {
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!disable && ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback, disable]);
}
