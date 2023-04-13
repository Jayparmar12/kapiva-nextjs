import React, { Fragment, useState } from 'react';

import type { FaqType } from '@/utils/types/types';

import IconChevronBottom from '../atoms/IconChevronBottom';
import useActive from '../atoms/useActive';

function ProductFaqsV2({ faqs }: { faqs: FaqType[] }) {
  const { active, handleActive } = useActive();
  const [showMore, setShowMore] = useState(false);
  return (
    <section className="kp-container">
      <h3 className="kp-pdp-section-title mt-[30px] mb-[25px] text-center lg:my-12">
        <span className="block font-black normal-case">FAQs</span>
      </h3>

      {faqs.map((faq, id) => (
        <Fragment key={faq.id}>
          <div
            className={`kp-remove-bottom-margin mb-[10px] cursor-pointer ${
              id > 5 && showMore === false ? `hidden` : `block`
            }`}
            onClick={() => handleActive(faq.id)}
          >
            <div className="flex items-center justify-between border-b border-[color:var(--cr-primary-dark)] py-2.5 lg:pt-5">
              <h4 className="mr-1.5 grow justify-self-center text-[length:var(--pdp-text-2sm)] font-bold leading-[1.1] tracking-[0.96px] text-[color:var(--cr-primary-dark)] md:text-[length:var(--pdp-text-lg)]  lg:mr-0 lg:text-[length:var(--pdp-text-2xl)]">
                {faq.query}
              </h4>
              <span className={active === faq.id ? `rotate-180` : ``}>
                <IconChevronBottom className="h-auto w-[15px] lg:w-[24px]" />
              </span>
            </div>
          </div>
          {active === faq.id && (
            <div
              className="overflow-hidden py-6 text-[length:var(--pdp-text-base)] font-normal leading-[1.1] md:text-[length:var(--pdp-text-lg)] lg:text-[length:var(--pdp-text-xl)] lg:leading-[1.3]"
              dangerouslySetInnerHTML={{ __html: faq.description }}
            ></div>
          )}
        </Fragment>
      ))}
      {faqs.length > 6 && (
        <div className="mt-5 flex items-center justify-center">
          <button
            className="w-[205px] rounded-md border border-solid border-[color:var(--cr-black)] px-0 py-[9px] text-center text-[length:var(--pdp-text-sm)] font-medium uppercase text-[color:var(--cr-black)] lg:w-[250px] lg:text-[length:var(--pdp-text-xl)]"
            onClick={() => setShowMore((prev: boolean) => !prev)}
          >
            {showMore ? 'VIEW  LESS' : 'VIEW  MORE'}
          </button>
        </div>
      )}
    </section>
  );
}

export default ProductFaqsV2;
