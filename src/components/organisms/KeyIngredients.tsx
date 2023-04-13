import React from 'react';

const items = [
  {
    image_url: '/assets/images/ingredients_images/indian_damask.png',
    title: 'INDIAN DAMASK ROSE',
    text: 'Helps inhibit dark spots while reducing pigmentation',
  },
  {
    image_url: '/assets/images/ingredients_images/acai_berry.png',
    title: 'ACAI BERRY',
    text: 'Helps inhibit dark spots while reducing pigmentation',
  },
  {
    image_url: '/assets/images/ingredients_images/POMEGRANATE.png',
    title: 'POMEGRANATE EXTRACT',
    text: 'Helps inhibit dark spots while reducing pigmentation',
  },
  {
    image_url: '/assets/images/ingredients_images/SHATAVARI.png',
    title: 'SHATAVARI EXTRACT',
    text: 'Helps inhibit dark spots while reducing pigmentation',
  },
];

function KeyIngredients() {
  return (
    <>
      <section className="flex flex-col items-center gap-4 font-jost">
        <div className="mb-1">
          <span className="font-black">KEY </span> INGREDIENTS
        </div>

        <div className="flex flex-col lg:flex-row">
          {items.map((item, index) => (
            <div
              key={index}
              className="kp-remove-bottom-margin mb-6 flex flex-row items-center justify-center"
            >
              <img
                src={item.image_url}
                alt={item.title}
                loading="lazy"
                width="75"
                height="75"
                className="aspect-square min-w-[50px]"
              />
              <div className="ml-3 flex flex-col justify-center  ">
                <div className="text-base font-bold">{item.title}</div>
                <div className="text-sm font-light">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default KeyIngredients;
