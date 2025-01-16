import { color } from '@/styles/color.css';
import { style } from '@vanilla-extract/css';
import { ReactNode } from 'react';
import { cafesIdLayout } from './page.css';


const Layout = ({ children }: { children: ReactNode }) => {
  return <div className={cafesIdLayout}>{children}</div>;
};
export default Layout;
