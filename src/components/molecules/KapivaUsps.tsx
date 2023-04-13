import React from 'react';

import { GenerateSrcset } from '@/utils/helperFunctions';
import type { UspsType } from '@/utils/types/types';

function KapivaUsps(props: { usps: UspsType[] }) {
  return (
    <div className="relative">
      <ul className="kp-container flex flex-wrap justify-center md:max-w-[500px] lg:max-w-[800px]">
        {props.usps.map((usp) => (
          <li
            className="max-w-[25%] flex-[0_0_25%] px-[5px] md:px-[15px] "
            key={usp.id}
          >
            <div className="mb-1.5 flex h-auto min-h-[60px] items-center justify-center lg:mb-0 lg:min-h-[114px]">
              <img
                src={usp.image}
                srcSet={GenerateSrcset(usp.image, [50, 80, 100], true)}
                sizes="(max-width:1023px) 50px,(max-width:1700px) 80px,100px"
                className="h-auto w-full max-w-[42px] lg:max-w-[50px]"
                alt={usp.title}
                loading="lazy"
                // height={}
                // width={}
              />
            </div>
            <p className="w-full text-center text-[10px] font-bold md:mx-auto md:max-w-[85%] lg:text-[length:var(--pdp-text-base)]">
              {usp.title}
            </p>
          </li>
        ))}
      </ul>
      <div className="absolute bottom-0 right-0 z-[-1] hidden w-[150px] lg:block 2xl:w-[175px]">
        <img
          src="https://4wdpmdxj.cdn.imgeng.in/s-5h8rqg02f8/content/images/pdppageimage/producticonflowerimage.png/w_auto,150/"
          alt="usps bottom-right flower"
          loading="lazy"
          className="h-auto max-w-full"
          srcSet={GenerateSrcset(
            'https://4wdpmdxj.cdn.imgeng.in/s-5h8rqg02f8/content/images/pdppageimage/producticonflowerimage.png',
            [150, 175, 200],
            true,
            100
          )}
          sizes="(min-width:1024px) 150px,(min-width:1300px) 175px,200"
          height={778}
          width={524}
        />
      </div>
    </div>
  );
}

export default KapivaUsps;
