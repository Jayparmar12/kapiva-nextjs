import 'glider-js/glider.min.css';

import React from 'react';

function ProductVariants(props) {
  const { productVariants, variant, setVariant, productId } = props;
  return (
    <section className="mb-[16px] lg:mb-5">
      <div className="flex flex-col items-start gap-2.5">
        {productVariants.map((item) => (
          <div key={item.node?.entityId}>
            <input
              variant-id={item.node?.entityId}
              className="kp-radio-input"
              type="radio"
              disabled={!item.node?.inventory?.isInStock}
              id={`id-${item.node?.entityId}`}
              name={`variant-[${productId}]`}
              onChange={(event) => setVariant(event.target?.value)}
              value={item.node?.entityId}
              defaultChecked={
                variant === item.node?.entityId &&
                item.node?.inventory?.isInStock
              }
            ></input>
            <label
              className="kp-radio-label cursor-pointer text-[length:var(--pdp-text-2sm)] font-normal leading-[1.3] text-[#333] lg:text-[length:var(--pdp-text-lg)]"
              htmlFor={`id-${item.node?.entityId}`}
            >
              {
                item.node?.options?.edges[0]?.node?.values?.edges[0]?.node
                  ?.label
              }
            </label>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductVariants;
