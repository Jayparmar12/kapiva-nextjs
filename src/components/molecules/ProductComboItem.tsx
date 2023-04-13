import React from 'react';

function ProductComboItem(props: {
  image: string;
  title: string;
  packageSize?: string;
  regularPrice: number;
  salePrice?: number;
  ecoText?: string;
  tag?: string;
  isSelected?: boolean;
  onClick?: () => void;
}) {
  const {
    image,
    title,
    packageSize,
    regularPrice,
    salePrice,
    ecoText,
    tag,
    isSelected,
    onClick,
  } = props;

  let discount = 0;
  if (salePrice) {
    discount = regularPrice - salePrice;
  }

  // const [selectedVariation, setSelectedVariation] = React.useState(0);

  return (
    <div
      style={{ minWidth: '130px', width: '130px' }}
      className={
        'mx-2 border-2 font-jost ' +
        `${isSelected ? 'border-green-500' : 'border-gray-400'}`
      }
      onClick={onClick}
    >
      <img
        loading="lazy"
        // eslint-disable-next-line global-require, import/no-dynamic-require
        src={require(`../../../public/assets/images/product_main_slider/${image}?webp`)}
        alt=""
        width="130"
        className={
          'aspect-square border-b-2 border-gray-400 ' +
          `${isSelected ? 'border-green-500' : 'border-gray-400'}`
        }
      />
      <div className="p-2">
        <div className="text-[16px] font-black">{title}</div>
        <div className="text-[12px] font-light">{packageSize}</div>

        {salePrice ? (
          <>
            <div className="text-[16px] font-bold">
              ₹ {salePrice.toFixed(2)}
            </div>
            <div className="text-[12px] font-light line-through">
              {regularPrice.toFixed(2)}
            </div>
          </>
        ) : (
          <div className="text-[16px] font-bold">{regularPrice}</div>
        )}

        {discount ? (
          <div className="text-[16px] font-bold">Save ₹ {discount}</div>
        ) : (
          ''
        )}
        <div className="text-[12px] font-light">{ecoText}</div>
      </div>
      {tag ? (
        <div
          className={
            'mt-auto text-center text-white ' +
            `${isSelected ? 'bg-green-500' : 'bg-gray-400'}`
          }
        >
          {tag}
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default ProductComboItem;
