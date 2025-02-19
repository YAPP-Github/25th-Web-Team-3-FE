import { color } from '@/styles/color.css';
import { style } from '@vanilla-extract/css';

export const mainImageCarouselContainer = style({
  width: '100%',
  overflow: 'hidden',
});

export const mainImageCarousellList = style({
  display: 'flex',
});

export const mainImageCarouselListItem = style({
  flex: '0 0 100%',
  minWidth: 0,
  position: 'relative',
});
export const mainImageCarouselCounts = style({
  backgroundColor: color.grayScale.gray500,
  opacity: '80%',
  position: 'absolute',
  right: '1.6rem',
  bottom: '1.6rem',
  padding:'0.4rem 0.8rem',
});
export const mainImageCarouselCurrentNumber = style({
  color: color.grayScale.gray100,
});
export const mainImageCarouselAllNumber = style({
  color: color.grayScale.gray400,
});

export const titleImg = style({
  width: '100%',
  objectFit: 'cover',
});
