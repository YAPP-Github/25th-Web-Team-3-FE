import { color } from '@/styles/color.css';
import { caption } from '@/styles/typo.css';
import { style } from '@vanilla-extract/css';

export const hashtag = style({
  borderRadius: '0.3rem',
  backgroundColor: color.grayScale.gray200,
  color: color.grayScale.gray400,
  width: 'max-content',
  height: '2.8rem',
  padding: '0 0.8rem',
  display: 'flex',
  alignItems: 'center',
  ...caption,
});
