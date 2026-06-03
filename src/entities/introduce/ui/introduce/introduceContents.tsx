import IntroduceIcon1 from '@/shared/assets/introduce/intro-1.svg';
import IntroduceIcon2 from '@/shared/assets/introduce/intro-2.svg';
import IntroduceIcon3 from '@/shared/assets/introduce/intro-3.svg';
import IntroduceIcon4 from '@/shared/assets/introduce/intro-4.svg';
import IntroduceIcon5 from '@/shared/assets/introduce/intro-5.svg';
import IntroduceIcon6 from '@/shared/assets/introduce/intro-6.svg';

import introduceImage1 from '@/shared/assets/introduce/intro-1.jpg';
import introduceImage2 from '@/shared/assets/introduce/intro-2.jpg';
import introduceImage3 from '@/shared/assets/introduce/intro-3.jpg';
import introduceImage4 from '@/shared/assets/introduce/intro-4.jpg';
import introduceImage5 from '@/shared/assets/introduce/intro-5.jpg';
import introduceImage6 from '@/shared/assets/introduce/intro-6.jpg';

export const introduceContents = [
  {
    id: 1,
    title: (
      <>
        맛있는 커피를 선별하는
        <br /> 브루라운지의 첫 번째 기준
      </>
    ),
    icon: <IntroduceIcon1 />,
    subTitle: '신선한 원두와 다양한 선택지',
    description: `원두 산지와 로스팅 정보가 메뉴판에 명확히 표시된 카페를 우선 평가합니다.
    또한, 매장에서 직접 로스팅하는 카페는 신선도를 보장하며, 로스팅 날짜를 명시하는 경우에는 투명성을 제공합니다.
    그 외에도 블렌드와 싱글 오리진을 모두 취급하는 카페는 고객의 취향을 세심히 반영한다는 점에서 높은 점수를 받습니다.`,
    image: introduceImage1.src,
  },
  {
    id: 2,
    title: (
      <>
        맛있는 커피를 선별하는
        <br /> 브루라운지의 두 번째 기준
      </>
    ),
    icon: <IntroduceIcon2 />,
    subTitle: '추출 방식의 다양성',
    description: `핸드드립, 에어로프레스, 사이폰 등 다양한 추출 방식을 제공하는 카페는 긍정적인 평가를 받습니다.
    특히, 핸드드립과 필터커피는 커피의 섬세한 향미를 즐기기에 적합합니다. 이처럼 다양한 추출 방식은 소비자가 원두의 특성을 폭넓게 경험할 기회를 선사합니다.
    그 외에도 필터커피와 에스프레소 기반 메뉴를 모두 제공하는 카페는 소비자 선택 폭을 넓혀줍니다.`,
    image: introduceImage2.src,
  },
  {
    id: 3,
    title: (
      <>
        맛있는 커피를 선별하는
        <br /> 브루라운지의 세 번째 기준
      </>
    ),
    icon: <IntroduceIcon3 />,
    subTitle: '독창적인 시그니처 메뉴',
    description: `시그니처 메뉴를 보유한 카페는 방문자들에게 특별한 동기를 제공합니다.
    가령 카페 이름을 딴 독창적인 라테는 브랜드의 정체성을 드러냅니다. 또한 시그니처 블렌드 원두를 취급하는 카페는 새로운 경험을 할 가능성이 높습니다.
    블렌드 원두는 각기 다른 생두가 상호적으로 향미를 보완하며 창의적인 풍미를 제공합니다.`,
    image: introduceImage3.src,
  },
  {
    id: 4,
    title: (
      <>
        맛있는 커피를 선별하는
        <br /> 브루라운지의 네 번째 기준
      </>
    ),
    icon: <IntroduceIcon4 />,
    subTitle: '공인 바리스타와 대회 이력',
    description: (
      <>
        공인 바리스타 인증(예: SCA 인증)을 보유한 직원이 근무하는 카페를 긍정적으로 평가합니다. 대회
        출전 경험은 해당 카페의 커피 품질과 바리스타의 실력을 증명합니다.
        <br />- SCA(Specialty Coffee Association) 한국 챕터에서 주관하는 KCRC(Korea Coffee Roasting
        Championship)나 KNBC(Korea National Barista Championship)와 같은 주요 대회에 출전한 이력을
        가진 카페는 커피 품질을 인정받았다고 볼 수 있습니다.
      </>
    ),
    image: introduceImage4.src,
  },
  {
    id: 5,
    title: (
      <>
        맛있는 커피를 선별하는
        <br /> 브루라운지의 다섯 번째 기준
      </>
    ),
    icon: <IntroduceIcon5 />,
    subTitle: '모두를 위한 공간과 지속 가능성',
    description: (
      <>
        모든 연령층이 방문할 수 있는 공간을 제공합니다. 이러한 공간은 사회적 책임을 실현하며, 환경
        보호를 실천하는 카페는 커피 이상의 가치를 전달합니다. <br />
        환경 보호와 지속 가능성을 위해 텀블러 사용 시 할인 혜택을 제공하거나 친환경 재료를 사용하는
        카페를 고려합니다.
      </>
    ),
    image: introduceImage5.src,
  },
  {
    id: 6,
    title: (
      <>
        맛있는 커피를 선별하는
        <br /> 브루라운지의 여섯 번째 기준
      </>
    ),
    icon: <IntroduceIcon6 />,
    subTitle: '서울 중심부의 높은 접근성',
    description: `서울 중구와 종로구는 접근성이 뛰어나고 다양한 카페가 밀집된 지역입니다.
    가령, 을지로의 소규모 커피 전문점들은 독특한 분위기와 뛰어난 커피 품질로 커피 애호가들에게 꾸준히 사랑받고 있습니다.
    서울 중심부는 평균 대중교통 이용 시간이 짧아 누구나 쉽게 방문할 수 있습니다.
    또한 데이터 수집의 범위를 한정 지어, 신뢰성을 확보하기에 적합합니다.`,
    image: introduceImage6.src,
  },
] as const;
