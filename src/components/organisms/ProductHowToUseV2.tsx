import React, { useState } from 'react';

import { GenerateSrcset } from '@/utils/helperFunctions';
import type { HowToUseImageType, HowToUseStepType } from '@/utils/types/types';

function ProductHowToUseV2(props: {
  images: HowToUseImageType[];
  steps: HowToUseStepType[];
}) {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section className="relative">
      <div className="kp-container relative flex flex-col items-center justify-center font-jost">
        <h3 className="kp-pdp-section-title mt-[30px] mb-[25px] text-center lg:my-12">
          <span className="pr-2 font-black">HOW TO</span>
          USE
        </h3>
        <div className="flex w-full flex-col px-[20px] md:flex-row md:justify-between md:px-0">
          {props.images.length > 0 && (
            <div className="relative md:mr-[30px] md:w-[50%]">
              {showVideo === false ? (
                <img
                  src={`${props?.images[0]?.image}/?imgeng=/w_auto,400/`}
                  width={632}
                  height={490}
                  srcSet={GenerateSrcset(
                    props?.images[0]?.image,
                    [400, 500, 600],
                    true
                  )}
                  sizes="(max-width:767px) 90vw,(max-width:1300px)50vw"
                  className="aspect-[632/490] h-full w-full rounded-md object-cover object-center"
                  alt=""
                  loading="lazy"
                />
              ) : (
                <iframe
                  width={632}
                  height={490}
                  className="aspect-[632/490] h-full w-full rounded-md object-cover object-center"
                  src={props?.images[0]?.video_url || ''}
                  allowFullScreen
                ></iframe>
              )}
              {props?.images[0]?.type === 'video' && showVideo === false && (
                <div
                  className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowVideo(true)}
                >
                  <img
                    src="https://4wdpmdxj.cdn.imgeng.in/s-5h8rqg02f8/content/images/Homepage/playvideo-icon.png"
                    alt=""
                    height={67}
                    width={44}
                    className="ml-[50%] h-auto w-[28px] -translate-x-1/2 lg:w-[44px]"
                  />
                  <p className="m-0 mt-[30px] cursor-pointer text-center text-[length:var(--pdp-text-base)] font-bold uppercase tracking-[0] text-cream lg:text-[length:var(--pdp-text-lg)]">
                    view tutorial
                  </p>
                </div>
              )}
            </div>
          )}
          <div className="flex flex-col md:w-[50%]">
            {props.steps.map((step, id) => (
              <div
                key={id}
                className="mx-0 mt-[20px] mb-0 overflow-hidden border-b border-b-[rgb(201,123,90)] md:first:mt-0"
              >
                <p className="mb-2.5 text-[length:var(--pdp-text-base)] font-bold leading-[1] tracking-[-0.3px] text-[color:var(--cr-primary-dark)] lg:mb-5 lg:text-[length:var(--pdp-heading-xs)]">
                  STEP {id + 1}: {step.title}
                </p>
                <p className="mb-6 text-[length:var(--pdp-text-sm)] font-normal leading-[1.1] lg:text-[length:var(--pdp-text-xl)]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute top-[0%] right-0 z-[-1] w-[90px] md:top-[-6%] lg:w-[125px]">
        <img
          loading="lazy"
          src="https://4wdpmdxj.cdn.imgeng.in/s-5h8rqg02f8/content/images/pdppageimage/howtousedeskflowertop.png/?imgeng=/w_auto,150/"
          alt=""
          className="h-auto max-w-full"
          srcSet={GenerateSrcset(
            'https://4wdpmdxj.cdn.imgeng.in/s-5h8rqg02f8/content/images/pdppageimage/howtousedeskflowertop.png',
            [100, 150, 200],
            true
          )}
          width="820"
          height="1308"
          sizes="(max-width:1023px) 100px,(max-width:1200px) 125px,200px"
        />
      </div>
    </section>
  );
}

export default ProductHowToUseV2;
