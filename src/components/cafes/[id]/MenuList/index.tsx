import Image from 'next/image';
import {
  menuItemBox,
  menuItemContent,
  menuItemImg,
  menuItemList,
  menuItemTitleBox,
} from './MenuList.css';
import { divider } from '@/app/cafes/[id]/page.css';

export default function MenuList({
  menus,
}: {
  menus: { id: number; title: string; content: string; price: string }[];
}) {
  return (
    <ul className={menuItemList}>
      {menus.map((menu) => (
        <li className={menuItemBox}>
          <div key={menu.id} className={menuItemTitleBox}>
            <h2>{menu.title}</h2>
            <data>{menu.price}</data>
          </div>
          <div className={divider}></div>
          <p className={menuItemContent}>{menu.content}</p>
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
}
