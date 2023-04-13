import React from 'react';

function IconDelete(props: { size?: number; color?: string }) {
  const size = props.size || 24;
  const color = props.color || '#333333';

  const width = size;
  const height = size;

  return (
    <svg
      data-v-7e3c15b2=""
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      stroke={color}
      className="h-6 w-6"
    >
      <path
        data-v-7e3c15b2=""
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      ></path>
    </svg>
  );
}

export default IconDelete;
