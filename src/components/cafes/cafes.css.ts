import { style } from '@vanilla-extract/css';

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

// RegionSelectModal
export const regionSelectModalContent = style({
  display: 'flex',
  flexDirection: 'column',
});

export const regionSelectModalTitle = style({
  fontSize: '1.8rem',
  fontWeight: 600,
  margin: '0.8rem 0 1.2rem 0',
});

export const regionItem = style({
  height: '5.6rem',
  lineHeight: '5.6rem',
  fontSize: '1.5rem',
  fontWeight: 400,
  cursor: 'pointer',
});

export const closeButtonWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderTop: '1px solid #eeeeee',
  height: '4.7rem',
});

export const closeButton = style({
  fontSize: '1.5rem',
  fontWeight: 400,
  cursor: 'pointer',
  width: '100%',
});

// FilterButtons
const baseRegionFilterButton = {
  padding: '0.9rem 2rem',
  fontSize: '1.5rem',
  background: '#F6F8F9',
  border: '1px solid #E9E9E9',
  borderRadius: '4.3rem',
  cursor: 'pointer',
} as const;

export const RegionFilterButton = {
  default: style({ ...baseRegionFilterButton, color: '#a6a6a6' }),
  isSelected: style({ ...baseRegionFilterButton, color: '#000000' }),
};
