import Image from 'next/image';
import { HashTag } from '@/components/common/HashTag';
import { MenuItem } from '@/components/cafes/[id]/MenuItem';
import { cafesDetailMain, divider, headerImg, pickReason } from './page.css';
import { MenuItemList } from '@/components/cafes/[id]/MenuItem/cafes.id.css';
import { MapBtn } from '@/components/cafes/[id]/MapBtn';
const DETAIL_MENU = {
  id: 0,
  title: '헤베커피',
  place: '충무로역 근처',
  detailplace: '서울 중구 필동로 32 낙원빌딩 1층',
  reason:
    '헤베커피는 커피씬에서 주목 받는 스페셜티 커피 매장입니다. 오너인 임지영 바리스타는 한국 브루어스컵 국가대표 선발전 등 다양한 대회에서 수상 경력을 자랑하며, 생두 유통, 로스팅, 머신 제조업, 커피 체인 전 영역에서 드물게 전문성을 인정받은 여성 바리스타입니다.',
  recoMenu: [
    {
      id: 101,
      title: '드립커피',
      content: '시즌에 가장 맛있는 원두를 선별하여 소개합니다.',
      price: '변동',
    },
    {
      id: 102,
      title: '헤베커피',
      content: '고소한 두유 베이스에 에스프레소 샷과 달콤한 생크림의 조화!',
      price: '7000원',
    },
  ],
  recocoffebeans: {
    title: '르완다 브산제',
    title_eng: 'Rwandabusanze',
    feature: '어떤 특징을 가진 원두입니다',
    flavor: ['플로럴', '아몬드', '시트러스'],
    origin: '르완다 브산제',
    loast_point: '미디움',
  },
};

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <header>
        <Image
          src={'https://placehold.co/600x400'}
          alt={`${params.id}번 카페의 이미지`}
          width={600}
          height={400}
          className={headerImg}
        />
      </header>
      <main className={cafesDetailMain}>
        <section>
          <h1>
            {DETAIL_MENU.title}
            <span>{DETAIL_MENU.place}</span>
          </h1>
          <data>
            <div>{DETAIL_MENU.detailplace}</div>
            <MapBtn>길찾기</MapBtn>
          </data>
          <div className={divider}></div>
          <article className={pickReason}>
            <h1>선정 이유</h1>
            <p>{DETAIL_MENU.reason}</p>
            <HashTag />
          </article>
        </section>
        <section>
          <h1>대표 원두</h1>
          <article>
            <h2>르완다 브산제</h2>
          </article>
        </section>
        <section>
          <h1>대표 메뉴</h1>
          <ul className={MenuItemList}>
            <MenuItem menu={DETAIL_MENU.recoMenu} />
          </ul>
        </section>
      </main>
    </>
  );
}
