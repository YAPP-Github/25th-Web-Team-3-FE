import { color } from '@/styles/color.css';
import { caption } from '@/styles/typo.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const hashtag = style({
  borderRadius:'0.3rem',
  backgroundColor: color.grayScale.gray200,
  color: color.grayScale.gray500,
  padding:'0.3rem 0.8rem'
});

export const hashTagItem = recipe({
  variants: {
    isCafesPage: {
      true: {
        flex: '1',
        textAlign: 'center',
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
