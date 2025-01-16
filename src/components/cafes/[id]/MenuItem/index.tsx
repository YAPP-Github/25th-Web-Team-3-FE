import Image from 'next/image';
import { MenuItemBox, menuItemContent, MenuItemImg, MenuItemTextBox, MenuItemTitleBox } from './cafes.id.css';
import { divider } from '@/app/cafes/[id]/page.css';

export const MenuItem = ({
  menu,
}: {
  menu: { id: number; title: string; content: string; price: string }[];
}) => {
  return (
    <>
      {menu.map((item) => (
        <li className={MenuItemBox}>
          <div key={item.id} className={MenuItemTitleBox}>
            <h2>{item.title}</h2>
            <data>{item.price}</data>
          </div>
          <div className={divider}></div>
          <p className={menuItemContent}>{item.content}</p>
          <Image
            src={'https://placehold.co/600x400'}
            alt="이미지"
            width={1}
            height={1}
            className={MenuItemImg}
          />
        </li>
      ))}
    </>
  );
};
