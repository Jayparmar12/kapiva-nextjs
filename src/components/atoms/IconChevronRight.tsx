import React from 'react';

function IconChevronRight(props: { className?: string; fill?: string }) {
  return (
    <svg
      preserveAspectRatio="xMidYMid"
      width="17.906"
      height="31.91"
      className={props.className}
      viewBox="0 0 17.906 31.91"
      fill={props.fill || 'black'}
    >
      <path d="M0.995,31.924 C0.730,31.924 0.466,31.818 0.270,31.608 C-0.106,31.207 -0.086,30.576 0.315,30.200 L15.456,15.974 L0.315,1.748 C-0.086,1.372 -0.106,0.741 0.270,0.340 C0.645,-0.063 1.275,-0.083 1.676,0.294 L17.590,15.247 C17.791,15.435 17.905,15.699 17.905,15.974 C17.905,16.250 17.791,16.513 17.590,16.702 L1.676,31.654 C1.484,31.834 1.239,31.924 0.995,31.924 Z"></path>
    </svg>
  );
}

export default IconChevronRight;
