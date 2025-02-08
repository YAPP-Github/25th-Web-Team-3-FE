import Modal from '@/components/common/Modal';
import AddListModalContents from './AddListMoadalContents';

interface AddListModalProps {
  isOpen: boolean;
  onClose: () => void;
  listName: string;
  onChangeListName: (name: string) => void;
  addBookmarkList: () => void;
}

export default function AddListModal({
  isOpen,
  onClose,
  listName,
  onChangeListName,
  addBookmarkList,
}: AddListModalProps) {
  return (
    <Modal title="새 리스트 추가" isOpen={isOpen} onClose={onClose} position="bottom">
      <AddListModalContents
        listName={listName}
        onChangeListName={onChangeListName}
        addBookmarkList={addBookmarkList}
      />
    </Modal>
  );
}
