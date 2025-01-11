import { hashTag, hashTagItem } from './HashTag.css';

const HASH_TAG_DATA = ['전문 바리스타', '로스터리', '드립커피', '시그니처'];

export function HashTag() {
  return (
    <div className={hashTag}>
      {HASH_TAG_DATA.map((item) => (
        <div className={hashTagItem}>{item}</div>
      ))}
    </div>
  );
}
