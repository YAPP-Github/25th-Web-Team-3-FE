import { color } from '@/styles/color.css';
import { button2, caption } from '@/styles/typo.css';
import { style } from '@vanilla-extract/css';

export const FooterBox = style({
  color: color.grayScale.gray400,
  display:'flex',
  flexDirection:'column',
  gap:'0.6rem',
  padding:"2.4rem 2rem 3.2rem 2rem"
});
export const updateDate = style({ ...button2 });
export const updateText = style({...caption})
