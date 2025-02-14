import { caption } from '@/styles/typo.css';
import { style } from '@vanilla-extract/css';

export const IconWithHashTagList = style({
  display: 'flex',
  gap:'0.8rem',
  justifyContent:'space-around'
});
export const IconWithHashTagListItem = style({
  ...caption,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
   padding:'0 0.6rem'
});
export const tagName= style({
  marginTop:'1.1rem'
})
