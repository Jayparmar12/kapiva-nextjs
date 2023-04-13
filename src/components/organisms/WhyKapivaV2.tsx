import React from 'react';

import { GenerateSrcset } from '@/utils/helperFunctions';
import type { WhyKapivaType } from '@/utils/types/types';

function WhyKapivaV2(props: { whyKapiva: WhyKapivaType[] }) {
  return (
    <section className="relative">
      <div className="kp-container">
        <h3 className="kp-pdp-section-title mt-[30px] mb-[25px] text-center lg:my-12">
          WHY
          <span className="pl-2 font-black">KAPIVA?</span>
        </h3>
        <div className=" flex flex-row flex-wrap text-center">
          {props.whyKapiva.map((benefit, id) => (
            <div
              className="mb-[10px] flex max-w-[50%] flex-[0_0_50%] flex-col items-center px-4 text-center md:max-w-[100%] md:flex-[0_0_25%]"
              key={id}
            >
              <div className="flex h-auto min-h-[60px] w-full items-center justify-center lg:min-h-[70px]">
                <img
                  src={benefit.image}
                  loading="lazy"
                  className="block max-w-full"
                  alt=""
                />
              </div>
              <div className="mb-[2px] min-h-[40px] text-[length:var(--pdp-text-base)] font-black capitalize leading-none text-[#425f2c] md:mx-0 md:mt-2.5 md:mb-1.5 lg:min-h-[55px] lg:text-[length:var(--pdp-heading-2xs)]">
                {benefit.title}
              </div>
              <div className="m-0 text-[length:var(--pdp-text-sm)] font-normal text-[color:var(--cr-dark)] lg:text-[length:var(--pdp-text-base)]">
                {benefit.description}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute left-0 top-[-16%] z-[-1] w-[85px] lg:top-[-20%] lg:w-[150px] xl:top-[-40%] xl:w-[175px]">
        <img
          loading="lazy"
          src="https://4wdpmdxj.cdn.imgeng.in/s-5h8rqg02f8/content/images/pdppageimage/whykapivamobileflower.png"
          alt="plant left mobile"
          className="h-auto max-w-full lg:hidden"
          srcSet={GenerateSrcset(
            'https://4wdpmdxj.cdn.imgeng.in/s-5h8rqg02f8/content/images/pdppageimage/whykapivamobileflower.png',
            [85, 130],
            true
          )}
          width="855"
          height="1158"
          sizes="(max-width:1023px) 85px"
        />
        <img
          loading="lazy"
          src="https://4wdpmdxj.cdn.imgeng.in/s-5h8rqg02f8/content/images/pdppageimage/whykapivadeskflower.png"
          alt="plant left desktop"
          className="hidden h-auto max-w-full lg:block"
          srcSet={GenerateSrcset(
            'https://4wdpmdxj.cdn.imgeng.in/s-5h8rqg02f8/content/images/pdppageimage/whykapivadeskflower.png',
            [150, 175, 200],
            true
          )}
          width="260"
          height="379"
          sizes="(max-width:1200px) 150px,200px"
        />
      </div>
    </section>
  );
}

export default WhyKapivaV2;
