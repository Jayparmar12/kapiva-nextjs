import 'glider-js/glider.min.css';

import React, { useContext } from 'react';
import Glider from 'react-glider';

import { ChooseYourTherapyContext } from '@/utils/contexts';

import styles from '../../styles/ChooseYourTherapy.module.css';

function Category({
  title,
  img_url,
  selected,
  onClick,
}: {
  title: string;
  img_url: string;
  selected: boolean;
  onClick: any;
}) {
  return (
    <div
      onClick={onClick}
      className={`kp-remove-right-margin mr-2 !min-w-[100px] lg:mr-4`}
    >
      <div
        className={`relative  flex flex-col items-center gap-1 rounded-md border-[2px] transition-[border] duration-1000 lg:gap-3 lg:border-[4px] ${
          selected === true ? ` border-[#80A03C]` : `border-[#868686]`
        }   p-1 py-2`}
      >
        <img
          height={36}
          width={36}
          loading="lazy"
          // eslint-disable-next-line global-require, import/no-dynamic-require
          src={img_url}
          alt=""
          className="  h-auto w-[100%] !max-w-[36px] lg:!max-w-[84px]"
        />
        <p
          style={{ wordSpacing: '999px' }}
          className={`text-center font-jost text-xs lg:leading-[1.45] font-black leading-[1.16] tracking-[0.48px] text-black ${styles.kpCategoryTitle}`}
        >
          {title}
        </p>

        {selected === true && (
          <div className="kp-ani absolute right-0 top-0  rounded-bl-md border-0 bg-[#80A03C]  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4  w-4 md:h-6 md:w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

/*
const Categories = [
  { index: 0, title: 'Mens Health', img_url: 'mens_health.png' },
  {
    index: 1,
    title: 'Weight  Management',
    img_url: 'weight_management.png',
  },
  { index: 2, title: 'Hair Care', img_url: 'hair_care.png' },
  { index: 3, title: 'Skin Care', img_url: 'skin_care.png' },
  { index: 4, title: 'Womens Health', img_url: 'womens_health.png' },
  { index: 5, title: 'Lifestyle Diseases', img_url: 'lifestyle_diseases.png' },
  { index: 6, title: 'Daily Wellness', img_url: 'daily_wellness.png' },
];
*/

const gliderResponsive = [
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 5.5,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 4.5,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 1280,
    settings: {
      slidesToShow: 7,
      slidesToScroll: 1,
    },
  },
];

function TherapyCategorySlider() {
  const { categories, selectedCategory, handleCategoryChange } = useContext(
    ChooseYourTherapyContext
  );

  return (
    <div className="m-auto mb-3 flex w-[100%] justify-center lg:mb-7 ">
      <Glider
        draggable
        slidesToShow={2.5}
        slidesToScroll={1}
        responsive={gliderResponsive}
        scrollLock
        skipTrack={true}
        className=""
      >
        <div className="flex overflow-x-auto overflow-y-hidden">
          <>
            {categories.map((category) => (
              <Category
                onClick={() => {
                  handleCategoryChange(category.id);
                }}
                key={category.id}
                selected={selectedCategory === category.id}
                img_url={category.image}
                title={category.name}
              />
            ))}
          </>
        </div>
      </Glider>
    </div>
  );
}

export default TherapyCategorySlider;
