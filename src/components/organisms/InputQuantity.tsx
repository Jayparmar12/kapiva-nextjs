// import { debounce } from 'lodash';
// import React, { useMemo } from 'react';

// import IconMinus from '../atoms/IconMinus';
// import IconPlus from '../atoms/IconPlus';

// function InputQuantity(props) {
//   const { defaultValue } = props;
//   const [quantity, setQuantity] = React.useState(defaultValue);

//   function onChange(value) {
//     if (typeof props.onChange === 'function') {
//       props.onChange(value);
//     }
//   }

//   const debouncedOnChange = useMemo(() => debounce(onChange, 500), []);

//   function increment() {
//     setQuantity(quantity + 1);
//     debouncedOnChange(quantity + 1);
//   }

//   function decrement() {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//       debouncedOnChange(quantity - 1);
//     }
//   }

//   function onChangeLocal(e) {
//     const value = parseInt(e.target.value, 10);
//     setQuantity(value);
//     debouncedOnChange(value);
//   }

//   return (
//     <div className="relative mt-1 flex h-6 w-20 flex-row rounded-lg bg-transparent">
//       <button
//         onClick={decrement}
//         className="h-full w-8 cursor-pointer rounded-l border border-r-0 bg-transparent pl-0.5 text-sm text-gray-600 outline-none hover:border-green-900 hover:bg-green-900 hover:text-white"
//       >
//         <span className="m-auto leading-none hover:text-white">
//           <IconMinus />
//         </span>
//       </button>
//       <input
//         value={quantity}
//         onChange={onChangeLocal}
//         type="number"
//         min="1"
//         className="flex w-full items-center border border-x-0 bg-transparent text-center font-semibold leading-none text-gray-700 outline-none hover:text-black focus:text-black focus:outline-none"
//         name="custom-input-number"
//       />
//       <button
//         onClick={increment}
//         className="h-full w-8 cursor-pointer rounded-r border border-l-0 bg-transparent pr-0.5 text-sm text-green-800 hover:border-green-900 hover:bg-green-900 hover:text-white"
//       >
//         <span className="m-auto leading-none hover:text-white">
//           <IconPlus />
//         </span>
//       </button>
//     </div>
//   );
// }

// export default InputQuantity;

import React from 'react';

import IconMinus from '../atoms/IconMinus';
import IconPlus from '../atoms/IconPlus';
import { useQuantity } from '../atoms/useQuantity';

function InputQuantity(props) {
  const { onChangeLocal, increment, decrement, quantity } = useQuantity(props);
  return (
    <div className="relative mt-0 flex h-6 w-20 flex-row overflow-hidden rounded-md border-[0.14px] border-[color:var(--cr-secondary)] bg-transparent text-lg lg:h-10 lg:w-[140px] lg:rounded-lg lg:border-[0.5px]">
      <button
        onClick={decrement}
        className="h-full w-8 cursor-pointer bg-transparent pl-0.5 text-gray-600 outline-none hover:border-green-900 hover:bg-green-900 hover:text-white lg:w-10 lg:pl-1"
      >
        <span className="m-auto leading-none hover:text-white">
          <IconMinus />
        </span>
      </button>
      <input
        value={quantity}
        onChange={onChangeLocal}
        disabled
        min="1"
        className="flex w-full items-center border border-x-0 bg-transparent text-center text-[length:var(--text-base)] font-normal leading-none text-gray-700 outline-none hover:text-black focus:text-black focus:outline-none disabled:text-[color:var(--cr-black)] lg:text-[length:var(--heading-md)]"
        name="custom-input-number"
      />
      <button
        onClick={increment}
        className="h-full w-8 cursor-pointer bg-transparent pr-0.5 text-sm text-green-800 outline-0 hover:border-green-900 hover:bg-green-900 hover:text-white lg:w-10 lg:pr-1"
      >
        <span className="m-auto leading-none hover:text-white">
          <IconPlus />
        </span>
      </button>
    </div>
  );
}

export default InputQuantity;
