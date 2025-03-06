import React from 'react';
import BookmarkBasicImage from '@/assets/Icon/bookmarkBasicImageSmall.svg';
import CheckedIcon from '@/assets/Icon/checkedBox.svg';
import UnCheckedIcon from '@/assets/Icon/unCheckedBox.svg';
import AddListModal from '@/components/bookmarks/AddListModal';
import PopUpButton from '@/components/common/PopUpButton';
import { useBookmarkStore } from '@/store/store';
import { BookmarkCafe } from '@/types/types';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import {
  addListButton,
  savedBookmarkListBox,
  savedBookmarkListContainer,
  savedBookmarkListContents,
  savedBookmarkListImage,
  savedBookmarkListImageBox,
  savedBookmarkListNumber,
  savedBookmarkListTextBox,
  savedBookmarkListTitle,
  savedBookmarkModalContainer,
  savedBookmarkModalHeader,
  savedBookmarkModalSubTitle,
} from './SavedBookmarkListModal.css';
interface SavedBookmarkListModalContentsProps {
  cafe: BookmarkCafe;
  onClose: () => void;
  showToast: (message: string, duration: number) => void;
}

export default function SavedBookmarkListModalContents({
  cafe,
  onClose,
  showToast,
}: SavedBookmarkListModalContentsProps) {
  const [isAddListModal, setIsAddListModal] = React.useState<boolean>(false);
  const { bookmarkFolders, checkBookmark, saveChanges } = useBookmarkStore((state) => state);

  const params = useParams();

  const openAddListModal = () => {
    setIsAddListModal(true);
  };
  const closeAddListModal = () => {
    setIsAddListModal(false);
  };

  const isAllUnchecked = bookmarkFolders.some((folder) =>
    folder.cafes.every((cafe) => cafe.isBookmarked)
  );

  const onSave = () => {
    showToast('북마크 리스트에 저장 되었어요', 3000);
    saveChanges();
    onClose();
  };

  return (
    <div className={savedBookmarkModalContainer}>
      <header className={savedBookmarkModalHeader}>
        <div className={savedBookmarkModalSubTitle}>북마크 리스트</div>
        <div className={addListButton} onClick={openAddListModal}>
          새 리스트 추가
        </div>
      </header>
      <ul className={savedBookmarkListContainer}>
        {bookmarkFolders?.map((bookmark) => {
          const cafeCount = bookmark.cafes?.length || 0;
          const lastCafeImage = bookmark.cafes?.at(-1)?.mainImageUrl[0];
          const isBookmarked = bookmark.cafes.some(
            (cafe) => cafe.id == params.id && cafe.isBookmarked
          );

          return (
            <li className={savedBookmarkListBox} key={bookmark.id}>
              <div className={savedBookmarkListContents}>
                <div className={savedBookmarkListImageBox}>
                  {lastCafeImage ? (
                    <Image
                      className={savedBookmarkListImage}
                      src={lastCafeImage}
                      alt={`${bookmark.folderName}`}
                      width={75}
                      height={75}
                    />
                  ) : (
                    <BookmarkBasicImage width={75} height={75} alt="기본 리스트 이미지" />
                  )}
                </div>

                <div className={savedBookmarkListTextBox}>
                  <div className={savedBookmarkListTitle}>{bookmark.folderName}</div>
                  <div className={savedBookmarkListNumber}>{cafeCount}개</div>
                </div>
              </div>

              {isBookmarked ? (
                <CheckedIcon onClick={() => checkBookmark(bookmark.id, cafe)} />
              ) : (
                <UnCheckedIcon onClick={() => checkBookmark(bookmark.id, cafe)} />
              )}
            </li>
          );
        })}
      </ul>

      {!isAllUnchecked ? (
        <PopUpButton title="저장" onClick={onSave} color="black" opacity="light" />
      ) : (
        <PopUpButton title="저장" onClick={onSave} color="black" />
      )}

      <AddListModal isOpen={isAddListModal} onClose={closeAddListModal} />
    </div>
  );
}
