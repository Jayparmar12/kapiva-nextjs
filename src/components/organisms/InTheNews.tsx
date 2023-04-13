import 'glider-js/glider.min.css';

import React from 'react';
import Glider from 'react-glider';

import type { NewsHead, NewsItem } from '@/utils/types/types';

import styles from '../../styles/InTheNews.module.css';

function NewsCard({ image_url, title }: { image_url: string; title: string }) {
  return (
    <div className="mr-5 mb-7 rounded-lg bg-[#fff] px-4 py-2.5 first:ml-2 lg:mb-5 lg:mr-10 lg:first:ml-20">
      <div className="flex flex-col  gap-1 ">
        <img
          src={image_url}
          height={70}
          width={235}
          alt=""
          className="m-auto mb-3 aspect-auto h-auto max-w-[100%] object-center "
        />
        <p
          className={`border-t-[0.25px] border-[#868686] pt-1 text-xs font-medium leading-tight lg:border-t-[1px] lg:pt-2 ${styles.kpNewsCardTitle}`}
        >
          {title}
        </p>
      </div>
    </div>
  );
}

// const newsItems = [
//   {
//     img_url: '/assets/images/inthenews/logo_wellbeing.png',
//     title: 'EY Entrepreneur of the Year 2020',
//   },
//   {
//     img_url: '/assets/images/inthenews/logo_inc.png',
//     title: 'Fast 42 by Inc 42',
//   },
//   {
//     img_url: '/assets/images/inthenews/logo_ey.png',
//     title: 'EY Entrepreneur of the Year 2020',
//   },
//   {
//     img_url: '/assets/images/inthenews/logo_wellbeing.png',
//     title: 'EY Entrepreneur of the Year 2020',
//   },
//   {
//     img_url: '/assets/images/inthenews/logo_inc.png',
//     title: 'Fast 42 by Inc 42',
//   },
//   {
//     img_url: '/assets/images/inthenews/logo_ey.png',
//     title: 'EY Entrepreneur of the Year 2020',
//   },
//   {
//     img_url: '/assets/images/inthenews/logo_wellbeing.png',
//     title: 'EY Entrepreneur of the Year 2020',
//   },
//   {
//     img_url: '/assets/images/inthenews/logo_inc.png',
//     title: 'Fast 42 by Inc 42',
//   },
//   {
//     img_url: '/assets/images/inthenews/logo_ey.png',
//     title: 'EY Entrepreneur of the Year 2020',
//   },
// ];

const gliderResponsive = [
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 1280,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 1,
    },
  },
];

function InTheNews(props: { head: NewsHead; newsItems: NewsItem[] }) {
  return (
    <section className="kp-home-section-title relative mb-8 font-jost lg:mb-14">
      <h1 className="mb-2 text-center text-2xl  font-light text-[#333333] lg:mb-7 lg:text-[54px]">
        IN THE <span className="font-black">NEWS</span>
      </h1>
      <p className="mb-5  text-center leading-5 text-[#AEB797] lg:mb-7 lg:leading-[1.2]">
        <span
          className={`text-sm font-normal  tracking-[1.73px] ${styles.kpInTheNewsTitleTop}`}
        >
          {props.head.sub_heading}
        </span>
        <br />
        <span className="text-2xl font-black  tracking-[4.99px] lg:text-[54px]">
          {props.head.sub_inner_heading}
        </span>
        <br />
        <span
          className={`text-[10px] font-black tracking-[1.03px] ${styles.kpInTheNewsTitleBottom}`}
        >
          {props.head.sub_inner_main_heading}
        </span>
      </p>
      <div className="m-auto max-w-[100%]">
        <Glider
          responsive={gliderResponsive}
          slidesToShow={2.5}
          slidesToScroll={1}
          hasDots={true}
          skipTrack={true}
          draggable={true}
        >
          <div className="flex overflow-x-auto overflow-y-hidden">
            {props.newsItems.map((news) => (
              <NewsCard key={news.id} {...news} />
            ))}
          </div>
        </Glider>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 translate-y-1/4 lg:bottom-1/2 lg:translate-y-1/3">
        <img
          height={232}
          width={136}
          // eslint-disable-next-line global-require
          src={require('../../../public/assets/images/inthenews/flower_edge.png?webp')}
          className=" aspect-auto h-auto max-w-[68px] lg:max-w-[136px] "
          alt=""
        />
      </div>
    </section>
  );
}

export default InTheNews;
