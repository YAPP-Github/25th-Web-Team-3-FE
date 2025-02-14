import { color } from '@/styles/color.css';
import { body1, body1Bold, fontVars } from '@/styles/typo.css';
import { style } from '@vanilla-extract/css';

export const savedBookmarkModalContainer = style({
  color: color.grayScale.gray500,
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
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
  flexDirection:'column',

 
});
export const savedBookmarkListBox= style({
  display:'flex',
  justifyContent: 'space-between',
  marginBottom: '1.6rem',
  gap: '1.2rem',
  alignItems: 'center',
});
export const savedBookmarkListContents = style({
  display:'flex',
  gap:'1.2rem'
});
export const savedBookmarkListTextBox = style({
  padding: '1.2rem 0',
});
export const savedBookmarkListTitle = style({
  ...body1Bold,
});
export const savedBookmarkListNumber = style({
  ...body1,
  color: color.grayScale.gray400,
});
export const checkedIcon = style({
  backgroundColor:'white'
})