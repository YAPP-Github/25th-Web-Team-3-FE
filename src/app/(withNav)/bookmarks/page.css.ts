import { color } from '@/styles/color.css';
import { body1Bold, title3 } from '@/styles/typo.css';
import { style } from '@vanilla-extract/css';

export const title = style({
  ...title3,
  color: color.grayScale.gray100,
  padding: '1.5rem 0',
});
export const container = style({
  height: '100%',
  backgroundColor: color.grayScale.gray500,
  padding: '0 2rem',

});
export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});
export const editButton = style({
  ...body1Bold,
  color:color.grayScale.gray100,
  cursor:'pointer',
});
