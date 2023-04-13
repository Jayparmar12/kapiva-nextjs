import React from 'react';

function HealthOutcomes({
  heading,
  content,
}: {
  heading?: any;
  content?: any;
}) {
  return (
    <section className="">
      <h2 className=" z-20 mb-2 px-4 font-play_regular text-3xl font-normal not-italic tracking-wider ">
        {heading}
      </h2>
      <article className="flex justify-between ">
        <ul className="z-20 ml-4  flex w-[50%]	flex-col border-t-4 border-black font-jost backdrop-blur-sm">
          {content.map((item: any, id: number) => (
            <li className="mt-2" key={id}>
              <span className=" text-3xl font-light text-[#6D7635]">
                {`0${id + 1}`}
              </span>
              <span className="ml-2 text-sm font-normal">{item}</span>
            </li>
          ))}
        </ul>
        <div className="-ml-20 -mt-8">
          <img
            src={require('../../../public/assets/images/health_outcomes/health_outcomes.png?webp')}
            alt=""
            className="aspect-square  h-[282px] w-[195px]"
          />
        </div>
      </article>
    </section>
  );
}

export default HealthOutcomes;
