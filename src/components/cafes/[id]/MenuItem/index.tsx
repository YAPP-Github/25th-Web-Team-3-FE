import Image from 'next/image';
import {
  menuItemBox,
  menuItemContent,
  menuItemImg,
  menuItemList,
  menuItemTitleBox,
} from './MenuItem.css';
import { divider } from '@/app/cafes/[id]/page.css';

export const MenuList = ({
  menu,
}: {
  menu: { id: number; title: string; content: string; price: string }[];
}) => {
  return (
    <ul className={menuItemList}>
      {menu.map((item) => (
        <li className={menuItemBox}>
          <div key={item.id} className={menuItemTitleBox}>
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
            className={menuItemImg}
          />
        </li>
      ))}
    </ul>
  );
};
