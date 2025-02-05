'use client';
import ChervonIcon from '@/assets/Icon/whiteChervonLeft.svg';
import SavedBookmarkList from '@/components/bookmarks/[id]/SavedBookmarksList';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { backButton, container, editButton, header, headerInfo, headerTitle } from './page.css';

interface DetailFromBookmarkList {
  id: string;
  location: string;
  mainImageUrl: string;
  name: string;
}
export default function Page() {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [detailFromBookmarkList, setDetailFromBookmarkList] = useState<DetailFromBookmarkList[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const searchParams = useSearchParams();
  const listName = String(searchParams.get('listName'));
  const router = useRouter();


  useEffect(() => {
    const savedBookmarks = localStorage.getItem(listName);
    if (savedBookmarks) {
      setDetailFromBookmarkList(JSON.parse(savedBookmarks));
    }
  }, [listName]);

  return (
    <div className={container}>
      <header className={header}>
        <div className={headerInfo}>
          <ChervonIcon onClick={() => router.back()} className={backButton} />
          <span className={headerTitle}>{listName}</span>
        </div>
        <button
          className={editButton}
          onClick={() => {
            if (isEdit) {
              const allIds = detailFromBookmarkList.map((bookmark) => bookmark.id);
              setSelectedIds(allIds);
            } else {
              setIsEdit(true);
            }
          }}
        >
          {isEdit ? '전체선택' : '편집'}
        </button>
      </header>
      <main>
        <SavedBookmarkList
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          detailFromBookmarkList={detailFromBookmarkList}
          selectedIds={selectedIds}
          setSelectedIds={setSelectedIds}
          onDelete={(idsToDelete) => {
            const updatedList = detailFromBookmarkList.filter(
              (bookmark) => !idsToDelete.includes(bookmark.id)
            );
            setDetailFromBookmarkList(updatedList);
          
            localStorage.setItem(listName, JSON.stringify(updatedList));
          }}
        />
      </main>
    </div>
  );
}