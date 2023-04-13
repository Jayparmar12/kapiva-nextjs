import 'glider-js/glider.min.css';

import React from 'react';
import Glider from 'react-glider';

import ProductComboItem from '../molecules/ProductComboItem';

function ProductComboSlider(props) {
  const { productVariants, /* variant, */ setVariant } = props;

  return (
    <>
      <section className="flex flex-col items-center gap-y-4   font-jost">
        <div className="flex justify-center gap-1 text-lg">
          <span className="font-light">POPULAR</span>
          <span className="font-black">COMBOS</span>
        </div>
        <div className="m-auto max-w-[100%] ">
          <Glider
            slidesToShow={'auto'}
            slidesToScroll={'auto'}
            draggable
            hasDots
            className="flex"
          >
            {productVariants.map((o) => (
              // <pre>{JSON.stringify(o, null, 2)}</pre>
              <ProductComboItem
                image={'banner_img.png'}
                title={`${o.node?.options?.edges[0]?.node?.values?.edges[0]?.node?.label} ---- ${o.node?.entityId}`}
                packageSize={'4 Bottles'}
                regularPrice={1299}
                salePrice={900}
                ecoText={'₹3 / tablet'}
                tag="Best Seller"
                isSelected={true}
                key={o.node.entityId}
                onClick={() => setVariant(o.node?.entityId)}
              ></ProductComboItem>
            ))}
          </Glider>
        </div>
      </section>
    </>
  );
}

export default ProductComboSlider;
