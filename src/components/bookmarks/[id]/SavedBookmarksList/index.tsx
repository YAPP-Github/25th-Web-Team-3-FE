import PopUpButton from '@/components/common/PopUpButton';
import Image from 'next/image';
import CheckBox from '../CheckBox';
import {
  buttonSection,
  listContainer,
  listItem,
  listItemDivider,
  listItemLocation,
  listItemName,
  listItemTextBox,
  nonListButton,
  nonListContents,
  nonListText,
  nonListTitle
} from './SavedBookmark.css';
import { useRouter } from 'next/navigation';
import { ROUTE_PATH } from '@/constants/routePath';

interface SavedBookmarkListProps {
  detailFromBookmarkList: {
    id: string;
    name: string;
    location: string;
    mainImageUrl: string;
  }[];
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  selectedIds: string[];
  setSelectedIds: React.Dispatch<React.SetStateAction<string[]>>;
  onDelete: (ids: string[]) => void;
}

export default function SavedBookmarkList({
  detailFromBookmarkList,
  isEdit,
  setIsEdit,
  selectedIds,
  setSelectedIds,
  onDelete,
}: SavedBookmarkListProps) {
  const handleCheck = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };
  const router=useRouter ()
  return (
    <ul className={listContainer}>
      {detailFromBookmarkList.length > 0 ? (
        detailFromBookmarkList.map((bookmark) => (
          <div key={bookmark.id}>
            <li className={listItem}>
              {isEdit && (
                <CheckBox
                  isEdit={isEdit}
                  checked={selectedIds.includes(bookmark.id)} // 현재 북마크가 선택되었는지 여부
                  onCheck={() => handleCheck(bookmark.id)} // 체크 상태 변경 시 호출할 함수
                />
              )}
              <Image
                src={`${bookmark.mainImageUrl}`}
                alt={`${bookmark.name}`}
                width={75}
                height={75}
              />
              <div className={listItemTextBox}>
                <h2 className={listItemName}>{bookmark.name}</h2>
                <p className={listItemLocation}>{bookmark.location}</p>
              </div>
            </li>
            <div className={listItemDivider}></div>
          </div>
        ))
      ) : (
        <div className={nonListContents}>
          <h2 className={nonListTitle}>저장된 카페가 없어요</h2>
          <p className={nonListText}>마음에 드는 카페를 지정해보세요</p>
          <button className={nonListButton} onClick={()=>router.push(ROUTE_PATH.cafes)}>카페 둘러보기</button>
        </div>
      )}
      {isEdit && (
        <section className={buttonSection}>
          <PopUpButton
            title="취소"
            onClick={() => {
              setIsEdit(false);
              setSelectedIds([]);
            }}
          />
          <PopUpButton
            title="선택 삭제"
            color="black"
            onClick={() => {
              onDelete(selectedIds);
              setSelectedIds([]);
              setIsEdit(false);
            }}
          />
        </section>
      )}
    </ul>
  );
}
