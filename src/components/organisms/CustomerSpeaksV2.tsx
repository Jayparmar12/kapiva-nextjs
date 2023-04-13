import 'glider-js/glider.min.css';

import React, { useEffect, useState } from 'react';

import type { PdpReviewsType, TestimonialsActive } from '@/utils/types/types';

import IconPlay from '../atoms/IconPlay';
import ArrowContainer from '../molecules/ArrowContainer';
import Ratings from '../molecules/Ratings';

// const testimonials = [
//   {
//     img_url: '/assets/images/reviews/review1.png',
//     name: 'Divya G, Bangalore',
//     comment:
//       'Skin needs nourishment like an organ. I knew this but only realised it when I started nourishing it with the help of experts at Kapiva. I just dont have better skin, I understand my skin better',
//     is_video: true,
//   },
//   {
//     img_url: '/assets/images/reviews/review1.png',
//     name: 'Alpana Roy, Kolkata',
//     comment: 'Wow, this is amazing. Thank you so much Kapiva!',
//     is_video: false,
//   },
//   {
//     img_url: '/assets/images/reviews/review1.png',
//     name: 'Divya G, Bangalore',
//     comment:
//       'Skin needs nourishment like an organ. I knew this but only realised it when I started nourishing it with the help of experts at Kapiva. I just dont have better skin, I understand my skin better',
//     is_video: true,
//   },
//   {
//     img_url: '/assets/images/reviews/review1.png',
//     name: 'Alpana Roy, Kolkata',
//     comment: 'Wow, this is amazing. Thank you so much Kapiva!',
//     is_video: false,
//   },
//   {
//     img_url: '/assets/images/reviews/review1.png',
//     name: 'Alpana Roy, Kolkata',
//     comment: 'Wow, this is amazing. Thank you so much Kapiva!',
//     is_video: false,
//   },
//   {
//     img_url: '/assets/images/reviews/review1.png',
//     name: 'Alpana Roy, Kolkata',
//     comment: 'Wow, this is amazing. Thank you so much Kapiva!',
//     is_video: false,
//   },
//   {
//     img_url: '/assets/images/reviews/review1.png',
//     name: 'Alpana Roy, Kolkata',
//     comment: 'Wow, this is amazing. Thank you so much Kapiva!',
//     is_video: false,
//   },
//   {
//     img_url: '/assets/images/reviews/review1.png',
//     name: 'Alpana Roy, Kolkata',
//     comment: 'Wow, this is amazing. Thank you so much Kapiva!',
//     is_video: false,
//   },
// ];

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
      slidesToShow: 5,
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
  {
    breakpoint: 1280,
    settings: {
      slidesToShow: 7,
      slidesToScroll: 1,
    },
  },
];

function CustomerSpeaksV2({
  testimonials,
}: {
  testimonials: PdpReviewsType[];
}) {
  const [actives, setActives] = useState<TestimonialsActive[]>(
    testimonials.reduce((data: TestimonialsActive[], curr: PdpReviewsType) => {
      return [...data, { active: false, id: curr.id }];
    }, [])
  );
  useEffect(() => {
    setActives(
      testimonials.reduce(
        (data: TestimonialsActive[], curr: PdpReviewsType) => {
          return [...data, { active: false, id: curr.id }];
        },
        []
      )
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
    <div className="relative">
      <section className="kp-container mb-7 flex flex-col items-center lg:mb-14  ">
        <h3 className="kp-pdp-section-title mt-[30px] mb-[25px] lg:my-12">
          <span className="pr-2 font-black lg:pr-4">CUSTOMERS</span>
          SPEAK
        </h3>
        <div className="kp-hide-dots-mobile pdp-glider-dot kp-hide-arrow-mobile relative m-auto w-[100%] max-w-[100%] lg:max-w-[100%]">
          <ArrowContainer
            gliderResponsive={gliderResponsive}
            slidesToShow={2}
            hasDots={true}
          >
            {testimonials.map((review, id) => (
              <div
                key={review.id}
                className="!min-w-[100px] px-[5px] md:px-[10px]"
              >
                <div className="">
                  <div className="relative">
                    <img
                      src={review.image}
                      alt=""
                      loading="lazy"
                      height={60}
                      width={60}
                      className={`mx-auto mb-4 lg:mb-2.5 h-auto aspect-[60/60] object-cover object-center rounded-sm w-full ${
                        actives[id]?.active === true && `hidden `
                      } rounded-sm`}
                    />
                    {review.type !== 'image' &&
                      actives[id]?.active === true && (
                        <iframe
                          height={100}
                          width={100}
                          className="mx-auto mb-4 aspect-[60/60] h-auto w-full rounded-sm object-cover object-center lg:mb-2.5"
                          src={review.video_url || ''}
                          allowFullScreen
                        ></iframe>
                      )}

                    {review.type !== 'image' && actives[id]?.active === false && (
                      <button
                        className="absolute left-1/2 top-1/2 h-[67px] w-[44px] -translate-y-1/2 -translate-x-1/2 text-white  "
                        onClick={() => {
                          handleClick(review.id);
                        }}
                      >
                        <IconPlay />
                      </button>
                    )}
                  </div>
                  <div className="mb-2 text-[length:var(--pdp-text-sm)] font-extrabold leading-[0.9] tracking-[-0.2px] text-[color:var(--cr-secondary-lighter)] lg:mb-[5px] lg:text-[length:var(--pdp-text-lg)] lg:tracking-[-0.28px]">
                    {review.name}
                  </div>
                  <div className="mb-2.5 lg:mb-2">
                    <Ratings
                      className="h-2.5 gap-[3px] md:h-4"
                      rating={review.rating}
                    />
                  </div>
                  <div className="mb-2 h-px w-[40px] bg-black lg:mb-2.5"></div>
                  <div className="text-[length:var(--pdp-text-sm)] font-medium leading-[1.3] tracking-[0] lg:text-[length:var(--pdp-text-base)] xl:text-[length:var(--pdp-text-xl)] xl:leading-[1.1]">
                    {review.description}
                  </div>
                </div>
              </div>
            ))}
          </ArrowContainer>
        </div>
      </section>
      <div className="absolute top-[-2%] left-0 z-[-1] hidden w-[100px] lg:block xl:w-[150px]">
        <img
          src="https://4wdpmdxj.cdn.imgeng.in/s-5h8rqg02f8/content/images/pdppageimage/customerspeakflowertop.png"
          alt="customer speaks top-left flower"
          loading="lazy"
          className="h-auto max-w-full"
        ></img>
      </div>
      <div className="absolute bottom-[-10%] right-0 z-[-1] hidden w-[100px] lg:block xl:w-[150px]">
        <img
          src="https://4wdpmdxj.cdn.imgeng.in/s-5h8rqg02f8/content/images/pdppageimage/customerspeakflowerbottom.png"
          alt="customer speaks bottom-right leaves"
          className="h-auto max-w-full"
          loading="lazy"
        ></img>
      </div>
    </div>
  );
}

export default CustomerSpeaksV2;
