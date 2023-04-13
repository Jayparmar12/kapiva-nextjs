import 'glider-js/glider.min.css';

import React from 'react';

import type { Blog } from '@/utils/types/types';

import styles from '../../styles/BlogsAndArticles.module.css';
import ArrowContainer from '../molecules/ArrowContainer';

function ArticleCard({
  image_url,
  category_name,
  title,
  url,
  date,
}: {
  image_url: string;
  category_name: string;
  title: string;
  url: string;
  date: string;
}) {
  return (
    <div className="mr-4 lg:mr-8">
      <article className="">
        <img
          loading="lazy"
          // eslint-disable-next-line global-require, import/no-dynamic-require
          src={image_url}
          alt=""
          height={362}
          width={527}
          className="m-auto mb-3  max-w-full lg:mb-7"
        />
        <p
          className={`font-jost text-xs font-bold tracking-[1.98px] text-[#C97B5A]  bg-blend-multiply ${styles.blogTag}`}
        >
          {category_name}
        </p>
        <a
          href={url}
          className={`font-play_regular mb-1 lg:mb-3 leading-[1.44] text-sm font-black tracking-[1.24px] text-[#868686]  ${styles.blogTitle}`}
        >
          {title}
        </a>
        <p
          className={`font-jost text-xs leading-1 lg:leading-[1.3] font-light tracking-[1.8px] bg-blend-multiply ${styles.blogSubTitle}`}
        >
          {date}
        </p>
      </article>
    </div>
  );
}

// const articleData = [
//   {
//     image_src: 'blog_A.png',
//     topic: 'Detox',
//     title: 'Effective Home Remedies To Get Rid Of Lice Naturally',
//     date: '12 June 2022',
//   },
//   {
//     image_src: 'blog_B.png',
//     topic: 'Detox',
//     title: 'Effective Home Remedies To Get Rid Of Lice Naturally',
//     date: '12 June 2022',
//   },
//   {
//     image_src: 'blog_A.png',
//     topic: 'Detox',
//     title: 'Effective Home Remedies To Get Rid Of Lice Naturally',
//     date: '12 June 2022',
//   },
//   {
//     image_src: 'blog_A.png',
//     topic: 'Detox',
//     title: 'Effective Home Remedies To Get Rid Of Lice Naturally',
//     date: '12 June 2022',
//   },
//   {
//     image_src: 'blog_B.png',
//     topic: 'Detox',
//     title: 'Effective Home Remedies To Get Rid Of Lice Naturally',
//     date: '12 June 2022',
//   },
//   {
//     image_src: 'blog_A.png',
//     topic: 'Detox',
//     title: 'Effective Home Remedies To Get Rid Of Lice Naturally',
//     date: '12 June 2022',
//   },
// ];

const gliderResponsive = [
  {
    breakpoint: 400,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      hasArrows: false,
    },
  },
];
function BlogsAndArticles(props: { blogs: Blog[] }) {
  return (
    <section className="kp-container">
      <h1 className="mb-7 text-center font-jost text-2xl font-light lg:mb-14 lg:text-[56px]">
        KAPIVA <span className="font-black">BLOG</span>
      </h1>
      <div className="relative m-auto mb-8 max-w-full">
        <ArrowContainer gliderResponsive={gliderResponsive} slidesToShow={1.2}>
          {props.blogs.map((article, id) => (
            <ArticleCard key={id} {...article} />
          ))}
        </ArrowContainer>
      </div>
      <div className="flex items-center justify-center">
        <button
          className={`${styles.blogTitle} leading-[1.2] mb-7 border-[1px] border-black bg-transparent py-2.5 px-6 text-center font-jost text-xs font-medium text-[#1A1A1A] lg:mb-14 lg:px-11`}
        >
          READ ALL ARTICLES
        </button>
      </div>
    </section>
  );
}

export default BlogsAndArticles;
