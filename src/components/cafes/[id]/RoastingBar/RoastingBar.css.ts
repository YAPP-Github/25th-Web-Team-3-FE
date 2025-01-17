import { color } from '@/styles/color.css';
import { body1 } from '@/styles/typo.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const roastingBar = style({
  display: 'flex',
  width: '100%',
  height: '0.8rem',
  marginTop: '1.2rem',
  backgroundColor: color.grayScale.gray200,
});
export const roastingSegment = recipe({
  base: {
    flex: 1,
    height: '100%',
    position: 'relative',
    color: color.grayScale.gray400,
    selectors: {
      '&:not(:last-child)': {
        borderRight: `1px solid ${color.grayScale.gray500}`,
      },
    },
  },
  variants: {
    isActive: {
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
    color: color.grayScale.gray400,
  },
  variants: {
    isActive: {
      light: { color: color.grayScale.gray500 },
      medium: { color: color.grayScale.gray500 },
      dark: { color: color.grayScale.gray500 },
    },
  },
});

export const roastingSpan = style({
  selectors: {
    '&:nth-child(1)': {
      color: color.grayScale.gray500,
    },
    '&:nth-child(2)': {
      color: color.grayScale.gray500,
    },
    '&:nth-child(3)': {
      color: color.grayScale.gray500,
    },
  },
});
