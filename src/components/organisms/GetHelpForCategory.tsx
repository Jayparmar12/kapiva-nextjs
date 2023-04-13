import React from 'react';

import styles from '../../styles/GetHelpForCategory.module.css';

function Card({
  img_url,
  getHelpText,
}: {
  img_url: string;
  getHelpText: string;
}) {
  return (
    <div className="m-auto flex w-[60%] min-w-[250px] items-center gap-3 rounded-md bg-[#6A8330] py-1.5 px-2.5 text-white lg:max-w-[680px]  lg:py-2.5 lg:px-5">
      <div className="">
        <img
          // eslint-disable-next-line global-require , import/no-dynamic-require
          src={require(`../../../public/assets/images/get_help_for_category/${img_url}?webp`)}
          alt=""
          height={84}
          width={84}
          className="m-auto h-auto max-w-[42px] shrink-0 lg:max-w-[84px]"
        />
      </div>
      <p
        className={`font-bold !text-left leading-[1.2] tracking-[0.48px] lg:tracking-[0.96px] ${styles.getHelpText}`}
      >
        {getHelpText}
      </p>
      <div className="ml-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className="h-auto w-[36px] rotate-180 lg:w-[50px]"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </div>
    </div>
  );
}

const helpData = [
  {
    img_url: 'get_help_1.png',
    getHelpText: 'SCHEDULE A FREE HEALTH EXPERT CALL',
  },
  { img_url: 'get_help_2.png', getHelpText: 'GET CUSTOMIZED SOLUTION' },
];

function GetHelpForCategory() {
  return (
    <div className="relative mb-8 flex flex-col items-center lg:mb-16">
      <button
        className={`${styles.showAllButtonText} backdrop-blur-sm mb-10 lg:mb-[71px] leading-[1.2] border-[1px] border-black bg-transparent py-2.5 px-6 text-center font-jost  font-medium text-[#1A1A1A] lg:px-11`}
      >
        VIEW ALL SKINCARE PRODUCTS
      </button>
      <div className="mb-5 max-w-[60%] text-center text-2xl leading-[1] lg:mb-8 lg:text-[56px] ">
        <span>NEED HELP TO </span>
        <br />
        <span className="font-black">FIND THE RIGHT PRODUCTS?</span>
      </div>
      <div className="flex w-full flex-col gap-2.5 lg:gap-4">
        {helpData.map((item, id) => (
          <Card
            key={id}
            getHelpText={item.getHelpText}
            img_url={item.img_url}
          />
        ))}
      </div>
      <div className="absolute top-[10%] z-[-1] w-full">
        <img
          // eslint-disable-next-line global-require , import/no-dynamic-require
          src={require(`../../../public/assets/images/get_help_for_category/flower_left_2.png?webp`)}
          alt=""
          height={619}
          width={300}
          className="absolute left-0 z-[-1] h-auto w-[60px] md:w-[80px] lg:w-[150px]"
        />
        <img
          // eslint-disable-next-line global-require , import/no-dynamic-require
          src={require(`../../../public/assets/images/get_help_for_category/flower_right_1.png?webp`)}
          alt=""
          height={572}
          width={291}
          className="absolute right-0 h-auto w-[60px] md:w-[80px] lg:w-[150px]"
        />
      </div>
    </div>
  );
}

export default GetHelpForCategory;
