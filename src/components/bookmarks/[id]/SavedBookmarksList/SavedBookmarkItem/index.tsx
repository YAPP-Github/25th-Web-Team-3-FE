import { useCheckedItems } from '@/components/cafes/[id]/BookMarkButton/hooks/useCheckedItems';

import CheckBox from '../../CheckBox';
import Image from 'next/image';
import {
  listItem,
  listItemDivider,
  listItemLocation,
  listItemName,
  listItemTextBox,
} from './SavedBookmarkItem.css';
import { Cafe } from '@/components/bookmarks/BookmarkList/hooks/useBookmarkList';
export default function SavedBookmarkItem({
  cafe,
  isEdit,
  selectedIds,
  onItemCheck,
  listId,
}: {
  listId: string;
  cafe: Cafe;
  isEdit: boolean;
  selectedIds: string[];
  onItemCheck: (id: string) => void;
}) {
  const { onCheck } = useCheckedItems(cafe.id);

  const handleCheck = () => {
    onItemCheck(cafe.id);
    onCheck(listId);
  };

  return (
    <div key={cafe.id}>
      <li className={listItem}>
        {isEdit && (
          <CheckBox isEdit={isEdit} checked={selectedIds.includes(cafe.id)} onCheck={handleCheck} />
        )}
        <Image src={`${cafe?.mainImageUrl[0]}`} alt={cafe.name} width={75} height={75} />
        <div className={listItemTextBox}>
          <h2 className={listItemName}>{cafe.name}</h2>
          <p className={listItemLocation}>{cafe.location}</p>
        </div>
      </li>
      <div className={listItemDivider}></div>
    </div>
  );
}
