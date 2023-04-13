import { promises as fs } from 'fs';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Script from 'next/script';
import path from 'path';
import React, { useEffect, useState } from 'react';

import KapivaCmsApi from '@/clients/KapivaCmsApi';
import SEO from '@/components/atoms/SEO';
import KapivaUsps from '@/components/molecules/KapivaUsps';
import CustomerSpeaksV3 from '@/components/organisms/CustomerSpeaksV3';
import FooterV2 from '@/components/organisms/FooterV2';
import KeyIngredientsV2 from '@/components/organisms/KeyIngredientsV2';
import ProductBenefitsV2 from '@/components/organisms/ProductBenefitsV2';
import ProductExpertSpeakVideos from '@/components/organisms/ProductExpertSpeakVideos';
import ProductFaqsV2 from '@/components/organisms/ProductFaqsV2';
import ProductHowToUseV2 from '@/components/organisms/ProductHowToUseV2';
import ProductMainContainer from '@/components/organisms/ProductMainContainer';
import { modifiedImageUrl } from '@/components/organisms/ProductMainSliderV2';
import ProductScience from '@/components/organisms/ProductScience';
import ProductSpecsV2 from '@/components/organisms/ProductSpecsV2';
import ProductSuitableForV2 from '@/components/organisms/ProductSuitableForV2';
import SiteAnnouncement from '@/components/organisms/SiteAnnouncement';
import SiteHeader from '@/components/organisms/SiteHeader';
import SubscribeAndMailingListV2 from '@/components/organisms/SubscribeAndMailingListV2';
import SuscribeFormSuperCoinEMIOption from '@/components/organisms/SuscribeFormSuperCoinEMIOption';
import WhyKapivaV2 from '@/components/organisms/WhyKapivaV2';
// @ts-ignore:next-line
import { appStore } from '@/stores/appStore';
import ApiHtmlParser from '@/utils/ApiHtmlParser';

import { additionalMenuCategories } from '..';

function getPDPdetails(id: any): Promise<any> {
  return KapivaCmsApi.post('/get_product_details', { product_id: id });
}
function getAllDetails(): Promise<any> {
  return KapivaCmsApi.post('/get_allDetails');
}

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

function getProducts(cursor): Promise<any> {
  const storeUrl = 'https://store-5h8rqg02f8.mybigcommerce.com';
  const pageSize = 50;
  // , after:${cursor}

  // Use the store's canonical URL which should always resolve
  const graphQLUrl = `${storeUrl}/graphql`;

  // Set up GraphQL query
  const graphQLQuery = `
    query productListing {
      site {
        products (first: ${pageSize}, after: "${cursor}") {
          pageInfo {
            startCursor
            endCursor
          }
          edges {
            cursor
            node {
              id
              entityId
              path
              name
              sku
              description
              prices {
                price {
                  value
                  currencyCode
                }
                salePrice {
                  value
                  currencyCode
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

export async function getStaticPaths() {
  let cursor = '';
  let products = [];
  do {
    try {
      // eslint-disable-next-line no-await-in-loop
      const res = await getProducts(cursor);
      // eslint-disable-next-line no-await-in-loop
      const resJson = await res.json();
      // console.log(resJson);
      const temp = resJson.data.site.products.edges;
      cursor = resJson.data.site.products.pageInfo.endCursor;
      // eslint-disable-next-line @typescript-eslint/no-loop-func
      temp.forEach((item) => {
        products.push(item.node);
      });
    } catch (err) {
      // console.error('EX1:', err);
    }
  } while (cursor != null);

  products = products.map((item: { entityId: any; path: string }) => {
    const pathArr = item.path.replace(/\/$/, '').split('/');
    return {
      id: item.entityId,
      slug: pathArr[pathArr.length - 1],
    };
  });

  await fs.writeFile(
    path.join(process.cwd(), 'cache/products.db'),
    JSON.stringify(products)
  );

  const paths = products.map((item: { slug: string }) => {
    return {
      params: {
        slug: `${item.slug}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (
    typeof params === 'undefined' ||
    typeof params.slug === 'undefined' ||
    !params.slug
  ) {
    return {
      props: {
        product: {
          name: 'Dummy title',
          description: 'Dummy description',
        },
      },
    };
  }
  const { slug } = params;
  const data = await fs.readFile(path.join(process.cwd(), 'cache/products.db'));
  const products = JSON.parse(data as unknown as string);

  const product = products.find((o: { slug: string }) => o.slug === slug);

  const res = await getProduct(product.id);
  const resJson = await res.json();

  // Pass product data to the page via props
  try {
    const pdp = await getPDPdetails(product.id);
    const pdpData = pdp.data;
    const homeDetails = await getAllDetails();
    const home = homeDetails.data;
    const additionalData = Object();
    additionalData.topBannerText = ApiHtmlParser.topBannerText(
      home.data.general
    );
    additionalData.unlockDetails = ApiHtmlParser.unlockDetails(
      home.data.general
    );
    additionalData.categories = home.data.category;

    return {
      props: {
        product: resJson.data.site.product,
        pdpData,
        additionalData,
      },
    };
  } catch (err) {
    // console.error('EX2:', err);
    return {
      props: { product: null, pdpData: null, additionalData: null },
    };
  }
};

function Product({
  product,
  pdpData,
  additionalData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { fetchCart, checkIsLoggedIn } = appStore();
  const [ingredientList, ...additionalInfo] =
    pdpData?.data?.specifications || [];
  const headerCategories = [
    ...additionalMenuCategories,
    ...additionalData.categories,
  ];
  const defaultImageUrl = product.images.edges.find(
    (item) => item.node.isDefault === true
  ).node.urlOriginal;
  const [loadJudme, setLoadJudgeme] = useState(false);
  useEffect(() => {
    window.addEventListener(
      'scroll',
      () => {
        if (loadJudme === false) {
          setLoadJudgeme(true);
        }
      },
      { once: true }
    );
    setTimeout(() => {
      if (loadJudme === false) {
        setLoadJudgeme(true);
      }
    }, 6000);
  }, []);
  React.useEffect(() => {
    fetchCart();
    checkIsLoggedIn();
  }, []);
  return (
    <>
      {loadJudme === true ? (
        <Script src="https://cdn.judge.me/widget_preloader.js" async></Script>
      ) : null}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            jdgm = window.jdgm || {};
            jdgm.SHOP_DOMAIN = 'store-5h8rqg02f8.mybigcommerce.com';
            jdgm.PLATFORM = 'bigcommerce';
            jdgm.PUBLIC_TOKEN = 'JVUyc-Yf-PbJPNKGCjwa9it__W4';
            `,
        }}
      />
      <Head>
        <link
          rel="preload"
          as="image"
          imageSrcSet={modifiedImageUrl(defaultImageUrl)[0]}
          imageSizes={modifiedImageUrl(defaultImageUrl)[1]}
        />
      </Head>
      <SEO
        title={product?.seo?.pageTitle}
        description={product?.seo?.metaDescription}
      />
      <main product-id={pdpData.data.product?.bigc_id}>
        <SiteAnnouncement {...additionalData.topBannerText} />
        <SiteHeader categories={headerCategories} />
        <ProductMainContainer
          product={product}
          tags={pdpData?.data?.tags}
          shortDescription={pdpData?.data?.product?.short_description}
        />
        {/* <pre>{JSON.stringify(product, null, 2)}</pre> */}
        <SuscribeFormSuperCoinEMIOption></SuscribeFormSuperCoinEMIOption>
        {pdpData.data?.usps.length > 0 && (
          <KapivaUsps usps={pdpData.data?.usps} />
        )}
        {pdpData.data?.benifits?.length > 0 && (
          <ProductBenefitsV2
            product_name={pdpData.data?.product?.name}
            benifits={pdpData.data?.benifits}
          ></ProductBenefitsV2>
        )}
        {pdpData.data?.testimonialImage.length > 0 && (
          <div className="kp-container">
            {pdpData.data?.testimonialImage.map((item) => (
              <div key={item.id} className="mt-5 lg:mt-[50px]">
                <img
                  src={item.mobile_image}
                  alt=""
                  className="m-auto h-auto max-w-full md:hidden"
                />
                <img
                  src={item.image}
                  alt=""
                  className="m-auto hidden h-auto max-w-[50%] md:block lg:max-w-[40%]"
                />
              </div>
            ))}
          </div>
        )}
        {pdpData.data?.customerSpeaks?.length > 0 && (
          <CustomerSpeaksV3 testimonials={pdpData.data?.customerSpeaks} />
        )}
        {pdpData.data?.expertSpeaks?.length > 0 && (
          <ProductExpertSpeakVideos expertSpeaks={pdpData.data?.expertSpeaks} />
        )}
        {pdpData.data.scienceBehind !== '' && (
          <ProductScience
            scienceBehind={pdpData.data.scienceBehind}
          ></ProductScience>
        )}
        {pdpData?.data?.keyIngredients?.length > 0 && (
          <KeyIngredientsV2 keyIngredients={pdpData.data?.keyIngredients} />
        )}
        {pdpData?.data?.product?.suitable_for !== null && (
          <ProductSuitableForV2
            suitableText={pdpData.data?.product?.suitable_for}
          ></ProductSuitableForV2>
        )}
        {pdpData?.data?.HowToUseStep?.length > 0 && (
          <ProductHowToUseV2
            images={pdpData.data?.HowToUseImage}
            steps={pdpData.data?.HowToUseStep}
          ></ProductHowToUseV2>
        )}

        {pdpData?.data?.faq?.length > 0 && (
          <ProductFaqsV2 faqs={pdpData?.data?.faq}></ProductFaqsV2>
        )}
        <div className="kp-container kp-review-main-widget mt-[30px] lg:mt-[48px]">
          <div
            id="judgeme_product_reviews"
            className="jdgm-widget jdgm-review-widget"
            data-product-title={product?.name}
            data-id={product?.entityId}
          ></div>
        </div>

        {pdpData?.data?.whyKapiva?.length > 0 && (
          <WhyKapivaV2 whyKapiva={pdpData?.data?.whyKapiva}></WhyKapivaV2>
        )}
        {pdpData?.data?.specifications?.length > 0 && (
          <ProductSpecsV2
            ingredientList={ingredientList}
            additionalInfo={additionalInfo}
          ></ProductSpecsV2>
        )}
        <SubscribeAndMailingListV2 data={additionalData.unlockDetails} />

        <FooterV2 />
        <div className="h-[64px] w-full md:hidden"></div>
      </main>
    </>
  );
}

export default Product;
