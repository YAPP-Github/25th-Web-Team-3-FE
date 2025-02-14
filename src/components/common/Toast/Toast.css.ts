import { color } from '@/styles/color.css';
import { body1 } from '@/styles/typo.css';
import { style, keyframes } from '@vanilla-extract/css';

const slideUp = keyframes({
  from: {
    transform: 'translate(-50%, 100%)', 
    opacity: 0,
  },
  to: {
    transform: 'translate(-50%, -3.2rem)',
    opacity: 1,
  },
});

export const toastBox = style({
  ...body1,
  maxWidth: '29.5rem',
  position: 'fixed',
  bottom: '3.2rem',
  left: '50%',
  padding: '1.2rem 2rem',
  borderRadius: '0.4rem',
  transform: 'translate(-50%, -3.2rem)',
  backgroundColor: color.grayScale.gray400,
  color: color.grayScale.gray100,
  zIndex: 1000, 
  animation: `${slideUp} 0.3s ease-out`,
});
