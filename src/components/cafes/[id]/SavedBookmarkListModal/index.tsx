import Modal from '@/components/common/Modal';
import { LocalstorageBookmarkList } from '../BookMarkButton';
import SavedBookmarkListModalContents from './SavedBookmarkListModalContents';

interface SavedBookmarkListModalProps {
  isSavedBookmarkModalOpen: boolean;
  onCloseeSavedBookmarkModal: () => void;
  onSave: (checkedItems: { [key: string]: boolean }) => void;
  savedBookmarkList: LocalstorageBookmarkList[];
  checkedItems: { [key: string]: boolean };
  onCheck: (id: string) => void;
  addBookmarkList: (listName: string) => void;
}

export default function SavedBookmarkListModal({
  isSavedBookmarkModalOpen,
  onCloseeSavedBookmarkModal,
  onSave,
  savedBookmarkList,
  checkedItems,
  onCheck,
  addBookmarkList,
}: SavedBookmarkListModalProps) {
  return (
    <Modal
      title="북마크 저장"
      isOpen={isSavedBookmarkModalOpen}
      onClose={onCloseeSavedBookmarkModal}
      position="bottom"
    >
      <SavedBookmarkListModalContents
        savedBookmarkList={savedBookmarkList}
        checkedItems={checkedItems}
        onCheck={onCheck}
        onSave={() => onSave(checkedItems)}
        addBookmarkList={addBookmarkList}
      />
    </Modal>
  );
}
