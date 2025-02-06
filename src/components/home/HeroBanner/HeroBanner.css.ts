import { color } from '@/styles/color.css';
import { body1, caption } from '@/styles/typo.css';
import { style } from '@vanilla-extract/css';

export const heroBanner = style({
  paddingTop: '3.2rem',
  background: color.grayScale.gray500,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const bannerTypo = style({
  width: '33.5rem',
  margin: '2.474rem auto',
  ...body1,
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

export const carouselImage = style({ objectFit: 'cover' });

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
});

export const bannerOrder = style({ ...caption });

export const bannerLength = style({ color: '#777777' });

export const progressBarContainer = style({
  background: '#676767',
  height: '0.4rem',
  marginTop: '4rem',
});

export const progressBar = style({
  height: '100%',
  backgroundColor: '#BCBCBC',
  transition: 'width 0.3s ease-in-out',
});
