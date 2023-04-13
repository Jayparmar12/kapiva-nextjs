import React from 'react';

// @ts-ignore:next-line
import { appStore } from '@/stores/appStore';

import IconCart from '../atoms/IconCart';
import ProductButton from '../atoms/ProductButton';

function ActionBar(props) {
  const { productId, variantId, quantity, isInStock } = props;

  const {
    addCartItemOrCreateCart,
    buyNow,
    buyNowCtaClicked,
    getProductLoadingStatus,
    getQuantityInCart,
  } = appStore();
  const itemInCart = getQuantityInCart(productId, variantId);
  const addingToCart = getProductLoadingStatus(productId, variantId);
  // console.log('Loading Status', addingToCart);
  // console.log('Cart Status', itemInCart);
  return (
    <>
      <section className="fixed bottom-0 left-0 z-[20] flex h-[54px] w-full items-center justify-between md:static md:h-[46px] md:w-auto md:gap-2 lg:h-[42px] lg:w-full lg:gap-4">
        {isInStock === true ? (
          <>
            <ProductButton
              className={`${
                buyNowCtaClicked === false && addingToCart === true
                  ? `loader2`
                  : ``
              } relative w-[25%] bg-[color:var(--cr-dark)] text-[length:var(--pdp-heading-xs)] hover:bg-[color:var(--cr-primary-dark)] md:w-auto md:rounded-md lg:w-[48%] lg:text-[length:var(--pdp-text-lg)] lg:tracking-[1.52px]`}
              onClick={() =>
                addCartItemOrCreateCart(productId, variantId, quantity)
              }
              disabled={addingToCart}
            >
              {buyNowCtaClicked === false && addingToCart === true ? (
                <p className="invisible">ADD TO CART</p>
              ) : (
                <>
                  <IconCart
                    className="h-[24px] w-auto md:hidden lg:h-[34px]"
                    color={'white'}
                  />
                  <p className="hidden md:block">ADD TO CART</p>
                </>
              )}
              {itemInCart > 0 ? (
                <div className="absolute top-0 right-0 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full bg-[color:var(--cr-danger-light)] text-xs lg:-translate-x-1/2">
                  {itemInCart}
                </div>
              ) : null}
            </ProductButton>
            <ProductButton
              className={`${
                buyNowCtaClicked === true && addingToCart === true
                  ? `loader2`
                  : ``
              } relative w-[75%] bg-[color:var(--cr-primary)] text-[length:var(--pdp-heading-xs)] uppercase tracking-[1.68px] text-white hover:bg-[color:var(--cr-primary-dark)] md:w-auto md:rounded-md lg:w-[48%] lg:text-[length:var(--pdp-text-lg)] lg:tracking-[1.52px]`}
              onClick={() => buyNow(productId, variantId, quantity)}
            >
              {buyNowCtaClicked === true && addingToCart === true
                ? ``
                : `BUY NOW`}
            </ProductButton>
          </>
        ) : (
          <ProductButton
            disabled={true}
            onClick={() => {}}
            className="w-full bg-[color:var(--cr-black)] text-[length:var(--pdp-heading-xs)] uppercase tracking-[1.68px] text-white disabled:cursor-not-allowed md:w-auto md:rounded-md lg:w-[48%] lg:text-[length:var(--pdp-text-lg)] lg:tracking-[1.52px]"
          >
            OUT OF STOCK
          </ProductButton>
        )}
      </section>
    </>
  );
}

export default ActionBar;
