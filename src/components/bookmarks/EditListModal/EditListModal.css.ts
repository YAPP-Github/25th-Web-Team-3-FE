import { color } from '@/shared/styles/color.css';
import { body1, title4 } from '@/shared/styles/typo.css';
import { style } from '@vanilla-extract/css';

export const title = style({
  ...title4,
  color: color.grayScale.gray500,
});
export const subTitle = style({
  ...body1,
  color: color.grayScale.gray400,
});
export const editModalContainer = style({
  marginTop: '-2.0rem',
});
export const buttonSection = style({
  marginTop: '1.6rem',
  display: 'flex',
  gap: '0.8rem',
});
