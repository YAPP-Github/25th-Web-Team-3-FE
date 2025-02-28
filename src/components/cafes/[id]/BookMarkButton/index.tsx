'use client';

import BookMarkIcon from '@/assets/Icon/Bookmark.svg';
import { Cafe, useBookmarkList } from '@/components/bookmarks/BookmarkList/hooks/useBookmarkList';
import Toast from '@/components/common/Toast';
import { useToast } from '@/components/common/Toast/hooks/useToast';
import { color } from '@/styles/color.css';
import { useState } from 'react';
import SavedBookmarkListModal from '../SavedBookmarkListModal';
import { bookMarkButton } from './BookMark.css';
import { CheckedItems, useCheckedItems } from './hooks/useCheckedItems';
import dynamic from 'next/dynamic';
interface BookmarkButtonProps {
  cafe: Cafe;
}
export interface LocalstorageBookmarkList {
  id: string;
  listName: string;
  cafes?: Cafe[];
}

const isCafeBookmarked = (cafeId: string, bookmarkList: LocalstorageBookmarkList[]): boolean => {
  return bookmarkList.some(
    (bookmark) => bookmark.cafes?.some((bookmarkedCafe) => bookmarkedCafe.id === cafeId) ?? false
  );
};

function BookMarkButton({ cafe }: BookmarkButtonProps) {
  const [isSavedBookmarkModalOpen, setIsSavedBookmarkModalOpen] = useState<boolean>(false);

  const { isToastVisible, toastMessage, showToast } = useToast();
  const { bookmarkList, addBookmarkList } = useBookmarkList();
  const { checkedItems, onCheck } = useCheckedItems(cafe.id);

  const updateLocalStorage = (bookmarkList: LocalstorageBookmarkList[]) => {
    localStorage.setItem('bookmarkList', JSON.stringify(bookmarkList));
  };

  const isCurrentCafeBookMarked = isCafeBookmarked(cafe.id, bookmarkList);

  const openSavedBookmarkModal = () => setIsSavedBookmarkModalOpen(true);
  const closeSavedBookmarkModal = () => setIsSavedBookmarkModalOpen(false);
  const handleShowToast = () => showToast('북마크 리스트에 저장 되었어요', 3000);

  const addCafeToBookmark = (bookmark: LocalstorageBookmarkList, cafe: Cafe) => {
    bookmark.cafes = bookmark.cafes || [];
    if (!bookmark.cafes.some((bookmarkedCafe) => bookmarkedCafe.id === cafe.id)) {
      bookmark.cafes.push({
        id: cafe.id,
        name: cafe.name,
        mainImageUrl: cafe.mainImageUrl,
        location: cafe.location,
      });
    }
  };

  const removeCafeFromBookmark = (bookmark: LocalstorageBookmarkList, cafeId: string) => {
    bookmark.cafes = bookmark.cafes?.filter((bookmarkedCafe) => bookmarkedCafe.id !== cafeId);
  };

  const toggleBookmark = (checkedItems: CheckedItems) => {
    const updatedBookmarkList = bookmarkList.map((bookmark) => {
      if (checkedItems[bookmark.id]) {
        addCafeToBookmark(bookmark, cafe);
      } else {
        removeCafeFromBookmark(bookmark, cafe.id);
      }
      return bookmark;
    });

    updateLocalStorage(updatedBookmarkList);
    handleShowToast();
    closeSavedBookmarkModal();
  };

  return (
    <div className={bookMarkButton}>
      <BookMarkIcon
        onClick={openSavedBookmarkModal}
        fill={isCurrentCafeBookMarked ? color.grayScale.gray500 : 'none'}
      />
      <SavedBookmarkListModal
        isSavedBookmarkModalOpen={isSavedBookmarkModalOpen}
        onCloseeSavedBookmarkModal={closeSavedBookmarkModal}
        onSave={toggleBookmark}
        savedBookmarkList={bookmarkList}
        addBookmarkList={addBookmarkList}
        checkedItems={checkedItems}
        onCheck={onCheck}
      />
      {isToastVisible && <Toast message={toastMessage} />}
    </div>
  );
}

export default dynamic(() => Promise.resolve(BookMarkButton), { ssr: false });
