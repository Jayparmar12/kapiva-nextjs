import React from 'react';

const benefitsObject = [
  {
    img_url: 'reduces_hyperpigmentation_A.png',
    title: 'REDUCES <br/> HYPERPIGMENTATION',
    description: 'Helps inhibit dark spots while <br /> reducing pigmentation',
  },
  {
    img_url: 'reduces_hyperpigmentation_B.png',
    title: 'REDUCES <br /> HYPERPIGMENTATION',
    description: 'Helps inhibit dark spots while <br /> reducing pigmentation',
  },
  {
    img_url: 'reduces_hyperpigmentation_C.png',
    title: 'REDUCES <br/> HYPERPIGMENTATION',
    description: 'Helps inhibit dark spots while <br /> reducing pigmentation',
  },
];
function ProductBenefits() {
  return (
    <>
      <section className="relative flex flex-col gap-y-[45px]  text-center font-jost">
        <div className="z-10 flex flex-col text-center text-[18px] ">
          <span className="font-black ">BENEFITS</span>
          <span className="font-light ">OF SKIN GLOW POWDER</span>
        </div>

        <div className="flex flex-col items-center ">
          {benefitsObject.map((benefit, id) => (
            <div
              className="mb-[39px] flex flex-col items-center justify-center   leading-none"
              key={id}
            >
              <img
                // eslint-disable-next-line global-require, import/no-dynamic-require
                src={require(`../../../public/assets/images/benefits/${benefit.img_url}?webp`)}
                className="mb-[17px] aspect-auto"
                width="297"
                height="172"
                loading="lazy"
                alt=""
              />
              <div
                className="mb-[8px] text-base font-extrabold  text-[#A5A33C] backdrop-blur-sm"
                dangerouslySetInnerHTML={{ __html: benefit.title }}
              ></div>
              <div
                className="mb-[5px] text-sm font-light backdrop-blur-sm"
                dangerouslySetInnerHTML={{ __html: benefit.description }}
              ></div>
            </div>
          ))}
        </div>

        <div className="absolute top-0 left-0 -z-0 -translate-y-1/4">
          <img
            loading="lazy"
            // eslint-disable-next-line global-require, import/no-dynamic-require
            src={require(`../../../public/assets/images/edge_images_product/flower_hyper_A.png?webp`)}
            alt=""
            className={'aspect-auto w-[120px] max-w-full'}
          />
        </div>
        <div className="absolute top-[30%] right-0 -z-10  ">
          <img
            loading="lazy"
            // eslint-disable-next-line global-require, import/no-dynamic-require
            src={require(`../../../public/assets/images/edge_images_product/flower_pouplar_combo.png?webp`)}
            alt=""
            className={'aspect-auto w-[108px] max-w-full'}
          />
        </div>
        <div className="absolute top-[60%] left-0 -z-10 translate-y-[40%] -translate-x-3">
          <img
            loading="lazy"
            // eslint-disable-next-line global-require, import/no-dynamic-require
            src={require(`../../../public/assets/images/edge_images_product/flower_hyper_C.png?webp`)}
            alt=""
            className={'aspect-auto w-[126px] max-w-full'}
          />
        </div>
      </section>
    </>
  );
}

export default ProductBenefits;
