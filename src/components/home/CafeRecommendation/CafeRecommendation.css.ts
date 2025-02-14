import { body1Bold, body2, title3 } from '@/styles/typo.css';
import { style } from '@vanilla-extract/css';

// CafeItem
export const cafeItem = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  width: '14rem',
});

export const cafeImage = style({ objectFit: 'cover' });

export const cafeName = style({
  ...body1Bold,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const cafeNearestStation = style({
  ...body2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

// RecommendedCafeList
export const recommendedCafeList = style({
  display: 'flex',
  gap: '1.2rem',
  overflowX: 'auto',
  scrollbarWidth: 'none',
});

// CafeRecommendation
export const cafeRecommendationItem = style({
  padding: '3.2rem 0 0 2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
});

export const CafeRecommendationName = style({ ...title3 });
