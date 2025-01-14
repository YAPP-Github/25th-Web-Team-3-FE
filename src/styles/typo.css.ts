import { createGlobalTheme, style } from '@vanilla-extract/css';
import { color } from './color.css';

export const fontVars = {
  fontFamily: {
    pretendard: 'Pretendard, sans-serif',
    dotgothic: 'DotGothic16, sans-serif',
  },
  fontWeight: {
    regular: '400',
    semibold: '600',
    bold: '700',
  },
  fontSize: {
    title1: '2.8rem',
    title2: '2.4rem',
    title3: '2.0rem',
    title4: '1.8rem',
    body1: '1.5rem',
    body2: '1.4rem',
    caption: '1.4rem',
    button1: '1.6rem',
    button2: '1.4rem',
    etc: '3.2rem',
  },
  lineHeight: {
    title1: '4.0rem',
    title2: '3.4rem',
    title3: '2.6rem',
    title4: '2.4rem',
    body1: '2.4rem',
    body2: '2.0rem',
    caption: '1.8rem',
    button1: '2.6rem',
    button2: '2.2rem',
    etc: '4.4rem',
  },
  letterSpacing: {
    tight: '-0.6%',
    normal: '0%',
    loose: '-0.2%',
  },
};

export const title1 = {
  fontFamily: fontVars.fontFamily.pretendard,
  fontWeight: fontVars.fontWeight.bold,
  fontSize: fontVars.fontSize.title1,
  lineHeight: fontVars.lineHeight.title1,
  letterSpacing: fontVars.letterSpacing.tight,
};

export const title2 = {
  fontFamily: fontVars.fontFamily.pretendard,
  fontWeight: fontVars.fontWeight.bold,
  fontSize: fontVars.fontSize.title2,
  lineHeight: fontVars.lineHeight.title2,
  letterSpacing: fontVars.letterSpacing.normal,
};

export const title3 = {
  fontFamily: fontVars.fontFamily.pretendard,
  fontWeight: fontVars.fontWeight.bold,
  fontSize: fontVars.fontSize.title3,
  lineHeight: fontVars.lineHeight.title3,
  letterSpacing: fontVars.letterSpacing.normal,
};

export const title4 = {
  fontFamily: fontVars.fontFamily.pretendard,
  fontWeight: fontVars.fontWeight.bold,
  fontSize: fontVars.fontSize.title4,
  lineHeight: fontVars.lineHeight.title4,
  letterSpacing: fontVars.letterSpacing.loose,
};

export const body1 = {
  fontFamily: fontVars.fontFamily.pretendard,
  fontWeight: fontVars.fontWeight.regular,
  fontSize: fontVars.fontSize.body1,
  lineHeight: fontVars.lineHeight.body1,
  letterSpacing: fontVars.letterSpacing.loose,
};

export const body1Bold = {
  fontFamily: fontVars.fontFamily.pretendard,
  fontWeight: fontVars.fontWeight.bold,
  fontSize: fontVars.fontSize.body1,
  lineHeight: fontVars.lineHeight.body1,
  letterSpacing: fontVars.letterSpacing.loose,
};

export const body2 = {
  fontFamily: fontVars.fontFamily.pretendard,
  fontWeight: fontVars.fontWeight.regular,
  fontSize: fontVars.fontSize.body2,
  lineHeight: fontVars.lineHeight.body2,
  letterSpacing: fontVars.letterSpacing.loose,
};

export const body2Bold = {
  fontFamily: fontVars.fontFamily.pretendard,
  fontWeight: fontVars.fontWeight.bold,
  fontSize: fontVars.fontSize.body2,
  lineHeight: fontVars.lineHeight.body2,
  letterSpacing: fontVars.letterSpacing.loose,
};

export const caption = {
  fontFamily: fontVars.fontFamily.pretendard,
  fontWeight: fontVars.fontWeight.regular,
  fontSize: fontVars.fontSize.caption,
  lineHeight: fontVars.lineHeight.caption,
  letterSpacing: fontVars.letterSpacing.loose,
};

export const button1 = {
  fontFamily: fontVars.fontFamily.pretendard,
  fontWeight: fontVars.fontWeight.semibold,
  fontSize: fontVars.fontSize.button1,
  lineHeight: fontVars.lineHeight.button1,
  letterSpacing: fontVars.letterSpacing.tight,
};

export const button2 = {
  fontFamily: fontVars.fontFamily.pretendard,
  fontWeight: fontVars.fontWeight.semibold,
  fontSize: fontVars.fontSize.button2,
  lineHeight: fontVars.lineHeight.button2,
  letterSpacing: fontVars.letterSpacing.tight,
};

//Bean Card
export const etc = {
  fontFamily: fontVars.fontFamily.dotgothic,
  fontWeight: fontVars.fontWeight.regular,
  fontSize: fontVars.fontSize.etc,
  lineHeight: fontVars.lineHeight.etc,
  letterSpacing: fontVars.letterSpacing.normal,
};

export const h1 = style({
  ...etc,
  fontWeight:fontVars.fontSize.title1,
  color:color.flavor.floral,
});
