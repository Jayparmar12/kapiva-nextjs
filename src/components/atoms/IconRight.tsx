import React from 'react';

function IconRight(props: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}

export default IconRight;
