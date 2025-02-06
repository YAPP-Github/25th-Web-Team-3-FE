import { button2 } from '@/styles/typo.css';
import { color } from '@/styles/color.css';
import { recipe } from '@vanilla-extract/recipes';

export const selectButton = recipe({
  base: {
    ...button2,
    padding: '0.55rem 1.6rem',
    borderRadius: 999,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.2rem',
    border: '0.1rem solid',
  },
  variants: {
    isSelected: {
      true: {
        background: color.grayScale.gray100,
        borderColor: color.grayScale.gray100,
        color: color.grayScale.gray500,
      },
      false: {
        borderColor: color.grayScale.gray100,
        color: color.grayScale.gray100,
      },
    },
  },
});
