import { color } from "@/styles/color.css";
import { body1, title3 } from "@/styles/typo.css";
import { style } from "@vanilla-extract/css";

export const nonListContents = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.2rem',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  });
  export const nonListTitle = style({
    ...title3,
  });
  export const nonListText = style({
    ...body1,
    color: color.grayScale.gray400,
  });
  export const nonListButton = style({
    backgroundColor: color.grayScale.gray500,
    color: color.grayScale.gray100,
    padding: '1.3rem 2rem',
    marginTop:'2rem',
    borderRadius:'0.5rem',
    cursor:'pointer',
  });
  