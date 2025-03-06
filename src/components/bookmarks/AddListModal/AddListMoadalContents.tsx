import { useInput } from '@/hooks/useInput';
import { useBookmarkStore } from '@/store/store';
import {
  addListCompleteButton,
  addListModalInput,
  contentsInputContainer,
  errorMessage,
  maxLengthText,
} from './AddListModal.css';

interface AddListModalContentsProps {
  onClose: () => void;
}

export default function AddListModalContents({ onClose }: AddListModalContentsProps) {
  const { createFolder } = useBookmarkStore((state) => state);
  const { input, resetInput, handleOnChange, error } = useInput('', 20);

  const handleAddBookmarkFoloder = (folderName: string) => {
    createFolder(folderName);
    resetInput();
    onClose();
  };

  const hasContents = (contentsLength: number) => {
    if (contentsLength > 0) return true;
    return false;
  };
  return (
    <div className={contentsInputContainer}>
      <input
        value={input}
        onChange={handleOnChange}
        type="text"
        className={addListModalInput}
        placeholder="리스트 이름을 입력해주세요"
      />
      <div className={errorMessage}>{error}</div>
      <span className={maxLengthText}>{input.length}/20</span>
      <button
        className={addListCompleteButton({ isButtonActive: hasContents(input.length) })}
        disabled={!hasContents(input.length)}
        onClick={() => handleAddBookmarkFoloder(input)}
      >
        완료
      </button>
    </div>
  );
}
