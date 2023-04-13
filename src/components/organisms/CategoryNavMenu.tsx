import React from 'react';

const menuItems = [
  {
    img_url: '/assets/images/categorymenu/skin_care.svg',
    title: 'SKIN CARE',
    category_url: 'https://kapiva.in/skin-food-page/',
  },
  {
    img_url: '/assets/images/categorymenu/hair_care.svg',
    title: 'HAIR CARE',
    category_url: 'https://kapiva.in/solution/hair/',
  },
  {
    img_url: '/assets/images/categorymenu/beauty.svg',
    title: 'BEAUTY',
    category_url: 'https://kapiva.in/weight-management/',
  },
  {
    img_url: '/assets/images/categorymenu/wellness.svg',
    title: 'SEXUAL WELNESS',
    category_url: 'https://kapiva.in/solution/mens-care/',
  },
];

function CategoryNavMenu() {
  return (
    <section className="flex h-14 w-full justify-around  p-2 font-jost text-[10px] font-medium">
      {menuItems.map((item, id) => (
        <React.Fragment key={id}>
          <article className="">
            <a href={item.category_url} className="flex flex-col items-center">
              <img
                src={item.img_url}
                className="aspect-auto h-[25px] w-auto"
                alt=""
              />
              <p>{item.title}</p>
            </a>
          </article>
          <div className="kp-remove-last h-auto w-[0.14px] bg-[#DDDDD9]"></div>
        </React.Fragment>
      ))}
    </section>
  );
}

export default CategoryNavMenu;
