import Link from 'next/link';
import React from 'react';

// @ts-ignore:next-line
import { appStore } from '@/stores/appStore';
import { GenerateSrcset } from '@/utils/helperFunctions';

import IconClose from '../atoms/IconClose';
import InputQuantity from './InputQuantity';
import PeopleAlsoBuy from './PeopleAlsoBuy';

function MiniCart() {
  const {
    isMiniCartOpen,
    toggleMiniCart,
    isCartLoading,
    getCartItems,
    getSubTotal,
    getCartItemsCount,
    updateCartItem,
    deleteCartItem,
  } = appStore();

  function onQuantityChange(lineItemId, productId, variantId, quantity) {
    updateCartItem(lineItemId, productId, variantId, quantity);
  }

  return (
    <div
      className={`absolute w-full ${
        isMiniCartOpen &&
        'top-[56px] box-content h-[calc(100vh-104px)] pb-[104px] lg:top-[70px] lg:h-[calc(100vh-150px)]'
      }`}
    >
      {isMiniCartOpen && (
        <div className="kp-backdrop  fixed inset-0 top-0 z-[60] w-full lg:!top-0">
          <div
            className={`absolute ${
              isMiniCartOpen && 'kp-animate-left'
            } inset-y-0 right-0 flex w-full flex-col bg-white md:max-w-[480px] lg:max-w-[960px] md:w-[50%]`}
          >
            {/* Cart header */}
            <div className="kp-manage-max-width mb-5 flex w-full flex-[0] justify-between p-5 pb-0 lg:m-auto lg:mb-[30px] lg:px-0 lg:pt-[30px]">
              <span className="text-[length:var(--text-xl)] font-medium lg:text-[length:var(--heading-xl)]">
                Your Cart
              </span>
              <button className="cursor-pointer" onClick={toggleMiniCart}>
                <IconClose className="h-[16px] w-[16px] lg:h-[44px] lg:w-[44px]"></IconClose>
              </button>
            </div>
            {getCartItemsCount() > 0 ? (
              <>
                {/* Cart item list */}
                <div className="h-full flex-1 overflow-y-auto">
                  <div
                    className={`relative kp-manage-max-width mb-[30px] flex flex-col gap-y-5 px-5 lg:m-auto lg:mb-[60px] lg:gap-4 lg:px-0 ${
                      isCartLoading === true
                        ? `after:absolute loader3 after:bg-[hsla(0,0%,100%,0.733)] after:justify-center after:items-center after:inset-0 after:h-full after:w-full`
                        : ``
                    }`}
                  >
                    {getCartItems().map((item) => (
                      <div
                        className="flex shrink-0 items-center gap-2 overflow-hidden rounded-md border-[0.14px] border-[color:var(--cr-secondary)] pr-[5px] lg:rounded-lg lg:border-[0.5px] lg:pr-2.5"
                        key={item.id}
                      >
                        <div className="h-full w-auto shrink-0">
                          <img
                            src={item.imageUrl}
                            srcSet={GenerateSrcset(
                              item.imageUrl,
                              [100, 150, 220],
                              false
                            )}
                            sizes="(max-width:1023px) 100px,150px"
                            alt=""
                            className="h-full max-w-[93px] lg:max-w-[132px]"
                            height="132"
                            width="132"
                          />
                        </div>
                        <div className="flex grow flex-col justify-between gap-1 py-[5px] lg:gap-[6px] lg:p-2 lg:py-2.5">
                          <div className="text-[length:var(--text-base)] font-normal leading-none tracking-[-0.4px] lg:text-[length:var(--heading-sm)]">
                            {item.name}
                          </div>

                          <div className="order-2 flex flex-wrap items-center gap-y-1">
                            {/* <div className="flex flex-wrap items-center gap-2"> */}
                            <div className="kp-pos-11 mr-2 text-[length:var(--text-base)] font-bold tracking-[0.32px] lg:text-[length:var(--heading-md)] lg:tracking-[0.6px]">
                              {item.quantity > 1 && (
                                // <span>21 x </span>
                                <span>{item.quantity} x </span>
                              )}
                              {/* <span> {`₹99999`}</span> */}
                              <span> {`₹${item.salePrice}`}</span>
                            </div>

                            <div className="flex grow items-center gap-2 lg:gap-4">
                              <div className="kp-pos-12 text-[length:var(--text-sm)] font-light tracking-[0.24] text-[color:var(--cr-secondary)] line-through decoration-[#808080] decoration-[1px] lg:text-[length:var(--text-xl)] lg:tracking-[0.4px] ">
                                {/* {`99999`} */}
                                {item.originalPrice}
                              </div>
                              {/* </div> */}
                              <div className="kp-pos-13">
                                <InputQuantity
                                  defaultValue={item.quantity}
                                  minValue={0}
                                  onChange={(quantity) => {
                                    if (quantity !== 0) {
                                      onQuantityChange(
                                        item.id,
                                        item.productId,
                                        item.variantId,
                                        quantity
                                      );
                                    } else {
                                      deleteCartItem(item.id);
                                    }
                                  }}
                                ></InputQuantity>
                              </div>
                            </div>
                          </div>

                          {/* Item - Options */}
                          <div className="flex flex-col gap-1">
                            {item.options.map((option) => (
                              <div
                                key={option.name}
                                className="flex text-[length:var(--text-sm)] tracking-[-0.3px] text-[color:var(--cr-secondary-lighter)] lg:gap-1 lg:text-[length:var(--text-lg)]"
                              >
                                <div>{option.value}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* MiniCartItem old */}
                    {/* {getCartItems().map((item) => (
              <div className="flex shrink-0 gap-2" key={item.id}>
                <div>
                  <img src={item.image_url} alt="" height="64" width="64" />
                </div>
                <div className="flex grow flex-col">
                  <div>{item.name}</div>
                  <div className="flex justify-between gap-2">
                    <div>
                      <InputQuantity
                        defaultValue={item.quantity}
                        onChange={(quantity) =>
                          onQuantityChange(
                            item.id,
                            item.product_id,
                            item.variant_id,
                            quantity
                          )
                        }
                      ></InputQuantity>
                    </div>
                    <div>
                      {item.quantity > 1 && <span>{item.quantity} x </span>}
                      <span> ₹{item.sale_price}</span>
                    </div>
                    <div>
                      <button onClick={() => deleteCartItem(item.id)}>
                        <IconDelete></IconDelete>
                      </button>
                    </div> */}
                  </div>
                  {/* Item - Options */}
                  {/* <div className="flex flex-col gap-2 text-sm">
                    {item.options.map((option) => (
                      <div key={option.name} className="flex gap-2">
                        <div className="text-gray-700">{option.name}: </div>
                        <div>{option.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div> */}
                  {/* Recommeded Products */}
                  <div className="mb-[30px] lg:mb-[60px]">
                    <PeopleAlsoBuy />
                  </div>
                  {/* Subtotal */}
                  <div className="mt-auto flex grow-0 flex-col justify-center bg-white">
                    <div className="mb-[30px] border-y-[1px] border-y-[color:var(--cr-primary)] lg:mb-[40px]">
                      <div className="kp-manage-max-width flex justify-between px-5 py-2 lg:m-auto lg:px-0">
                        <span className="text-[length:var(--text-lg)] font-normal lg:text-[length:var(--heading-lg)]">
                          Subtotal:
                        </span>
                        <span className="text-[length:var(--text-lg)] font-bold lg:text-[length:var(--heading-lg)]">
                          ₹{getSubTotal()}
                        </span>
                      </div>
                    </div>

                    {/* CTAs */}
                    <button className="m-auto mb-[30px] flex h-[54px] w-[240px] items-center justify-center rounded-[5px] bg-[color:var(--cr-primary)] text-[length:var(--heading-sm)] font-bold tracking-[1.92px] text-[color:var(--cr-white)] lg:mb-[40px] lg:h-[62px] lg:w-[362px] lg:text-[length:var(--heading-md)] lg:tracking-[2.4px]">
                      <a
                        className="text-white hover:text-white"
                        href="/checkout"
                      >
                        CHECKOUT
                      </a>
                    </button>
                    {/* Recommended FIT */}
                  </div>
                </div>
              </>
            ) : (
              <div className="h-full flex-1 overflow-y-auto py-[48px] text-center text-[length:var(--text-2xl)] font-normal leading-[1.1] ">
                <div className="mb-2.5 text-center">
                  Your cart is empty.
                  <br />
                  Fill it with our products.
                </div>
                <Link href="/">
                  <a className="inline-block border-b-2 border-b-[rgb(245,71,60)] text-[16px] font-medium leading-[1.3] no-underline hover:border-b-2 hover:border-solid hover:border-b-[rgb(245,71,60)]">
                    Shop now
                  </a>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default MiniCart;
