import { color } from '@/styles/color.css';

import { style } from '@vanilla-extract/css';

export const body = style({
  background: color.grayScale.gray200,
  overscrollBehavior: 'none',
});

export const bodyInnerWrapper = style({
  position: 'relative',
  margin: '0 auto',
  maxWidth: '50rem',
});

export const rootContainer = style({
  overscrollBehavior: 'contain',
  height: '100svh',
  fontSize: '1.6rem',
  overflowY: 'auto',
  msOverflowStyle: 'none',
  background: color.grayScale.gray100,

  scrollbarWidth: 'none',
  position: 'relative',

  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});
