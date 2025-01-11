import { headerImg } from '@/app/cafes/[id]/page.css';
import Image from 'next/image';
import { MenuItemBox, MenuItemImg, MenuItemTextBox } from './cafes.id.css';

export const MenuItem = ({
  menu,
}: {
  menu: { id: number; title: string; content: string; price: string }[];
}) => {
  return (
    <>
      {menu.map((item) => (
        <li className={MenuItemBox}>
          <Image
            src={'https://placehold.co/600x400'}
            alt="이미지"
            width={1}
            height={1}
            className={MenuItemImg}
          />
          <div key={item.id} className={MenuItemTextBox}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
            <data>{item.price}</data>
          </div>
        </li>
      ))}
    </>
  );
};
