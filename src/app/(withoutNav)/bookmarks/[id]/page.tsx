'use client';
import ChervonIcon from '@/assets/Icon/whiteChervonLeft.svg';
import SavedBookmarkList from '@/components/bookmarks/[id]/SavedBookmarksList';
import { useBookmarkList } from '@/components/bookmarks/BookmarkList/hooks/useBookmarkList';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { backButton, editButton, header, headerInfo, headerTitle } from './page.css';

export default function Page() {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const params = useParams() || '';
  const searchParams = useSearchParams();
  const listName = searchParams.get('listName') || '';

  const listId = params.id as string;
  const router = useRouter();

  const { bookmarkList, setBookmarkList } = useBookmarkList();

  const selectedBookmarkList = bookmarkList.find((folder) => folder.id === listId);
  
  const hasCafes = selectedBookmarkList?.cafes && selectedBookmarkList.cafes.length > 0;

  const handleSelectItem = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };
  const handleCancelEdit = () => {
    setIsEdit(false);
  };

  const handleEdit = () => {
    if (isEdit) {
      const allCafeIds = selectedBookmarkList?.cafes?.map((cafe) => cafe.id) || [];
      allCafeIds.forEach((id) => {
        const targetKey = `bookmark-selection-${id}`;
        const keys = Object.keys(localStorage);

        keys.forEach((key) => {
          if (key === targetKey) {
            const selectedBookmarkId = JSON.parse(localStorage.getItem(key) ?? '{}');
            selectedBookmarkId[listId] = false;
            localStorage.setItem(targetKey, JSON.stringify(selectedBookmarkId));
          }
        });
        handleSelectItem(id);
      });
      setSelectedIds(allCafeIds);
    } else {
      setIsEdit(true);
    }
  };
  const handleDelete = (idsToDelete: string[]) => {
    if (selectedBookmarkList) {
      const updatedCafes = selectedBookmarkList.cafes?.filter((cafe) => {
        return !idsToDelete.includes(cafe.id);
      });

      const updatedFolder = {
        ...selectedBookmarkList,
        cafes: updatedCafes,
      };

      const updatedList = bookmarkList.map((folder) =>
        folder.id === listId ? updatedFolder : folder
      );
      localStorage.setItem('bookmarkList', JSON.stringify(updatedList));

      setBookmarkList(updatedList);
    }
  };

  return (
    <div>
      <header className={header}>
        <div className={headerInfo}>
          <ChervonIcon onClick={() => router.back()} className={backButton} />
          <span className={headerTitle}>{listName}</span>
        </div>
        {hasCafes && (
          <button className={editButton} onClick={handleEdit}>
            {isEdit ? '전체선택' : '편집'}
          </button>
        )}
      </header>
      <main>
        {selectedBookmarkList && (
          <SavedBookmarkList
            selectedBookmarkList={[selectedBookmarkList]}
            listId={listId}
            isEdit={isEdit}
            selectedIds={selectedIds}
            onDelete={handleDelete}
            onCancelEdit={handleCancelEdit}
            onSelectItem={handleSelectItem}
          />
        )}
      </main>
    </div>
  );
}
