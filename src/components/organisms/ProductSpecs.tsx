import React from 'react';

const infoDetails = [
  {
    title: 'Main <br /> Ingredient &#40;s&#41;',
    subtitle: 'Amala, Goliy, Neem',
  },
  {
    title: 'Expiry',
    subtitle: '2 Months from <br />Packaging',
  },
  {
    title: 'Recommended <br /> Dosage',
    subtitle: 'Amala, Goliy, Neem',
  },
  { title: 'Quantity', subtitle: '1 Litre' },
  {
    title: 'What’s in <br /> the Box',
    subtitle: 'Kapiva Get Slim Juice <br /> bottle',
  },
  { title: 'Dimensions', subtitle: '1000mm x 1200mm' },
];

function ProductSpecs() {
  return (
    <>
      <section className="relative flex flex-col items-center justify-center gap-2 pb-5 text-center font-jost text-[17px] leading-none">
        <div className="mb-[30px] flex flex-col items-center">
          <span className="font-light">PRODUCT</span>
          <span className="font-black">SPECIFICATIONS</span>
        </div>

        <div className="mb-8 flex flex-wrap items-start justify-center gap-2 ">
          {infoDetails.map((info, id) => (
            <div
              key={id}
              className=" flex w-[133px] flex-col items-stretch justify-center px-2 py-4 "
            >
              <div
                className="mb-2 box-content flex min-h-[32px] items-end justify-center border-b-[1px] border-black pb-2 text-base font-bold text-[#7EAA2F]"
                dangerouslySetInnerHTML={{ __html: info.title }}
              ></div>
              <div
                className="box-content flex min-h-[32px] items-start justify-center text-sm font-normal text-black"
                dangerouslySetInnerHTML={{ __html: info.subtitle }}
              ></div>
            </div>
          ))}
        </div>
        <div className="absolute top-0 left-0 -translate-y-1/4">
          <img
            loading="lazy"
            // eslint-disable-next-line global-require, import/no-dynamic-require
            src={require(`../../../public/assets/images/edge_images_product/flower_product_specification.png?webp`)}
            alt=""
            className={'aspect-auto w-[95px] max-w-full'}
          />
        </div>
        <div className="absolute bottom-0 right-0">
          <img
            loading="lazy"
            // eslint-disable-next-line global-require, import/no-dynamic-require
            src={require(`../../../public/assets/images/edge_images_product/flower_bottom.png?webp`)}
            alt=""
            className={'aspect-auto w-[93px] max-w-full'}
          />
        </div>
      </section>
    </>
  );
}

export default ProductSpecs;
