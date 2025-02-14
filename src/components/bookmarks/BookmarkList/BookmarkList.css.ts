import { color } from '@/styles/color.css';
import { body1Bold } from '@/styles/typo.css';
import { ComplexStyleRule, style } from '@vanilla-extract/css';

export const container = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridAutoRows:'19.1rem',
  backgroundColor: color.grayScale.gray500,
  minHeight: '100svh',
  gap: '0.8rem',
  padding: '0.8rem',
});

export const bookmarkLink = style({
  textDecoration: 'none',
  minWidth: '16.3rem',
  height: '19.1rem',
  width: '100%',
  display: 'flex',
  justifyContent:'center', 
});

export const bookmarkListItem = style({
  position: 'relative',
  width: '16.3rem',
  backgroundColor: color.grayScale.gray100,
  cursor: 'pointer',
  padding: '0.8rem',
  height: '100%', 
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minWidth: '16.3rem',
  transition: 'transform 0.2s ease', 
  ':hover': {
    transform: 'translateY(-2px)'
  }
});

export const subTitle = style({
  ...body1Bold,
  color: color.grayScale.gray500,
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  marginBottom: '0.8rem',
});

export const closeIcon = style({
  position: 'absolute',
  top: '0.8rem',
  right: '0.8rem',
  cursor: 'pointer',
  zIndex: 1,
});

export const bookmarkBasicImage = style({
  position: 'relative',
  flex: 1,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
    '& img': {
      minWidth: '14.8rem',
      minHeight:'14.4rem',
      height: 'auto',
  }
}as ComplexStyleRule);

export const listItemCounts = style({
  position: 'absolute',
  bottom: '0rem',
  right: '0rem',
  width: '3.6rem',
  height: '3.6rem',
  backgroundColor: color.grayScale.gray500,
  opacity: 0.8,
  color: color.grayScale.gray100,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

});

export const listItemCountsNumber = style({
  fontWeight: 'bold',
});