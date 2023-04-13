import 'glider-js/glider.min.css';

import React from 'react';
import Glider from 'react-glider';

const responsive = [
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
    },
  },
  {
    // screens greater than >= 1024px
    breakpoint: 1024,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 1,
    },
  },
];

const CustomerSpeakVideosObject = [
  { video_url: '/assets/images/customer_speak/customer.png' },
  { video_url: '/assets/images/customer_speak/customer.png' },
  { video_url: '/assets/images/customer_speak/customer.png' },
  { video_url: '/assets/images/customer_speak/customer.png' },
  { video_url: '/assets/images/customer_speak/customer.png' },
  { video_url: '/assets/images/customer_speak/customer.png' },
  { video_url: '/assets/images/customer_speak/customer.png' },
  { video_url: '/assets/images/customer_speak/customer.png' },
  { video_url: '/assets/images/customer_speak/customer.png' },
];

function ProductCustomerSpeakVideos() {
  return (
    <>
      <section className="relative flex flex-col items-center gap-y-7 font-jost">
        <div className="text-[17px] backdrop-blur-sm">
          <span className="font-black">CUSTOMER</span>
          <span className="font-light"> SPEAK</span>
        </div>
        <div className="m-auto max-w-[90%] ">
          <Glider
            slidesToShow={3}
            slidesToScroll={1}
            responsive={responsive}
            draggable
          >
            {CustomerSpeakVideosObject.map((customer_video, id) => (
              <div className="mx-[5px]" key={id}>
                <div className="relative">
                  <img
                    loading="lazy"
                    src={customer_video.video_url}
                    alt=""
                    height="200"
                    width="150"
                  />

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    className="absolute left-[67px] top-[84px]"
                    height="30"
                    fill="white"
                    viewBox="0 0 5.643 11.286"
                  >
                    <path
                      id="next_arrow"
                      d="M235.929,529.035,240.965,524l-5.035-5.035Z"
                      transform="translate(-235.678 -518.357)"
                      fill="white"
                      strokeWidth="0.504"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </Glider>
        </div>
        <div className="absolute top-0 right-0 -z-10 translate-y-[-65%]">
          <img
            loading="lazy"
            // eslint-disable-next-line global-require, import/no-dynamic-require
            src={require(`../../../public/assets/images/edge_images_product/flower_customer_speakes.png?webp`)}
            alt=""
            className={'aspect-auto w-[111px] max-w-full'}
          />
        </div>
      </section>
    </>
  );
}

export default ProductCustomerSpeakVideos;
