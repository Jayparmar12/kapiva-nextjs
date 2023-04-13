import 'glider-js/glider.min.css';

import React, {
  forwardRef,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { ChooseYourTherapyContext } from '@/utils/contexts';

import IconDownTraingle from '../atoms/IconDownTraingle';
import IconFilter from '../atoms/IconFilter';
import IconRight from '../atoms/IconRight';
import { FontLoadedContext } from '../molecules/FontLoadedContext';

const Category = forwardRef(function Category(
  props: {
    title: string;
    img_url: string;
    selected: boolean;
    onClick: any;
    fontLoaded: boolean;
  },
  ref: any
) {
  return (
    <div
      ref={ref}
      onClick={props.onClick}
      className={`flex ${
        props.selected === true ? `bg-[color:var(--cr-primary-o2)]` : ``
      }  items-center gap-1 cursor-pointer rounded-md border border-[color:var(--cr-primary)] h-[34px] px-1.5 lg:h-[63px] lg:gap-2 lg:border`}
    >
      {props.selected === true && (
        <div className="ml-0 mr-auto h-4 w-4 rounded-bl-md border-0 lg:h-6 lg:w-6">
          <IconRight />
        </div>
      )}
      <div className="hidden lg:block">
        <img
          height={43}
          width={43}
          loading="lazy"
          // eslint-disable-next-line global-require, import/no-dynamic-require
          src={props.img_url}
          alt=""
          className="m-auto aspect-[1] rounded-full object-center"
        />
      </div>

      <p
        className={`${
          props.fontLoaded === false
            ? `font-not-loaded-category`
            : `text-[length:var(--text-2sm)]`
        }
        font-normal lg:text-[length:var(--text-lg)]`}
      >
        {props.title}
      </p>
    </div>
  );
});

function isOverflown(element) {
  return element.scrollHeight > element.clientHeight;
}

function SelectConcern() {
  const { categories, selectedCategory, handleCategoryChange } = useContext(
    ChooseYourTherapyContext
  );
  const { fontLoaded } = useContext(FontLoadedContext);
  const gap = useRef(7);
  const [overflowing, setOverflow] = useState(true);
  const showMoreRef = useRef();
  const parentRef = useRef();
  const allButtonsRef = useRef([]);
  useLayoutEffect(() => {
    setOverflow(isOverflown(parentRef?.current));
  });

  useLayoutEffect(() => {
    const allElements = allButtonsRef?.current || null;
    const parent = parentRef?.current || null;
    const showMorebtn = showMoreRef?.current || null;
    const extremeElement = parent.childNodes[parent.children.length - 1];
    extremeElement.insertAdjacentElement('afterEnd', showMoreRef.current);

    if (
      overflowing === true &&
      allElements !== null &&
      parent !== null &&
      showMorebtn !== null
    ) {
      let lastElement = null;
      allElements.forEach((element) => {
        if (parent.clientHeight > element.offsetTop) {
          lastElement = element;
        }
      });
      if (
        parent.clientWidth -
          (lastElement.offsetWidth + lastElement.offsetLeft + gap.current) >
        showMorebtn.offsetWidth
      ) {
        // console.log(lastElement);
        // console.log('Yes possible Free Space available');
        for (let index = 0; index < parent.children.length; index += 1) {
          if (lastElement.innerText === parent.childNodes[index].innerText) {
            parent.childNodes[index].insertAdjacentElement(
              'afterEnd',
              showMoreRef.current
            );
            break;
          }
        }
      } else {
        // console.log('Last Elemnt ', lastElement);
        // console.log('Not possible No Free Space available');
        for (let index = 0; index < parent.children.length; index += 1) {
          if (lastElement.innerText === parent.childNodes[index].innerText) {
            parent.childNodes[index - 1].insertAdjacentElement(
              'afterEnd',
              showMoreRef.current
            );
            break;
          }
        }
      }
    }
  }, [selectedCategory, overflowing, fontLoaded]);
  return (
    <div className="relative mb-5 lg:mb-10">
      <div
        ref={parentRef}
        className={`flex relative ${
          overflowing === true
            ? `max-h-[81px] lg:max-h-[146px] overflow-y-hidden`
            : ``
        } flex-wrap items-center justify-start gap-[7px] lg:gap-x-4 lg:gap-y-[10px]`}
      >
        <p
          className={`flex h-[34px] items-center 
          ${
            fontLoaded === false
              ? `font-not-loaded-section-title`
              : `text-[length:var(--text-sm)] leading-[1.1] tracking-[-0.24]`
          } font-semibold lg:h-[63px] lg:text-[length:var(--text-lg)]`}
        >
          <IconFilter className="mr-[3px] inline h-auto w-2.5 lg:mb-[4px] lg:mr-2.5 lg:w-5" />
          SELECT CONCERN:
        </p>
        <>
          {categories.map((category, id) => (
            <Category
              onClick={() => {
                handleCategoryChange(category.id);
              }}
              key={category.id}
              fontLoaded={fontLoaded}
              ref={function assignRef(el) {
                allButtonsRef.current[id] = el;
              }}
              selected={selectedCategory === category.id}
              img_url={category.image}
              title={category.name}
            />
          ))}
        </>
      </div>
      <div
        ref={showMoreRef}
        onClick={() => {
          setOverflow((prev) => !prev);
        }}
        className={`${
          overflowing === true ? `flex` : `flex md:hidden`
        } max-w-max text-[length:var(--text-sm)] font-medium text-[color:var(--cr-danger-light)] h-[34px] cursor-pointer items-center rounded-md lg:h-[63px] lg:gap-2`}
      >
        See {overflowing === true ? `more` : `less`}
        <IconDownTraingle
          className={overflowing === true ? `rotate-0` : `rotate-180`}
        />
      </div>
    </div>
  );
}

export default SelectConcern;
