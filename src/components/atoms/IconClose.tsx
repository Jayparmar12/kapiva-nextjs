import React from 'react';

function IconClose(props: {
  size?: number;
  color?: string;
  className?: string;
}) {
  const size = props.size || 24;
  const color = props.color || '#333333';

  const width = size;
  const height = size;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      className={props.className}
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}

export default IconClose;
