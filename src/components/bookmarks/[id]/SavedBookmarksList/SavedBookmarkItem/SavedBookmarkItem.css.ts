import { color } from '@/styles/color.css';
import { body1, body1Bold } from '@/styles/typo.css';
import { style } from '@vanilla-extract/css';

export const listContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '2rem 2rem',
  justifyContent: 'space-between',
});
export const listItem = style({
  display: 'flex',
  gap: '1.2rem',
  alignItems: 'center',
  width:'100%'
});
export const listItemTextBox = style({
  padding: '1.2rem 0',
});

export const listItemName = style({
  ...body1Bold,
});
export const listItemLocation = style({
  ...body1,
  color: color.grayScale.gray400,
});

export const listItemDivider = style({
  width: '100%',
  marginTop: '1rem',
  borderTop: '0.1rem solid #F0F0F0',
});

