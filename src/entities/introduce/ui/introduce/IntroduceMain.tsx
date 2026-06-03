import introduceImage1 from '@/shared/assets/introduce/intro-main.jpg';
import {
  introMainDescription,
  introMainImage,
  introMainSubTitle,
  introMainTitle,
} from './introduce.css';
import Image from 'next/image';

export default function IntroduceMain() {
  return (
    <div>
      <h1 className={introMainTitle}>
        브루라운지는 맛있는 커피를 <br /> 큐레이팅 해주는 공간입니다.
      </h1>

      <Image
        width="500"
        height="500"
        alt="메인 소개 페이지 대표 이미지"
        className={introMainImage}
        src={introduceImage1.src}
      />

      <p className={introMainSubTitle}>
        단 한모금의 후회도 남기지 않을
        <br /> 최고의 커피만을 선별합니다
      </p>
      <p className={introMainDescription}>
        우리의 시작은 작은 한 모금의 호기심에서 출발했습니다. 세상의 수많은 카페와 커피, 그리고 그
        속에 담긴 이야기를 탐구하며, 커피를 선별하는 6가지 기준을 세웠습니다. 각각의 선별된 커피는
        한 점으로 시작하여, 당신의 하루를 완성하는 한 잔이 됩니다.
      </p>
    </div>
  );
}
