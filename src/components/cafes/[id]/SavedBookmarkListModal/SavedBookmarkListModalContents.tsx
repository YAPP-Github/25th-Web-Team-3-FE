import {
  addListButton,
  savedBookmarkListContainer,
  savedBookmarkModalContainer,
  savedBookmarkModalHeader,
  savedBookmarkModalSubTitle,
} from './SavedBookmarkListModal.css';
import UnCheckedIcon from '@/assets/Icon/unCheckedBox.svg';
import CheckedIcon from '@/assets/Icon/checkedBox.svg';
import PopUpButton from '@/components/common/PopUpButton';

interface Bookmark {
  id: string;
  listName: string;
  length: number;
}

interface SavedBookmarkListModalContentsProps {
  savedBookmarkList: Bookmark[];
  checkedItems: { [key: string]: boolean };
  onCheck: (id: string) => void;
  onSave: () => void;
}

export default function SavedBookmarkListModalContents({
  savedBookmarkList,
  checkedItems,
  onCheck,
  onSave,
}: SavedBookmarkListModalContentsProps) {
  return (
    <div className={savedBookmarkModalContainer}>
      <header className={savedBookmarkModalHeader}>
        <div className={savedBookmarkModalSubTitle}>북마크 리스트</div>
        <div className={addListButton}>새 리스트 추가</div>
      </header>
      <div>
        {savedBookmarkList.map((bookmark) => (
          <div key={bookmark.id} className={savedBookmarkListContainer}>
            <div>{bookmark.listName}</div>
            <div>{bookmark.length}</div>
            {checkedItems[bookmark.id] ? (
              <CheckedIcon onClick={() => onCheck(bookmark.id)} />
            ) : (
              <UnCheckedIcon onClick={() => onCheck(bookmark.id)} />
            )}
          </div>
        ))}
      </div>
      <PopUpButton title='저장' onClick={onSave} color='black' />
    </div>
  );
}