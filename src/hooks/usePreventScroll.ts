import { useEffect } from 'react';

export const usePreventScroll = (isOn: boolean): void => {
  useEffect(() => {
    if (isOn) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'auto';
    }
  }, [isOn]);
};
