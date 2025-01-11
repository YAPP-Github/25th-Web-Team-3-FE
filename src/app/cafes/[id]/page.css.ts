import { ComplexStyleRule, style } from '@vanilla-extract/css';

export const headerImg = style({
  width: '100%',
  height: 'auto',
});

export const pickReason = style({
  padding: '1.6rem 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  fontWeight: '400',
  fontSize: '1.4rem',
  lineHeight: '1.96rem',
});
export const divider = style({
  width: '100%',
  height: '1px',
  backgroundColor: '#000000',
  marginTop: '2.716rem',
  marginBottom: '2.542rem',
});

export const cafesDetailMain = style({
  padding: '0 20px',
  '& section > h1 > span': {
    marginLeft: '0.8rem',
    fontSize: '1.5rem',
    fontWeight: '400',
  },
  '& section > data': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#4F4F4F',
    fontSize: '1.5rem',
    marginTop: '0.4rem',
  },
} as ComplexStyleRule);
