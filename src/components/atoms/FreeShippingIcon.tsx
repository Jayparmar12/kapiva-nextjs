import React from 'react';

function FreeShippingIcon(props: { size?: number }) {
  const size = props.size || 48;

  const width = size;
  const height = (size / 48) * 48;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="svg1400"
      width={width}
      height={height}
      version="1.1"
      viewBox="0 0 47.999998 48.000001"
    >
      <path
        id="free_shipping"
        fill="#aeb797"
        d="M2.9341075 23.952276c0-3.827.018-7.655-.014-11.482a1.518 1.518 0 0 1 1.09-1.607C10.394108 8.3232756 16.767108 5.7552753 23.163108 3.2462753a2.6 2.6 0 0 1 1.737.028c6.364 2.5 12.706 5.0530003 19.058 7.5800007a1.52 1.52 0 0 1 1.111 1.591c-.026 7.553-.041 15.107 0 22.66a2.054 2.054 0 0 1-1.507 2.26c-6.18 2.412-12.32 4.926-18.5 7.338a3.172 3.172 0 0 1-2.113.01c-6.242-2.438-12.448-4.969-18.6840005-7.422a1.81 1.81 0 0 1-1.341-1.957c.04-3.793.016-7.587.016-11.381zm20.0450005 18.619c0-7.236.01-14.31-.034-21.384 0-.281-.453-.686-.781-.819q-8.093-3.269-16.2120005-6.472c-.3-.119-.614-.2-.994-.321v21.786zm2.029 0 18.006-7.2v-21.769c-.356.107-.644.172-.915.279-2.078.82-4.14 1.684-6.237 2.453a1.166 1.166 0 0 0-.863 1.352c.043 1.748.014 3.5.014 5.268h-1.994v-5.46c-2.5.992-4.834 1.96-7.206 2.84a1.1 1.1 0 0 0-.819 1.263c.03 3.489.014 6.978.014 10.467zm6.272-26.554c-.144-.158-.179-.228-.235-.253q-7.708-3.5-15.427-6.9840004a1.07 1.07 0 0 0-.75-.044c-2.664 1.036-5.3170005 2.1000004-8.0690005 3.1920004a3.386 3.386 0 0 0 .432.276q8.1350005 3.272 16.2770005 6.522a1.419 1.419 0 0 0 .947.01c2.267-.882 4.52-1.797 6.825-2.723zm-13.28-8.5480004a2.289 2.289 0 0 0 .293.263q7.668 3.4920004 15.342 6.9720004a.975.975 0 0 0 .666.088c2.288-.9 4.565-1.818 6.951-2.777a3.824 3.824 0 0 0-.369-.213q-8.195-3.2640004-16.394-6.5130007a1.3 1.3 0 0 0-.859-.052c-1.852.703-3.687 1.451-5.63 2.2280003z"
      />
    </svg>
  );
}

export default FreeShippingIcon;
