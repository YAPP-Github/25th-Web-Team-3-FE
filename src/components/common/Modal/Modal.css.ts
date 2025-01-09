import { style } from '@vanilla-extract/css';
import { ModalPosition } from '.';

export const modal = style({
  zIndex: 1000,
  selectors: {
    '&::backdrop': {
      background: 'rgba(0, 0, 0, 0.5)',
    },
  },
});

const baseModalContent = {
  maxWidth: '50rem',
  width: '100%',
  background: '#ffffff',
  position: 'fixed',
  padding: '2rem 2.4rem',
} as const;

export const modalContent: Record<ModalPosition, string> = {
  center: style({
    ...baseModalContent,
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '1.6rem',
  }),
  bottom: style({
    ...baseModalContent,
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    borderTopLeftRadius: '1.6rem',
    borderTopRightRadius: '1.6rem',
  }),
};
