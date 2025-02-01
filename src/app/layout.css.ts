import { color } from '@/styles/color.css';
import { style } from '@vanilla-extract/css';

export const body = style({
  background: color.grayScale.gray200,
});

export const rootContainer = style({
  maxWidth: '50rem',
  margin: '0 auto',
  height: '100vh',
  fontSize: '1.6rem',
  overflowY: 'auto',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  background: color.grayScale.gray100,

  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});
