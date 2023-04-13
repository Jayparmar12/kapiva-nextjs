import 'glider-js/glider.min.css';

import type { ReactNode } from 'react';
import React, { useRef } from 'react';
import Glider from 'react-glider';

import IconChevronRight from '../atoms/IconChevronRight';

function ArrowContainer(props: {
  hasDots?: boolean;
  slidesToShow?: number;
  slidesToScroll?: number;
  gliderResponsive?: any;
  className?: string;
  children: ReactNode;
  trackClassName?: string;
}) {
  const rightArrowEl = useRef(null);
  // const [isGliderInitialized, setIsGliderInitialized] = useState(false);
  const leftArrowEl = useRef(null);
  // const [isInitialized, setIsInitialized] = React.useState(false);
  // React.useEffect(() => {
  //   setIsInitialized(Boolean(leftArrowEl.current && rightArrowEl.current));
  // }, [leftArrowEl, rightArrowEl]);

  return (
    <>
      {/* {isInitialized && ( */}
      <Glider
        draggable
        hasArrows
        hasDots={props.hasDots}
        className={props.className}
        // onLoad={() => {
        //   setIsGliderInitialized(true);
        // }}
        arrows={{
          prev: leftArrowEl.current,
          next: rightArrowEl.current,
        }}
        slidesToShow={props.slidesToShow}
        slidesToScroll={props.slidesToScroll || 1}
        responsive={props.gliderResponsive}
        skipTrack={true}
      >
        <div className={props.trackClassName}>{props.children}</div>
        {/* <div>{isGliderInitialized ? <>{props.children}</> : <></>}</div> */}
      </Glider>
      {/* )} */}
      <div className="absolute top-1/2 w-full">
        <button
          ref={leftArrowEl}
          type="button"
          className="glider-prev !absolute !-left-0 w-[20px] -translate-y-1/2 !-translate-x-full !py-5 lg:!-left-0 lg:!w-[56px]"
          aria-label="Previous"
        >
          <IconChevronRight className="m-auto h-4 w-2 rotate-180 lg:h-7 lg:w-14" />
        </button>
        <button
          ref={rightArrowEl}
          type="button"
          className="glider-next !absolute !-right-0 w-[20px] -translate-y-1/2 translate-x-full !py-5 lg:!w-[56px] lg:!translate-x-full"
          aria-label="Next"
        >
          <IconChevronRight className="m-auto h-4 w-2 lg:h-7 lg:w-14" />
        </button>
      </div>
    </>
  );
}

export default ArrowContainer;
