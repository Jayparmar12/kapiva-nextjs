/* eslint-disable global-require */
import 'glider-js/glider.min.css';

import React, { useContext } from 'react';

import { ChooseYourTherapyContext } from '@/utils/contexts';

import styles from '../../styles/ChooseYourTherapy.module.css';
import IconCart from '../atoms/IconCart';
import IconStarFull from '../atoms/IconStarFull';
import ArrowContainer from './ArrowContainer';

function Tag({ text }: { text: string }) {
  return (
    <span
      className={` ${styles.kpProductBadgesTitle} rounded-sm  border-[1px] border-black bg-white px-[2px] text-[8px] font-bold`}
    >
      {text}
    </span>
  );
}

function ProductShortInfo({
  image,
  title,
  usage,
  ingredients_info,
  price,
  sale_price,
  loading,
}: {
  image: string;
  title: string;
  usage: string;
  ingredients_info: string;
  price: string;
  sale_price: string;
  loading: boolean;
}) {
  return (
    <>
      <article
        className={`${
          loading === true && `loadingCard`
          // `before:content-[''] before:h-full before:w-full before:absolute before:left-0 before:bottom-0 before:right-0 before:z-20 before:top-0 before:bg-red-300`
        } relative m-2 flex flex-col border-[0.14px] border-[#DDDDD9]  font-jost lg:mx-4`}
      >
        <div className="absolute top-2 left-2 flex items-center gap-1 text-[8px]">
          <div className="h-3 w-3 lg:h-4 lg:w-4">
            <IconStarFull />
          </div>
          <span
            className={` ${styles.kpProductBadgesTitle} text-[9px] font-bold`}
          >
            4/5
          </span>
          <span
            className={` ${styles.kpProductBadgesTitle} text-[8px] font-semibold italic`}
          >
            (7.5k)
          </span>
        </div>

        <div className="absolute top-2 right-2 flex gap-[3px]">
          <Tag text="BESTSELLING" />
          <Tag text="23% OFF" />
        </div>

        <div>
          <img
            src={image}
            height={200}
            width={210}
            className="m-auto h-auto w-[100%]"
            alt={title}
            loading="lazy"
          />
        </div>

        <div className="p-2">
          <h1
            className={`mb-2 font-jost text-sm font-black leading-[1.14] lg:leading-[1.0] tracking-[-0.35px] lg:mb-4 lg:text-[24px] ${styles.kpProductTitle} `}
          >
            {title}
          </h1>
          <p
            className={`mb-3 text-xs leading-[1.07] font-normal tracking-[-0.24] text-[#333333] lg:mb-5 lg:text-[20px] ${styles.kpProductTitle}`}
          >
            {usage}
          </p>
          <p
            className={`mb-2 text-xs font-medium leading-[1.07] tracking-[-0.24] text-[#000000] lg:mb-4 ${styles.kpProductTitle}`}
          >
            {ingredients_info}
          </p>
        </div>
        <p className="mt-auto flex items-center gap-x-3 p-2">
          <span
            className={`${styles.kpProductSellingPriceTitle} text-xl font-black`}
          >
            ₹{`${price}.00`}
          </span>
          <span
            className={`${styles.kpProductCostPriceTitle} text-base  font-light text-[#868686] line-through decoration-[#808080]	 decoration-[1px]`}
          >
            {`${sale_price}.00`}
          </span>
        </p>

        <div className="flex ">
          <button className=" flex basis-1/4  justify-center  bg-[#333] py-2 text-white">
            <IconCart size={24} color={'white'} />
          </button>
          <button
            className={`basis-3/4 bg-[#80A03C] py-2 font-jost text-base ${styles.kpBuyNowTitle} font-bold  leading-none tracking-[1.28px]  text-white`}
          >
            BUY NOW
          </button>
        </div>
      </article>
    </>
  );
}

const gliderResponsive = [
  {
    breakpoint: 425,
    settings: {
      slidesToShow: 1.8,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 1280,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
    },
  },
];

function TherapyProductSlider() {
  const { products, loading } = useContext(ChooseYourTherapyContext);

  return (
    <div className="relative m-auto max-w-[100%]">
      <ArrowContainer gliderResponsive={gliderResponsive} slidesToShow={1.5}>
        {products.map((product) => (
          <ProductShortInfo
            key={product.bigc_id}
            image={product.image}
            title={product.name}
            usage={product.solution_new}
            ingredients_info={product.ingredient_new}
            price={product.price}
            loading={loading}
            sale_price={product.sale_price}
          />
        ))}
      </ArrowContainer>
    </div>
  );
}

export default TherapyProductSlider;
