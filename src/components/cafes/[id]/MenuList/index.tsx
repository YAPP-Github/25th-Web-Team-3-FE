import Image from 'next/image';
import {
  menuItemBox,
  menuItemContent,
  menuItemImg,
  menuItemList,
  menuItemTitleBox,
} from './MenuList.css';
import { divider } from '@/app/cafes/[id]/page.css';
import { Menu } from '@/types';

interface MenuListProps {
  menus: Menu[];
}

export default function MenuList({ menus }: MenuListProps) {
  return (
    <ul className={menuItemList}>
      {menus.map((menuItem) => (
        <li key={menuItem.id} className={menuItemBox}>
          <div className={menuItemTitleBox}>
            <div>{menuItem.name}</div>
            <span>{menuItem.price}원</span>
          </div>
          <div className={divider}></div>
          <p className={menuItemContent}>{menuItem.description}</p>
          <Image
            src={menuItem.imageUrl ? menuItem.imageUrl : 'https://placehold.co/600x400'}
            alt="이미지"
            width={600}
            height={400}
            className={menuItemImg}
          />
        </li>
      ))}
    </ul>
  );
}
