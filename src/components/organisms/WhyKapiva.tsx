import React from 'react';

const benefitsOfKapiva = [
  {
    image: 'https://via.placeholder.com/40x40',
    title: ' Health <br /> Outcomes',
    subtitle: 'Delivered',
  },
  {
    image: 'https://via.placeholder.com/40x40',
    title: ' Bespoke <br /> Ayurveda ',
    subtitle: ' Programs crafted by <br /> Ayurvedacharayas ',
  },
  {
    image: 'https://via.placeholder.com/40x40',
    title: '  Real <br />   Assistance  ',
    subtitle: 'Ayrurvedic <br /> Health Experts ',
  },
  {
    image: 'https://via.placeholder.com/40x40',
    title: ' GMP Certified, <br />  Vegan ',
    subtitle: 'Reliable , healthy and <br /> plant based ',
  },
];

function WhyKapiva() {
  return (
    <>
      <section className="relative flex flex-col items-center justify-center gap-10 font-jost">
        <div className="text-lg">
          <span className="font-light">WHY</span>
          <span className="font-black"> KAPIVA?</span>
        </div>
        <div className=" flex  flex-row  flex-wrap items-start justify-center gap-y-[40px] gap-x-[60px]  text-center  ">
          {benefitsOfKapiva.map((benefit, id) => (
            <div
              className="flex  flex-col items-center  font-jost text-[#425F2C]"
              key={id}
            >
              <img src={benefit.image} alt="" height="40" width="40" />
              <div
                className="text-base font-black "
                dangerouslySetInnerHTML={{ __html: benefit.title }}
              ></div>
              <div
                className="text-xs"
                dangerouslySetInnerHTML={{ __html: benefit.subtitle }}
              ></div>
            </div>
          ))}
        </div>
        <div className="absolute top-0 left-0 -translate-y-1/2">
          <img
            loading="lazy"
            // eslint-disable-next-line global-require, import/no-dynamic-require
            src={require(`../../../public/assets/images/edge_images_product/flower_why_kapiva.png?webp`)}
            alt=""
            className={'aspect-auto w-[123px] max-w-full'}
          />
        </div>
      </section>
    </>
  );
}

export default WhyKapiva;
