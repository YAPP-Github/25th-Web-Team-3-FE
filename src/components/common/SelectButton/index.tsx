import { PropsWithChildren } from 'react';
import { selectButton } from './SelectButton.css';
import BlackChevronDown from '@/assets/blackChevronDown.svg';
import WhiteChevronDown from '@/assets/whiteChevronDown.svg';

interface SelectButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  hasIcon?: boolean;
  isSelected?: boolean;
}

export default function SelectButton({
  hasIcon = false,
  isSelected = false,
  children,
  ...attributes
}: PropsWithChildren<SelectButtonProps>) {
  return (
    <button className={selectButton[isSelected ? 'selected' : 'default']} {...attributes}>
      {children}
      {hasIcon && <ChevronDownIcon isBlack={isSelected} />}
    </button>
  );
}

function ChevronDownIcon({ isBlack }: { isBlack: boolean }) {
  return isBlack ? <BlackChevronDown /> : <WhiteChevronDown />;
}
