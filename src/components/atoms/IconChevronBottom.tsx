import React from 'react';

function IconChevronBottom(props: {
  className?: string;
  strokeColor?: string;
}) {
  return (
    <svg
      width="24.53"
      height="12.795"
      viewBox="0 0 24.53 12.795"
      className={props.className}
    >
      <path
        id="down_arrow_faq"
        d="M354.048,6470.5l-12,12-12-12"
        transform="translate(-329.783 -6470.235)"
        fill="none"
        stroke={props.strokeColor || `#364d2e`}
        strokeWidth="0.75"
      ></path>
    </svg>
  );
}

export default IconChevronBottom;
