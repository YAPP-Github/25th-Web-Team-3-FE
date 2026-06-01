'use client';

import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import { useModal } from './hooks/useModal';
import { closeIcon, modal, modalContainer, modalContent, modalTitle } from './Modal.css';
import CloseIcon from '@/shared/assets/Icon/closeIcon.svg';

export type ModalPosition = 'center' | 'bottom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  position?: ModalPosition;
  closeButton?: boolean;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  position = 'center',
  children,
  closeButton = true,
}: PropsWithChildren<ModalProps>) {
  const { targetContainer, dialogRef, onClickDialog } = useModal(isOpen, onClose);

  if (!targetContainer) {
    return null;
  }

  return createPortal(
    <dialog ref={dialogRef} onClose={onClose} onClick={onClickDialog} className={modal}>
      <div className={modalContainer({ position })}>
        <h1 className={modalTitle({ position })}>
          <span>{title}</span>
          {closeButton && <CloseIcon onClick={onClose} className={closeIcon} />}
        </h1>
        <div className={modalContent}>{children}</div>
      </div>
    </dialog>,
    targetContainer
  );
}
