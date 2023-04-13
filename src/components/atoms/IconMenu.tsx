import React from 'react';

function IconMenu(props: {
  size?: number;
  color?: string;
  className?: string;
}) {
  const size = props.size || 27.032;
  const color = props.color || 'black';
  const { className } = props;

  const width = size;
  const height = (size / 27.032) * 16.754;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      fill={color}
      viewBox="0 0 27.032 16.754"
    >
      <g id="menu_icon" transform="translate(-15.968 -63.313)">
        <rect
          id="Rectangle_27"
          data-name="Rectangle 27"
          width="27.032"
          height="1.634"
          transform="translate(15.968 78.433)"
          fill="#868686"
        />
        <rect
          id="Rectangle_28"
          data-name="Rectangle 28"
          width="27.032"
          height="1.634"
          transform="translate(15.968 71.028)"
          fill="#868686"
        />
        <rect
          id="Rectangle_29"
          data-name="Rectangle 29"
          width="27.032"
          height="1.634"
          transform="translate(15.968 71.028)"
          fill="#868686"
        />
        <rect
          id="Rectangle_30"
          data-name="Rectangle 30"
          width="27.032"
          height="1.634"
          transform="translate(15.968 63.313)"
          fill="#868686"
        />
      </g>
    </svg>
  );
}

export default IconMenu;
