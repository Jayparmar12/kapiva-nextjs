import React from 'react';

import type { UnlockDetail } from '@/utils/types/types';

import styles from '../../styles/Footer.module.css';
import IconFacebook from '../atoms/IconFacebook';
import IconInstagram from '../atoms/IconInstagram';
import IconRightArrow from '../atoms/IconRightArrow';
import IconTwitter from '../atoms/IconTwitter';
import IconYoutube from '../atoms/IconYoutube';

function SubscribeForm({ placeholder }: { placeholder?: string }) {
  return (
    <form className="flex justify-center gap-1">
      <input
        type="text "
        placeholder={placeholder}
        className="w-full border-none px-2 py-1  font-jost text-black outline-0  lg:w-[50%] lg:py-3 "
      />
      <button
        className={`w-auto border-[1px] border-[#A3C8C2]
          bg-[#A3C8C2] px-3 py-1 text-[black]  outline-none`}
      >
        <IconRightArrow className="h-auto w-[23px] lg:w-[50px]" />
      </button>
    </form>
  );
}
export { SubscribeForm };

function SubscribeAndMailingList(props: { data: UnlockDetail }) {
  return (
    <section
      className={`kp-subscribe-bg relative  flex flex-col items-center gap-1  text-white before:h-[6px] before:w-full before:bg-green-700 before:content-[""] `}
    >
      <div className="z-10 my-5 w-[90%] text-center md:mb-14  md:max-w-[400px] lg:mt-6 lg:max-w-[800px]">
        <p
          className={`mb-4 font-playfair text-[21px]  font-black leading-none tracking-[0.84px] ${styles.kpUnlockTitle}`}
        >
          {props.data.heading} <br /> {props.data.subHeading}
        </p>
        <SubscribeForm placeholder="Enter your phone number" />
      </div>

      <div className="m-auto w-[90%] md:hidden lg:hidden">
        <select
          className="mb-8 w-full py-1 px-3 font-jost text-xs font-semibold text-black outline-none"
          defaultValue={'MORE ABOUT SHOPPING WITH KAPIVA'}
        >
          <option className="bg-black">MORE ABOUT SHOPPING WITH KAPIVA</option>
        </select>
        <div className="mb-8">
          <p className="mb-4  font-jost text-[30px] font-normal ">
            JOIN OUR MAILING LIST
          </p>
          <>
            <form className="flex justify-center gap-1">
              <input
                type="text "
                placeholder=""
                className="w-full border-none px-2 py-1 font-jost font-bold text-black outline-0"
              />
              <button
                className={`w-auto border-[1px] border-[#A3C8C2]
                  bg-transparent px-3 py-1   outline-none`}
              >
                <IconRightArrow className="h-auto w-[23px]" />
              </button>
            </form>
          </>
        </div>
        <ul
          className={`w-full font-jost text-[17px] font-normal ${styles.kpLinkAndInfoText}`}
        >
          <li className="mb-3 border-b-[1px] border-white  pb-2">
            <a href="https://kapiva.in/shop-all/" className="text-white">
              SHOP ALL
            </a>
          </li>
          <li className="mb-3 border-b-[1px] border-white  pb-2">
            <a href="https://kapiva.in/about-us/" className="text-white">
              ABOUT
            </a>
          </li>
          <li className="mb-3 border-b-[1px] border-white  pb-2">
            <a className="text-white">OTHER LINKS</a>
          </li>
        </ul>
      </div>

      <div className="mb-2 flex justify-center gap-4 md:hidden">
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
        <a className="text-white" href="https://twitter.com/kapiva_official">
          <IconTwitter />
        </a>
      </div>
    </section>
  );
}

export default SubscribeAndMailingList;
