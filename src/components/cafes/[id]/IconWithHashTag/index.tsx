'use client';
import Baristar from '@/assets/Icon/baristar.svg';
import Roastery from '@/assets/Icon/roastery.svg';
import DirCoffee from '@/assets/Icon/dripCoffee.svg';
import Signiture from '@/assets/Icon/signiture.svg';
import { IconWithHashTagList, IconWithHashTagListItem } from './IconWithHashTag.css';

const HASH_TAG_DATA = [
  {
    Icon: Baristar,
    name: '전문 바리스타',
  },
  {
    Icon: Roastery,
    name: '로스터리',
  },
  {
    Icon: DirCoffee,
    name: '드립커피',
  },
  {
    Icon: Signiture,
    name: '시그니처',
  },
];

export default function IconWithHashTag() {
  return (
    <ul className={IconWithHashTagList}>
      {HASH_TAG_DATA.map((tag) => (
        <li key={tag.name} className={IconWithHashTagListItem}>
          <tag.Icon />
          <div>{tag.name}</div>
        </li>
      ))}
    </ul>
  );
}
