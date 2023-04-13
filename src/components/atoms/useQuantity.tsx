import { debounce } from 'lodash';
import React, { useMemo } from 'react';

export function useQuantity(props) {
  const { defaultValue, minValue } = props;
  const [quantity, setQuantity] = React.useState(defaultValue);

  function onChange(value) {
    if (typeof props.onChange === 'function') {
      props.onChange(value);
    }
  }

  const debouncedOnChange = useMemo(() => debounce(onChange, 500), []);

  function increment() {
    setQuantity(quantity + 1);
    debouncedOnChange(quantity + 1);
  }

  function decrement() {
    if (quantity > minValue) {
      setQuantity(quantity - 1);
      debouncedOnChange(quantity - 1);
    }
  }

  function onChangeLocal(e) {
    const value = parseInt(e.target.value, 10);
    setQuantity(value);
    debouncedOnChange(value);
  }

  return { onChangeLocal, increment, decrement, quantity };
}
