import React from 'react';

function ProductPrice({ prices, discount }: { prices: any; discount: any }) {
  return (
    <div className="mb-4 flex max-w-full justify-center md:justify-start lg:justify-center">
      <section className="flex w-full flex-col items-center justify-start rounded-md bg-[rgba(128,160,60,0.25)] py-1.5 font-jost leading-none md:max-w-[350px] md:items-start lg:max-w-[390px] lg:py-3 xl:max-w-[475px]">
        <p className="order-1 w-full text-center text-[length:var(--pdp-text-2xs)] font-[250] leading-[1.4] lg:text-[length:var(--pdp-text-2sm)] xl:text-[length:var(--pdp-text-base)]">
          MRP (incl. of all taxes)
        </p>
        <div className="flex w-full items-center justify-center gap-[6px] lg:gap-[10px]">
          {prices.salePrice &&
            prices.salePrice.value !== prices.basePrice.value && (
              <span className="text-[15px] font-light tracking-[0.36px] text-[grey] line-through lg:text-[length:var(--pdp-heading-sm)] xl:text-[length:var(--pdp-heading-base)] xl:tracking-[0.64]">
                {`₹${prices.basePrice.value}`}
              </span>
            )}
          <span className="text-[length:var(--pdp-text-lg)] font-black leading-[1.4] lg:text-[length:var(--pdp-heading-2sm)] xl:text-[length:var(--pdp-heading-xl)]">
            {`₹${
              prices.salePrice ? prices.salePrice.value : prices.basePrice.value
            }`}
          </span>
          <span className="text-[15px] font-normal uppercase  italic text-[color:var(--cr-danger-light)] lg:text-[length:var(--pdp-heading-2xs)] xl:text-[length:var(--pdp-heading-base)]">
            {discount !== '' && `(${discount})`}
          </span>
        </div>
      </section>
    </div>
  );
}

export default ProductPrice;
