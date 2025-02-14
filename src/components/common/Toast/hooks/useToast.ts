'use client'
import { useState } from 'react';

export const useToast = () => {
  const [isToastVisible, setIsToastVisible] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');

  const showToast = (message: string, duration: number) => {
    setToastMessage(message);
    setIsToastVisible(true);

    setTimeout(() => {
      setIsToastVisible(false);
    }, duration);
  };
  return { isToastVisible, toastMessage, showToast };
};
