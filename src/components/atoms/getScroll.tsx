import { throttle } from 'lodash';
import React, { createContext, useEffect, useRef, useState } from 'react';

function useScroll() {
  const [showMenuOrFooter, setShowMenuOrFooter] = useState(true);
  const oldScrollY = useRef(0);

  const controlDirection = () => {
    const { height } = window.screen;

    let isOutsideFirstFold = false;
    let isScrollingDownward = false;

    if (window.scrollY > height) {
      isOutsideFirstFold = true;
    } else {
      isOutsideFirstFold = false;
    }

    if (window.scrollY >= oldScrollY.current) {
      isScrollingDownward = true;
    } else {
      isScrollingDownward = false;
    }
    // console.log(
    //   { isScrollingDownward, isOutsideFirstFold },
    //   window.scrollY,
    //   oldScrollY.current
    // );

    if (isOutsideFirstFold && isScrollingDownward) {
      setShowMenuOrFooter(false);
    } else if (isOutsideFirstFold && !isScrollingDownward) {
      setShowMenuOrFooter(true);
    } else if (!isOutsideFirstFold) {
      setShowMenuOrFooter(true);
    }

    oldScrollY.current = window.scrollY;
  };

  useEffect(() => {
    const throttledFunction = throttle(controlDirection, 500);
    window.addEventListener('scroll', throttledFunction);
    return () => {
      window.removeEventListener('scroll', throttledFunction);
    };
  }, []);
  return { showMenuOrFooter };
}

export const ScrollContext = createContext<{ show: boolean } | null>(null);

function ScrollContextComponent({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  const { showMenuOrFooter } = useScroll();
  return (
    <ScrollContext.Provider value={{ show: showMenuOrFooter }}>
      {children}
    </ScrollContext.Provider>
  );
}

export default ScrollContextComponent;
