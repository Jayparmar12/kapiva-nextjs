import React from 'react';

function Badge(props: { img_url: string; title: string }) {
  return (
    <div className="pointer-events-none mb-[5px]">
      <div className="mb-[5px]">
        <img
          src={props.img_url}
          alt={props.title}
          loading="eager"
          width={29}
          height={22}
          className="m-auto h-auto max-w-[30px] md:max-w-[35px]"
        />
      </div>
      <p className="w-[30px] text-center text-[length:var(--pdp-text-xs)] font-medium leading-[0.85] tracking-[0] md:text-[length:var(--pdp-text-2xs)]">
        {props.title}
      </p>
    </div>
  );
}

export default Badge;
