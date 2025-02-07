import { color } from '@/styles/color.css';
import { button2 } from '@/styles/typo.css';
import { recipe } from '@vanilla-extract/recipes';

export const popUpButton = recipe({
  base: {
    ...button2,
    padding: '1.3rem 0',
    textAlign: 'center',
    width: '100%',
    borderRadius: '0.5rem',
    border: '1px solid',
    cursor: 'pointer',
  },
  variants: {
    color: {
      black: {
        backgroundColor: color.grayScale.gray500,
        color: color.grayScale.gray100,
      },
      white: {
        background: color.grayScale.gray100,
        color: color.grayScale.gray500,
      },
    },
  },
});
