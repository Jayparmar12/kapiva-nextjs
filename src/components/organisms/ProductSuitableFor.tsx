import React from 'react';

function ProductSuitableFor() {
  return (
    <>
      <section className="relative flex flex-col items-center justify-center gap-1 font-jost text-lg">
        <div>
          <span className="mr-1 font-light"> SUITABLE</span>
          <span className="font-black">FOR</span>
        </div>
        <div className="flex flex-col text-center font-semibold leading-tight tracking-[-0.34px] text-[#ACB3A3]">
          <span>Females who are looking to get </span>
          <span>chemical-free, natural &amp; healthy skin glow </span>
          <span>with the right nutrition.</span>
        </div>
        <div className="absolute top-0 right-0 translate-y-[-70%]">
          <img
            loading="lazy"
            // eslint-disable-next-line global-require, import/no-dynamic-require
            src={require(`../../../public/assets/images/edge_images_product/flower_ingredients.png?webp`)}
            alt=""
            className={'aspect-auto w-[112px] max-w-full'}
          />
        </div>
      </section>
    </>
  );
}

export default ProductSuitableFor;
