import { color } from '@/styles/color.css';
import { body1 } from '@/styles/typo.css';
import { style } from '@vanilla-extract/css';

export const originList = style({
  display: 'inline-flex',
  flexDirection: 'column',
  gap: '0.7rem',
  marginTop: '0.8rem',
});
export const orginItem = style({
  ...body1,
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  color:color.grayScale.gray500,
});

export const countryImage = style({
  borderRadius: '0.1rem',
});
export const originItemText = style({
  color:color.grayScale.gray500,
})