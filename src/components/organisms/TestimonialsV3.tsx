import 'glider-js/glider.min.css';

import Image from 'next/image';
import React, { useState } from 'react';

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
          src={
            props.review.isImage !== '1'
              ? props.review.image_icon_url
              : props.review.image_url
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
      {props.review.isImage !== '1' && showVideo === true && (
        <iframe
          height={220}
          width={220}
          className="mx-auto mb-2 aspect-square h-auto w-full rounded-md"
          src={props.review.video_url || ''}
          allowFullScreen
        ></iframe>
      )}

      {props.review.isImage !== '1' && showVideo === false && (
        <button
          className="absolute left-1/2 top-1/2 h-[67px] w-[44px] -translate-y-1/2 -translate-x-1/2 text-[color:var(--cr-primary)]"
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
            rating={props.review.ratings}
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
      <div className="m-auto mt-[50px] w-[90%] rounded-lg bg-[color:var(--cr-white)] p-5 md:flex md:gap-5 lg:mt-[100px] lg:w-[80%] lg:gap-20 lg:p-20">
        <div className="mb-6 flex items-center justify-between md:hidden">
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
    <section className="mb-14 lg:mb-32">
      <div className="kp-container mb-5 flex items-center justify-start lg:mb-10">
        <span className="text-[length:var(--text-lg)] font-semibold lg:mb-0 lg:text-[length:var(--heading-lg)]">
          Real people, real stories
        </span>
      </div>
      {activeReviewModal > -1 ? (
        <MyModal
          setActiveReviewModal={setActiveReviewModal}
          review={testimonials.find((ele) => ele.id === activeReviewModal)}
        />
      ) : null}
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
      <div className="h-2.5 w-full bg-[color:var(--cr-primary-o3)]"></div>
    </section>
  );
}

export default TestimonialsV3;
