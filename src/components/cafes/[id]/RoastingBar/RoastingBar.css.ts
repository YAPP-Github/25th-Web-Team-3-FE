import { color } from '@/styles/color.css';
import { body1 } from '@/styles/typo.css';
import {globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const roastingBar = style({
  display: 'flex',
  width: '100%',
  gap:'0.4rem',
  height: '0.8rem',
  marginTop: '1.2rem',
  backgroundColor: color.grayScale.gray100,
});
export const roastingSegment = recipe({
  base: {
    flex: 1,
    height: '100%',
    position: 'relative',
    color: color.grayScale.gray400,
    backgroundColor: color.grayScale.gray300,
  },
  variants: {
    roastingLevel: {
      light: {
        selectors: {
          '&': {
            backgroundColor: color.grayScale.gray500,
          },
        },
      },
      medium: {
        selectors: {
          '&': {
            backgroundColor: color.grayScale.gray500,
          },
        },
      },
      dark: {
        selectors: {
          '&': {
            backgroundColor: color.grayScale.gray500,
          },
        },
      },
    },
  },
});
export const roastingStatus = recipe({
  base: {
    ...body1,
    display: 'flex',
    justifyContent: 'space-between',
    color: color.grayScale.gray300,
  },
  variants: {
    roastingLevel: {
      light: { color: color.grayScale.gray500 },
      medium: { color: color.grayScale.gray500 },
      dark: { color: color.grayScale.gray500 },
    },
  },
});
export const roastingText = recipe({
  base: {
    color: color.grayScale.gray400,
    flex: '1',
  },
  variants: {
    roastingLevel: {
      true: {
        color: color.grayScale.gray500,
      },
    },
  },
});

globalStyle(`${roastingStatus()} span:nth-child(2)`, {
  textAlign: 'center',
});

globalStyle(`${roastingStatus()} span:nth-child(3)`, {
  textAlign: 'right',
});
