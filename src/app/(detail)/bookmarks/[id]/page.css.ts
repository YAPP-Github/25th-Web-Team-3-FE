import { color } from '@/styles/color.css';
import { button1, title3 } from '@/styles/typo.css';
import { style } from '@vanilla-extract/css';

export const header = style({
  backgroundColor: color.grayScale.gray500,
  color: color.grayScale.gray100,
  padding: '1.5rem 1.6rem 1.5rem 1.2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});
export const headerTitle = style({
  ...title3,
});
export const headerInfo = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
});
export const editButton = style({
  ...button1,
  color:color.grayScale.gray100,
  cursor: 'pointer',
});

export const backButton = style({
  cursor: 'pointer',
});
export const container = style({

});
