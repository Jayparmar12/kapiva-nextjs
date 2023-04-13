import React from 'react';

function IconPhone(props: { size?: number; className?: string }) {
  const { className } = props;
  const size = props.size || 32.477;
  const width = size;
  const height = (size / 32.477) * 30.348;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      className={className}
      viewBox="0 0 32.477 30.348"
    >
      <g id="Group_95" data-name="Group 95" transform="translate(0.502 0.502)">
        <path
          id="Path_13"
          data-name="Path 13"
          d="M240.043,5109.5c.991-.088,1.865.457,2.343,1.814.612,1.74,1.36,3.435,2.1,5.126a2.213,2.213,0,0,1-.318,2.411c-.476.618-.987,1.209-1.505,1.793a1.4,1.4,0,0,0-.14,1.851,21.372,21.372,0,0,0,9.694,8.655c1.653.729,2.167.61,3.238-.845.478-.65.932-1.32,1.437-1.95a1.375,1.375,0,0,1,1.987-.467c1.976.935,3.935,1.9,5.911,2.839a1.462,1.462,0,0,1,.844,1.524c-.054,4.212-3.3,6.054-6.265,6.511a12.451,12.451,0,0,1-5.815-.858c-6.435-2.1-11.357-6.215-15.31-11.6a20.337,20.337,0,0,1-3.761-7.05,8.641,8.641,0,0,1,2.175-8.519A4.158,4.158,0,0,1,240.043,5109.5Z"
          transform="translate(-234.158 -5109.492)"
          fill="none"
          stroke="#000"
          strokeWidth="1"
        />
      </g>
    </svg>
  );
}

export default IconPhone;
