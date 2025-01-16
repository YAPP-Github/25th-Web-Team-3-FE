import { color } from '@/styles/color.css';
import { caption } from '@/styles/typo.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const hashTag = style({
  ...caption,
  display: 'flex',
});

export const hashTagItem = recipe({
  variants: {
    isCafesPage: {
      true: {
       flex:'1',
       textAlign:'center'

      },
      false: {
        backgroundColor: '#F7F7F7',
        padding: '0.3rem 0.6rem',
        borderRadius: '0.4rem',
        opacity: '50%',
      },
    },
  },
});
