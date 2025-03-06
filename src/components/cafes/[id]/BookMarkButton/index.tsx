'use client';
import React from 'react';
import BookMarkIcon from '@/assets/Icon/Bookmark.svg';
import { color } from '@/styles/color.css';
import dynamic from 'next/dynamic';
import { BookmarkCafe } from '@/types/types';
import SavedBookmarkListModal from '../SavedBookmarkListModal';
import { bookMarkButton } from './BookMark.css';
import { useToast } from '@/components/common/Toast/hooks/useToast';
import Toast from '@/components/common/Toast';
interface BookmarkButtonProps {
  cafe: BookmarkCafe;
}

function BookMarkButton({ cafe }: BookmarkButtonProps) {
  const { id, name, mainImageUrl, location } = cafe;
  const bookmarkCafe = { id, name, mainImageUrl, location, isBookmarked: true };

  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const { showToast, isToastVisible, toastMessage } = useToast();
  const isCurrentCafeBookMarked = true;

  const openSavedBookmarkModal = () => {
    setIsModalOpen(true);
  };

  const closeSavedBookmarkModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={bookMarkButton}>
      <BookMarkIcon
        onClick={openSavedBookmarkModal}
        fill={isCurrentCafeBookMarked ? color.grayScale.gray500 : 'none'}
      />
      <SavedBookmarkListModal
        cafe={bookmarkCafe}
        isOpen={isModalOpen}
        onClose={closeSavedBookmarkModal}
        showToast={showToast}
      />
      {isToastVisible && <Toast message={toastMessage} />}
    </div>
  );
}

export default dynamic(() => Promise.resolve(BookMarkButton), { ssr: false });
