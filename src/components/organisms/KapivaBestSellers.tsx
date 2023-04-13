import 'glider-js/glider.min.css';

import { useEffect, useState } from 'react';

import KapivaGraphQL from '@/clients/KapivaGraphQL';
import {
  gliderResponsive,
  ProductShortInfoV2,
} from '@/components/molecules/TherapyProductSliderV2';

import ArrowContainer from '../molecules/ArrowContainer';

export const queryGraphQLTrendingP = ` query CategoryByUrl {
  site {
    route(path: "/trending-products/") {
      node {
        id
        ... on Category {
          name
          entityId
          description
          
          products(first: 10   ,hideOutOfStock:true,) {
            pageInfo {
              hasNextPage
              startCursor
              endCursor
            }
            edges {
              node {
                id
                entityId
                name
                sku
                path
                 inventory{
                 aggregated{ availableToSell}
                 hasVariantInventory
                 isInStock
                 }                     
                 productOptions(first: 50) {
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
                categories{
                  edges{
                    node{
                      entityId
                      name
                      path
                      
                    }
                  }
                }
                variants(first: 25) {
             edges {
               node {
                 sku
                entityId
                id
                options{
                  edges{
                    node{
                      entityId

                      values{
                        edges{
                          node{
                            label
                            entityId
                          }
                        }
                      }
                    }
                  }
                }
                
                
               }
             }
           }
                  reviewSummary{
                  numberOfReviews
                  summationOfRatings
                }
                defaultImage {
                  url(width:400)
                }
                brand {
                  name
                  defaultImage {
                    url(width: 200)
                  }
                }
                inventory{
                  isInStock
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
              }
            }
          }
        }
      }
    }
  }
}

fragment PriceFields on Money {
  value
  currencyCode
}`;
const KapivaBestSeller = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [allData, setAlldata] = useState([]);
  useEffect(() => {
    if (data.data) {
      setAlldata(data.data.site.route.node.products.edges);
    } else {
      setLoading(true);
    }
    (async () => {
      try {
        const trendingResp = await KapivaGraphQL(queryGraphQLTrendingP);
        const bestSeller = await trendingResp.json();
        setAlldata(bestSeller.data.site.route.node.products.edges);
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
            Kapiva Bestsellers
          </span>
          <a
            href={`https://kapiva.in/trending-products`}
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
                    image={product.node.defaultImage.url}
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
                    // retail_price={product.node.prices.retailPrice.value}
                  />
                );
              })}
            </ArrowContainer>
          </div>
        </div>
        <a
          href={`https://kapiva.in/trending-products`}
          className="block text-center text-[length:var(--text-sm)] font-semibold text-[color:var(--cr-danger-light)] underline underline-offset-2 lg:text-[length:var(--text-lg)] "
        >
          View all Kapiva Bestsellers
        </a>
      </section>{' '}
    </>
  );
};

export default KapivaBestSeller;
