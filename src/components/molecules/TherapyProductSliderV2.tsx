/* eslint-disable global-require */
import 'glider-js/glider.min.css';

import Link from 'next/link';
import React, { useContext, useEffect } from 'react';

// @ts-ignore:next-line
import { appStore } from '@/stores/appStore';
import { ChooseYourTherapyContext } from '@/utils/contexts';
import { GenerateSrcset } from '@/utils/helperFunctions';

import IconCart from '../atoms/IconCart';
import ArrowContainer from './ArrowContainer';

export function calculatediscount(retail_price: string, price: string): string {
  let discount: number = 0;
  if (+retail_price > 0) {
    // used  + here,to convert string to number
    discount = +(((+retail_price - +price) / +retail_price) * 100).toFixed(0);
    return discount > 0 ? `${discount.toString()}% OFF` : '';
  }
  return '';
}

export function Tag({ text }: { text: string }) {
  return (
    <span className="rounded-[4px] bg-[color:var(--cr-primary-o1)] px-[2px] text-[length:var(--text-sm)] font-medium lg:text-[length:var(--text-base)] lg:tracking-[0.96px]">
      {text}
    </span>
  );
}

export function Capitalize(text: string) {
  return text.replace(/\b\w/g, function convert(ch) {
    return ch.toUpperCase();
  });
}

export function getPdpUrl(text: string) {
  const pathnames = text.split('/');
  return pathnames[pathnames.length - 2] || '';
}

// const isProd = process.env.NODE_ENV === 'production';
export function ProductShortInfoV2({
  product_id,
  image,
  title,
  sale_price,
  retail_price,
  inventory_level,
  loading,
  product_url,
}: {
  product_id: number;
  image: string;
  title: string;
  sale_price: string;
  retail_price: string;
  inventory_level: string;
  loading: boolean;
  product_url: string;
}) {
  const {
    addCartItemOrCreateCart,
    buyNow,
    getQuantityInCart,
    buyNowCtaClicked,
    getProductLoadingStatus,
  } = appStore();
  const itemInCart = getQuantityInCart(product_id);
  const addingToCart = getProductLoadingStatus(product_id);
  const isInStock = Number(inventory_level) > 0;
  // console.log('Loading Status', addingToCart);
  // const addingToCart =
  //   productLoading.filter((ele) => ele === product_id).length > 0;
  return (
    <div
      data-product-id={product_id}
      className="kp-products-small !w-[calc((100vw-50px)/2)] !min-w-[135px] overflow-hidden md:!w-[calc((100vw-60px)/3)] lg:h-auto lg:!w-full lg:!min-w-[250px]"
    >
      <article
        className={`${
          loading === true && `loadingCard`
        } h-full lg:min-h-max overflow-hidden relative flex flex-col rounded-[5px] lg:rounded-[8px] border-[0.14px] lg:border-[0.5px] border-[#DDDDD9]`}
      >
        <Link href={`/products/${getPdpUrl(product_url)}`}>
          <a className="h-full w-full hover:text-inherit">
            <div className="relative">
              <div>
                <img
                  src={`https://4wdpmdxj.cdn.imgeng.in/${image}?imgeng=/w_auto,300/`}
                  height={165}
                  width={165}
                  className="m-auto h-auto w-[100%]"
                  alt={title}
                  loading="lazy"
                  srcSet={GenerateSrcset(image, [160, 200, 300], false)}
                  sizes="(max-width:767px) 50vw,(max-width:1279px)33vw,25vw"
                />
              </div>
              <div className="absolute top-2 right-2 flex gap-1">
                {calculatediscount(retail_price, sale_price) !== '' && (
                  <Tag text={calculatediscount(retail_price, sale_price)} />
                )}
              </div>
              {/* <div className="kp-mobile-bottom absolute top-2 left-2 flex items-center gap-1 text-[length:var(--text-sm)] tracking-[0.48px] lg:text-[length:var(--text-base)] lg:tracking-[0.64px]">
            <div className="h-[11x] w-[11px] lg:h-[22px] lg:w-[22px]">
              <IconStarFull />
            </div>
            <span className="font-medium">{rating}/5</span>
            <span className="font-light italic">(7.5k)</span>
          </div> */}
              <div
                className="kp-mobile-bottom kp-review-small jdgm-widget jdgm-preview-badge absolute top-2 left-2 flex"
                data-id={product_id}
              ></div>
            </div>
            <div className="mb-2.5 p-2.5 pb-0 lg:mb-4">
              <h1 className="kp-show-2line text-[length:var(--text-base)] font-normal leading-[1.2] hover:text-[color:var(--cr-primary)] lg:text-[length:var(--text-lg)] lg:leading-[1.3] lg:tracking-[0.30px]">
                {title}
              </h1>
            </div>

            <p className="mt-auto mb-3 flex flex-wrap items-center gap-x-2 px-2.5 lg:gap-x-3">
              <span className="text-[length:var(--text-base)] font-bold tracking-[0.25px] lg:text-[length:var(--heading-sm)]">
                ₹{`${sale_price}`}
              </span>
              {sale_price !== retail_price && (
                <span className="text-[length:var(--text-sm)] font-light tracking-[0.22] text-[color:var(--cr-secondary)] line-through decoration-[#808080] decoration-[1px] lg:text-[length:var(--text-xl)]	 lg:tracking-[0.4]">
                  {retail_price}
                </span>
              )}
            </p>
          </a>
        </Link>
        <div className="flex h-[40px] w-full items-center lg:h-[54px]">
          {isInStock === true ? (
            <>
              <button
                disabled={addingToCart}
                onClick={() => addCartItemOrCreateCart(product_id)}
                className={`${
                  buyNowCtaClicked === false && addingToCart === true
                    ? `loader2`
                    : ``
                } relative hover:bg-[color:var(--cr-primary-dark)] flex h-full w-[35%] items-center justify-center bg-[color:var(--cr-dark)] text-white`}
              >
                {buyNowCtaClicked === false && addingToCart === true ? (
                  <></>
                ) : (
                  <>
                    <IconCart
                      className="h-[24px] w-auto lg:h-[34px]"
                      color={'white'}
                    />
                  </>
                )}
                {itemInCart > 0 ? (
                  <div className="absolute top-0 right-0 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full bg-[color:var(--cr-danger-light)] text-xs lg:-translate-x-1/2">
                    {itemInCart}
                  </div>
                ) : null}
              </button>
              <button
                onClick={() => buyNow(product_id)}
                className={` ${
                  buyNowCtaClicked === true && addingToCart === true
                    ? `loader2`
                    : ``
                } relative h-full grow bg-[color:var(--cr-primary)] text-[length:var(--text-base)] font-bold leading-none tracking-[1.28px] text-white hover:bg-[color:var(--cr-primary-dark)] lg:text-[length:var(--heading-sm)] lg:tracking-[1.92px]`}
              >
                {buyNowCtaClicked === true && addingToCart === true
                  ? ``
                  : `BUY NOW`}
              </button>
            </>
          ) : (
            <>
              <button
                disabled
                className="relative flex h-full w-full items-center justify-center bg-[color:var(--cr-dark)] text-white disabled:cursor-not-allowed"
              >
                OUT OF STOCK
                {itemInCart > 0 ? (
                  <div className="absolute top-0 right-0 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full bg-[color:var(--cr-danger-light)] text-xs lg:-translate-x-1/2">
                    {itemInCart}
                  </div>
                ) : null}
              </button>
            </>
          )}
        </div>
      </article>
    </div>
  );
}

export const gliderResponsive = [
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 6,
      slidesToScroll: 2,
    },
  },
  {
    breakpoint: 1024,
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

function TherapyProductSliderV2() {
  const { categories, selectedCategory, products, loading } = useContext(
    ChooseYourTherapyContext
  );
  const selectedCategoryObject = categories.find(
    (ele) => ele.id === selectedCategory
  );
  useEffect(() => {
    // setTimeout(() => {
    //   // window?.jdgmCacheServer?.reloadAll();
    //   window?.jdgmCacheServer?.reloadPreviewBadges();
    // }, 2000);
    if (loading === false) {
      window?.jdgmCacheServer?.reloadPreviewBadges();
    }
  }, [loading]);
  return (
    <>
      <div className="mb-5 flex items-center justify-start lg:mb-10">
        <span className="text-[length:var(--text-lg)]  font-semibold lg:mb-0 lg:text-[length:var(--heading-lg)]">
          {selectedCategoryObject.name}
        </span>
        <a
          href={`https://kapiva.in/${selectedCategoryObject.category_url}`}
          className="ml-auto text-[length:var(--text-sm)] text-[color:var(--cr-danger-light)] lg:text-[length:var(--text-lg)]"
        >
          View all
        </a>
      </div>
      <div className="mb-5 lg:mb-10 lg:block lg:px-[40px]">
        <div className="relative m-auto w-full max-w-full">
          <ArrowContainer
            slidesToShow={4}
            slidesToScroll={2}
            gliderResponsive={gliderResponsive}
            className="kp-glider-grid"
            trackClassName={`justify-start gap-x-2.5 gap-y-5 lg:gap-[24px] !grid grid-flow-col lg:!flex ${
              (products.length > 1 ? 'grid-rows-2 ' : ' ') +
              (products.length < 5 ? 'md:grid-rows-1 ' : ' ')
            }`}
          >
            {products.map((product) => {
              return (
                <ProductShortInfoV2
                  key={product.bigc_id}
                  product_id={product.bigc_id}
                  image={product.image}
                  title={product.name}
                  sale_price={product.sale_price}
                  loading={loading}
                  inventory_level={product.inventory_level}
                  product_url={product.product_url}
                  retail_price={product.retail_price}
                />
              );
            })}
          </ArrowContainer>
        </div>
      </div>
      <a
        href={`https://kapiva.in${selectedCategoryObject.category_url}`}
        className="block text-center text-[length:var(--text-sm)] font-semibold text-[color:var(--cr-danger-light)] underline underline-offset-2 lg:text-[length:var(--text-lg)] "
      >
        View all {selectedCategoryObject.name} products
      </a>
    </>
  );
}

export default TherapyProductSliderV2;
