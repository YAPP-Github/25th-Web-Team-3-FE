import { color } from '@/styles/color.css';
import { body2, title4 } from '@/styles/typo.css';
import { style } from '@vanilla-extract/css';

export const brewloungeQr = style({
  position: 'absolute',
  right: '-3.3rem',
  bottom: '8rem',
  transform: 'translate(100%)',
  width: '20rem',
  height: '25.2rem',
  background: color.grayScale.gray100,
  padding: '2.4rem',
  opacity: 1,
  transition: 'opacity 1s ease-in-out',

  '@media': {
    [`(max-width: 1000px)`]: {
      opacity: 0,
    },
  },
});

export const qrCode = style({
  width: '8.8rem',
  height: '8.8rem',
  border: `1px solid ${color.grayScale.gray300}`,
  borderRadius: '4px',
});

export const qrDescription = style({ marginTop: '1.6rem', ...title4 });

export const qrNotification = style({
  marginTop: '0.8rem',
  color: color.grayScale.gray400,
  ...body2,
});
