import React, { useEffect, useState } from 'react';

import { sortVariants } from '@/utils/helperFunctions';

import ReadMoreLess from '../atoms/ReadMoreLess';
import { calculatediscount } from '../molecules/TherapyProductSliderV2';
import ActionBar from './ActionBar';
import ProductMainSliderV2 from './ProductMainSliderV2';
import ProductPrice from './ProductPrice';
import ProductQuantity from './ProductQuantity';
import ProductVariants from './ProductVariants';

function getProduct(id: string): Promise<any> {
  // console.log(id);
  const storeUrl = 'https://store-5h8rqg02f8.mybigcommerce.com';

  // Use the store's canonical URL which should always resolve
  const graphQLUrl = `${storeUrl}/graphql`;

  // Set up GraphQL query
  const graphQLQuery = `
  query SingleProduct {
    site {
      product (entityId: ${id}) {
        id
        entityId
        name
        path
        sku
        description
        prices (includeTax:true){
          price {
            value
            currencyCode
          }
          salePrice {
            value
            currencyCode
          }
          retailPrice {
            value
            currencyCode
          }
          basePrice {
            value
            currencyCode
          }
        }
        seo {
          pageTitle
          metaDescription
          metaKeywords
        }
        images{
          edges{
              node{
                  url(width:650)
                  urlOriginal
                  altText
                  isDefault
              }
          }
      }
      defaultImage{
        url(width:650)
        urlOriginal
        altText
        isDefault
      }
      inventory{
        isInStock
      }
        variants {
          edges {
            node {
              id
              entityId
              sku
              productOptions {
                edges {
                  node {
                    entityId
                    displayName
                    isRequired
                    isVariantOption
                    ... on CheckboxOption {
                      checkedByDefault
                    }
                    ... on MultipleChoiceOption {
                      values(first: 10) {
                        edges {
                          node {
                          entityId
                          label
                          isDefault
                            ... on SwatchOptionValue {
                              hexColors
                              imageUrl(width: 200)
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              inventory{
                isInStock
              }
              options {
                edges {
                  node {
                    entityId
                    displayName
                    isRequired
                    displayName
                    values {
                      edges {
                        node {
                          entityId
                          label
                        }
                      }
                    }
                  }
                }
              }
              prices (includeTax:true) {
                price {
                  value
                  currencyCode
                }
                salePrice {
                  value
                  currencyCode
                }
                retailPrice {
                  value
                  currencyCode
                }
                basePrice {
                  value
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
  `;

  // Fetch data from the GraphQL Storefront API
  return fetch(graphQLUrl, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_BCGRAPHQL_STOREFRONT_TOKEN}`,
    },
    body: JSON.stringify({ query: graphQLQuery }),
  });
}

function ProductMainContainer(props: {
  product: any;
  shortDescription: string;
  tags: any;
}) {
  const [variants, setVariants] = useState(
    (props.product.variants.edges.length > 1 &&
      sortVariants(props.product.variants.edges, 'sortUnit', 'sortValue')) ||
      []
  );
  const defaultVariant =
    variants.find((x) => {
      return x.node?.productOptions?.edges[0]?.node?.values?.edges[0]?.node
        ?.isDefault;
    })?.node?.entityId || 0;
  const [variant, setVariant] = useState(defaultVariant);
  const [quantity, setQuantity] = useState(1);
  const [isInStock, setIsInStock] = useState(false);
  const [prices, setPrices] = useState(props.product?.prices);
  const images = props.product?.images?.edges || [];
  const productId = props.product?.entityId;
  useEffect(() => {
    (async () => {
      try {
        const response = await getProduct(productId);
        const resJson = await response.json();
        setVariants(
          (resJson.data.site.product.variants.edges.length > 1 &&
            sortVariants(
              resJson.data.site.product.variants.edges,
              'sortUnit',
              'sortValue'
            )) ||
            []
        );
        setIsInStock(resJson.data.site?.product?.inventory?.isInStock);
        // console.log(resJson.data.site?.product?.variants?.edges);
      } catch (err) {
        console.log('Error', err);
      }
      // console.log(resJson.data.site?.product?.variants?.edges);
    })();
  }, []);
  useEffect(() => {
    if (variant !== 0) {
      const variantProduct = variants?.filter((ele) => {
        return ele.node.entityId === Number(variant);
      })[0];
      const variantPrices = variantProduct?.node?.prices;
      const variantIsInStock = variantProduct?.node?.inventory?.isInStock;
      setIsInStock(variantIsInStock);
      setPrices(variantPrices);
    }
  }, [variants, variant]);

  // console.log(
  //   `Selected Variant : ${variant} ,Selected quantity : ${quantity}, Selected prices : ${prices.salePrice.value}  `
  // );
  const discount = calculatediscount(
    prices?.basePrice?.value,
    prices?.salePrice ? prices?.salePrice.value : prices?.basePrice.value
  );

  return (
    <div className="kp-container mb-[25px] flex flex-col justify-between !pt-[15px] md:mb-7 lg:mb-[70px] lg:flex-row lg:items-start lg:justify-between lg:!pt-10">
      <div className="kp-product-gallery">
        {images.length > 0 && (
          <ProductMainSliderV2
            productId={props.product?.entityId}
            images={images}
            tags={props.tags}
            discount={discount}
          ></ProductMainSliderV2>
        )}
      </div>
      <div className="kp-product-info mx-auto md:mx-0">
        <h1 className="mb-[10px] text-center text-[length:var(--pdp-text-2xl)] leading-[1.1] tracking-[-0.21px] text-black md:text-left lg:text-[length:var(--pdp-heading-lg)]">
          {props.product?.name}
        </h1>
        <div className="mb-[10px] hidden max-w-max bg-[rgba(128,160,61,.545098)] px-[5px] lg:block lg:bg-transparent lg:px-0">
          <div
            className="kp-review-small kp-pdp-preview-badge jdgm-widget jdgm-preview-badge"
            data-id={productId}
          ></div>
        </div>
        <div className="order-1 mb-4 lg:order-none lg:mb-2.5">
          <ReadMoreLess description={props.product?.description} />
        </div>
        <ProductPrice discount={discount} prices={prices}></ProductPrice>
        {variants.length > 1 && (
          <ProductVariants
            productId={productId}
            productVariants={variants}
            variant={variant}
            setVariant={setVariant}
          ></ProductVariants>
        )}
        <div className="md:mb-[25px] md:flex md:items-end md:gap-2 lg:mb-2.5 lg:flex-col lg:items-start lg:gap-6">
          <ProductQuantity
            defaultValue={quantity}
            minValue={1}
            onChange={(qty: number) => setQuantity(qty)}
          ></ProductQuantity>
          <ActionBar
            isInStock={isInStock}
            productId={productId}
            quantity={quantity}
            variantId={variant}
          ></ActionBar>
        </div>
        {props.shortDescription !== null && (
          <div className="order-2 rounded-md bg-[#6a8330] py-[5px] px-1 text-center">
            <p className="m-0 text-[length:var(--pdp-text-sm)] font-bold leading-[1.1] tracking-[0.4px] text-white lg:tracking-[.56px]">
              {props.shortDescription}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductMainContainer;
