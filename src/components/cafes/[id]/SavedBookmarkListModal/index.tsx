import Modal from '@/components/common/Modal';
import SavedBookmarkListModalContents from './SavedBookmarkListModalContents';
import { useState } from 'react';

interface SavedBookmarkListModalProps {
  isSavedBookmarkModalOpen: boolean;
  onClose: () => void;
  onSave: (checkedItems: { [key: string]: boolean }) => void;
}

export default function SavedBookmarkListModal({
  isSavedBookmarkModalOpen,
  onClose,
  onSave,
}: SavedBookmarkListModalProps) {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

  const onCheck = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const savedBookmarkList = JSON.parse(localStorage.getItem('bookmarkList') || '[]');

  return (
    <Modal
      title="새 리스트 추가"
      isOpen={isSavedBookmarkModalOpen}
      onClose={onClose}
      position="bottom"
    >
      <SavedBookmarkListModalContents
        savedBookmarkList={savedBookmarkList}
        checkedItems={checkedItems}
        onCheck={onCheck}
        onSave={() => onSave(checkedItems)}
      />
    </Modal>
  );
}