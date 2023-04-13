import React from 'react';

import type { WhatToExpect } from '@/utils/types/types';

import styles from '../../styles/WhatToExpectFromKapiva.module.css';

// const benefits = [
//   {
//     image_src: 'ayurvedic.png',
//     title: 'AYURVEDIC  PRODUCTS',
//     subtitle: 'That can easily integrate into your daily life',
//   },
//   {
//     image_src: 'lifestyle.png',
//     title: 'LIFESTYLE  RECOMMENDATIONS',
//     subtitle: 'That can easily integrate into your daily life',
//   },
//   {
//     image_src: 'diet.png',
//     title: 'DIET & MEAL PLANS',
//     subtitle: 'Get the meal plans that work for you and your health goals',
//   },
//   {
//     image_src: 'expert.png',
//     title: 'EXPERT CONNECT',
//     subtitle: 'If in doubt, reach out to our Ayurveda Experts, for free',
//   },
// ];

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
    <article className="relative z-10 mx-auto my-[2.5%] w-[45%]  lg:w-[20%] ">
      <img
        loading="lazy"
        // eslint-disable-next-line global-require, import/no-dynamic-require
        src={image}
        alt=""
        height={119}
        width={123}
        className="relative m-auto mb-2  aspect-auto max-w-[62px] backdrop-blur-sm lg:mb-4 lg:max-w-full "
      />

      <p
        className={`text-center break-words font-jost mb-1 lg:mb-2 text-[15px] font-black leading-none ${styles.infoTitle}`}
        dangerouslySetInnerHTML={{ __html: heading }}
      ></p>
      <p
        className={`text-center font-jost leading-none lg:leading-[1.2] text-xs font-medium ${styles.infoSubTitle}`}
      >
        {subHeading}
      </p>
    </article>
  );
}

function WhatToExpectFromKapiva(props: { data: WhatToExpect }) {
  const { data } = props;

  return (
    <section className="relative mb-8 lg:mb-16">
      <header className="mb-16 ">
        <img
          loading="lazy"
          // eslint-disable-next-line global-require, import/no-dynamic-require
          src={data.headingImage}
          alt="4BALANCE"
          height={27}
          width={320}
          className="z-0 m-auto aspect-[320/27] h-auto w-[100%] max-w-[90%] md:max-w-[40%]"
        />
      </header>
      <div className="mb-8 flex flex-wrap items-start justify-center lg:mb-16">
        {data.content.map((benefit, id) => (
          <BenefitCard key={id} {...benefit} />
        ))}
      </div>
      <img
        loading="lazy"
        // eslint-disable-next-line global-require, import/no-dynamic-require
        src={require(`../../../public/assets/images/what_to_expect_from_kapiva/flower_left.png?webp`)}
        alt=""
        height={304}
        width={202}
        className="absolute bottom-0 left-0 -z-10 aspect-auto max-w-[45px] translate-y-full lg:max-w-full  lg:translate-y-[80%]"
      />
      <img
        loading="lazy"
        // eslint-disable-next-line global-require, import/no-dynamic-require
        src={require(`../../../public/assets/images/what_to_expect_from_kapiva/flower_right.png?webp`)}
        alt=""
        height={304}
        width={222}
        className="absolute top-0 right-0 -z-10 aspect-auto max-w-[70px] translate-y-1/4 lg:max-w-full lg:-translate-y-1/2"
      />
    </section>
  );
}

export default WhatToExpectFromKapiva;
