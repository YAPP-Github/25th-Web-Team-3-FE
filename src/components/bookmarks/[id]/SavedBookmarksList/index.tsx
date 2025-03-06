import PopUpButton from '@/components/common/PopUpButton';
import { useBookmarkStore } from '@/store/store';
import EmptyListMessage from './EmptyListMessage';
import { buttonSection, listContainer } from './SavedBookmark.css';
import SavedBookmarkItem from './SavedBookmarkItem';

interface SavedBookmarkListProps {
  folderId: string;
  isEdit: boolean;
  handelIsEdit: () => void;
}

export default function SavedBookmarkList({
  folderId,
  isEdit,
  handelIsEdit,
}: SavedBookmarkListProps) {
  const { bookmarkFolders, saveChanges } = useBookmarkStore((state) => state);
  const selectedBookmarkFolder = bookmarkFolders.find((bookmark) => bookmark.id == folderId);

  if (!selectedBookmarkFolder || selectedBookmarkFolder.cafes.length === 0) {
    return <EmptyListMessage />;
  }

  return (
    <ul className={listContainer}>
      {selectedBookmarkFolder.cafes.map((cafe) => (
        <SavedBookmarkItem key={cafe.id} cafe={cafe} isEdit={isEdit} folderId={folderId} />
      ))}
      {isEdit && (
        <section className={buttonSection}>
          <PopUpButton title="취소" onClick={handelIsEdit} />
          <PopUpButton title="선택 삭제" color="black" onClick={saveChanges} />
        </section>
      )}
    </ul>
  );
}
