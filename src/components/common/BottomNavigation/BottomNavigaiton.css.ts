import { color } from '@/styles/color.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const BottomNavigationContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.8rem 0',
  position: 'fixed',
  bottom: '0',
  width: '100%',
  maxWidth: '50rem',
  height: '5.7rem',
  overflow: 'hidden',
  backgroundColor:color.grayScale.gray100,
  zIndex:'999',
  borderTop:`0.1rem solid ${color.grayScale.gray200}`
  
});

export const BottomNavigationList = style({
  display: 'flex',
  gap: '1.6rem',
});

export const BottomNavigationItem = recipe({
  base: {
    color: '#C3C3C3',
  },
  variants: {
    isCurrentPage: {
      true: {
        color: color.grayScale.gray500,
      },
      false: {
        color: '#C3C3C3',
      },
    },
  },
});
