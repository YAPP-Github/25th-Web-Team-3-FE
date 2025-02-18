import { popUpButton } from './PopUpButton.css';

type PopUpButtonColor = 'white' | 'black';
type PopUpButtonOpacity = 'regular' | 'light';
interface PopUpButton {
  title: string;
  color?: PopUpButtonColor;
  opacity?: PopUpButtonOpacity;
  onClick: (...args: string[]) => void;
}

export default function PopUpButton({
  title,
  color = 'white',
  opacity = 'regular',
  onClick,
}: PopUpButton) {
  const isDisabled = opacity === 'light';
  return (
    <button disabled={isDisabled} className={popUpButton({ color: color, opacity: opacity })} onClick={() => onClick()}>
      {title}
    </button>
  );
}
