import React from 'react';

function ProductSuitableForV2(props: { suitableText: string }) {
  return (
    <section className="text-center">
      <h3 className="kp-pdp-section-title mt-[30px] mb-[10px] text-center lg:my-12">
        <span className="pr-2 lg:pr-4">SUITABLE</span>
        <span className="font-black">FOR</span>
      </h3>
      <p className="my-0 mx-auto max-w-[90%] text-center text-[length:var(--pdp-text-lg)] font-semibold leading-[1.1] tracking-[-0.34px] text-[#acb3a3] md:text-[length:var(--pdp-heading-xs)] lg:text-[length:var(--pdp-heading-base)] lg:leading-[1.2]">
        {props.suitableText}
      </p>
    </section>
  );
}

export default ProductSuitableForV2;
