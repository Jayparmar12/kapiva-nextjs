import React from 'react';

import styles from '../../styles/HomeWhyKapivaSection.module.css';

function WhyKapivaCard({
  id,
  title,
  description,
}: {
  id: number;
  title: string;
  description: string;
}) {
  return (
    <div className="kp-direction-flow  even:text-right lg:mb-5">
      <h2
        className={` ${styles.kpWhyKapivaCardId} font-play_regular  leading-[1.5] tracking-[-2.84px] text-[#C97B5A] lg:tracking-[-4.32px]`}
      >
        {0 + id.toString()}
      </h2>
      <p
        className={`max-w-[70%] font-bold  leading-[1.13] text-[#333333] lg:max-w-[60%]   ${styles.kpWhyKapivaCardTitle} `}
      >
        {title}
      </p>
      <p
        className={`max-w-[70%] font-medium  leading-[1.16] text-[#333333] lg:max-w-[60%]  ${styles.kpWhyKapivaCardDescription} `}
      >
        {description}
      </p>
    </div>
  );
}

const whyKapivaData = [
  {
    id: 1,
    title: 'CREATED BY KAPIVA ACADEMY OF AYURVEDA',
    description:
      'All solutions at Kapiva are formulaed by experts at the Kapiva academy of Ayurveda. KAA is a body of expert Ayurveda doctors, PhD in food formulations, nutritionists and food scientists',
  },
  {
    id: 2,
    title: 'THE BEST INGREDIENTS FOUND THE TOUGHEST WAY',
    description:
      'We do not pick ingredients which can be picked on the outskirts of a city, but we go to the depth of forest to get it, pick it within the 3 days window in the year when it’s efficacy it to it’s maximum and process it within the 2 hour window when it’s preserved at the very best.',
  },
  {
    id: 3,
    title: 'HOLISTIC SOLUTIONS',
    description:
      'Be it Acne or Hairfall or Diabetes we don’t stop at just giving you products as product is just one element of solving your problem. Get Free health expert advise, personalized Diet plans, Lifestyle recommendations including Yoga Asanas.',
  },
];

function HomeWhyKapivaSection() {
  return (
    <section className="kp-container relative mb-6 lg:mb-16">
      <div>
        <h1 className="text-center font-jost text-2xl leading-[0.90]  lg:text-[56px] lg:leading-[1.04] ">
          WHY <span className="font-black">KAPIVA?</span>
        </h1>
        <p
          className={`${styles.kpSubHeading} text-center font-bold leading-[1.25] tracking-[1.28px] text-[#59702F]`}
        >
          HEALTHY INSIDE, HAPPY OUTSIDE
        </p>
      </div>
      <div className="flex flex-col ">
        {whyKapivaData.map((item) => (
          <WhyKapivaCard {...item} key={item.id} />
        ))}
      </div>
      <img
        loading="lazy"
        // eslint-disable-next-line global-require, import/no-dynamic-require
        src={require(`../../../public/assets/images/home_why_kapiva_section/edge_whykapiva01.png?webp`)}
        alt=""
        height={143}
        width={100}
        className="absolute right-0 top-[5%] aspect-auto translate-y-1/2 lg:w-[200px] lg:translate-y-1/4"
      />
      <img
        loading="lazy"
        // eslint-disable-next-line global-require, import/no-dynamic-require
        src={require(`../../../public/assets/images/home_why_kapiva_section/edge_whykapiva02.png?webp`)}
        alt=""
        height={143}
        width={100}
        className="absolute left-0 top-[35%] aspect-auto h-auto translate-y-1/2 lg:top-[28%] lg:w-[200px] lg:translate-y-1/4"
      />
      <img
        loading="lazy"
        // eslint-disable-next-line global-require, import/no-dynamic-require
        src={require(`../../../public/assets/images/home_why_kapiva_section/edge_whykapiva03.png?webp`)}
        alt=""
        height={143}
        width={100}
        className="absolute right-0 top-[70%] aspect-auto translate-y-1/2 lg:h-auto lg:w-[200px] lg:translate-y-0"
      />
    </section>
  );
}

export default HomeWhyKapivaSection;
