import PopUpButton from '@/components/common/PopUpButton';
import EmptyListMessage from './EmptyListMessage';
import { buttonSection, listContainer } from './SavedBookmark.css';
import SavedBookmarkItem from './SavedBookmarkItem';
import { Cafe } from '../../BookmarkList/hooks/useBookmarkList';


interface SelectedBookmarkList {
  id: string;
  listName: string;
  cafes?: Cafe[]
}
interface SavedBookmarkListProps {
  listId: string;
  selectedBookmarkList: SelectedBookmarkList[];
  isEdit: boolean;
  selectedIds: string[];
  onCancelEdit: () => void;
  onDelete: (ids: string[]) => void;
  onSelectItem: (id: string) => void;
}

export default function SavedBookmarkList({
  listId,
  selectedBookmarkList,
  isEdit,
  selectedIds,
  onCancelEdit,
  onSelectItem,
  onDelete,
}: SavedBookmarkListProps) {
  const folder = selectedBookmarkList.find((folder) => folder.id === listId);
  const cafes = folder?.cafes ?? [];

  const handleItemCheck = (id: string) => {
    onSelectItem(id);
  };

  if (cafes.length === 0) {
    return <EmptyListMessage />;
  }

  return (
    <ul className={listContainer}>
      {[...cafes].reverse().map((bookmark) => (
        <SavedBookmarkItem
          key={bookmark.id}
          cafe={bookmark}
          isEdit={isEdit}
          selectedIds={selectedIds}
          onItemCheck={handleItemCheck}
          listId={listId}
        />
      ))}
      {isEdit && (
        <section className={buttonSection}>
          <PopUpButton title="취소" onClick={onCancelEdit} />
          <PopUpButton
            title="선택 삭제"
            color="black"
            onClick={() => {
              onDelete(selectedIds);
            }}
          />
        </section>
      )}
    </ul>
  );
}
