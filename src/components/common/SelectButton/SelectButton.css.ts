import { style } from '@vanilla-extract/css';
import { button2 } from '@/styles/typo.css';
import { color } from '@/styles/color.css';

const baseSelectButton = {
  ...button2,
  padding: '0.55rem 1.6rem',
  borderRadius: 999,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '0.2rem',
};

export const selectButton = {
  default: style({
    ...baseSelectButton,
    border: `1px solid ${color.grayScale.gray100}`,
    background: color.grayScale.gray500,
    color: color.grayScale.gray100,
  }),
  selected: style({
    ...baseSelectButton,
    background: color.grayScale.gray100,
    color: color.grayScale.gray500,
  }),
};
