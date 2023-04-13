import React from 'react';

const faqs = [
  {
    upper_title: 'What is the reason behind ',
    lower_title: 'this product’s strong taste?',
    show_description: true,
    description:
      'The presence of natural and raw herbs gives it a unique taste. This is because we use only pure ingredients to make this juice. Adding alittle water will help you dilute it',
  },
  {
    upper_title: 'What is the reason behind ',
    lower_title: 'this product’s strong taste?',
    show_description: false,
    description:
      'The presence of natural and raw herbs gives it a unique taste. This is because we use only pure ingredients to make this juice. Adding alittle water will help you dilute it',
  },
  {
    upper_title: 'What is the reason behind ',
    lower_title: 'this product’s strong taste?',
    show_description: false,
    description:
      'The presence of natural and raw herbs gives it a unique taste. This is because we use only pure ingredients to make this juice. Adding alittle water will help you dilute it',
  },
  {
    upper_title: 'What is the reason behind ',
    lower_title: 'this product’s strong taste?',
    show_description: false,
    description:
      'The presence of natural and raw herbs gives it a unique taste. This is because we use only pure ingredients to make this juice. Adding alittle water will help you dilute it',
  },
  {
    upper_title: 'What is the reason behind ',
    lower_title: 'this product’s strong taste?',
    show_description: false,
    description:
      'The presence of natural and raw herbs gives it a unique taste. This is because we use only pure ingredients to make this juice. Adding alittle water will help you dilute it',
  },
  {
    upper_title: 'What is the reason behind ',
    lower_title: 'this product’s strong taste?',
    show_description: false,
    description:
      'The presence of natural and raw herbs gives it a unique taste. This is because we use only pure ingredients to make this juice. Adding alittle water will help you dilute it',
  },
];

function ProductFaqs() {
  return (
    <section className="container relative flex  flex-col items-center  font-jost lg:mx-auto">
      <div className="relative z-50 mt-2 mb-[36px] flex flex-col gap-1  text-center text-lg leading-none backdrop-blur-sm">
        <span className="font-light">GLOW MIX POWDER</span>
        <span className="font-bold"> FAQs</span>
      </div>

      {faqs.map((faq, id) => (
        <div className="kp-remove-bottom-margin my-[10px]" key={id}>
          <div className="flex items-center justify-center border-b-[1px] border-[#364D2E] pb-3 font-extrabold leading-[18px]">
            <div className="flex flex-col text-[16px] tracking-[0.96px] text-[#364D2E]">
              <span>{faq.upper_title} </span>
              <span>{faq.lower_title}</span>
            </div>
            <div className="ml-[55px]">
              <img
                // eslint-disable-next-line global-require
                src={require('../../../public/assets/images/arrow/arrowicon.png?webp')}
                height={12}
                width={24}
                alt="arrow"
              />
            </div>
          </div>
          {faq.show_description && (
            <div className="max-w-[321px] py-1 text-[15px] font-normal">
              {faq.description}
            </div>
          )}
        </div>
      ))}
      <div className="absolute top-0 right-0 -translate-y-1/3">
        <img
          loading="lazy"
          // eslint-disable-next-line global-require, import/no-dynamic-require
          src={require(`../../../public/assets/images/edge_images_product/flower_faq.png?webp`)}
          alt=""
          className={'aspect-auto w-[123px] max-w-full'}
        />
      </div>
    </section>
  );
}

export default ProductFaqs;
