import Image from 'next/image';
import React from 'react';

import type { WhatToExpect } from '@/utils/types/types';
// this function converts string into SentenceCase,keeping it's <br/> as it is
function convertToSentenceCase(html_text: string) {
  return html_text
    .split('<br>')
    .map((words) => {
      return words
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.toLowerCase().slice(1))
        .join(' ');
    })
    .join('<br/>');
}

function BenefitCard({
  image,
  heading,
  subHeading,
}: {
  image: string;
  heading: string;
  subHeading: string;
}) {
  return (
    <article className="w-[46%] pb-[8%] md:w-[30%] xl:w-[23%] xl:pb-[6%]">
      <div className="mb-2.5 lg:mb-5">
        <img
          loading="lazy"
          // eslint-disable-next-line global-require, import/no-dynamic-require
          src={image}
          alt=""
          height={119}
          width={123}
          className="relative m-auto aspect-auto max-w-[62px] lg:max-w-full"
        />
      </div>
      <p
        dangerouslySetInnerHTML={{ __html: convertToSentenceCase(heading) }}
        className="mb-1 break-words text-center  text-[length:var(--text-2sm)] font-semibold leading-[1.1] first-letter:capitalize  lg:mb-3 lg:text-[length:var(--heading-sm)]"
      ></p>
      <p className="text-center text-[length:var(--text-sm)] font-normal leading-[1.1] lg:text-[length:var(--text-lg)]">
        {subHeading}
      </p>
    </article>
  );
}

function WhatToExpectFromKapivaV2(props: { data: WhatToExpect }) {
  const { data } = props;

  return (
    <section className="kp-container mb-14 lg:mb-32 ">
      <header className="mb-[30px] lg:mb-14">
        <div className="relative m-auto h-auto w-[100%] max-w-[90%] md:max-w-[40%]">
          <Image
            loading="lazy"
            // eslint-disable-next-line global-require, import/no-dynamic-require
            src={data.headingImage}
            alt="4BALANCE"
            height={26}
            width={311}
            layout="responsive"
            className="z-0"
          />
        </div>
      </header>
      <div className="mb-[-8%] flex flex-wrap items-start justify-between md:justify-center xl:mb-[-6%] xl:justify-between">
        {data.content.map((benefit, id) => (
          <BenefitCard key={id} {...benefit} />
        ))}
      </div>
    </section>
  );
}

export default WhatToExpectFromKapivaV2;
