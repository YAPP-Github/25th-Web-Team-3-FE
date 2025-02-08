import BookmarkBasicImage from '@/assets/Icon/bookmarkBasic.svg';
import CloseIcon from '@/assets/Icon/closeIcon.svg';
import { ROUTE_PATH } from '@/constants/routePath';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  bookmarkBasicImage,
  bookmarkListItem,
  closeIcon,
  container,
  listItemCounts,
  listItemCountsNumber,
  subTitle,
} from '../BookmarkList/BookmarkList.css';
import EditListModal from '../EditListModal';
import { BookmarkListType } from './hooks/useBookmarkList';
import Image from 'next/image';

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
  const [imageUrl, setImageUrl] = useState<string>('');
  const [itemCounts, setItemCounts] = useState<number>(0);

  useEffect(() => {
    const listData = localStorage.getItem('boomarkList');
    if (listData) {
      const parsedData = JSON.parse(listData);
      setImageUrl(parsedData[0]?.mainImageUrl[0] || '');
      setItemCounts(parsedData.length);
    }
  }, [item.listName]);

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
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={item.listName}
          className={bookmarkBasicImage}
          width={148}
          height={144}
        />
      ) : (
        <BookmarkBasicImage className={bookmarkBasicImage} />
      )}
      <div className={listItemCounts}>
        <span className={listItemCountsNumber}>{itemCounts}</span>
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
          <BookmarkItem key={item.id} item={item} isEdit={isEdit} onOpen={handleOpen} />
        ) : (
          <Link
            key={item.id}
            href={{
              pathname: `${ROUTE_PATH.bookmarks}/${item.id}`,
              query: { listName: item.listName },
            }}
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