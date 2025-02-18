import { caption } from '@/styles/typo.css';
import { ComplexStyleRule, style } from '@vanilla-extract/css';

export const IconWithHashTagList = style({
  display: 'flex',
  width: '100%',
  gap: '0.8rem',
  justifyContent: 'space-around',
  whiteSpace: 'nowrap',
  '@media (max-width: 374px)': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '0.8rem',
  },
} as ComplexStyleRule);
export const IconWithHashTagListItem = style({
  ...caption,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 0.6rem',
});
export const tagName = style({
  marginTop: '1.1rem',
});
