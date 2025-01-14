import { body1 } from './../../styles/typo.css';
import { title3 } from '@/styles/typo.css';
import { style } from '@vanilla-extract/css';

// CafeItem
export const cafeItemHeading = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
  marginBottom: '0.8rem',
});

export const cafeItemName = style({
  ...title3,
});

export const cafeLocation = style({
  ...body1,
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
  position: 'relative',
  width: '100%',
  display: 'flex',
  gap: '0.2rem',
  height: '14rem',
});

export const cafeImageWrapper = style({
  flex: 1,
  position: 'relative',
});

export const cafeImage = style({
  objectFit: 'cover',
});

export const cafeImageOverCount = style({
  color: 'white',
  position: 'absolute',
  right: 0,
  bottom: 0,
  width: '3.6rem',
  height: '3.6rem',
  background: 'rgba(17, 17, 17, 0.8)',
  textAlign: 'center',
  lineHeight: '3.6rem',
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
  padding: '2.4rem 2rem',
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
