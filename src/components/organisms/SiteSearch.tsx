import React, { useState } from 'react';

import IconSearch from '../atoms/IconSearch';

function SiteSearchV2(props: { className?: string }) {
  const className = props.className || '';
  const [formVisible, setFormVisible] = useState(false);
  const style = {
    backgroundColor: '#F2F1EB',
    borderRadius: '3px',
    color: '#B3B3B3',
    minWidth: '100px',
    maxWidth: '320px',
  };

  return (
    <form
      action=""
      style={style}
      className={`relative leading-none ${
        !formVisible
          ? `!bg-transparent lg:!bg-[#F2F1EB]`
          : `bg-[#F2F1EB] lg:!bg-[#F2F1EB]`
      } box-border w-full ${className}`}
    >
      <input
        className={`invisible overflow-hidden transition-opacity duration-150 ease-linear opacity-0 lg:opacity-100 ${
          formVisible && `!visible opacity-100`
        } w-full bg-transparent py-1 pl-2 pr-8 font-jost text-[11px] font-light outline-none lg:visible lg:py-2 lg:text-[16px]`}
        type="search"
        placeholder="search by product, usage and concern etc"
      />
      {/* this button is for handling actions and by default hidden on mobile and visible on desktop */}
      <button
        type="button"
        onClick={() => {}}
        className={`absolute top-1/2 right-0 mr-2 hidden ${
          formVisible && `!block`
        } -translate-y-1/2 lg:block`}
      >
        <IconSearch className="h-auto w-[19px] text-black lg:w-[22px]"></IconSearch>
      </button>
      {/* this button is for managing visibility of input form (for smaller devices it would be visible and for larger devices it would be hidden) */}
      {/* on click of this button state will be changed and which will enable the other button */}
      <button
        type="button"
        onClick={!formVisible ? () => setFormVisible(true) : () => {}}
        className={`absolute ${
          formVisible && `!hidden`
        } top-1/2 right-0 mr-2 -translate-y-1/2 lg:hidden`}
      >
        <IconSearch className="h-auto w-[19px]  lg:w-[22px]"></IconSearch>
      </button>
    </form>
  );
}

export default SiteSearchV2;
