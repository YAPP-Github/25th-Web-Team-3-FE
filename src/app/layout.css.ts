import { style } from '@vanilla-extract/css';

export const rootContainer = style({
  maxWidth: '50rem',
  margin: '0 auto',
  height: '100vh',
  fontSize: '1.6rem',
  border: '0.5px solid #9c9c9c',
  overflowY: 'auto',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',

  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});
