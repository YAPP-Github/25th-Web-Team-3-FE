import { color } from '@/styles/color.css';
import { body1, body1Bold, etc, title3 } from '@/styles/typo.css';
import { ComplexStyleRule, style } from '@vanilla-extract/css';

export const cafesIdLayout = style({
  backgroundColor: color.grayScale.gray500,
  
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: color.grayScale.gray100,
  '& > *': {
    padding: '1.2rem',
  },
} as ComplexStyleRule);

export const title = style({
  backgroundColor: color.grayScale.gray100,
  padding: '0 2rem',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '0.8rem',
  alignItems: 'center',
  paddingBottom: '1.6rem',
  '& h1': {
    ...title3,
  },
  '& div > div': {
    ...body1,
    color: color.grayScale.gray400,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',
  },
} as ComplexStyleRule);



export const subTitle = style({
  ...title3,
  marginBottom: '1.6rem',
});

export const pickReasonBox = style({
  backgroundColor: color.grayScale.gray100,
  color: color.grayScale.gray500,
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
});

export const pickReason = style({
  ...body1,
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});
export const recoCoffeeBeanBox = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
  padding: '2.4rem 2rem',
  background: color.grayScale.gray100,
  color: color.grayScale.gray500,
  '& h3': {
    ...body1Bold,
  },
} as ComplexStyleRule);
export const beanCardTitle = style({ ...etc, whiteSpace: 'nowrap' });

export const divider = style({
  borderTop: 'dashed 0.1rem',
});

export const cafesDetailMain = style({
  
  color: color.grayScale.gray100,
  display: 'flex',
  flexDirection: 'column',
  gap: '5.6rem',
} as ComplexStyleRule);

export const toggleBox = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '0.4rem 0 1.45rem 0 ',
});

export const toggleInput = style({
  opacity: 0,
  position: 'absolute',
  width: 0,
  height: 0,
});

export const toggleLabel = style({
  transform: 'rotate(270deg)',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  transition: 'transform 0.2s ease-in-out',
  selectors: {
    [`${toggleInput}:checked ~ div &`]: {
      transform: 'rotate(90deg)',
    },
  },
});

export const toggleContent = style({
  ...body1,
  display: 'none',
  marginTop: '1.6rem',
  selectors: {
    [`${toggleInput}:checked ~ &`]: {
      display: 'block',
      transition: 'transform 1s ease-in-out',
    },
  },
});

export const pickReasonSection = style({
  padding: '2.4rem 2rem',
})
export const coffeeBeanSection = style({
  padding: '2.4rem 2rem',
})

export const menuListSection = style({
  padding:'2.4rem 0rem 2.4rem 2rem'
});
