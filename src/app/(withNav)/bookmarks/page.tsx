'use client';

import React from 'react';
import AddListButton from '@/entities/bookmark/ui/AddBookmarkListButton';
import AddListModal from '@/entities/bookmark/ui/AddBookmarkListModal';
import BookmarkList from '@/entities/bookmark/ui/BookmarkList';
import { container, editButton, header, title } from './page.css';

export type ListName = string;

export default function Page() {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = React.useState<boolean>(false);
  const [isEidt, setIsEdit] = React.useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <div className={container}>
      <header className={header}>
        <h1 className={title}>북마크</h1>
        <button
          className={editButton}
          onClick={() => {
            setIsEdit((prev) => !prev);
          }}
        >
          {isEidt ? '완료' : '편집'}
        </button>
      </header>
      <BookmarkList
        isEdit={isEidt}
        isEditModalOpen={isEditModalOpen}
        onOpen={openEditModal}
        onClose={closeEditModal}
      />
      <AddListButton openModal={openModal} />
      <AddListModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
