import React from 'react';

function Modal(props: { showModal?: boolean; children?: React.ReactNode }) {
  return props.showModal === true ? (
    <div className="bg-[rgba(255_255_255_0.9)] fixed inset-x-0 top-0 z-[60] h-[50%] w-full backdrop-blur-sm">
      <div className="m-auto mt-[50px] w-[90%] rounded-lg bg-[color:var(--cr-white)] p-5">
        {props.children}
      </div>
    </div>
  ) : null;
}

export default Modal;
