import CheckedBox from '@/shared/assets/Icon/checkedBox.svg';
import UnCheckedBox from '@/shared/assets/Icon/unCheckedBox.svg';

interface CheckBoxProps {
  isEdit: boolean;
  checked: boolean | undefined
  onCheck: () => void; 
}

export default function CheckBox({ isEdit, checked, onCheck }: CheckBoxProps) {
  const handleClick = () => {
    if (isEdit) {
      onCheck(); 
    }
  };

  return checked ? (
    <CheckedBox onClick={handleClick} />
  ) : (
    <UnCheckedBox onClick={handleClick} />
  );
}