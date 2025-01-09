'use client';

import { ReactNode } from 'react';
import { modal, modalContent } from './Modal.css';
import { createPortal } from 'react-dom';
import { useModal } from './hooks/useModal';

export type ModalPosition = 'center' | 'bottom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: ReactNode;
  position: ModalPosition;
}

export default function Modal({ isOpen, onClose, content, position = 'center' }: ModalProps) {
  const { targetContainer, dialogRef, onClickDialog } = useModal(isOpen, onClose);

  if (!targetContainer) {
    return null;
  }

  return createPortal(
    <dialog ref={dialogRef} onClose={onClose} onClick={onClickDialog} className={modal}>
      <div className={modalContent[position]}>{content}</div>
    </dialog>,
    targetContainer
  );
}
