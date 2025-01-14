import { style } from '@vanilla-extract/css';

// CafeItem
export const cafeItemHeading = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
  marginBottom: '0.8rem',
});

export const cafeItemName = style({
  fontSize: '2rem',
  fontWeight: 600,
  lineHeight: '3.4rem',
});

export const tagList = style({
  display: 'flex',
  overflowY: 'auto',
  gap: '0.6rem',
  whiteSpace: 'nowrap',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  marginBottom: '1.6rem',
});

export const cafeImageList = style({
  display: 'flex',
  overflowX: 'auto',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
});

export const temporaryTag = style({
  backgroundColor: '#ECECEC80',
  width: 'fit-content',
  padding: '0.3rem 0.6rem',
  borderRadius: '0.4rem',
  lineHeight: '2.2rem',
});

// CafeList
export const cafeListContainer = style({
  padding: '3.6rem 0 2.4rem 2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
});

// FilterButtons
export const selectButtonsContainer = style({
  display: 'flex',
  gap: '0.8rem',
  padding: '1.6rem 0 1.6rem 2rem',
  background: 'black',
});
