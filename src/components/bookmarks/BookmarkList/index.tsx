import React from 'react';
import BookmarkBasicImage from '@/assets/Icon/bookmarkBasicImage.svg';
import CloseIcon from '@/assets/Icon/closeIcon.svg';
import { ROUTE_PATH } from '@/constants/routePath';
import { BookmarkFolder, useBookmarkStore } from '@/store/store';
import Image from 'next/image';
import Link from 'next/link';
import {
  bookmarkBasicImage,
  bookmarkLink,
  bookmarkListItem,
  closeIcon,
  container,
  listItemCounts,
  listItemCountsNumber,
  subTitle,
} from '../BookmarkList/BookmarkList.css';
import EditListModal from '../EditListModal';

interface BookmarkListProps {
  isEdit: boolean;
  isEditModalOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

interface BookmarkItemProps {
  item: BookmarkFolder;
  isEdit: boolean;
  onOpen: (id: string, folderName: string) => void;
}

const BookmarkItem = ({ item, isEdit, onOpen }: BookmarkItemProps) => {
  const imageUrl = item.cafes?.at(-1)?.mainImageUrl?.[0] || '';
  const itemCounts = item.cafes?.length || 0;
  const getShortFolderName = (name: string) => {
    return name.length > 17 ? name.slice(0, 13) + '...' : name;
  };

  return (
    <li className={bookmarkListItem}>
      <div className={subTitle}>
        {isEdit && (
          <CloseIcon
            className={closeIcon}
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              e.preventDefault();
              onOpen(item.id, item.folderName);
            }}
          />
        )}
        <div>{getShortFolderName(item.folderName)}</div>
      </div>
      <div className={bookmarkBasicImage}>
        {imageUrl ? (
          <Image src={imageUrl} alt={item.folderName} width={163} height={191} />
        ) : (
          <BookmarkBasicImage width={163} heigth={191} />
        )}
        <div className={listItemCounts}>
          <span className={listItemCountsNumber}>{itemCounts}</span>
        </div>
      </div>
    </li>
  );
};

export default function BookmarkList({
  isEdit,
  onOpen,
  onClose,
  isEditModalOpen,
}: BookmarkListProps) {
  const [seletedId, setSelectedId] = React.useState<string | null>(null);
  const [selectFolderName, setSelectFolderName] = React.useState<string>('');
  const bookmarkFolders = useBookmarkStore((state) => state.bookmarkFolders);

  const handleOpen = (id: string, folderName: string) => {
    setSelectedId(id);
    setSelectFolderName(folderName);
    onOpen();
  };

  return (
    <ul className={container}>
      {bookmarkFolders.map((item) =>
        isEdit ? (
          <div className={bookmarkLink} key={item.id}>
            <BookmarkItem item={item} isEdit={isEdit} onOpen={handleOpen} />
          </div>
        ) : (
          <Link
            key={item.id}
            href={{
              pathname: `${ROUTE_PATH.bookmarks}/${item.id}`,
              query: { folderName: item.folderName },
            }}
            className={bookmarkLink}
          >
            <BookmarkItem item={item} isEdit={isEdit} onOpen={handleOpen} />
          </Link>
        )
      )}
      <EditListModal
        isOpen={isEditModalOpen}
        onClose={onClose}
        id={seletedId}
        folderName={selectFolderName}
      />
    </ul>
  );
}
