import 'glider-js/glider.min.css';

import React, { useEffect } from 'react';
import Glider from 'react-glider';

// @ts-ignore:next-line
import { appStore } from '@/stores/appStore';

import { calculatediscount, Tag } from '../molecules/TherapyProductSliderV2';

function PeopleAlsoBuyCard({
  productId,
  isInStock,
  variantId,
  image,
  title,
  retailPrice,
  salePrice,
  loading,
}: {
  productId: string;
  isInStock: boolean;
  variantId: number;
  image: string;
  title: string;
  retailPrice: string;
  salePrice: string;
  loading: boolean;
}) {
  const { addCartItemOrCreateCart, getProductLoadingStatus, getCartItems } =
    appStore();
  const handleClick = () => {
    if (!variantId) {
      addCartItemOrCreateCart(productId);
    } else {
      addCartItemOrCreateCart(productId, variantId);
    }
  };
  const addingToCart = getProductLoadingStatus(
    productId,
    variantId && variantId
  );

  useEffect(() => {
    window?.jdgmCacheServer?.reloadPreviewBadges();
  }, []);
  const addedToCart =
    getCartItems().filter((item) => item.productId === +productId).length > 0;
  return (
    <div className="kp-recommended-margins">
      <article
        className={`${
          loading === true && `loadingCard`
        } h-full relative flex flex-col overflow-hidden bg-[color:var(--cr-white)] border-[0.14px] border-[#DDDDD9] rounded-md lg:rounded-lg`}
      >
        <div className="relative">
          <div>
            <img
              src={image}
              height={270}
              width={270}
              className="m-auto h-auto max-w-full"
              alt={title}
              loading="lazy"
            />
          </div>
          {/* <div className="absolute top-2 left-2 flex items-center gap-1 text-[length:var(--text-sm)] tracking-[0.48px] lg:text-[length:var(--text-base)] lg:tracking-[0.64px]">
            <div className="h-[11px] w-[11px] lg:h-[22px] lg:w-[22px]">
              <IconStarFull />
            </div>
            <span className="font-medium">{rating}/5</span>
            <span className="font-light italic">(7.5k)</span>
          </div> */}
          <div
            className="kp-mobile-bottom kp-review-small jdgm-widget jdgm-preview-badge absolute top-2 left-2 flex"
            data-id={productId}
          ></div>

          <div className="absolute top-2 right-2 flex gap-1">
            {calculatediscount(retailPrice, salePrice) !== '' && (
              <Tag text={calculatediscount(retailPrice, salePrice)} />
            )}
          </div>
        </div>

        <div className="p-2.5 pt-1 pb-0">
          <h1 className="kp-show-2line text-[length:var(--text-base)] font-normal leading-[1.2] lg:text-[length:var(--text-lg)] lg:leading-[1.3] lg:tracking-[0.30px]">
            {title}
          </h1>
        </div>

        <div className="mt-auto flex items-center justify-between gap-2 p-2.5">
          <span className="text-[length:var(--text-base)] font-bold tracking-[0.25px] lg:text-[length:var(--heading-sm)]">
            ₹{salePrice}
          </span>
          <button
            className={`h-[36px] min-w-max px-2 rounded-md bg-[color:var(--cr-black)] text-[length:var(--text-base)] font-bold tracking-[1.28px] text-white lg:h-[54px] lg:rounded-lg lg:text-[length:var(--heading-sm)] lg:tracking-[1.92px] ${
              !isInStock && `disabled:pointer-events-none cursor-not-allowed`
            } ${
              addedToCart === true &&
              `disabled:pointer-events-none cursor-not-allowed`
            } ${addingToCart === true ? `loader2` : ``} relative
            `}
            disabled={addedToCart || !isInStock || addingToCart}
            onClick={handleClick}
          >
            {addingToCart === false && addedToCart === true ? `ADDED` : `ADD`}
          </button>
        </div>
      </article>
    </div>
  );
}

// const gliderResponsive = [
//   {
//     breakpoint: 375,
//     settings: {
//       slidesToShow: 2,
//       slidesToScroll: 1,
//     },
//   },
//   {
//     breakpoint: 425,
//     settings: {
//       slidesToShow: 2.3,
//       slidesToScroll: 1,
//     },
//   },
//   {
//     breakpoint: 767,
//     settings: {
//       slidesToShow: 2,
//       slidesToScroll: 1,
//     },
//   },
//   {
//     breakpoint: 1024,
//     settings: {
//       slidesToShow: 2.1,
//       slidesToScroll: 1,
//     },
//   },
//   {
//     breakpoint: 1280,
//     settings: {
//       slidesToShow: 2.5,
//       slidesToScroll: 1,
//     },
//   },
//   {
//     breakpoint: 1440,
//     settings: {
//       slidesToShow: 3.1,
//       slidesToScroll: 1,
//     },
//   },
// ];

function PeopleAlsoBuy() {
  const { relatedProducts } = appStore();
  return (
    <div
      className={`bg-[#80A03C30] py-5 lg:py-10 ${
        relatedProducts && relatedProducts.length > 0 ? `block` : `hidden`
      } `}
    >
      {/* added px-10(padding left as 40px for larger devices for elements) */}
      <div className="kp-container kp-manage-max-width m-auto mb-5 flex flex-col justify-start lg:mb-5 lg:px-0">
        <span className="text-[length:var(--text-lg)] font-semibold capitalize lg:text-[length:var(--heading-lg)] lg:leading-[1.2]">
          add for better results
        </span>
        <span className="text-[length:var(--text-sm)] font-normal lg:text-[length:var(--heading-sm)] lg:leading-[1]">
          To enhance the efficiency of achieving the goal
        </span>
      </div>
      {/* nullifying the default padding value of  */}
      <div className="m-auto w-full">
        <Glider
          slidesToShow="auto"
          slidesToScroll={1}
          skipTrack={true}
          draggable={true}
        >
          <div className="flex gap-2 lg:gap-5">
            {relatedProducts !== null &&
              relatedProducts.map((ele, id) => (
                <PeopleAlsoBuyCard
                  key={id}
                  productId={ele.node?.entityId}
                  isInStock={ele.node?.inventory?.isInStock}
                  variantId={ele.node?.variantId || 0}
                  image={ele.node?.defaultImage?.url}
                  title={ele.node?.name}
                  retailPrice={ele.node?.prices?.retailPrice.value}
                  salePrice={ele.node?.prices?.salePrice?.value}
                  loading={false}
                />
              ))}
          </div>
        </Glider>
      </div>
    </div>
  );
}

export default PeopleAlsoBuy;
