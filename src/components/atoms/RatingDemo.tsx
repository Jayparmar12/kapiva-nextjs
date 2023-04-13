/* eslint-disable global-require */
import React from 'react';

function RatingDemo() {
  return (
    <div className="flex flex-row gap-x-[8px]">
      <img
        // eslint-disable-next-line global-require
        src={require('../../../public/assets/images/stars/star_full.png?webp')}
        className="h-[16px] w-[16px]"
        alt=""
      />
      <img
        // eslint-disable-next-line global-require
        src={require('../../../public/assets/images/stars/star_full.png?webp')}
        className="h-[16px] w-[16px]"
        alt=""
      />
      <img
        // eslint-disable-next-line global-require
        src={require('../../../public/assets/images/stars/star_full.png?webp')}
        className="h-[16px] w-[16px]"
        alt=""
      />
      <img
        // eslint-disable-next-line global-require
        src={require('../../../public/assets/images/stars/star_full.png?webp')}
        className="h-[16px] w-[16px]"
        alt=""
      />
      <img
        // eslint-disable-next-line global-require
        src={require('../../../public/assets/images/stars/star_half.png?webp')}
        className="h-[16px] w-[16px]"
        alt=""
      />
    </div>
  );
}

export default RatingDemo;
