import type { ReactNode } from 'react';
import React from 'react';

function ProductButton(props: {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick: () => void;
}) {
  const { onClick, className } = props;

  return (
    <button
      disabled={props.disabled}
      onClick={onClick}
      className={`flex items-center h-full justify-center py-2.5 px-4 font-jost text-xl font-black leading-none text-white ${className}`}
    >
      {props.children}
    </button>
  );
}

export default ProductButton;
