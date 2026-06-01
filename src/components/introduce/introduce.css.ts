import { color } from '@/shared/styles/color.css';
import { body1, title2, title4 } from '@/shared/styles/typo.css';
import { style } from '@vanilla-extract/css';

// Introduce Page
export const introducePage = style({ padding: '2.3rem 2rem 8rem 2rem', cursor: 'pointer' });

// FullPageCarousel
export const progressBarContainer = style({ background: '#BCBCBC' });

export const progressBar = style({
  background: '#777777',
  height: '0.4rem',
  marginBottom: '1.6rem',
  transition: 'all ease-out 0.3s',
});

export const carouselContainer = style({ overflow: 'hidden' });

export const carouselWrapper = style({ display: 'flex', gap: '2rem' });

export const carouselSlide = style({ flex: '0 0 100%', minWidth: 0, userSelect: 'none' });

// IntroduceMain
export const introMainTitle = style({ marginBottom: '2.1rem', ...title2 });

export const introMainImage = style({ marginBottom: '2rem', width: '100%', height: 'auto' });

export const introMainSubTitle = style({ marginBottom: '1.3rem', ...title4 });

export const introMainDescription = style({ ...body1 });

// IntroduceTemplate
export const introTitle = style({ marginBottom: '2.6rem', ...title2 });

export const introSubTitle = style({
  marginBottom: '1.3rem',
  display: 'flex',
  alignItems: 'center',
  ...title4,
});

export const introDescription = style({ marginBottom: '2rem', ...body1 });

export const introImage = style({ width: '100%', height: 'auto' });

// IntroduceEnd
export const introEndTitle = style({ marginBottom: '4.3rem', ...title2 });

export const introEndImage = style({
  padding: '0 -2rem',
  width: '100%',
  height: 'auto',
  marginBottom: '1.6rem',
});

export const introEndDescription = style({ textAlign: 'center', marginBottom: '1.6rem', ...body1 });

export const introEndSeparator = style({
  width: '100%',
  borderTop: `1px dashed ${color.grayScale.gray500}`,
  margin: '2.1rem 0',
});
