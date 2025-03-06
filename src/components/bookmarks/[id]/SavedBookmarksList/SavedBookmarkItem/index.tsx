import { ROUTE_PATH } from '@/constants/routePath';
import { useBookmarkStore } from '@/store/store';
import { BookmarkCafe } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import CheckBox from '../../CheckBox';
import {
  listItem,
  listItemDivider,
  listItemLocation,
  listItemName,
  listItemTextBox,
  listSection,
} from './SavedBookmarkItem.css';
interface SavedBookmarkItemProps {
  cafe: BookmarkCafe;
  isEdit: boolean;
  folderId: string;
}
export default function SavedBookmarkItem({ cafe, isEdit, folderId }: SavedBookmarkItemProps) {
  const { checkBookmark } = useBookmarkStore((state) => state);

  return (
    <li>
      <div className={listSection}>
        {isEdit && (
          <div>
            <CheckBox
              isEdit={isEdit}
              checked={!cafe.isBookmarked}
              onCheck={() => checkBookmark(folderId, cafe)}
            />
          </div>
        )}
        <Link href={`${ROUTE_PATH.cafes}/${cafe.id}`}>
          <div className={listItem}>
            <Image src={`${cafe?.mainImageUrl[0]}`} alt={cafe.name} width={75} height={75} />
            <div className={listItemTextBox}>
              <h2 className={listItemName}>{cafe.name}</h2>
              <p className={listItemLocation}>{cafe.location}</p>
            </div>
          </div>
        </Link>
      </div>
      <div className={listItemDivider}></div>
    </li>
  );
}
