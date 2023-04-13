import React from 'react';

// @ts-ignore:next-line
import { appStore } from '@/stores/appStore';

import IconCart from '../atoms/IconCart';

function SiteCart(props: { className?: string }) {
  const { getCartItemsCount, toggleMiniCart } = appStore();

  return (
    <div onClick={toggleMiniCart} className="relative">
      <IconCart {...props}></IconCart>
      <div className="absolute top-[-6px] -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-[color:var(--cr-danger-light)] text-center text-[9px] leading-none text-white">
        {getCartItemsCount()}
      </div>
    </div>
  );
}

export default SiteCart;
