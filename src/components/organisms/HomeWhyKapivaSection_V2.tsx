import React from 'react';

import type { HomeWhyKapivaType } from '@/utils/types/types';

function WhyKapivaCard({
  index,
  head_title,
  name,
  description,
}: {
  index: number;
  head_title: string;
  name: string;
  description: string;
}) {
  return (
    <div className="kp-direction-flow even:text-right lg:mb-5">
      <h2 className="font-play_regular text-[length:var(--heading-2xl)] leading-[1.5] tracking-[-2.84px] text-[color:var(--cr-danger-light)] lg:text-[length:var(--heading-3xl)] lg:tracking-[-4.32px]">
        {0 + index.toString()}
      </h2>
      <p className="mb-2.5 max-w-[70%] text-[length:var(--text-base)] font-bold leading-[1.1] text-[color:var(--cr-black)]  lg:mb-4 lg:max-w-[60%] lg:text-[length:var(--heading-sm)] lg:leading-[1.4]">
        {head_title}
        <br />
        {name}
      </p>
      <p className="kp-text-direction max-w-[70%] text-[length:var(--text-sm)] font-normal leading-[1.25] text-[color:var(--cr-black)] lg:max-w-[60%]  lg:text-[length:var(--heading-sm)] lg:font-normal">
        {description}
      </p>
    </div>
  );
}

// const whyKapivaData = [
//   {
//     id: 1,
//     title: 'CREATED BY KAPIVA ACADEMY OF AYURVEDA',
//     description:
//       'All solutions at Kapiva are formulaed by experts at the Kapiva academy of Ayurveda. KAA is a body of expert Ayurveda doctors, PhD in food formulations, nutritionists and food scientists',
//   },
//   {
//     id: 2,
//     title: 'THE BEST INGREDIENTS FOUND THE TOUGHEST WAY',
//     description:
//       'We do not pick ingredients which can be picked on the outskirts of a city, but we go to the depth of forest to get it, pick it within the 3 days window in the year when it’s efficacy it to it’s maximum and process it within the 2 hour window when it’s preserved at the very best.',
//   },
//   {
//     id: 3,
//     title: 'HOLISTIC SOLUTIONS',
//     description:
//       'Be it Acne or Hairfall or Diabetes we don’t stop at just giving you products as product is just one element of solving your problem. Get Free health expert advise, personalized Diet plans, Lifestyle recommendations including Yoga Asanas.',
//   },
// ];

function HomeWhyKapivaSectionV2(props: { whyKapivaData: HomeWhyKapivaType[] }) {
  return (
    <section className="relative mb-14 lg:mb-32">
      <div className="kp-container">
        <div>
          <div className="mb-8 text-[length:var(--text-lg)] font-semibold lg:mb-0 lg:text-[length:var(--heading-lg)]">
            Why Kapiva?
          </div>
        </div>
        <p
          className={`text-center lg:text-[length:var(--heading-sm)] text-[length:var(--text-sm)] font-medium lg:font-normal leading-[1.25] lg:tracking-[3.84px] tracking-[1.92px]  text-[color:var(--cr-danger-light)]`}
        >
          HEALTHY INSIDE, HAPPY OUTSIDE
        </p>
        <div className="flex flex-col ">
          {props.whyKapivaData.map((item, index) => (
            <WhyKapivaCard {...item} index={index + 1} key={item.id} />
          ))}
        </div>
      </div>
      <div className="absolute right-0 top-[13%] translate-y-1/2 md:top-0 lg:top-[5%] lg:translate-y-1/4">
        <img
          loading="lazy"
          src="https://4wdpmdxj.cdn.imgeng.in/s-5h8rqg02f8/content/images/Homepage/flower_whykapiva01.png"
          alt=""
          height={143}
          width={100}
          sizes="(max-width: 768px) 100px, 200px"
          srcSet="https://4wdpmdxj.cdn.imgeng.in/s-5h8rqg02f8/content/images/Homepage/flower_whykapiva01.png?imgeng=/w_200/f_webp/ 200w,https://4wdpmdxj.cdn.imgeng.in/s-5h8rqg02f8/content/images/Homepage/flower_whykapiva01.png?imgeng=/w_400/f_webp/ 400w"
          className="h-auto md:w-[120px] lg:w-[200px]"
        />
      </div>
      <div className="absolute left-0 top-[43%] translate-y-1/2 md:top-[24%] lg:top-[33%] lg:translate-y-1/4">
        <img
          loading="lazy"
          src="https://4wdpmdxj.cdn.imgeng.in/s-5h8rqg02f8/content/images/Homepage/flower_whykapiva02.png"
          alt=""
          height={143}
          width={100}
          sizes="(max-width: 768px) 100px, 200px"
          srcSet="https://4wdpmdxj.cdn.imgeng.in/s-5h8rqg02f8/content/images/Homepage/flower_whykapiva02.png?imgeng=/w_200/f_webp/ 200w,https://4wdpmdxj.cdn.imgeng.in/s-5h8rqg02f8/content/images/Homepage/flower_whykapiva02.png?imgeng=/w_400/f_webp/ 400w"
          className="h-auto md:w-[120px] lg:w-[200px]"
        />
      </div>
      <div className="absolute right-0 top-[77%] translate-y-1/2 md:top-[65%] lg:top-[76%] lg:translate-y-0">
        <img
          loading="lazy"
          src="https://4wdpmdxj.cdn.imgeng.in/s-5h8rqg02f8/content/images/Homepage/flower_whykapiva03.png"
          alt=""
          height={143}
          width={100}
          sizes="(max-width: 768px) 100px, 200px"
          srcSet="https://4wdpmdxj.cdn.imgeng.in/s-5h8rqg02f8/content/images/Homepage/flower_whykapiva03.png?imgeng=/w_200/f_webp/ 200w,https://4wdpmdxj.cdn.imgeng.in/s-5h8rqg02f8/content/images/Homepage/flower_whykapiva03.png?imgeng=/w_400/f_webp/ 400w"
          className="h-auto md:w-[120px] lg:w-[200px]"
        />
      </div>
    </section>
  );
}

export default HomeWhyKapivaSectionV2;
