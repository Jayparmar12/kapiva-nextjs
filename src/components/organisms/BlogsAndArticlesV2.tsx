import 'glider-js/glider.min.css';

import Image from 'next/image';
import React from 'react';

import { DirectLoader } from '@/utils/ImageLoaders';
import type { Blog } from '@/utils/types/types';

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
    <div className="mr-4 first:ml-5 lg:mr-8 lg:last:mr-0">
      <article>
        <div className="relative mb-2.5 lg:mb-5">
          <Image
            loading="lazy"
            // eslint-disable-next-line global-require, import/no-dynamic-require
            src={image_url}
            alt=""
            height={500}
            width={710}
            layout="responsive"
            loader={DirectLoader}
            className="m-auto max-w-full rounded-md"
          />
        </div>
        <p className="text-[length:var(--text-2sm)] font-bold tracking-[2.52px] text-[color:var(--cr-primary)] bg-blend-multiply lg:mb-[5px] lg:text-[length:var(--text-lg)] lg:tracking-[3.24px]">
          {category_name}
        </p>
        <a
          href={url}
          className="mb-1 block text-[length:var(--text-base)] font-normal leading-[1.25] tracking-[1.6px] hover:text-[color:var(--cr-danger-light)] lg:mb-2.5 lg:text-[length:var(--heading-sm)] lg:tracking-[2.4px]"
        >
          {title}
        </a>
        <p className="mt-auto text-[length:var(--text-2sm)] font-bold tracking-[2.52px] bg-blend-multiply lg:text-[length:var(--text-lg)] lg:tracking-[3.24px]">
          {date}
        </p>
      </article>
    </div>
  );
}

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
function BlogsAndArticlesV2(props: { blogs: Blog[] }) {
  return (
    <section className="mb-14 lg:mb-32">
      <div className="kp-container mb-5 flex items-center justify-start lg:mb-10">
        <span className="text-[length:var(--text-lg)]  font-semibold lg:mb-0 lg:text-[length:var(--heading-lg)]">
          Learn more about Ayurveda
        </span>
        <span className="ml-auto text-[length:var(--text-sm)] lg:hidden lg:text-[length:var(--text-lg)]">
          <a
            className="text-[color:var(--cr-danger-light)]"
            href="https://blog.kapiva.in/"
          >
            View all
          </a>
        </span>
      </div>
      {/* px-20(20px[overwriting kp-container padding] +40px)  is set inorder to provide space for the Arrow this should be common for desktop sliders */}
      <div className="kp-container !px-0 lg:mb-10 lg:!px-[60px]">
        <div className="kp-hide-arrow-mobile relative m-auto max-w-full">
          <ArrowContainer
            gliderResponsive={gliderResponsive}
            slidesToShow={1.2}
          >
            {props.blogs.map((article, id) => (
              <ArticleCard key={id} {...article} />
            ))}
          </ArrowContainer>
        </div>
      </div>
      <a
        href="https://blog.kapiva.in/"
        className="hidden text-center text-[length:var(--text-sm)] font-semibold text-[color:var(--cr-danger-light)] underline underline-offset-2 lg:block lg:text-[length:var(--text-lg)] "
      >
        Read all articles
      </a>
    </section>
  );
}

export default BlogsAndArticlesV2;
