import 'glider-js/glider.min.css';

import React, { useRef } from 'react';
import Glider from 'react-glider';

import type { Category } from '@/utils/types/types';

import IconChevronRight from '../atoms/IconChevronRight';

const gliderResponsive = [
  {
    breakpoint: 320,
    settings: {
      slidesToShow: 3.9,
      slidesToScroll: 1.05,
    },
  },
  {
    breakpoint: 425,
    settings: {
      slidesToShow: 4.9,
      slidesToScroll: 1.05,
    },
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 7,
      slidesToScroll: 1.05,
    },
  },
];

function CategoryNavMenuV2({ categories }: { categories: Category[] }) {
  const rightArrowEl = useRef(null);
  const leftArrowEl = useRef(null);
  const [isInitialized, setIsInitialized] = React.useState(false);
  React.useEffect(() => {
    setIsInitialized(Boolean(leftArrowEl.current && rightArrowEl.current));
  }, [leftArrowEl, rightArrowEl]);

  return (
    <section className="relative flex h-[76px] w-full items-center overflow-y-hidden px-5 font-jost font-medium lg:hidden">
      {isInitialized && (
        <Glider
          draggable
          hasArrows
          hasDots={false}
          arrows={{
            prev: leftArrowEl.current,
            next: rightArrowEl.current,
          }}
          slidesToShow={2.9}
          slidesToScroll={1.05}
          responsive={gliderResponsive}
          skipTrack={true}
        >
          <div style={{ display: 'flex' }}>
            {categories.map((item) => (
              <article
                className="box-content !min-w-[70px] border-r-[0.5px] border-r-[color:var(--cr-primary)] px-[2px] last:border-r-0"
                key={item.id}
              >
                <a
                  href={`https://kapiva.in${item.category_url}`}
                  className="flex flex-col items-center justify-center"
                >
                  <div className="mb-1">
                    <img
                      src={`${item.image}?imgeng=/w_72/f_webp/`}
                      className={`aspect-square h-auto w-[36px] ${
                        item?.rounded === false
                          ? `rounded-none`
                          : `rounded-full`
                      }`}
                      height={36}
                      width={36}
                      alt=""
                    />
                  </div>
                  <p className="break-words text-center text-[length:var(--text-sm)] font-normal leading-[1.1] tracking-[0.24px]">
                    {item.name}
                  </p>
                </a>
              </article>
            ))}
          </div>
        </Glider>
      )}
      <button
        ref={leftArrowEl}
        type="button"
        className="glider-prev !absolute !left-0 !top-1/2 !translate-x-1/2 !-translate-y-1/2 "
        aria-label="Previous"
      >
        <IconChevronRight className="m-auto h-4 w-2 rotate-180 lg:h-7 lg:w-14" />
      </button>
      <button
        ref={rightArrowEl}
        type="button"
        className="glider-next !absolute !right-0 !top-1/2 !-translate-x-1/2 !-translate-y-1/2"
        aria-label="Next"
      >
        <IconChevronRight className="m-auto h-4 w-2 lg:h-7 lg:w-14" />
      </button>
    </section>
  );
}

export default CategoryNavMenuV2;
