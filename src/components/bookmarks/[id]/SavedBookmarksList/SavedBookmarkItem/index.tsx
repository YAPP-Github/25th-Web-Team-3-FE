import { useCheckedItems } from '@/components/cafes/[id]/BookMarkButton/hooks/useCheckedItems';

import { Cafe } from '@/components/bookmarks/BookmarkList/hooks/useBookmarkList';
import Image from 'next/image';
import CheckBox from '../../CheckBox';
import {
  listItem,
  listItemDivider,
  listItemLocation,
  listItemName,
  listItemTextBox
} from './SavedBookmarkItem.css';
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
          <div>
            <CheckBox
              isEdit={isEdit}
              checked={selectedIds.includes(cafe.id)}
              onCheck={handleCheck}
            />
          </div>
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
