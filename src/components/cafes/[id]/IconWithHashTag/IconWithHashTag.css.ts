import { caption } from '@/styles/typo.css';
import { style } from '@vanilla-extract/css';

export const IconWithHashTagList = style({
  display: 'flex',
  justifyContent: 'space-between',
});
export const IconWithHashTagListItem = style({
  ...caption,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});
