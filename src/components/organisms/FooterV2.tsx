import Link from 'next/link';
import React from 'react';

import { validateEmail } from '@/utils/helperFunctions';

import IconFacebook from '../atoms/IconFacebook';
import IconInstagram from '../atoms/IconInstagram';
import IconMail from '../atoms/IconMail';
import IconPhone from '../atoms/IconPhone';
import IconRightArrow from '../atoms/IconRightArrow';
import IconTwitter from '../atoms/IconTwitter';
import IconYoutube from '../atoms/IconYoutube';
import SiteLogo from '../atoms/SiteLogo';
import useSubscribeToEmail from '../atoms/useSubscribeToEmail';

const leftLinks = [
  { title: 'SHOP ALL', href: 'https://kapiva.in/shop-all/' },
  {
    title: 'CONSULT A DOCTOR',
    href: 'https://kapiva.in/consult-a-doctor/',
  },
  // { title: 'SELF ASSESSMENT', href: '' },
  { title: 'MY ACCOUNT', href: 'https://kapiva.in/account.php' },
];

const RightLinks = [
  { title: 'ABOUT US', href: 'https://kapiva.in/about-us/' },
  {
    title: 'BLOG',
    href: 'https://blog.kapiva.in/',
  },
  { title: 'MEDIA', href: 'https://kapiva.in/media/' },
  { title: 'CONTACT US', href: 'https://kapiva.in/contact-us/' },
];

const topStripLogos = [
  { img_url: 'top_strip/amazon.png' },
  { img_url: 'top_strip/bigbasket.png' },
  { img_url: 'top_strip/flipkart.png' },
  { img_url: 'top_strip/jiomart.png' },
];
const bottomStripLogos = [
  { img_url: 'bottom_strip/amazon_pay.png' },
  { img_url: 'bottom_strip/bhim_upi.png' },
  { img_url: 'bottom_strip/intersection.png' },
  { img_url: 'bottom_strip/google_pay.png' },
  { img_url: 'bottom_strip/mastercard.png' },
  { img_url: 'bottom_strip/rupay.png' },
  { img_url: 'bottom_strip/visa.png' },
];
function FooterV2() {
  const { email, handleEmailChange, handleEmailSubmit, info } =
    useSubscribeToEmail();
  return (
    <footer className="flex flex-col">
      <div className="kp-container-fluid flex max-w-full flex-col-reverse py-5 md:flex-col lg:flex-row lg:justify-between lg:gap-9 lg:py-10 ">
        <article className="flex items-end md:mb-5 md:gap-0 lg:mb-0 lg:basis-1/4 lg:flex-col lg:items-start lg:gap-6">
          <div className="basis-1/2 md:shrink-0 md:basis-1/3 ">
            <Link href="/">
              <a>
                <SiteLogo className="mb-2 w-[121px] shrink-0 lg:mb-10 lg:w-[163px]"></SiteLogo>
              </a>
            </Link>
            <address className="text-[length:var(--text-xs)] font-semibold tracking-[0.64px] text-[color:var(--cr-black)] lg:text-[length:var(--text-2sm)]  lg:tracking-[0.96px]">
              Adret Retail Pvt. Ltd. (Kapiva Ayurveda) 891 Blue Nile Building,
              101 1st Floor, Next to Tavaa Restaurant, Bandra (west), Mumbai 400
              050
            </address>
          </div>

          <div className="flex basis-1/2 flex-col  items-center gap-3 md:ml-auto md:items-start lg:ml-0 lg:gap-6 ">
            <div className="flex items-center gap-3">
              <IconPhone className="h-auto w-[16px] md:w-[25px] lg:w-[31px]" />
              <p className="text-[length:var(--text-sm)] font-semibold tracking-[1.2px] md:text-[length:var(--text-base)] lg:font-bold xl:text-[length:var(--text-xl)]">
                <a
                  href="tel:18002742575"
                  className="text-[color:var(--cr-black)]"
                >
                  1800-274-2575
                </a>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <IconMail className="h-auto w-[16px] md:w-[25px] lg:w-[31px]" />
              <p className="text-[length:var(--text-sm)] font-semibold tracking-[1.2px] md:text-[length:var(--text-base)] lg:font-bold xl:text-[length:var(--text-xl)]">
                <a
                  href="mailto:info@kapiva.in"
                  className="text-[color:var(--cr-black)]"
                >
                  info@kapiva.in
                </a>
              </p>
            </div>
          </div>
        </article>

        <article className="lg:shrink-0 lg:grow lg:basis-3/4">
          <div className="hidden justify-between md:mb-5 md:flex lg:flex">
            <div className="mr-auto flex basis-1/2 justify-start gap-10 font-bold tracking-[0.84px] md:basis-1/2 md:text-[length:var(--text-base)] xl:text-[length:var(--text-xl)]">
              <ul>
                {leftLinks.map((item, id) => (
                  <li className="mb-3 pb-2" key={id}>
                    <a className="" href={item.href}>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
              <ul>
                {RightLinks.map((item, id) => (
                  <li className="mb-3 pb-2" key={id}>
                    <a className="" href={item.href}>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="basis-1/2">
              <p className="mb-3 font-bold tracking-[0.84px] md:text-[length:var(--text-base)] xl:text-[length:var(--text-xl)]">
                JOIN OUR MAILING LIST
              </p>
              <div className="mb-6">
                <form onSubmit={handleEmailSubmit}>
                  <div className="flex flex-row gap-3">
                    <input
                      type="email"
                      onChange={handleEmailChange}
                      name="email"
                      value={email}
                      placeholder="Enter Email"
                      className="flex-1 rounded-[4px] border-[1px] border-[#666666] bg-white px-2 py-1.5 text-[length:var(--text-2sm)] text-[color:var(--cr-black)] outline-0 placeholder:text-[color:var(--cr-secondary)] md:px-5 md:py-2.5 lg:text-[length:var(--text-base)]"
                    />
                    <button
                      type="submit"
                      disabled={email === '' || validateEmail(email) === false}
                      className="rounded-[4px] border-[1px] border-[color:var(--cr-info-light)] bg-[color:var(--cr-info-light)] px-3 py-1.5 text-white text-[color:var(--cr-black)] outline-none outline-0 placeholder:text-[color:var(--cr-black)] hover:bg-[color:var(--cr-primary)] disabled:cursor-not-allowed md:px-5 md:py-2.5"
                    >
                      <IconRightArrow className="h-auto w-[23px] lg:w-[39px]" />
                    </button>
                  </div>
                  <p
                    className={
                      info.type === 'success'
                        ? 'text-[color:var(--cr-primary)] pt-1'
                        : 'text-[color:var(--cr-danger)] pt-1'
                    }
                  >
                    {info.messageText}
                  </p>
                </form>
              </div>
              <div className="flex flex-col items-start">
                <p className="mb-2 font-bold tracking-[0.84px] md:text-[length:var(--text-base)] xl:text-[length:var(--text-xl)]">
                  FOLLOW US
                </p>
                <div className="mb-2 flex justify-center gap-4">
                  <a href="https://www.instagram.com/kapiva_official/">
                    <IconInstagram size={40} />
                  </a>
                  <a href="https://www.facebook.com/kapiva.official/">
                    <IconFacebook size={40} />
                  </a>
                  <a href="https://www.youtube.com/channel/UCibQinpfiZeCp_-kHWhSHJQ">
                    <IconYoutube size={40} />
                  </a>
                  <a href="https://twitter.com/kapiva_official">
                    <IconTwitter size={40} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-5 flex flex-col gap-5 md:flex-row md:gap-0 lg:mb-0 lg:flex-row">
            <div className="flex flex-col gap-2 md:basis-1/2 lg:basis-1/2">
              <p className="text-[length:var(--text-2xs)] font-medium tracking-[0.8px] lg:text-[length:var(--text-2sm)] lg:font-normal lg:tracking-[1.2px]">
                Also available on:
              </p>
              <div className="flex flex-nowrap items-center justify-between">
                {topStripLogos.map((logo, id) => (
                  <div key={id}>
                    <img
                      loading="lazy"
                      // eslint-disable-next-line global-require, import/no-dynamic-require
                      src={require(`../../../public/assets/images/footer/${logo.img_url}?webp`)}
                      alt=""
                      height="56"
                      width="164"
                      className="m-auto"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex shrink-0 flex-col gap-2 md:basis-1/2 lg:basis-1/2">
              <p className="text-[length:var(--text-2xs)] font-medium tracking-[0.8px] lg:text-[length:var(--text-2sm)] lg:font-normal lg:tracking-[1.2px]">
                Also available on:
              </p>
              <div className="flex flex-wrap justify-between gap-1">
                {bottomStripLogos.map((logo, id) => (
                  <div key={id}>
                    <img
                      loading="lazy"
                      // eslint-disable-next-line global-require, import/no-dynamic-require
                      src={require(`../../../public/assets/images/footer/${logo.img_url}?webp`)}
                      alt=""
                      height="78"
                      width="88"
                      className="h-auto max-w-[40px] lg:max-w-[50px]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
      <div className="mb-5 lg:mb-10">
        <ul className="kp-container-fluid flex w-full flex-row justify-between gap-1 text-center text-[length:var(--text-xs)] font-medium tracking-[0.8px] lg:text-[length:var(--text-2sm)] lg:font-normal lg:tracking-[1.4px]">
          <li>
            <a
              href="https://kapiva.in/privacy-policy/"
              className="text-[color:var(--cr-black)]"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="https://kapiva.in/terms-and-condition/"
              className="text-[color:var(--cr-black)]"
            >
              Terms and Conditions
            </a>
          </li>
          <li>
            <a
              href="https://kapiva.in/shipping-policy/"
              className="text-[color:var(--cr-black)]"
            >
              Shipping Policy
            </a>
          </li>
          <li>
            <a
              href="https://kapiva.in/cancellation-returns-refunds-policy/"
              className="text-[color:var(--cr-black)]"
            >
              Cancellation Policy
            </a>
          </li>
        </ul>
      </div>
      <p className="bg-[color:var(--cr-info-dark)] py-2 text-center text-[length:var(--text-xs)] font-medium tracking-[0.64px] text-[color:var(--cr-white)] lg:text-[length:var(--text-2sm)] lg:font-normal lg:tracking-[1.4px]">
        Kapiva is a company of Adret Retail Private Limited © Copyright 2023
        Kapiva
      </p>
    </footer>
  );
}

export default FooterV2;
