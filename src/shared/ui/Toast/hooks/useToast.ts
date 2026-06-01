'use client';

import React from 'react';

export const useToast = () => {
  const [isToastVisible, setIsToastVisible] = React.useState<boolean>(false);
  const [toastMessage, setToastMessage] = React.useState<string>('');

  const showToast = (message: string, duration: number) => {
    setToastMessage(message);
    setIsToastVisible(true);

    setTimeout(() => {
      setIsToastVisible(false);
    }, duration);
  };
  return { isToastVisible, toastMessage, showToast };
};
