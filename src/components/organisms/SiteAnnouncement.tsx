import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';

import IconClose from '../atoms/IconClose';

function SiteAnnouncement({
  topText,
  bottomText,
  bottomLink,
}: {
  topText?: string;
  bottomText?: string;
  bottomLink?: string;
}) {
  const [showAnnoucement, setShowAnnoucement] = useState(true);
  return (
    <section
      className={`relative h-[46px] md:h-[54px] flex-col justify-start bg-[color:var(--cr-primary-dark)] py-2.5 text-center leading-none ${
        showAnnoucement ? `flex` : `hidden`
      }`}
    >
      <div></div>
      <div className="mb-1 text-[length:var(--text-2xs)] font-semibold tracking-[0.44px] text-[color:var(--cr-white)] md:text-[length:var(--text-2sm)] lg:tracking-[0.56px]">
        {topText}
      </div>
      <Marquee
        gradient={false}
        speed={80}
        className="overflow-hidden text-center font-bold leading-none"
      >
        <a
          href={bottomLink}
          className="text-[length:var(--text-sm)] tracking-[1.76px] text-[color:var(--cr-warning)] hover:text-[color:var(--cr-white)] md:text-[length:var(--text-base)] md:tracking-[2.4px]"
        >
          {bottomText}
        </a>
      </Marquee>
      <button
        onClick={() => setShowAnnoucement(false)}
        className="absolute top-[50%] right-[0%] z-20 -translate-y-1/2 lg:right-[5%]"
      >
        <IconClose color="#fff" />
      </button>
      <div className="absolute top-0 right-0 z-10 h-full w-[20px] bg-[color:var(--cr-primary-dark)] shadow-[0_-10px_10px_10px_#59702F] lg:w-[7%]"></div>
      <div className="absolute top-0  left-0 z-10 h-full w-[20px] bg-[color:var(--cr-primary-dark)] shadow-[0_10px_10px_10px_#59702F] lg:w-[7%]"></div>
    </section>
  );
}

export default SiteAnnouncement;
