import * as React from 'react';
import { introDescription, introImage, introSubTitle, introTitle } from './introduce.css';
import Image from 'next/image';

export interface IntroduceTemplateProps {
  title: React.ReactNode;
  icon: React.ReactNode;
  subTitle: string;
  description: React.ReactNode;
  image: string;
}

export default function IntroduceTemplate({
  title,
  icon,
  subTitle,
  description,
  image,
}: IntroduceTemplateProps) {
  return (
    <div>
      <h1 className={introTitle}>{title}</h1>
      <div className={introSubTitle}>
        {icon} {subTitle}
      </div>
      <p className={introDescription}>{description}</p>
      <Image
        width="500"
        height="500"
        alt={`${title} 대표 이미지`}
        className={introImage}
        src={image}
      />
    </div>
  );
}
