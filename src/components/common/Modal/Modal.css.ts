import { color } from '@/styles/color.css';
import { title3, title4 } from '@/styles/typo.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const modal = style({
  zIndex: 1000,

  selectors: {
    '&::backdrop': {
      background: 'rgba(0, 0, 0, 0.5)',
      maxWidth: '50rem',
      margin: '0 auto',
    },
  },
});

export const modalTitle = recipe({
  base: {
    color: color.grayScale.gray500,
    padding: '2.4rem 2rem 1.2rem 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  variants: {
    position: {
      bottom: {
        ...title3,
      },
      center: {
        ...title4,
      },
    },
  },
});

export const closeIcon = style({
  cursor: 'pointer',
});

export const modalContainer = recipe({
  base: {
    background: '#ffffff',
    position: 'fixed',
    maxWidth: '50rem',
  },

  variants: {
    position: {
      center: {
        width: 'calc(100% - 8%)',
        maxWidth: 'calc(50rem - 4rem)',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '0.4rem',
      },
      bottom: {
        width: '100%',
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
