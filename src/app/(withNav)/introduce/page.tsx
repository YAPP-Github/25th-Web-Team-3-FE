'use client';

import * as React from 'react';
import FullPageCarousel from '@/entities/introduce/ui/introduce/FullPageCarousel';
import IntroduceMain from '@/entities/introduce/ui/introduce/IntroduceMain';
import IntroduceTemplate from '@/entities/introduce/ui/introduce/IntroduceTemplate';
import { introduceContents } from '@/entities/introduce/ui/introduce/introduceContents';
import { introducePage } from '@/entities/introduce/ui/introduce/introduce.css';
import IntroduceEnd from '@/entities/introduce/ui/introduce/IntroduceEnd';

export default function Page() {
  return (
    <div className={introducePage}>
      <FullPageCarousel>
        <FullPageCarousel.Slide>
          <IntroduceMain />
        </FullPageCarousel.Slide>
        {introduceContents.map(({ id, title, icon, subTitle, description, image }) => {
          return (
            <FullPageCarousel.Slide key={id}>
              <IntroduceTemplate
                title={title}
                icon={icon}
                subTitle={subTitle}
                description={description}
                image={image}
              />
            </FullPageCarousel.Slide>
          );
        })}
        <FullPageCarousel.Slide>
          <IntroduceEnd />
        </FullPageCarousel.Slide>
      </FullPageCarousel>
    </div>
  );
}
