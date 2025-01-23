import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { body1, body1Bold } from '@/styles/typo.css';

export const regionSelectModalContent = style({
  display: 'flex',
  flexDirection: 'column',
});

export const regionItem = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '5.6rem',
    cursor: 'pointer',
    width: '100%',
  },

  variants: {
    isSelected: {
      true: body1Bold,
      false: body1,
    },
  },
});
