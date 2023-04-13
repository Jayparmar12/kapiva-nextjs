import 'glider-js/glider.min.css';

import { useEffect, useState } from 'react';

import KapivaGraphQL from '@/clients/KapivaGraphQL';
import {
  gliderResponsive,
  ProductShortInfoV2,
} from '@/components/molecules/TherapyProductSliderV2';

import ArrowContainer from '../molecules/ArrowContainer';

export const queryGraphQLNewArrivals = `query newProduct{
  site{
    newestProducts(first:8){
      edges{
       node{
          entityId
          name
          sku
          path
          categories{edges{node{name}}}
          inventory{
               aggregated{
                    availableToSell
               }
          }
          prices(includeTax:true) {
                  price {
                    ...PriceFields
                  }
                  salePrice {
                    ...PriceFields
                  }
                  retailPrice{
                    ...PriceFields
                  }
                  basePrice {
                    ...PriceFields
                  }
                  priceRange {
                    min {
                      ...PriceFields
                    }
                    max {
                      ...PriceFields
                    }
                  }
                }
           
           defaultImage{
               ...ImageFields
           }
            variants{
            edges{
              node{
                id
                entityId
               
              }
            }
          }
          customFields{
            edges{
              node{
                name
                value
              }
            }
          }
        }
      }
    }
  }
}

 fragment ImageFields on Image {
   url320wide: url(width: 320)
   url640wide: url(width: 640)
   url960wide: url(width: 960)
   url1280wide: url(width: 1280)
 }
 fragment PriceFields on Money {
  value
  currencyCode
}`;
const NewArrivals = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [allData, setAlldata] = useState([]);
  useEffect(() => {
    if (data.data) {
      setAlldata(data.data.site.newestProducts.edges);
      setLoading(false);
    } else {
      setLoading(true);
    }
    (async () => {
      try {
        const newArrivalResp = await KapivaGraphQL(queryGraphQLNewArrivals);
        const newArrivals = await newArrivalResp.json();
        setLoading(false);
        setAlldata(newArrivals.data.site.newestProducts.edges);
      } catch (error) {
        console.log(error);
      }
    })();

    if (loading === false) {
      window?.jdgmCacheServer?.reloadPreviewBadges();
    }
  }, [loading]);
  return (
    <>
      <section className="kp-container mb-14 lg:mb-32">
        <div className="mb-5 flex items-center justify-start lg:mb-10">
          <span className="text-[length:var(--text-lg)]  font-semibold lg:mb-0 lg:text-[length:var(--heading-lg)]">
            New Arrivals
          </span>
          <a
            href={`https://kapiva.in/partnership`}
            className="ml-auto text-[length:var(--text-sm)] text-[color:var(--cr-danger-light)] lg:text-[length:var(--text-lg)]"
          >
            View all
          </a>
        </div>
        <div className="mb-5 lg:mb-10 lg:block lg:px-[40px]">
          <div className="relative m-auto w-full max-w-full">
            <ArrowContainer
              slidesToShow={4}
              slidesToScroll={2}
              gliderResponsive={gliderResponsive}
              className="kp-glider-grid"
              trackClassName={`justify-start gap-x-2.5 gap-y-5 lg:gap-[24px] !grid grid-flow-col lg:!flex ${
                (allData.length > 1 ? 'grid-rows-2 ' : ' ') +
                (allData.length < 5 ? 'md:grid-rows-1 ' : ' ')
              }`}
            >
              {allData.map((product) => {
                return (
                  <ProductShortInfoV2
                    key={product.node.entityId}
                    product_id={product.node.entityId}
                    image={product.node.defaultImage.url640wide}
                    title={product.node.name}
                    inventory_level={
                      product.node.inventory.aggregated.availableToSell
                    }
                    sale_price={
                      product.node.prices.salePrice
                        ? product.node.prices.salePrice.value
                        : product.node.prices.basePrice.value
                    }
                    loading={loading}
                    product_url={product.node.path}
                    retail_price={
                      product.node.prices.retailPrice
                        ? product.node.prices.retailPrice.value
                        : product.node.prices.basePrice.value
                    }
                  />
                );
              })}
            </ArrowContainer>
          </div>
        </div>
        <a
          href={`https://kapiva.in/partnership`}
          className="block text-center text-[length:var(--text-sm)] font-semibold text-[color:var(--cr-danger-light)] underline underline-offset-2 lg:text-[length:var(--text-lg)] "
        >
          View all New Arrivals
        </a>
      </section>
    </>
  );
};

export default NewArrivals;
