import React, { useState } from 'react';

import { appStore } from '@/stores/appStore';
import { GenerateSrcset } from '@/utils/helperFunctions';

import useSubscribePhoneNumber from '../atoms/useSubscribePhoneNumber';

function SuscribeFormSuperCoinEMIOption() {
  const { userData } = appStore();
  const {
    phone,
    handlePhoneSubmit,
    isChecked,
    handlePhoneNumberChange,
    message,
    handleIsChecked,
    offer,
  } = useSubscribePhoneNumber(
    userData !== null && {
      firstName: userData.firstName,
      lastName: userData.lastName,
    }
  );
  const [copied, setCopied] = useState(false);
  const handleOfferCodeCopy = () => {
    if (offer !== null) {
      navigator.clipboard.writeText(offer.code);
      setCopied(true);
    }
  };

  return (
    <div className="relative">
      <section className="kp-container relative mb-6 lg:mb-[70px]">
        <div className={offer !== null ? `invisible` : ``}>
          <h4 className="mb-2.5 text-center text-[length:var(--pdp-text-base)] font-semibold italic leading-[1.5] tracking-[0.84px] text-[rgb(106,131,48)] md:text-[length:var(--pdp-text-lg)] lg:mb-6 lg:text-[length:var(--pdp-heading-2sm)] lg:leading-[1] lg:tracking-[1px]">
            Get special discounts on checkout
          </h4>
          <div className="flex items-center justify-center">
            <form
              onSubmit={handlePhoneSubmit}
              className="flex flex-col font-normal"
            >
              <div className="mb-1 flex w-full md:mx-auto md:w-auto lg:mb-2.5">
                <span className="flex w-full items-center rounded-md border-[0.14px] border-[#b9b9b9] bg-white px-0 py-[5.5px] text-white md:w-auto 2xl:py-[6px]">
                  <span className="border-r border-solid border-[#b9b9b9] py-[5px] px-[10px] text-xs font-normal text-black lg:p-[10px] 2xl:py-[15px] 2xl:px-[10px] 2xl:text-base">
                    +91
                  </span>
                  <input
                    type="tel"
                    id="phone"
                    className="block w-full border-0 indent-[10px] text-xs font-normal tracking-[1.98px] text-black outline-none placeholder:text-[#9C9C90] md:w-[300px] md:indent-[10px] lg:w-[450px] lg:indent-[15px] lg:text-[14px] 2xl:w-[590px] 2xl:indent-[10px] 2xl:text-base 2xl:leading-[25.2px] 2xl:tracking-[3.11px]"
                    name="phone"
                    maxLength={10}
                    onChange={handlePhoneNumberChange}
                    value={phone}
                    placeholder="Phone number"
                  />
                </span>
                <button
                  type="submit"
                  disabled={!isChecked || phone.length !== 10}
                  className={`${
                    phone.length === 10
                      ? `bg-[#48847b] border-[#48847b]`
                      : `bg-[#a3c8c2] border-[#a3c8c2]`
                  } ml-1 disabled:cursor-not-allowed rounded-md py-[6px] flex items-center px-[9px] text-lg font-black tracking-[1.44px] text-white hover:text-white lg:py-[10px] lg:px-[30px] lg:text-[20px] 2xl:ml-[10px] 2xl:p-[15px] 2xl:text-[24px] 2xl:tracking-[1.92px]`}
                >
                  UNLOCK
                </button>
              </div>
              <label
                id="form-phone-error"
                className={`${
                  message.type === 'warning'
                    ? `visible mb-1 lg:mb-2`
                    : `invisible`
                } m-auto text-[11px] font-medium leading-[12px] tracking-[0.56px] text-[#c97b5a] lg:text-[13px]  lg:tracking-[1px]`}
                htmlFor="form-phone"
              >
                Please Enter Numbers Only
              </label>
              <div className="text-[length:var(--pdp-text-sm)] font-medium  leading-[1] tracking-[0.48px] lg:text-[length:var(--pdp-text-base)] lg:tracking-[0.56px]">
                <label className="flex items-start md:items-center">
                  <input
                    type="checkbox"
                    className="kp-checkbox-input"
                    id="isShippingSameAsBilling"
                    name="isShippingSameAsBilling"
                    // className="inputradio inputoptradio checked"
                    checked={isChecked}
                    onChange={handleIsChecked}
                  ></input>
                  <div>
                    <span> Get updates on </span>
                    <span className="text-[color:var(--cr-primary)]">
                      Whatsapp.
                    </span>
                    <label className="">You may opt out anytime</label>
                  </div>
                </label>
              </div>
            </form>
          </div>
        </div>
        <div
          className={`${
            offer === null ? `pointer-events-none hidden` : ``
          } absolute text-center text-[color:var(--cr-primary)] text-lg inset-x-0 top-0 lg:mt-[20px]`}
        >
          <p className="mb-1.5 px-[5px] py-[2px] text-[length:var(--text-2sm)] font-black italic md:text-[length:var(--text-xl)] xl:text-[length:var(--heading-md)]">
            {offer?.discountTitle}
          </p>
          <p className="mx-auto mb-1.5 max-w-[90%] break-words px-[5px] py-[2px] text-center text-[length:var(--text-2sm)] font-black italic md:text-[length:var(--text-xl)] xl:text-[length:var(--heading-md)]">
            <span className="mr-1 rounded-md border border-dashed border-[color:#6a8330] px-1.5 py-[2px] hover:bg-[#6a8330] hover:text-white md:mr-3">
              {offer?.code}
            </span>
            {offer?.offerStrip}
          </p>
          <button
            className={` ${
              copied === true ? `bg-[color:#6a8330]` : `bg-[#94bcb5] `
            } rounded-md py-2 px-4 text-[length:var(--text-2sm)] text-white lg:text-[length:var(--text-xl)]`}
            onClick={handleOfferCodeCopy}
          >
            {copied === true ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </section>
      <div className="absolute top-[20%] left-0 z-[-1] hidden w-[100px] lg:top-[10%] lg:block xl:top-0 xl:w-[150px]">
        <img
          src={`https://4wdpmdxj.cdn.imgeng.in/https://kapiva.in/content/images/pdppageimage/productimageflower.png?imgeng=/w_150/ `}
          alt="bottom-right flower"
          loading="lazy"
          srcSet={GenerateSrcset(
            'https://kapiva.in/content/images/pdppageimage/productimageflower.png',
            [100, 150],
            false
          )}
          width="738"
          height="856"
          sizes="(min-width:1024px) 100px,150px"
          className="h-auto max-w-full"
        />
      </div>
    </div>
  );
}

export default SuscribeFormSuperCoinEMIOption;
