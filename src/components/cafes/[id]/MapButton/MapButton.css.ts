import { color } from '@/styles/color.css';
import { button2 } from '@/styles/typo.css';
import { style } from '@vanilla-extract/css';

export const mapButton = style({
  ...button2,
  backgroundColor: color.grayScale.gray500,
  borderRadius: '0.3rem',
  width: '6.3rem',
  height: '3.6rem',
  border: 'none',
  color: color.grayScale.gray100,
  cursor: 'pointer',
});
