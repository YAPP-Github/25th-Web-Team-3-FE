import { ChangeEvent } from 'react';
import {
  addListCompleteButton,
  addListModalInput,
  contentsInputContainer,
  maxLengthText,
} from './AddListModal.css';

interface AddListModalContentsProps {
  listName: string;
  onChangeListName: (name: string) => void;
  addBookmarkList: () => void;
}

export default function AddListModalContents({
  listName,
  onChangeListName,
  addBookmarkList,
}: AddListModalContentsProps) {
  const listNameLength = listName.length;

  const onChangeModalContents = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeListName(e.target.value);
  };
  const hasContents = (contentsLength: number) => {
    if (contentsLength > 0) return true;
    return false;
  };

  return (
    <div className={contentsInputContainer}>
      <input
        onChange={onChangeModalContents}
        type="text"
        maxLength={20}
        className={addListModalInput}
        placeholder="리스트 이름을 입력해주세요"
      />
      <span className={maxLengthText}>{listNameLength}/20</span>
      <button
        className={addListCompleteButton({ isButtonActive: hasContents(listNameLength) })}
        disabled={!hasContents(listNameLength)}
        onClick={() => addBookmarkList()}
      >
        완료
      </button>
    </div>
  );
}
