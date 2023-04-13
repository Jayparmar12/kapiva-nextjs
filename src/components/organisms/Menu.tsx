import React, { useState } from 'react';

import { appStore } from '@/stores/appStore';
import type { MenuItemType } from '@/utils/types/types';

import IconChevronRight from '../atoms/IconChevronRight';

function Menu({ menu, level = 0 }: { menu: MenuItemType[]; level?: number }) {
  const { isLoggedIn } = appStore();

  const [current, setCurrent] = useState(level === 0 ? 0 : -1);
  return (
    <>
      {menu.map((item, id) => (
        <li
          key={id}
          className={`${item?.items !== undefined && `cursor-pointer`}  ${
            level === 0 && `relative`
          }
          ${
            level === 0 && isLoggedIn === true
              ? item?.showWhenLoggedIn === false && `hidden`
              : item?.showWhenLoggedIn === true && `hidden`
          }
          list-none ${
            level !== 0 && `border-b`
          } border-[#dce9d7] pt-[8px] pb-[9px] text-[length:var(--text-base)] lg:text-[length:var(--text-lg)] font-semibold`}
        >
          <a href={item?.items === undefined ? item.url : null}>
            <span
              onClick={
                item?.items !== undefined
                  ? () => {
                      setCurrent(id);
                    }
                  : () => {}
              }
              className="flex items-center justify-between gap-2"
            >
              {item.label}
              {item.items !== undefined &&
                (id === current ? (
                  <button className="">
                    <IconChevronRight className="h-[15px] w-auto rotate-90" />
                  </button>
                ) : (
                  <button className="">
                    <IconChevronRight className="h-[15px]  w-auto" />
                  </button>
                ))}
            </span>
          </a>
          {id === current && item.items !== undefined && (
            <ul
              className={`px-5 ${
                level === 1 &&
                `bg-white kp-animate-left absolute z-20 lg:top-0 top-[40px] w-full left-0 h-[100vh] pb-[20vh]`
              }`}
            >
              <>
                {level === 1 && (
                  <li className="mb-5 flex items-center justify-between text-2xl font-bold">
                    <button className="p-2" onClick={() => setCurrent(-1)}>
                      <IconChevronRight className="h-[20px] w-auto rotate-180" />
                    </button>
                    <a
                      href={`https://kapiva.in/${item.label}`}
                    >{`All ${item.label}`}</a>
                  </li>
                )}
                <Menu level={level + 1} menu={item.items} />
              </>
            </ul>
          )}
        </li>
      ))}
    </>
  );
}

export default Menu;
// {
//   /* {item.items !== undefined && (
//             <div onClick={() => setCurrent(-1)}>X</div>
//           )} */
// }

// import React from 'react';

// import { menuData } from '@/utils/menuData';

// import MenuItem from './MenuItem';

// function Menu() {
//   return (
//     <div className="absolute left-0 top-full z-50 box-content h-[calc(100vh-56px)] w-full overflow-y-scroll bg-red-300 pb-[56px] lg:left-auto lg:right-0 lg:w-[30%] ">
//       <div className="p-5">
//         {menuData.map((item, id) => (
//           <div key={id} className="relative">
//             <MenuItem menu={item} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Menu;
