import 'glider-js/glider.min.css';

import Image from 'next/image';
import React from 'react';
import Glider from 'react-glider';

import type { NewsHead, NewsItem } from '@/utils/types/types';

function NewsCard({ image_url, title }: { image_url: string; title: string }) {
  return (
    <div className="kp-green-shadow relative mr-4 mb-3 !min-w-[135px] rounded-lg border-[1px] border-[color:var(--cr-primary-o4)] bg-white bg-[color:var(--cr-white)] px-4 pt-5 pb-4 first:ml-5 last:before:absolute last:before:top-0 last:before:left-full last:before:h-full last:before:w-5  last:before:content-[''] lg:mr-[50px] lg:!min-w-[270px] lg:first:ml-[50px] lg:last:before:w-[50px]">
      <div>
        <div className="mb-3">
          <Image
            src={image_url}
            height={70}
            width={235}
            alt=""
            className="m-auto h-auto max-w-full"
          />
        </div>
        <p className="border-t-[0.25px] border-[color:var(--cr-secondary)] pt-2 text-[length:var(--text-sm)] font-normal leading-tight lg:border-t-[1px] lg:pt-5 lg:text-[length:var(--text-lg)] ">
          {title}
        </p>
      </div>
    </div>
  );
}

const gliderResponsive = [
  {
    breakpoint: 425,
    settings: {
      slidesToShow: 2.5,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 4.3,
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
      slidesToShow: 6,
      slidesToScroll: 1,
    },
  },
];

function InTheNewsV2(props: { head: NewsHead; newsItems: NewsItem[] }) {
  return (
    <section className="relative mb-14 lg:mb-32">
      <p className="kp-container mb-5 text-[length:var(--text-lg)] font-semibold lg:mb-10 lg:text-[length:var(--heading-lg)]">
        In the News
      </p>
      <p className="mb-5 text-center text-[color:var(--cr-danger-lighter)] lg:mb-10">
        <span className="text-[length:var(--text-sm)] font-normal tracking-[1.92px]  lg:text-[length:var(--heading-sm)] lg:leading-loose lg:tracking-[3.84px]">
          {props.head.sub_heading}
        </span>
        <br />
        <span className="text-[length:var(--heading-sm)] font-black leading-[1.2] tracking-[4.9px] lg:text-[length:var(--heading-lg)] lg:leading-[1.4] lg:tracking-[7.2px]">
          {props.head.sub_inner_heading}
        </span>
        <br />
        <span className="text-[length:var(--text-sm)] font-semibold leading-tight  tracking-[1.44px] lg:text-[length:var(--heading-sm)] lg:tracking-[2.88px]">
          {props.head.sub_inner_main_heading}
        </span>
      </p>
      <div className="kp-container-fluid !px-0">
        <div className="m-auto max-w-full">
          <Glider
            slidesToShow={2.5}
            slidesToScroll={1}
            hasDots={true}
            responsive={gliderResponsive}
            skipTrack={true}
            draggable={true}
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'nowrap',
              }}
            >
              {props.newsItems.map((news) => (
                <NewsCard key={news.id} {...news} />
              ))}
            </div>
          </Glider>
        </div>
      </div>
    </section>
  );
}

export default InTheNewsV2;
