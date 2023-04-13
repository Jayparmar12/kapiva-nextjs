import Image from 'next/image';
import React, { useState } from 'react';

import { appStore } from '@/stores/appStore';
import { validateEmail } from '@/utils/helperFunctions';
import { BigcLoader } from '@/utils/ImageLoaders';
import type { UnlockDetail } from '@/utils/types/types';

import IconFacebook from '../atoms/IconFacebook';
import IconInstagram from '../atoms/IconInstagram';
import IconRightArrow from '../atoms/IconRightArrow';
import IconTwitter from '../atoms/IconTwitter';
import IconYoutube from '../atoms/IconYoutube';
import useSubscribePhoneNumber from '../atoms/useSubscribePhoneNumber';
import useSubscribeToEmail from '../atoms/useSubscribeToEmail';

function SubscribeAndMailingList(props: { data: UnlockDetail }) {
  const { userData } = appStore();
  const {
    phone,
    handlePhoneSubmit,
    isChecked,
    handlePhoneNumberChange,
    message,
    offer,
  } = useSubscribePhoneNumber(
    userData !== null && {
      firstName: userData.firstName,
      lastName: userData.lastName,
    }
  );
  const { email, handleEmailChange, handleEmailSubmit, info } =
    useSubscribeToEmail();
  const [copied, setCopied] = useState(false);
  const handleOfferCodeCopy = () => {
    if (offer !== null) {
      navigator.clipboard.writeText(offer.code);
      setCopied(true);
    }
  };
  return (
    <section className="kp-subscribe-bg relative m-auto w-full max-w-[1920px] pb-5 before:absolute before:hidden before:h-[6px] before:w-full before:bg-green-700 before:content-[''] lg:pb-8 lg:before:block">
      <>
        <div className="absolute -z-10 h-full w-full">
          <Image
            alt=""
            src="https://cdn11.bigcommerce.com/s-ad1xf4xgb0/content/images/Homepage/unlockbanner.webp"
            loading="lazy"
            layout="fill"
            loader={BigcLoader}
            objectFit="cover"
            className="absolute inset-0 object-center"
          />
        </div>
        <div className="kp-container relative flex flex-col items-center gap-1 text-white">
          <div
            className={`${
              offer !== null ? `invisible` : ``
            } mb-5 w-full pt-5 text-center md:max-w-[400px] lg:max-w-[600px] lg:pt-8`}
          >
            <p className="mb-2.5 text-[length:var(--text-xl)] font-semibold italic leading-[1.1] tracking-[0.72px] md:text-[length:var(--heading-sm)]  lg:text-[length:var(--heading-xl)] lg:tracking-[1.68px]">
              {props.data.heading} <br /> {props.data.subHeading}
            </p>
            <form onSubmit={handlePhoneSubmit}>
              <div className="flex flex-row gap-1">
                <input
                  type="tel"
                  value={phone}
                  onChange={handlePhoneNumberChange}
                  placeholder="Enter Your Phone Number"
                  className="flex-1 rounded-[4px] px-2 py-1.5 text-[length:var(--text-2sm)] text-black outline-0 placeholder:text-[color:var(--cr-secondary)] md:px-5 md:py-2.5 lg:text-[length:var(--text-base)]"
                  maxLength={10}
                />
                <button
                  type="submit"
                  disabled={!isChecked || phone.length !== 10}
                  className={`disabled:cursor-not-allowed rounded-[4px] px-3 py-1.5 text-[black] outline-none md:px-5 md:py-2.5 ${
                    phone.length === 10
                      ? `bg-[color:var(--cr-primary)]`
                      : `bg-[color:var(--cr-info-light)]`
                  }`}
                >
                  <IconRightArrow className="h-auto w-[23px] lg:w-[50px]" />
                </button>
              </div>
              <p
                className={`min-h-[23px] pt-1 box-content ${
                  message.type === 'warning'
                    ? `text-[color:var(--cr-white)]`
                    : ``
                }`}
              >
                {message.messageText}
              </p>
            </form>
          </div>
          <div
            className={`${
              offer === null ? `pointer-events-none hidden` : ``
            } absolute text-center text-lg text-white inset-x-0 mt-[20px] lg:mt-[80px]`}
          >
            <p className="mb-1.5 px-[5px] py-[2px] text-[length:var(--text-2sm)] font-black italic md:text-[length:var(--text-xl)] xl:text-[length:var(--heading-md)]">
              {offer?.discountTitle}
            </p>
            <p className="mx-auto mb-1.5 max-w-[90%] break-words px-[5px] py-[2px] text-center text-[length:var(--text-2sm)] font-black italic md:text-[length:var(--text-xl)] xl:text-[length:var(--heading-md)]">
              <span className="mr-1 border border-dashed px-1.5 py-[2px] md:mr-3">
                {offer?.code}
              </span>
              {offer?.offerStrip}
            </p>
            <button
              className={` ${
                copied === true
                  ? `bg-[color:var(--cr-primary)]`
                  : `bg-[#94bcb5]`
              } rounded-md py-2 px-4 text-[length:var(--text-2sm)] lg:text-[length:var(--text-xl)]`}
              onClick={handleOfferCodeCopy}
            >
              {copied === true ? 'Copied!' : 'Copy'}
            </button>
          </div>

          <div className="m-auto w-full md:hidden lg:hidden">
            {/* <select
              className="mb-8 w-full rounded-[4px] py-1.5 px-3 text-[length:var(--text-sm)] font-semibold text-[color:var(--cr-black)] outline-none"
              defaultValue="MORE ABOUT SHOPPING WITH KAPIVA"
            >
              <option className="">MORE ABOUT SHOPPING WITH KAPIVA</option>
            </select> */}
            <div className="mb-5">
              <p className="mb-4 text-center text-[length:var(--heading-md)] font-normal leading-[1.1] tracking-[-0.23px]">
                JOIN OUR MAILING LIST
              </p>
              <form onSubmit={handleEmailSubmit}>
                <div className="flex flex-row gap-1">
                  <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={handleEmailChange}
                    className="flex-1 rounded-[4px] px-2 py-1.5 text-[length:var(--text-2sm)] text-black outline-0 placeholder:text-[color:var(--cr-secondary)] md:px-5 md:py-2.5 lg:text-[length:var(--text-base)]"
                  />
                  <button
                    type="submit"
                    disabled={email === '' || validateEmail(email) === false}
                    className="rounded-[4px] border-[1px] border-[color:var(--cr-info-light)] bg-transparent px-3 py-1.5 text-white outline-none disabled:cursor-not-allowed md:px-5 md:py-2.5"
                  >
                    <IconRightArrow className="h-auto w-[23px] lg:w-[50px]" />
                  </button>
                </div>
                <p
                  className={
                    info.type === 'success'
                      ? 'text-[color:var(--cr-white)] pt-1'
                      : 'text-[color:var(--cr-white)] pt-1'
                  }
                >
                  {info.messageText}
                </p>
              </form>
            </div>
            <ul className="w-full text-[length:var(--text-base)] font-normal leading-[1.2]">
              <li className="mb-3 border-b-[1px] border-white  pb-2">
                <a href="https://kapiva.in/shop-all/" className="text-white">
                  SHOP ALL
                </a>
              </li>
              <li className="mb-3 border-b-[1px] border-white  pb-2">
                <a href="https://kapiva.in/about-us" className="text-white">
                  ABOUT
                </a>
              </li>
              <li className="mb-3 border-b-[1px] border-white pb-2">
                <a className="text-white">OTHER LINKS</a>
              </li>
            </ul>
          </div>

          <div className="flex justify-center gap-4 md:hidden">
            <a
              className="text-white"
              href="https://www.instagram.com/kapiva_official/"
            >
              <IconInstagram />
            </a>
            <a
              className="text-white"
              href="https://www.facebook.com/kapiva.official/"
            >
              <IconFacebook />
            </a>
            <a
              className="text-white"
              href="https://www.youtube.com/channel/UCibQinpfiZeCp_-kHWhSHJQ"
            >
              <IconYoutube />
            </a>
            <a
              className="text-white"
              href="https://twitter.com/kapiva_official"
            >
              <IconTwitter />
            </a>
          </div>
        </div>
      </>
    </section>
  );
}

export default SubscribeAndMailingList;
