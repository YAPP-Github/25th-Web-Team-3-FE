import BookmarkBasicImage from '@/assets/Icon/bookmarkBasicImage.svg';
import CloseIcon from '@/assets/Icon/closeIcon.svg';
import { ROUTE_PATH } from '@/constants/routePath';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
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
import { BookmarkListType } from './hooks/useBookmarkList';

interface BookmarkListProps {
  isEdit: boolean;
  isEditModalOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onDelete: (id: string) => void;
  bookmarkList: BookmarkListType[];
}

interface BookmarkItemProps {
  item: BookmarkListType;
  isEdit: boolean;
  onOpen: (id: string) => void;
}

const BookmarkItem = ({ item, isEdit, onOpen }: BookmarkItemProps) => {
  const imageUrl = item.cafes?.at(-1)?.mainImageUrl?.[0] || '';
  const itemCounts = item.cafes?.length || 0;

  return (
    <li className={bookmarkListItem}>
      <div className={subTitle}>
        {isEdit && (
          <CloseIcon
            className={closeIcon}
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              e.preventDefault();
              onOpen(item.id);
            }}
          />
        )}
        <div>{item.listName}</div>
      </div>
      <div className={bookmarkBasicImage}>
        {imageUrl ? (
          <Image src={imageUrl} alt={item.listName} width={163} height={191} />
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
  bookmarkList,
  isEdit,
  onDelete,
  onOpen,
  onClose,
  isEditModalOpen,
}: BookmarkListProps) {
  const [selectedId, setSelectedId] = useState<string>('');

  const handleOpen = (id: string) => {
    setSelectedId(id);
    onOpen();
  };

  return (
    <ul className={container}>
      {bookmarkList.map((item) =>
        isEdit ? (
          <div className={bookmarkLink}>
            <BookmarkItem key={item.id} item={item} isEdit={isEdit} onOpen={handleOpen} />
          </div>
        ) : (
          <Link
            key={item.id}
            href={{
              pathname: `${ROUTE_PATH.bookmarks}/${item.id}`,
              query: { listName: item.listName },
            }}
            className={bookmarkLink}
          >
            <BookmarkItem item={item} isEdit={isEdit} onOpen={handleOpen} />
          </Link>
        )
      )}
      <EditListModal
        id={selectedId}
        isOpen={isEditModalOpen}
        onClose={onClose}
        onDelete={onDelete}
        listName={bookmarkList.find((item) => item.id === selectedId)?.listName || ''}
      />
    </ul>
  );
}
