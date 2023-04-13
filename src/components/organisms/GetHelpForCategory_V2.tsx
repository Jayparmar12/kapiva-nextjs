import React from 'react';

import type { Category } from '@/utils/types/types';

import IconChevronRight from '../atoms/IconChevronRight';

function Card({
  img_url,
  url,
  getHelpText,
}: {
  img_url: string;
  url: string;
  getHelpText: string;
}) {
  return (
    <div className="w-full">
      <a
        href={url}
        className="kp-equal-height m-auto flex w-full items-center gap-2 rounded-md bg-[color:var(--cr-primary-dark)] px-2.5 py-[5px] text-[color:var(--cr-white)] hover:text-[color:var(--cr-black)] md:w-[80%] lg:w-full lg:max-w-[640px] lg:gap-3 lg:py-3 lg:px-5"
      >
        <div className="h-[32px] shrink-0 lg:h-[63px]">
          <img
            src={img_url}
            alt=""
            height={84}
            width={84}
            className="m-auto h-full w-auto shrink-0"
          />
        </div>
        <p className="text-[length:var(--text-2sm)] font-semibold leading-[1.25] lg:text-[length:var(--heading-sm)] lg:font-bold lg:leading-[1.2]">
          {getHelpText}
        </p>
        <div className="ml-auto text-white lg:hidden">
          <IconChevronRight fill="white" className="h-[20px] w-auto" />
        </div>
      </a>
    </div>
  );
}

function GetHelpForCategoryV2(props: { selectedCategoryInfo: Category }) {
  return (
    <div className="kp-container mb-14 lg:mb-32">
      <div className="mb-5 text-[length:var(--text-lg)] font-semibold lg:mb-10 lg:text-[length:var(--heading-lg)]">
        Are you confused? Find the right solution
      </div>
      <div className="flex w-full flex-col items-center gap-2 lg:flex-row lg:gap-8">
        <Card
          getHelpText="SCHEDULE A DOCTOR’S APPOINTMENT"
          img_url="https://4wdpmdxj.cdn.imgeng.in/s-5h8rqg02f8/content/images/Homepage/icon-help-1.png?imgeng=/w_80/f_webp/"
          url={props.selectedCategoryInfo.healthExpertLink}
        />
        <p className="text-[length:var(--text-2sm)] font-semibold leading-[1.25] lg:text-[length:var(--heading-sm)] lg:font-bold lg:leading-[1.2]">
          OR
        </p>
        <Card
          url={props.selectedCategoryInfo.customizedSolutionLink}
          getHelpText="GET CUSTOMIZED SOLUTION"
          img_url="https://4wdpmdxj.cdn.imgeng.in/s-5h8rqg02f8/content/images/Homepage/icon-help-2.png?imgeng=/w_80/f_webp/"
        />
      </div>
    </div>
  );
}

export default GetHelpForCategoryV2;
