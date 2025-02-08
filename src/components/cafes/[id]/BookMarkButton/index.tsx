'use client';

import { useState, useEffect } from 'react';
import BookMarkIcon from '@/assets/Icon/Bookmark.svg';
import { bookMarkButton } from './BookMark.css';
import { color } from '@/styles/color.css';
import SavedBookmarkListModal from '../SavedBookmarkListModal';

interface CafeBookmark {
  id: string;
  name: string;
  location: string;
  mainImageUrl: string[];
}

interface BookMarkProps {
  cafe: CafeBookmark;
}

interface BookmarkFolder {
  id: string;
  listName: string;
  cafes?: CafeBookmark[];
}

export default function BookMarkButton({ cafe }: BookMarkProps) {
  const [bookMarks, setBookMarks] = useState<CafeBookmark[]>([]);
  const [isSavedBookmarkModalOpen, setIsSavedBookmarkModalOpen] = useState(false);
  const [isCurrentCafeBookMarked, setIsCurrentCafeBookMarked] = useState(false);

  // Check if current cafe is bookmarked on component mount
  useEffect(() => {
    const bookmarkList = JSON.parse(
      localStorage.getItem('bookmarkList') || '[]'
    ) as BookmarkFolder[];
    const isBookmarked = bookmarkList.some((folder) =>
      folder.cafes?.some((bookmarkedCafe) => bookmarkedCafe.id === cafe.id)
    );
    setIsCurrentCafeBookMarked(isBookmarked);
  }, [cafe.id]);

  const openSavedBookmarkModal = () => {
    setIsSavedBookmarkModalOpen(true);
  };

  const closeSavedBookmarkModal = () => {
    setIsSavedBookmarkModalOpen(false);
  };

  const toggleBookmark = (checkedItems: { [key: string]: boolean }) => {
    const currentBookmarkList = JSON.parse(
      localStorage.getItem('bookmarkList') || '[]'
    ) as BookmarkFolder[];

    const updatedBookmarkList = currentBookmarkList.map((folder) => {
      if (checkedItems[folder.id]) {
        if (!folder.cafes) {
          folder.cafes = [];
        }

        const isCafeAlreadyBookmarked = folder.cafes.some(
          (bookmarkedCafe) => bookmarkedCafe.id === cafe.id
        );
        if (!isCafeAlreadyBookmarked) {
          folder.cafes.push({
            id: cafe.id,
            name: cafe.name,
            location: cafe.location,
            mainImageUrl: cafe.mainImageUrl,
          });
        }
      } else {
        if (folder.cafes) {
          folder.cafes = folder.cafes.filter((bookmarkedCafe) => bookmarkedCafe.id !== cafe.id);
        }
      }
      return folder;
    });

    localStorage.setItem('bookmarkList', JSON.stringify(updatedBookmarkList));
    const isBookmarked = updatedBookmarkList.some((folder) =>
      folder.cafes?.some((bookmarkedCafe) => bookmarkedCafe.id === cafe.id)
    );
    setIsCurrentCafeBookMarked(isBookmarked);
    setIsSavedBookmarkModalOpen(false);
  };

  return (
    <div className={bookMarkButton} onClick={openSavedBookmarkModal}>
      <BookMarkIcon fill={isCurrentCafeBookMarked ? color.grayScale.gray500 : 'none'} />
      <SavedBookmarkListModal
        isSavedBookmarkModalOpen={isSavedBookmarkModalOpen}
        onClose={closeSavedBookmarkModal}
        onSave={toggleBookmark}
      />
    </div>
  );
}
