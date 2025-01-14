import { body1, body1Bold } from '@/styles/typo.css';
import { style } from '@vanilla-extract/css';

export const regionSelectModalContent = style({
  display: 'flex',
  flexDirection: 'column',
});

export const regionSelectModalTitle = style({
  fontSize: '1.8rem',
  fontWeight: 600,
  margin: '0.8rem 0 1.2rem 0',
});

const baseRegionItem = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '5.6rem',
  cursor: 'pointer',
  width: '100%',
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
});

export const closeButton = style({
  fontSize: '1.5rem',
  fontWeight: 400,
  cursor: 'pointer',
  width: '100%',
});
