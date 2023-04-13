import 'glider-js/glider.min.css';

import Image from 'next/image';
import React, { useState } from 'react';

import { GenerateSrcset } from '@/utils/helperFunctions';
import { DirectLoader } from '@/utils/ImageLoaders';
import type { Testimonial } from '@/utils/types/types';

import IconClose from '../atoms/IconClose';
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

function ImageAndVideoCompo(props) {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div
      className={`relative ${
        props.isModal === true ? `mb-4 lg:mb-0` : `mb-2.5`
      }`}
    >
      <div className={`relative ${showVideo === true && `hidden `}`}>
        <Image
          src={props.review.image}
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
      {props.review.type !== 'image' && showVideo === true && (
        <iframe
          height={220}
          width={220}
          className="mx-auto mb-2 aspect-square h-auto w-full rounded-md"
          src={props.review.video_url || ''}
          allowFullScreen
        ></iframe>
      )}

      {props.review.type !== 'image' && showVideo === false && (
        <button
          className="absolute left-1/2 top-1/2 h-[67px] w-[44px] -translate-y-1/2 -translate-x-1/2 text-[color:var(--cr-white)]"
          onClick={() => {
            setShowVideo(true);
          }}
        >
          <IconPlay />
        </button>
      )}
    </div>
  );
}

function TestimonialCard(props: { review: any; setActiveReviewModal?: any }) {
  return (
    <div className="!w-[calc((100vw-50px)/2)] !min-w-[130px] !shrink-0 md:!w-[calc((100vw-70px)/4)] lg:mb-5 lg:!w-full lg:!min-w-[100px] lg:!shrink">
      <div className="">
        <ImageAndVideoCompo review={props.review} isModal={false} />
        <div className="mb-1.5 lg:mb-2.5">
          <Ratings
            className="h-3 gap-1 md:h-4 lg:h-[18px]"
            rating={props.review.rating}
          />
        </div>
        <p>
          <span className="mr-1 text-[length:var(--text-2sm)] font-bold lg:mr-2">
            {props.review.name}
          </span>
          <span
            onClick={() => props.setActiveReviewModal(props.review.id)}
            className="kp-show-3line cursor-pointer font-normal lg:text-[length:var(--text-base)]"
          >
            {props.review.description}
          </span>
        </p>
      </div>
    </div>
  );
}

const MyModal = (props: any) => {
  return (
    <div className="bg-[rgba(255_255_255_0.9)] fixed inset-0 z-[60] h-full w-full rounded-lg backdrop-blur-sm lg:rounded-[10px]">
      <div className="m-auto mt-[50px] max-h-[90%] w-[90%] overflow-y-scroll rounded-lg bg-[color:var(--cr-white)] p-5 md:flex md:gap-5 lg:mt-[100px] lg:w-[80%] lg:gap-20 lg:p-20">
        <div className="sticky top-0 z-[1] mb-6 flex items-center justify-between bg-white md:hidden">
          <p className="text-[length:var(--text-base)] font-semibold">
            {props.review.name}
          </p>
          <span
            onClick={() => props.setActiveReviewModal(-1)}
            className="cursor-pointer"
          >
            <IconClose className="h-4 w-4  hover:scale-110" />
          </span>
        </div>
        <div className="h-full grow">
          <ImageAndVideoCompo isModal={true} review={props.review} />
        </div>
        <div className="md:w-[50%]">
          <div className="mb-5 hidden items-center justify-between md:flex">
            <p className="text-[length:var(--text-base)] font-semibold lg:text-[length:var(--heading-sm)] lg:tracking-[-0.48px]">
              {props.review.name}
            </p>
            <span
              onClick={() => props.setActiveReviewModal(-1)}
              className="cursor-pointer"
            >
              <IconClose className="h-4 w-4 hover:scale-110 lg:h-6  lg:w-6" />
            </span>
          </div>
          <div className="mb-4 lg:mb-5">
            <Ratings className="h-3 gap-1 md:h-4 lg:h-[18px]" rating={3.5} />
          </div>
          <p className="text-[length:var(--text-base)]  font-normal lg:text-[length:var(--text-lg)] lg:leading-[1.1]">
            {props.review.description}
          </p>
        </div>
      </div>
    </div>
  );
};

function TestimonialsV3({ testimonials }: { testimonials: Testimonial[] }) {
  const [activeReviewModal, setActiveReviewModal] = useState(-1);

  return (
    <div className="relative">
      <section className="kp-container">
        <h3 className="kp-pdp-section-title mt-[30px] mb-[25px] text-center lg:my-12">
          <span className="pr-2 font-black lg:pr-4">CUSTOMERS</span>
          SPEAK
        </h3>
        {activeReviewModal > -1 ? (
          <MyModal
            setActiveReviewModal={setActiveReviewModal}
            review={testimonials.find((ele) => ele.id === activeReviewModal)}
          />
        ) : null}
        <div className="relative m-auto w-[100%] max-w-[100%] lg:max-w-[100%]">
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
              {testimonials.map((review) => (
                <TestimonialCard
                  setActiveReviewModal={setActiveReviewModal}
                  review={review}
                  key={review.id}
                />
              ))}
            </ArrowContainer>
          </div>
        </div>
      </section>
      <div className="absolute top-[-2%] left-0 z-[-1] hidden w-[100px] lg:block xl:w-[150px]">
        <img
          src="https://4wdpmdxj.cdn.imgeng.in/s-5h8rqg02f8/content/images/pdppageimage/customerspeakflowertop.png?imgeng=/w_auto,150/"
          alt="customer speaks top-left flower"
          loading="lazy"
          className="h-auto max-w-full"
          srcSet={GenerateSrcset(
            'https://4wdpmdxj.cdn.imgeng.in/s-5h8rqg02f8/content/images/pdppageimage/customerspeakflowertop.png',
            [175, 250, 300],
            true
          )}
          width="466"
          height="920"
          sizes="(min-width:1024px) 100px,(min-width:1200px) 150px"
        ></img>
      </div>
      <div className="absolute bottom-[-10%] right-0 z-[-1] hidden w-[100px] lg:block xl:w-[150px]">
        <img
          src="https://4wdpmdxj.cdn.imgeng.in/s-5h8rqg02f8/content/images/pdppageimage/customerspeakflowerbottom.png?imgeng=/w_auto,150/"
          alt="customer speaks bottom-right leaves"
          className="h-auto max-w-full"
          loading="lazy"
          srcSet={GenerateSrcset(
            'https://4wdpmdxj.cdn.imgeng.in/s-5h8rqg02f8/content/images/pdppageimage/customerspeakflowerbottom.png',
            [150, 175, 200],
            true
          )}
          width="537"
          height="645"
          sizes="(min-width:1024px) 100px,(min-width:1200px) 150px"
        ></img>
      </div>
    </div>
  );
}

export default TestimonialsV3;
