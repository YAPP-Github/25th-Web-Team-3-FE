import { color } from '@/styles/color.css';
import { body1 } from '@/styles/typo.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const flavorList = style({
  ...body1,
  display: 'flex',
  flexWrap:'wrap',
  gap: '0.6rem',
  marginTop: '0.8rem',
});
export const flavorItem = style({
  display: 'flex',
  alignItems: 'center',
  whiteSpace:'nowrap',
  color:color.grayScale.gray500,
});
export const dot = recipe({
  base: {
    display:'block',
    width: '0.8rem',
    height: '0.8rem',
    borderRadius: '50%',
    marginRight: '0.4rem',
  },
  variants: {
    flavor: {
      fruit: { backgroundColor: color.flavor.fruit },
      floral: { backgroundColor: color.flavor.floral },
      sweet: { backgroundColor: color.flavor.sweet },
      spices: { backgroundColor: color.flavor.spices },
      roasted: { backgroundColor: color.flavor.roasted },
      green: { backgroundColor: color.flavor.green },
      sour: { backgroundColor: color.flavor.sour },
      nutty: { backgroundColor: color.flavor.nutty },
      other: { backgroundColor: color.flavor.other },
    },
  } 
});
