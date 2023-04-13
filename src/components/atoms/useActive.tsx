import { useState } from 'react';

function useActive() {
  const [active, setActive] = useState(-1);
  const handleActive = (id: number) => {
    if (id === active) {
      setActive(-1);
    } else {
      setActive(id);
    }
  };
  return { active, handleActive };
}

export default useActive;
