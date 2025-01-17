import { color } from '@/styles/color.css';
import { body1, etc, title3 } from '@/styles/typo.css';
import { ComplexStyleRule, style } from '@vanilla-extract/css';

export const cafesIdLayout = style({
  backgroundColor: color.grayScale.gray500,
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1.2rem 1.6rem',
  backgroundColor: color.grayScale.gray100,
});

export const title = style({
  backgroundColor: color.grayScale.gray100,
  padding: '0 2rem',
  '& h1 > span': {
    marginLeft: '0.8rem',
    fontSize: '1.5rem',
    fontWeight: '400',
  },
  '& div': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#4F4F4F',
    fontSize: '1.5rem',
    marginTop: '0.4rem',
    paddingBottom: '1.6rem',
  },
} as ComplexStyleRule);

export const titleImg = style({
  width: '100%',
  height: 'auto',
});

export const subTitle = style({
  ...title3,
  marginBottom: '1.6rem',
});

export const pickReasonBox = style({
  backgroundColor: color.grayScale.gray100,
  color: color.grayScale.gray500,
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
});

export const pickReason = style({
  ...body1,
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});
export const recoCoffeeBeanBox = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
  padding: '2.4rem 2rem',
  background: color.grayScale.gray100,
  color: color.grayScale.gray500,
  '& h2': {
    ...etc,
  },
} as ComplexStyleRule);

export const divider = style({
  height: '0.1rem',
  border: 'dashed 0.1rem',
});

export const cafesDetailMain = style({
  padding: '2.4rem 2rem',
  color: color.grayScale.gray100,
  display: 'flex',
  flexDirection: 'column',
  gap: '5.6rem',
} as ComplexStyleRule);

export const toggleBox = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '0.4rem 0',
});

export const toggleInput = style({
  opacity: 0,
  position: 'absolute',
  width: 0,
  height: 0,
});

export const toggleLabel = style({
  transform: 'rotate(270deg)',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  transition: 'transform 0.2s ease-in-out',
  selectors: {
    [`${toggleInput}:checked ~ div &`]: {
      transform: 'rotate(90deg)',
    },
  },
});

export const toggleContent = style({
  display: 'none',
  marginTop: '1.6rem',
  selectors: {
    [`${toggleInput}:checked ~ &`]: {
      display: 'block',
      transition: 'transform 1s ease-in-out',
    },
  },
});
