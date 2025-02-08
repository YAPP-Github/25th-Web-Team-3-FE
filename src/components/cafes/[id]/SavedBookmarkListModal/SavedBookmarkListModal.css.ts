import { color } from '@/styles/color.css';
import { body1Bold, fontVars } from '@/styles/typo.css';
import { style } from '@vanilla-extract/css';

export const savedBookmarkModalContainer = style({
  color: color.grayScale.gray500,
  display:'flex',
  flexDirection:'column',
  gap:"1.6rem"
  
});
export const savedBookmarkModalHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  
});
export const savedBookmarkModalSubTitle = style({
  ...body1Bold,
});
export const addListButton = style({
  fontWeight: fontVars.fontWeight.semibold,
  fontSize: '1.4rem',
  lineHeight: '2.2rem',
  letterSpacing: fontVars.letterSpacing.tight,
  textDecoration: 'underline',
  cursor: 'pointer',
});

export const savedBookmarkListContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom:'1.6rem'
});
