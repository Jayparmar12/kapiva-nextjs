import React, { useEffect, useRef } from 'react';

import IconClose from '../atoms/IconClose';
import IconSearch from '../atoms/IconSearch';

function SiteSearchV2(props: {
  className?: string;
  showSearchBar?: boolean;
  setShowSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const searchRef = useRef(null);
  useEffect(() => {
    if (props.showSearchBar === true) {
      searchRef.current.focus();
    }
  }, [props.showSearchBar]);
  return (
    <div
      className={`flex lg:ml-auto lg:max-w-[320px] h-[40px] w-full rounded-lg bg-[color:var(--cr-light-3)] ${props.className}`}
    >
      <span className="flex items-center justify-center pl-2 outline-0 lg:order-2 lg:pr-2">
        <IconSearch className="h-auto w-[19px] lg:w-[22px]"></IconSearch>
      </span>
      <input
        type="text"
        className="grow bg-[color:var(--cr-light-3)] indent-3 text-[length:var(--text-sm)] tracking-[1.2px] outline-none lg:rounded-lg lg:text-[length:var(--text-2sm)]"
        placeholder="Product or usage"
        onChange={() => {}}
        ref={searchRef}
      />
      <button
        onClick={() => props.setShowSearchBar(false)}
        className="flex shrink grow-0 items-center justify-center pr-2 lg:hidden"
      >
        <IconClose />
      </button>
    </div>
  );
}

export default SiteSearchV2;
