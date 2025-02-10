import { color } from '@/styles/color.css';
import { caption, title4 } from '@/styles/typo.css';
import { keyframes, style } from '@vanilla-extract/css';

export const heroBanner = style({
  paddingTop: '3.2rem',
  background: color.grayScale.gray500,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const bannerTypo = style({
  margin: '2.474rem auto',

  '@media': {
    [`(max-width: 375px)`]: {
      width: '33.5rem',
    },
    [`(min-width: 376px) and (max-width: 500px)`]: {
      width: '35rem',
    },
    [`(min-width: 501px)`]: {
      width: '37.4rem',
      margin: '2.68rem auto',
    },
  },
});

// BannerCarousel
export const carousel = style({
  overflow: 'hidden',
  width: '100%',
  position: 'relative',
});

export const carouselWrapper = style({ display: 'flex' });

export const carouselSlide = style({
  flex: '0 0 100%',
  minWidth: 0,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  cursor: 'pointer',
});

export const carouselImage = style({
  objectFit: 'cover',

  '@media': {
    [`(max-width: 375px)`]: {
      width: '26.8rem',
      height: '26.8rem',
    },
    [`(min-width: 376px) and (max-width: 500px)`]: {
      width: '29.2rem',
      height: '29.2rem',
    },
    [`(min-width: 501px)`]: {
      width: '31.6rem',
      height: '31.6rem',
    },
  },
});

export const carouselSnap = style({ display: 'flex', flexDirection: 'column' });

export const bannerDescription = style({
  color: 'white',
  marginTop: '1.2rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const bannerText = style({
  lineHeight: '2.3rem',
  fontSize: '1.5rem',
  fontWeight: 600,

  '@media': {
    [`(min-width: 501px)`]: {
      ...title4,
    },
  },
});

export const bannerOrder = style({
  ...caption,
  '@media': {
    [`(min-width: 501px)`]: {
      fontSize: '1.6rem',
      lineHeight: '1.8rem',
      fontWeight: 400,
    },
  },
});

export const bannerLength = style({ color: '#777777' });

export const progressBarContainer = style({
  background: '#676767',
  height: '0.4rem',
  marginTop: '4rem',
});

export const autoplayProgress = keyframes({
  from: { transform: 'translateX(-100%)' },
  to: { transform: 'translateX(0)' },
});

export const progressBar = style({
  width: '100%',
  height: '100%',
  backgroundColor: '#BCBCBC',
  position: 'absolute',
  left: 0,
  transform: 'translateX(-100%)', // 기본 상태
  animationTimingFunction: 'linear',
  animationName: autoplayProgress,
});
