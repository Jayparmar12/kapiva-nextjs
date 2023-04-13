// import 'glider-js/glider.min.css';

// import React, { useContext } from 'react';

// import { ChooseYourTherapyContext } from '@/utils/contexts';

// import styles from '../../styles/ChooseYourTherapy.module.css';
// import ArrowContainer from './ArrowContainer';

// function SubCategory({
//   title,
//   last_one,
//   selected,
//   onClick,
// }: {
//   title: string;
//   last_one: boolean;
//   onClick: any;
//   selected: boolean;
// }) {
//   return (
//     <div
//       onClick={onClick}
//       className={`relative !min-w-[80px] flex items-center text-center leading-[1.16] lg:leading-[1.25] mb-1 px-3 lg:px-8 ${
//         last_one === false ? `border-r-[0.5px]` : ``
//       } border-[#C97B5A] font-jost font-black ${
//         selected === true
//           ? `text-center text-black  ${styles.kpSubCategoryTitleActive}`
//           : `  text-[#B9B9B9] ${styles.kpSubCategoryTitle} `
//       }`}
//     >
//       {title}
//       {selected === true && (
//         <div className="absolute bottom-0 m-auto h-[3px] w-[60%] translate-y-full bg-[#C97B5A] lg:h-[6px]"></div>
//       )}
//     </div>
//   );
// }

// const gliderResponsive = [
//   {
//     breakpoint: 767,
//     settings: {
//       slidesToShow: 6,
//       slidesToScroll: 1,
//     },
//   },
//   {
//     breakpoint: 1024,
//     settings: {
//       slidesToShow: 4,
//       slidesToScroll: 1,
//     },
//   },
//   {
//     breakpoint: 1280,
//     settings: {
//       slidesToShow: 5,
//       slidesToScroll: 1,
//     },
//   },
// ];
// function TherapySubCategory() {
//   const { subCategories, selectedSubCategory, handleSubCategoryChange } =
//     useContext(ChooseYourTherapyContext);
//   return (
//     <div className="relative m-auto mb-3 max-w-[100%] lg:mb-7">
//       <ArrowContainer gliderResponsive={gliderResponsive} slidesToShow={2.6}>
//         {subCategories.map((item, id) => (
//           <SubCategory
//             title={item.name}
//             key={item.id}
//             onClick={() => handleSubCategoryChange(item.id)}
//             selected={selectedSubCategory === item.id}
//             last_one={id === subCategories.length - 1}
//           />
//         ))}
//       </ArrowContainer>
//     </div>
//   );
// }

// export default TherapySubCategory;
import React from 'react';

function TherapySubCategory() {
  return <div>TherapySubCategory</div>;
}

export default TherapySubCategory;
