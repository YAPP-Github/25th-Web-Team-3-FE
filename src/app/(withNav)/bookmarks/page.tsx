'use client';
import AddListButton from '@/components/bookmarks/AddListButton';
import AddListModal from '@/components/bookmarks/AddListModal';
import BookmarkList from '@/components/bookmarks/BookmarkList';
import { useBookmarkList } from '@/components/bookmarks/BookmarkList/hooks/useBookmarkList';
import { useEffect, useState } from 'react';
import { container, editButton, header, title } from './page.css';

export type ListName = string;

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [listName, setListName] = useState<ListName>('');
  const [isEidt, setIsEdit] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const { bookmarkList, addBookmarkList, deleteBookmarkList } = useBookmarkList();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setListName('');
    setIsModalOpen(false);
  };
  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const onChangeBookmarkListName = (name: string) => {
    setListName(name);
  };

  const handleAddBookmarkList = () => {
    addBookmarkList(listName);
    closeModal();
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
        bookmarkList={bookmarkList}
        isEdit={isEidt}
        onDelete={deleteBookmarkList}
        onOpen={openEditModal}
        onClose={closeEditModal}
        isEditModalOpen={isEditModalOpen}
      />
      <AddListButton openModal={openModal} />
      <AddListModal
        isOpen={isModalOpen}
        onClose={closeModal}
        listName={listName}
        onChangeListName={onChangeBookmarkListName}
        addBookmarkList={handleAddBookmarkList}
      />
    </div>
  );
}
