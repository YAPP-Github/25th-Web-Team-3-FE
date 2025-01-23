import { color } from '@/styles/color.css';
import { title3 } from '@/styles/typo.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const modal = style({
  zIndex: 1000,
  selectors: {
    '&::backdrop': {
      background: 'rgba(0, 0, 0, 0.5)',
    },
  },
});

export const modalTitle = style({
  ...title3,
  color: color.grayScale.gray500,
  padding: '2.4rem 2rem 1.2rem 2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const closeIcon = style({
  cursor: 'pointer',
});

export const modalContainer = recipe({
  base: {
    maxWidth: '50rem',
    width: '100%',
    background: '#ffffff',
    position: 'fixed',
  },

  variants: {
    position: {
      center: {
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '1.6rem',
      },
      bottom: {
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
      },
    },
  },
});

export const modalContent = style({
  padding: '1.6rem 2rem 2.4rem 2rem',
});
