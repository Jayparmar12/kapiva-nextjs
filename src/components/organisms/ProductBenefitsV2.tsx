import React from 'react';

import { GenerateSrcset } from '@/utils/helperFunctions';
import type { BenefitsType } from '@/utils/types/types';

function ProductBenefitsV2(props: {
  benifits: BenefitsType[];
  product_name: string;
}) {
  const svgPlaceholder =
    'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20400%22%3E%3Crect%20width%3D%22400%22%20height%3D%22400%22%20fill%3D%22%23cccccc%22%3E%3C%2Frect%3E%3C%2Fsvg%3E';

  return (
    <div className="relative">
      <section className="kp-container !px-[45px] text-center md:!px-[20px]">
        <h3 className="kp-pdp-section-title mt-[30px] mb-[25px] text-center uppercase lg:my-12">
          <span className="pr-2 font-black lg:pr-4">benefits</span>
          <br /> of {props?.product_name}
        </h3>

        <div className="flex flex-col items-center gap-5 md:flex-row md:flex-wrap md:items-start md:gap-0">
          {props.benifits.map((benefit, id) => (
            <div
              className="relative flex basis-1/3 flex-col backdrop-blur-[2px] md:px-[15px] md:pb-[20px]"
              key={id}
            >
              <div
                className={`relative mb-4 w-full ${
                  benefit?.before_image !== null ? `` : `pb-[57%]`
                }`}
              >
                <img
                  src={
                    benefit?.before_image !== null
                      ? benefit?.before_image
                      : svgPlaceholder
                  }
                  width="230"
                  height="133"
                  srcSet={
                    benefit?.before_image !== null &&
                    GenerateSrcset(benefit?.before_image, [320, 400, 500], true)
                  }
                  sizes="(max-width:767px) 80vw,33vw"
                  loading="lazy"
                  className={`${
                    benefit?.before_image !== null
                      ? `aspect-[230/133]`
                      : `object-cover absolute inset-0 w-full h-full`
                  } w-full rounded-md`}
                  alt=""
                />
              </div>
              <div className="mb-2.5 text-[length:var(--pdp-text-base)] font-black leading-[1.1] lg:min-h-[49px] lg:text-[length:var(--pdp-text-2xl)]">
                {benefit.title}
              </div>
              <div className="text-[length:var(--pdp-text-2sm)] font-medium leading-[1.1] text-[#1a1a1a] lg:text-[length:var(--pdp-text-lg)]">
                {benefit.description}
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="absolute top-[1%] left-0 z-[-1] w-[65px] lg:top-[10%] lg:w-[150px]">
        <img
          src="https://4wdpmdxj.cdn.imgeng.in/s-5h8rqg02f8/content/images/pdppageimage/benefitstopflower.png?imgeng=/w_auto,150/f_webp/"
          alt="Product Benefits top-left flower"
          loading="lazy"
          srcSet={GenerateSrcset(
            'https://4wdpmdxj.cdn.imgeng.in/s-5h8rqg02f8/content/images/pdppageimage/benefitstopflower.png',
            [65, 100, 150, 200],
            true
          )}
          width="743"
          height="960"
          sizes="(max-width:1023px) 65px,(max-width:1200px) 150px,200px"
          className="h-auto max-w-full"
        />
      </div>
      <div className="absolute bottom-[-1%] right-0 z-[-1] w-[95px] md:hidden lg:top-[10%]">
        <img
          src="https://4wdpmdxj.cdn.imgeng.in/s-5h8rqg02f8/content/images/pdppageimage/benefitsbottomrightflower.png"
          alt="Product Benefits bottom-right flower"
          loading="lazy"
          className="h-auto max-w-full"
          srcSet={GenerateSrcset(
            'https://4wdpmdxj.cdn.imgeng.in/s-5h8rqg02f8/content/images/pdppageimage/benefitsbottomrightflower.png',
            [95, 130],
            true
          )}
          width="220"
          height="228"
          sizes="(max-width:1023px) 95px"
        />
      </div>
    </div>
  );
}

export default ProductBenefitsV2;
