import { ComplexStyleRule, style } from '@vanilla-extract/css';

export const MenuItemList =style({
  display:'flex',
  flexDirection:"column",
  gap:"2.4rem",
  marginTop:"2rem"
})
export const MenuItemBox = style({
  display: 'flex',
  gap:'1.6rem'
});

export const MenuItemImg = style({
  width: '10rem',
  height: '10rem',
  borderRadius: '0.8rem',
  objectFit: 'cover',
});
export const MenuItemTextBox = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent:"space-evenly",
  gap: '0.5rem',
  '& p:last-child': {
    fontWeight: '600',
  },
} as ComplexStyleRule);
