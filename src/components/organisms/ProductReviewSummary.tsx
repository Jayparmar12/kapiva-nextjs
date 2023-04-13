import React from 'react';

import RatingDemo from '../atoms/RatingDemo';

function ProductReviewSummary() {
  return (
    <>
      <section className="relative flex flex-col items-center text-center font-jost leading-none">
        <div className="mb-[26px] text-[17px] backdrop-blur-sm">
          <span className="font-light">CUSTOMER </span>
          <span className="font-black">SPEAK</span>
        </div>

        <div
          className="flex flex-row items-center justify-center gap-6 bg-[#FFFBF6] px-2"
          style={{ height: '80px' }}
        >
          <div className="flex flex-col text-[#364D2E]">
            <span className="text-[34px] font-black tracking-[-0.67px]">
              450
            </span>
            <span className="text-[10px] font-semibold tracking-[-0.18px] ">
              TOTAL REVIEWS
            </span>
          </div>
          <div className="h-[50px] w-[1px] bg-black"></div>
          <div className="flex flex-col items-center gap-2">
            <span className="	 text-[13px] font-normal tracking-[-0.26px]">
              AVERAGE RATING <span className="font-semibold">4.5/5 </span>
            </span>
            <RatingDemo />
          </div>
        </div>
        <div className="absolute top-0 right-0 z-[-10] -translate-y-8">
          <img
            loading="lazy"
            // eslint-disable-next-line global-require, import/no-dynamic-require
            src={require(`../../../public/assets/images/edge_images_product/flower_customer_speaks.png?webp`)}
            alt=""
            className={'aspect-auto w-[115px] max-w-full'}
          />
        </div>
      </section>
    </>
  );
}

export default ProductReviewSummary;
