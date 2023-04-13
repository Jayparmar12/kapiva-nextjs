import 'glider-js/glider.min.css';

import React from 'react';

import { GenerateSrcset } from '@/utils/helperFunctions';
import type { ExpertSpeakType } from '@/utils/types/types';

import { ImageAndVideoCompo } from '../atoms/ImageAndVideoCompo';
import ArrowContainer from '../molecules/ArrowContainer';

const responsive = [
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
    },
  },
  {
    // screens greater than >= 1024px
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
    },
  },
];

function ProductExpertSpeakVideos(props: { expertSpeaks: ExpertSpeakType[] }) {
  return (
    <div className="relative">
      <section className="kp-container flex flex-col items-center ">
        <h3 className="kp-pdp-section-title mt-[30px] mb-[25px] uppercase lg:my-12">
          <span className="pr-2 font-black lg:pr-4">DOCTOR&apos;S</span>
          ADVICE
        </h3>
        <div
          className={`${
            props.expertSpeaks.length < 3 ? `hide-dots` : ``
          } kp-hide-arrow-mobile pdp-glider-dot kp-hide-dots-mobile relative my-0 mx-auto w-full`}
        >
          <ArrowContainer
            slidesToShow={1.2}
            hasDots={true}
            slidesToScroll={1}
            gliderResponsive={responsive}
          >
            {props.expertSpeaks.map((item, id) => (
              <div key={id} className="relative px-[5px] md:px-[15px]">
                <ImageAndVideoCompo
                  img_url={item.image}
                  video_url={item.video_url}
                  type={item.type}
                  width={71}
                  height={50}
                  playButtonUrl="https://kapiva.in/content/images/pdppageimage/imageicon.png"
                />
              </div>
            ))}
          </ArrowContainer>
        </div>
      </section>
      <div className="absolute top-[-2%] left-0 z-[-1] w-[80px] lg:hidden ">
        <img
          loading="lazy"
          src="https://4wdpmdxj.cdn.imgeng.in/s-5h8rqg02f8/content/images/pdppageimage/expertspeakmobile.png/?imgeng=/w_auto,100/"
          alt=""
          className="h-auto max-w-full"
          srcSet={GenerateSrcset(
            'https://4wdpmdxj.cdn.imgeng.in/s-5h8rqg02f8/content/images/pdppageimage/expertspeakmobile.png',
            [100, 150],
            true
          )}
          width="225"
          height="456"
          sizes="(max-width:1023px) 100px"
        />
      </div>
    </div>
  );
}

export default ProductExpertSpeakVideos;
