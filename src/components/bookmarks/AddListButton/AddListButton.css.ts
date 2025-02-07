import { color } from '@/styles/color.css';
import { button2 } from '@/styles/typo.css';
import { style } from '@vanilla-extract/css';

export const addListButtonContainer = style({
  display: 'flex',
  justifyContent: 'center',
  position: 'fixed',
  bottom: 'calc(5.7rem + 1.6rem)',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '100%',
});

export const addListButton = style({
  ...button2,
  backgroundColor: color.grayScale.gray100,
  color: color.grayScale.gray500,
  borderRadius: '99.9rem',
  padding: '1rem 1.6rem',
  cursor: 'pointer',
});
