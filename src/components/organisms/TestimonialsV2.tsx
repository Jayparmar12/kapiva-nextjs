import 'glider-js/glider.min.css';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { DirectLoader } from '@/utils/ImageLoaders';
import type { Testimonial, TestimonialsActive } from '@/utils/types/types';

import IconPlay from '../atoms/IconPlay';
import ArrowContainer from '../molecules/ArrowContainer';
import Ratings from '../molecules/Ratings';

const gliderResponsive = [
  {
    breakpoint: 425,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    },
  },
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
      slidesToShow: 6,
      slidesToScroll: 1,
    },
  },
];

function TestimonialsV2({ testimonials }: { testimonials: Testimonial[] }) {
  const [actives, setActives] = useState<TestimonialsActive[]>(
    testimonials.reduce((data: TestimonialsActive[], curr: Testimonial) => {
      return [...data, { active: false, id: curr.id }];
    }, [])
  );
  useEffect(() => {
    setActives(
      testimonials.reduce((data: TestimonialsActive[], curr: Testimonial) => {
        return [...data, { active: false, id: curr.id }];
      }, [])
    );
  }, [testimonials]);

  const handleClick = (id: number) => {
    setActives((prevArr) => {
      return prevArr.map((ele) => {
        if (ele.id === id) {
          return { ...ele, active: !ele.active };
        }
        return ele;
      });
    });
  };
  return (
    <section className="mb-14 lg:mb-32">
      <div className="kp-container mb-5 flex items-center justify-start lg:mb-10">
        <span className="text-[length:var(--text-lg)] font-semibold lg:mb-0 lg:text-[length:var(--heading-lg)]">
          Real people, real stories
        </span>
      </div>

      <div className="kp-container mb-5 lg:mb-10 lg:px-[60px]">
        <div
          className={`kp-hide-dots-mobile relative m-auto max-w-full lg:max-w-full ${
            testimonials.length < 6 ? `hide-dots` : ``
          }`}
        >
          <ArrowContainer
            gliderResponsive={gliderResponsive}
            slidesToShow={2}
            hasDots={true}
            trackClassName={`gap-2.5 lg:gap-[20px] flex`}
          >
            {testimonials.map((review, id) => (
              <div
                key={review.id}
                className="!w-[calc((100vw-50px)/2)] !min-w-[130px] !shrink-0 md:!w-[calc((100vw-70px)/4)] lg:mb-5 lg:!w-full lg:!min-w-[100px] lg:!shrink"
              >
                <div className="">
                  <div className="relative mb-2.5">
                    <div
                      className={`relative ${
                        actives[id]?.active === true && `hidden `
                      }`}
                    >
                      <Image
                        src={
                          review.isImage !== '1'
                            ? review.image_icon_url
                            : review.image_url
                        }
                        alt=""
                        loading="lazy"
                        layout="responsive"
                        objectFit="cover"
                        loader={DirectLoader}
                        height={220}
                        width={220}
                        className={`mx-auto aspect-square mb-2 hidden h-auto w-full rounded-md`}
                      />
                    </div>
                    {review.isImage !== '1' && actives[id]?.active === true && (
                      <iframe
                        height={220}
                        width={220}
                        className="mx-auto mb-2 aspect-square h-auto w-full rounded-md"
                        src={review.video_url || ''}
                        allowFullScreen
                      ></iframe>
                    )}

                    {review.isImage !== '1' && actives[id]?.active === false && (
                      <button
                        className="absolute left-1/2 top-1/2 h-[67px] w-[44px] -translate-y-1/2 -translate-x-1/2 text-[color:var(--cr-primary)]"
                        onClick={() => {
                          handleClick(review.id);
                        }}
                      >
                        <IconPlay />
                      </button>
                    )}
                  </div>
                  <div className="mb-1.5 lg:mb-2.5">
                    <Ratings
                      className="h-3 gap-1 md:h-4 lg:h-[18px]"
                      rating={review.ratings}
                    />
                  </div>
                  <p>
                    <span className="mr-1 text-[length:var(--text-2sm)] font-bold lg:mr-2">
                      {review.name}
                    </span>
                    <span className="font-normal lg:text-[length:var(--text-base)]">
                      {review.description}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </ArrowContainer>
        </div>
      </div>
      <div className="h-2.5 w-full bg-[color:var(--cr-primary-o3)]"></div>
    </section>
  );
}

export default TestimonialsV2;
