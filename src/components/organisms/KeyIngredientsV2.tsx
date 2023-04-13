import React from 'react';

import { GenerateSrcset } from '@/utils/helperFunctions';
import type { KeyIngredientsType } from '@/utils/types/types';

function KeyIngredientsV2(props: { keyIngredients: KeyIngredientsType[] }) {
  return (
    <section className="kp-container">
      <h3 className="kp-pdp-section-title mt-[30px] mb-[25px] text-center lg:my-12">
        <span className="pr-2 font-black lg:pr-4">KEY</span>
        INGREDIENTS
      </h3>

      <ul className="flex flex-col flex-wrap gap-[20px] md:flex-row md:gap-[25px]">
        {props.keyIngredients.map((item) => (
          <li
            key={item.id}
            className="flex flex-row items-center gap-4 md:w-[calc((100%-25px)/2)] lg:gap-11"
          >
            <div className="h-[75px] w-[75px] shrink-0 overflow-hidden rounded-[50%] md:h-[100px] md:w-[100px] lg:h-[145px] lg:w-[145px]">
              <img
                src={`${item.image}/?imgeng=/w_auto,150/`}
                srcSet={GenerateSrcset(item.image, [100, 150, 200], true)}
                sizes="(max-width:1023px) 100px,(max-width:1400px) 150px,200px"
                alt={item.name}
                loading="lazy"
                width="75"
                height="75"
                className="h-full w-full object-cover object-[center_center]"
              />
            </div>
            <div>
              <div className="mb-1 text-[length:var(--pdp-text-2sm)] font-bold leading-[1.1] md:mb-0 md:text-[length:var(--pdp-text-base)] md:leading-[1.2] lg:text-[length:var(--pdp-heading-2xs)]">
                {item.name}
              </div>
              <div className="text-[length:var(--pdp-text-2sm)] font-normal leading-[1.1] md:text-[length:var(--pdp-text-base)] md:leading-[1.2] lg:text-[length:var(--pdp-heading-2xs)]">
                {item.description}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default KeyIngredientsV2;
