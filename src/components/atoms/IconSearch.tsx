import React from 'react';

function IconMenu(props: { size?: number; className?: string }) {
  const size = props.size || 12;
  const { className } = props;
  const width = size;
  const height = size;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="currentColor"
      className={className}
      viewBox="0 0 12.001 11.988"
    >
      <path
        id="search_icon"
        d="M310.587,73.718a4.316,4.316,0,1,1,.559-.546l4.221,4.22-.568.6Zm.763-3.342a3.606,3.606,0,1,0-3.615,3.593A3.611,3.611,0,0,0,311.35,70.376Z"
        transform="translate(-303.366 -66)"
        fill="#333"
      />
    </svg>
  );
}

export default IconMenu;
