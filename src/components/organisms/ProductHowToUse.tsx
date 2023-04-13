import React from 'react';

const howToUseData = [
  {
    step: 'STEP 1',
    title: 'INDIAN DAMASK ROSE',
    description: 'Helps inhibit dark spots while reducing pigmentation',
  },
  {
    step: 'STEP 2',
    title: 'INDIAN DAMASK ROSE',
    description: 'Helps inhibit dark spots while reducing pigmentation',
  },
  {
    step: 'STEP 3',
    title: 'INDIAN DAMASK ROSE',
    description: 'Helps inhibit dark spots while reducing pigmentation',
  },
];

function ProductHowToUse() {
  return (
    <section className="relative flex flex-col items-center justify-center font-jost">
      <div className="mb-7 pt-1 text-[17px]">
        HOW <span className="font-black"> TO USE </span>
      </div>
      <div className="relative mb-2 h-[245px]">
        <img
          // eslint-disable-next-line global-require
          src={require('../../../public/assets/images/howtouse/view_toturial.jpg?webp')}
          width={316}
          height={245}
          alt=""
          loading="lazy"
        />
        <div className="absolute top-[101px] left-[89px] flex	flex-col items-center justify-center backdrop-blur-[1px]">
          <img
            // eslint-disable-next-line global-require
            src={require('../../../public/assets/images/howtouse/white_play_icon.png?webp')}
            width={13}
            height={21}
            alt=""
            loading="lazy"
          />
          <div className="mt-7 font-bold text-white">VIEW TUTORIAL</div>
        </div>
      </div>

      <div className="flex w-[316px] flex-col ">
        {howToUseData.map((step, id) => (
          <div
            key={id}
            className="kp-add-margin-first-element my-2 h-[78px]	border-b-2 border-[#8FC4A8]"
          >
            <div className="text-[14px] font-extrabold	 ">{step.step}</div>
            <div className="mt-1 text-[12px] leading-3">
              <div className="font-semibold	">{step.title}</div>
              <div className="font-normal">{step.description}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-0 right-0 z-[-10] translate-y-[-40%]">
        <img
          loading="lazy"
          // eslint-disable-next-line global-require, import/no-dynamic-require
          src={require(`../../../public/assets/images/edge_images_product/flower_how_to_use.png?webp`)}
          alt=""
          className={'aspect-auto w-[115px] max-w-full'}
        />
      </div>
    </section>
  );
}

export default ProductHowToUse;
