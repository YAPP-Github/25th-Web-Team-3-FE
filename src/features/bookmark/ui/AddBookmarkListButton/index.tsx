'use client';

import { addListButton, addListButtonContainer } from './AddBookmarkListButton.css';

interface AddListButtonProps {
  openModal: () => void;
}

export default function AddListButton({ openModal }: AddListButtonProps) {
  return (
    <div className={addListButtonContainer}>
      <button className={addListButton} onClick={() => openModal()}>
        새 리스트 추가
      </button>
    </div>
  );
}
