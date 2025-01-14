import { color } from '@/styles/color.css';
import { body1, body1Bold, button1, title3 } from '@/styles/typo.css';
import { style } from '@vanilla-extract/css';

export const regionSelectModalContent = style({
  display: 'flex',
  flexDirection: 'column',
});

export const regionSelectModalTitle = style({
  ...title3,
  color: color.grayScale.gray500,
  padding: '2.4rem 0 1.2rem 2rem',
  display: 'flex',
  alignItems: 'center',
});

const baseRegionItem = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '5.6rem',
  cursor: 'pointer',
  width: '100%',
  padding: '0 2rem 0 2rem',
};

export const regionItem = {
  default: style({ ...baseRegionItem, ...body1 }),
  selected: style({ ...baseRegionItem, ...body1Bold }),
};

export const closeButtonWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderTop: '1px solid #eeeeee',
  height: '4.7rem',
  marginBottom: '1.6rem',
});

export const closeButton = style({
  ...button1,
  cursor: 'pointer',
  width: '100%',
});
