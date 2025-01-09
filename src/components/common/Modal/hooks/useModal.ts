import { useEffect, useRef, useState, type RefObject } from 'react';

interface UseModalReturn {
  dialogRef: RefObject<HTMLDialogElement>;
  targetContainer: HTMLElement | undefined;
  onClickDialog: (e: React.MouseEvent<HTMLDialogElement>) => void;
}

export const useModal = (isOpen: boolean, onClose: () => void): UseModalReturn => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [targetContainer, setTargetContainer] = useState<HTMLElement>();

  useEffect(() => {
    setTargetContainer(document.getElementById('dialog-root') as HTMLElement);
  }, []);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  const onClickDialog = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return { dialogRef, targetContainer, onClickDialog };
};
