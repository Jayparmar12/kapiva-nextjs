import Link from 'next/link';
import React, { useContext, useState } from 'react';

import { appStore } from '@/stores/appStore';
// @ts-ignore:next-line
import { menuData } from '@/utils/menuData';
import type { Category } from '@/utils/types/types';

import { ScrollContext } from '../atoms/getScroll';
import IconClose from '../atoms/IconClose';
import IconMenu from '../atoms/IconMenu';
import IconSearch from '../atoms/IconSearch';
import IconTruck from '../atoms/IconTruck';
import SiteLogo from '../atoms/SiteLogo';
import SiteCart from '../molecules/SiteCart';
import CategoryNavMenuV2 from './CategoryNavMenuV2';
import Menu from './Menu';
import MiniCart from './MiniCart';
import SiteSearchV2 from './SiteSearchV2';

function SiteHeader(props: { categories?: Category[] }) {
  // const { isMiniCartOpen } = appStore();
  const { isLoggedIn, userData } = appStore();
  const { show } = useContext(ScrollContext) as { show: boolean };
  const [showMenu, setShowMenu] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  return (
    <>
      <header
        className={`sticky top-0 z-50 flex  flex-col shadow-lg ${
          showMenu === false && `overflow-hidden lg:overflow-visible`
        } ${!show && `mb-[76px] lg:mb-0 max-h-14 lg:max-h-[71px]`}`}
      >
        <div
          className={`relative box-border flex h-14 shrink-0 items-center gap-3 border-b-[0.14px] border-b-[#DDDDD9] bg-[#fff] px-4 shadow-[0px_1px_5px_#C1C1C1BF] lg:h-[71px] lg:gap-5`}
        >
          <button
            className={`lg:order-2 ${
              showSearchBar === true ? `hidden lg:block` : ``
            }`}
            onClick={() => setShowMenu((prev) => !prev)}
          >
            {showMenu === true ? (
              <IconClose
                color="#868686"
                className="h-auto w-[27px] lg:w-[35px]"
              ></IconClose>
            ) : (
              <IconMenu className="h-auto lg:w-[35px]"></IconMenu>
            )}
          </button>
          <Link href="/">
            <span className="cursor-pointer">
              <SiteLogo
                className={`w-[89px] shrink-0 lg:w-[150px] ${
                  showSearchBar === true ? `hidden lg:block` : ``
                }`}
              ></SiteLogo>
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setShowSearchBar(true)}
            className={`ml-auto lg:hidden ${
              showSearchBar === true ? `hidden lg:block` : ``
            }`}
          >
            <IconSearch className="h-auto w-[19px] lg:w-[22px]"></IconSearch>
          </button>
          <SiteSearchV2
            className={showSearchBar === true ? `lg:flex` : `hidden lg:flex`}
            setShowSearchBar={setShowSearchBar}
            showSearchBar={showSearchBar}
          />
          <div className={`relative kp-show-login-dropdown`}>
            <button className="hidden rounded-md border-[1px] border-[#1a1a1a] px-[18px] tracking-[4.12px] lg:flex lg:h-[30px] lg:items-center lg:justify-center">
              {isLoggedIn === true ? (
                `MY ACCOUNT`
              ) : (
                <a href="https://kapiva.in/login.php">LOGIN</a>
              )}
            </button>
            {isLoggedIn === true && (
              <ul className="invisible absolute left-[0px] right-0 top-[10px] z-[99] mt-0 w-[190px] translate-y-[30px] rounded-md border border-solid border-[#ccc] bg-white px-0 py-[20px] text-center opacity-100 transition-all delay-[0s] duration-[0.5s] ease-[ease-in-out]">
                <li className="pb-3 text-[length:var(--text-2sm)] font-semibold text-[color:var(--cr-primary)]">
                  Hi, {userData?.firstName}!
                </li>
                <li className="px-3 pb-3">
                  <a
                    className="text-[length:var(--text-2sm)] font-medium text-[#030504] no-underline"
                    href="https://kapiva.in/account.php?action=order_status"
                  >
                    Orders
                  </a>
                </li>
                <li className="px-3 pb-3">
                  <a
                    className="text-[length:var(--text-2sm)] font-medium text-[#030504] no-underline"
                    href="https://kapiva.in/wallet/"
                  >
                    Wallet
                  </a>
                </li>

                <li className="px-3 pb-3">
                  <a
                    className="text-[length:var(--text-2sm)] font-medium text-[#030504] no-underline"
                    href="https://kapiva.in/account.php?action=address_book"
                  >
                    Addresses
                  </a>
                </li>
                <li className="px-3 pb-3">
                  <a
                    className="text-[length:var(--text-2sm)] font-medium text-[#030504] no-underline"
                    href="https://kapiva.in/account.php?action=recent_items"
                  >
                    Recently Viewed
                  </a>
                </li>
                <li className="px-3 pb-3">
                  <a
                    className="text-[length:var(--text-2sm)] font-medium text-[#030504] no-underline"
                    href="https://kapiva.in/account.php?action=account_details"
                  >
                    Account Settings
                  </a>
                </li>
                <li className="px-3 pb-3">
                  <a
                    className="text-[length:var(--text-2sm)] font-medium text-[#030504] no-underline"
                    href="https://kapiva.in/contact-us/"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    className="text-[length:var(--text-2sm)] font-extrabold uppercase tracking-[3px] text-[#030504]"
                    href="https://kapiva.in/login.php?action=logout"
                    aria-label="Sign out"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            )}
          </div>
          <button className="hidden rounded-md border-[1px] border-[#1a1a1a] px-[18px] tracking-[4.12px] lg:flex lg:h-[30px] lg:items-center lg:justify-center">
            <Link href="https://kapiva.app.link/cTEX36Uqrtb">GET APP</Link>
          </button>
          <button className={showSearchBar === true ? `hidden lg:block` : ``}>
            <Link href="https://kapiva.in/track-order/">
              <span>
                <IconTruck className="lg:h-auto lg:w-[39px]"></IconTruck>
              </span>
            </Link>
          </button>
          <button className={showSearchBar === true ? `hidden lg:block` : ``}>
            <SiteCart className="lg:h-auto lg:w-[30px]"></SiteCart>
          </button>
          {showMenu && (
            <ul className="absolute left-0 top-full z-50 h-[calc(100vh-56px)] w-full overflow-y-scroll bg-white p-5 pb-[56px] lg:left-auto lg:right-0 lg:w-[30%] ">
              <Menu menu={menuData} />
            </ul>
          )}
        </div>
        <div
          className={`${showMenu === true && `hideen`} ${
            !show ? `pointer-events-none invisible` : `bg-[#fff] lg:hidden`
          } `}
        >
          <CategoryNavMenuV2 categories={props.categories} />
        </div>
        <MiniCart />
      </header>
    </>
  );
}

export default SiteHeader;
