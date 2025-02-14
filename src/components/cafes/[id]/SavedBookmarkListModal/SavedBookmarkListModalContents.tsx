import { ListName } from '@/app/(withNav)/bookmarks/page';
import CheckedIcon from '@/assets/Icon/checkedBox.svg';
import DefaultListImage from '@/assets/Icon/list.svg';
import UnCheckedIcon from '@/assets/Icon/unCheckedBox.svg';
import AddListModal from '@/components/bookmarks/AddListModal';
import PopUpButton from '@/components/common/PopUpButton';
import Image from 'next/image';
import { useState } from 'react';
import { LocalstorageBookmarkList } from '../BookMarkButton';
import {
  addListButton,
  savedBookmarkListContainer,
  savedBookmarkListContents,
  savedBookmarkListNumber,
  savedBookmarkListTextBox,
  savedBookmarkListTitle,
  savedBookmarkModalContainer,
  savedBookmarkModalHeader,
  savedBookmarkModalSubTitle,
} from './SavedBookmarkListModal.css';

interface SavedBookmarkListModalContentsProps {
  savedBookmarkList: LocalstorageBookmarkList[];
  checkedItems: { [key: string]: boolean };
  onCheck: (id: string) => void;
  onSave: () => void;
  addBookmarkList: (listName: string) => void;
}

export default function SavedBookmarkListModalContents({
  savedBookmarkList,
  checkedItems,
  onCheck,
  onSave,
  addBookmarkList,
}: SavedBookmarkListModalContentsProps) {
  const [isAddListModal, setIsAddListModal] = useState<boolean>(false);
  const [listName, setListName] = useState<ListName>('');

  const openAddListModal = () => {
    setIsAddListModal(true);
  };
  const closeAddListModal = () => {
    setListName('');
    setIsAddListModal(false);
  };

  const onChangeBookmarkListName = (name: string) => {
    setListName(name);
  };

  const handleAddBookmarkList = () => {
    addBookmarkList(listName);
    closeAddListModal();
  };

  const handleCheck = (id: string) => () => {
    onCheck(id);
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
        {savedBookmarkList.map((bookmark) => {
          const cafeCount = bookmark.cafes?.length || 0;
          const lastCafeImage = bookmark.cafes?.at(-1)?.mainImageUrl[0];

          const isChecked = checkedItems[bookmark.id];

          return (
            <li className={savedBookmarkListContents} key={bookmark.id}>
              {lastCafeImage ? (
                <Image src={lastCafeImage} alt={`${bookmark.listName}`} width={75} height={75} />
              ) : (
                <DefaultListImage alt="기본 리스트 이미지" />
              )}

              <div className={savedBookmarkListTextBox}>
                <div className={savedBookmarkListTitle}>{bookmark.listName}</div>
                <div className={savedBookmarkListNumber}>{cafeCount}개</div>
              </div>

              {isChecked ? (
                <CheckedIcon onClick={handleCheck(bookmark.id)} />
              ) : (
                <UnCheckedIcon onClick={handleCheck(bookmark.id)} />
              )}
            </li>
          );
        })}
      </ul>
      <PopUpButton title="저장" onClick={onSave} color="black" />
      <AddListModal
        isOpen={isAddListModal}
        onClose={closeAddListModal}
        listName={listName}
        onChangeListName={onChangeBookmarkListName}
        addBookmarkList={handleAddBookmarkList}
      />
    </div>
  );
}
