'use client';
import React from 'react';
import ChervonIcon from '@/assets/Icon/whiteChervonLeft.svg';
import SavedBookmarkList from '@/components/bookmarks/[id]/SavedBookmarksList';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { backButton, editButton, header, headerInfo, headerTitle } from './page.css';
import { useBookmarkStore } from '@/store/store';

export default function Page() {
  const [isEdit, setIsEdit] = React.useState<boolean>(false);

  const params = useParams() || '';
  const searchParams = useSearchParams();
  const listName = searchParams.get('folderName') || '';
  const { setAllUnbookmarked } = useBookmarkStore((state) => state);

  const folderId = params.id as string;
  const router = useRouter();

  const handelIsEdit = () => {
    setIsEdit((prev) => !prev);
  };

  const toggleEdit = () => {
    setIsEdit((prev) => !prev);
    if (isEdit) {
      setIsEdit(true);
      setAllUnbookmarked(folderId);
    }
  };

  return (
    <div>
      <header className={header}>
        <div className={headerInfo}>
          <ChervonIcon onClick={() => router.back()} className={backButton} />
          <span className={headerTitle}>{listName}</span>
        </div>

        <button className={editButton} onClick={toggleEdit}>
          {isEdit ? '전체 선택' : '편집'}
        </button>
      </header>
      <main>
        <SavedBookmarkList folderId={folderId} isEdit={isEdit} handelIsEdit={handelIsEdit} />
      </main>
    </div>
  );
}
