import PopUpButton from '@/components/common/PopUpButton';
import { useBookmarkStore } from '@/store/store';
import { buttonSection, editModalContainer, subTitle } from './EditListModal.css';

interface EditListModalContentsProps {
  onClose: () => void;
  id: string | null;
}
export default function EditListModalContents({ onClose, id }: EditListModalContentsProps) {
  
  const { deleteFolder } = useBookmarkStore((state) => state);

  const handleDelete = (id: string | null) => {
    deleteFolder(id);
    onClose();
  };
  return (
    <div className={editModalContainer}>
      <p className={subTitle}>폴더에 저장해 놓은 카페가 함께 삭제됩니다.</p>
      <section className={buttonSection}>
        <PopUpButton title="아니오" onClick={onClose} />
        <PopUpButton title="네" color="black" onClick={() => handleDelete(id)} />
      </section>
    </div>
  );
}
