import React, { useState } from 'react';

import type { SpecsType } from '@/utils/types/types';

import IconChevronBottom from '../atoms/IconChevronBottom';
import useActive from '../atoms/useActive';

function SpecInfo(props: {
  title: string;
  active: boolean;
  handleActive: () => void;
  children: React.ReactNode;
}) {
  return (
    <>
      <div
        onClick={props.handleActive}
        className="flex w-full cursor-pointer flex-col"
      >
        <div className="flex items-center justify-between border-b border-black py-2.5 lg:pt-5">
          <h4 className="grow justify-self-center text-[length:var(--pdp-text-base)] font-bold leading-[0.8] text-[color:var(--cr-primary)] md:text-[length:var(--pdp-text-lg)] lg:text-[length:var(--pdp-heading-2xs)]">
            {props.title}
          </h4>
          <span className={props.active === true ? `rotate-180` : ``}>
            <IconChevronBottom className="h-auto w-[15px] lg:w-[24px]" />
          </span>
        </div>
      </div>
      {props.active === true ? <>{props?.children}</> : null}
    </>
  );
}

function ProductSpecsV2(props: {
  ingredientList: SpecsType;
  additionalInfo: SpecsType[];
}) {
  // console.log(props.ingredientList);
  // console.log(props.additionalInfo);
  const { active, handleActive } = useActive();
  const [items] = useState([
    {
      title: 'Ingredient List',
      id: 0,
      data: (
        <div>
          <p className="py-6 text-center text-[length:var(--pdp-text-sm)] font-normal leading-[1.1] md:text-[length:var(--pdp-text-base)] lg:text-[length:var(--pdp-text-lg)]">
            {props?.ingredientList?.description}
          </p>
        </div>
      ),
    },
    {
      title: 'Addtional Information',
      id: 1,
      data: (
        <div className="flex flex-wrap justify-evenly gap-1 pb-6 text-center">
          {props.additionalInfo.map((info, id) => (
            <div
              key={id}
              className="mb-5 flex max-w-[48%] basis-1/2 flex-col md:max-w-[32%] md:basis-1/3"
            >
              <div className="flex min-h-[50px] items-center justify-center md:min-h-[75px]">
                <p className="text-center text-[length:var(--pdp-text-2sm)] font-medium leading-[1] text-[color:var(--cr-primary-light)] md:text-[length:var(--pdp-text-lg)] lg:text-[length:var(--pdp-text-2xl)] ">
                  {info?.title}
                </p>
              </div>
              <div className="border-t border-[color:var(--cr-dark)] px-4 pt-2.5 text-center text-[length:var(--pdp-text-sm)] font-normal leading-[1.1] text-black md:px-5 md:text-[length:var(--pdp-text-base)] lg:text-[length:var(--pdp-text-lg)]">
                {info?.description}
              </div>
            </div>
          ))}
        </div>
      ),
    },
  ]);
  return (
    <section className="kp-container mb-[25px] text-center lg:mb-12">
      <h3 className="kp-pdp-section-title mt-[30px] mb-[25px] lg:my-12">
        PRODUCT
        <span className="block font-black">SPECIFICATIONS</span>
      </h3>

      {items.map((item) => (
        <SpecInfo
          key={item.id}
          handleActive={() => handleActive(item.id)}
          title={item.title}
          active={active === item.id}
        >
          {item.data}
        </SpecInfo>
      ))}
    </section>
  );
}

export default ProductSpecsV2;
