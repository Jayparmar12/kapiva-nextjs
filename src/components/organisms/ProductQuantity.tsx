import React from 'react';

import { useQuantity } from '../atoms/useQuantity';

function ProductQuantity(props) {
  const { onChangeLocal, increment, decrement, quantity } = useQuantity(props);

  return (
    <section className="mb-[25px] flex flex-col items-center rounded-md md:mb-0 md:items-start lg:w-[48%]">
      <div className="mb-1 text-center text-[length:var(--pdp-text-sm)] font-normal leading-[1.2] tracking-[1.68px] md:text-left lg:text-[length:var(--pdp-text-base)]">
        Quantity
      </div>
      <div className="flex max-w-[180px] items-center rounded-md border-[1px] border-black py-[2px] px-[10px] md:h-[46px] lg:w-full lg:max-w-full">
        <button
          className="relative h-[20px] w-[10%] bg-transparent px-2 py-1 before:absolute before:left-1/2 before:top-1/2 before:h-[2px] before:w-[20px] before:-translate-x-1/2 before:-translate-y-1/2 before:bg-[#0e3118] before:content-['']"
          onClick={decrement}
        ></button>
        <input
          value={quantity}
          disabled
          onChange={onChangeLocal}
          className="w-full appearance-none text-center text-[length:var(--pdp-text-xl)] font-normal
          leading-[1.6] tracking-[4.2px] outline-none disabled:text-[color:var(--cr-black)]"
        />
        <button
          className="relative h-[20px] w-[10%] bg-transparent before:absolute before:left-1/2 before:top-1/2 before:h-[2px] before:w-[20px] before:-translate-x-1/2 before:-translate-y-1/2 before:bg-[rgb(14,49,24)] before:content-[''] after:absolute after:left-1/2 after:h-[2px] after:w-[22px] after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-90 after:bg-[rgb(14,49,24)] after:content-[''] md:h-full"
          onClick={increment}
        ></button>
      </div>
    </section>
  );
}

export default ProductQuantity;
