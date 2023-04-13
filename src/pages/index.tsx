import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Script from 'next/script';
import React, { useEffect, useState } from 'react';

import KapivaCmsApi from '@/clients/KapivaCmsApi';
import KapivaGraphQL from '@/clients/KapivaGraphQL';
import SEO from '@/components/atoms/SEO';
import BlogsAndArticlesV2 from '@/components/organisms/BlogsAndArticlesV2';
import ChooseYourTherapy from '@/components/organisms/ChooseYourTherapy';
import FooterV2 from '@/components/organisms/FooterV2';
import GetHelpForCategoryV2 from '@/components/organisms/GetHelpForCategory_V2';
import HomePageBannerV2 from '@/components/organisms/HomePageBannerV2';
import HomeWhyKapivaSectionV2 from '@/components/organisms/HomeWhyKapivaSection_V2';
import InTheNewsV2 from '@/components/organisms/InTheNewsV2';
import KapivaBestSeller, {
  queryGraphQLTrendingP,
} from '@/components/organisms/KapivaBestSellers';
import NewArrivals, {
  queryGraphQLNewArrivals,
} from '@/components/organisms/NewArrivals';
import SiteAnnouncement from '@/components/organisms/SiteAnnouncement';
import SiteHeader from '@/components/organisms/SiteHeader';
import SubscribeAndMailingListV2 from '@/components/organisms/SubscribeAndMailingListV2';
import TestimonialsV3 from '@/components/organisms/TestimonialsV3';
import WhatToExpectFromKapivaV2 from '@/components/organisms/WhatToExpectFromKapivaV2';
import { appStore } from '@/stores/appStore';
import ApiHtmlParser from '@/utils/ApiHtmlParser';
import { ChooseYourTherapyContext } from '@/utils/contexts';
import { GenerateSrcset } from '@/utils/helperFunctions';
import type { Testimonial } from '@/utils/types/types';

// needs to be taken care of , useEffectLayout warning fixed for now ,related to react-glider
React.useLayoutEffect = React.useEffect;

export const getStaticProps: GetStaticProps = async () => {
  const resp = await KapivaCmsApi.post('/get_allDetails');
  const newArrivalResp = await KapivaGraphQL(queryGraphQLNewArrivals);
  const newArrivals = await newArrivalResp.json();
  const trendingResp = await KapivaGraphQL(queryGraphQLTrendingP);
  const bestSeller = await trendingResp.json();
  const { data } = resp.data;
  data.generalSettings = {};
  data.generalSettings.whatToExpectData = ApiHtmlParser.whatToExpect(
    data.general
  );
  data.generalSettings.topBannerText = ApiHtmlParser.topBannerText(
    data.general
  );
  data.generalSettings.unlockDetails = ApiHtmlParser.unlockDetails(
    data.general
  );
  data.generalSettings.newsText = ApiHtmlParser.newsText(data.general);
  data.generalSettings.mainBanner = ApiHtmlParser.mainBanner(data.general);
  data.generalSettings.healthOutcomes = ApiHtmlParser.healthOutcomes(
    data.general
  );
  data.newArrivals = newArrivals;
  data.bestSeller = bestSeller;
  return { props: { data } };
};

export const additionalMenuCategories = [
  {
    category_url:
      '/consult-a-doctor/?utm_source=top-nav&utm_medium=sticky-banner-4',
    customizedSolutionLink: '',
    healthExpertLink: '',
    id: 1003,
    rounded: false,
    image:
      'https://4wdpmdxj.cdn.imgeng.in/s-5h8rqg02f8/content/images/Homepage/consultdoctor.webp',
    name: 'Consult A Doctor',
  },
  {
    category_url: '/solution/diabetes/',
    customizedSolutionLink: '',
    healthExpertLink: '',
    id: 100,
    rounded: false,
    image:
      'https://4wdpmdxj.cdn.imgeng.in/s-5h8rqg02f8/content/images/Homepage/headericon/sugar-blood-level.png',
    name: 'Diabetes',
  },
];

const Index = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { fetchCart, checkIsLoggedIn } = appStore();

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

  const [categories] = React.useState(data.category);
  const headerCategories = [...additionalMenuCategories, ...categories];
  // const [subCategories, setSubCategories] = React.useState(data.subCategory);
  const [products, setProducts] = React.useState(data.products);
  const [testimonials, setTestimonials] = React.useState<Testimonial[]>(
    data.testimonials
  );
  const [blogs, setBlogs] = React.useState(data.blog);
  const [loading, setLoading] = React.useState(false);
  const { whatToExpectData, newsText, unlockDetails, topBannerText } =
    data.generalSettings;
  const [selectedCategory, setSelectedCategory] = useState(data.category[0].id);
  const selectedCategoryInfo = categories.find(
    (item) => item.id === selectedCategory
  );
  // const [selectedSubCategory, setSelectedSubCategory] = useState(
  //   data.subCategory[0].id
  // );

  React.useEffect(() => {
    fetchCart();
    // console.log('User Info', userData);
    // console.log('Is User Logged In', checkIsLoggedIn());
    checkIsLoggedIn();

    // For making sure that inventory and prices are updated on real time
    (async () => {
      try {
        const resp = await KapivaCmsApi.post('/get_allDetails');
        setProducts(await resp.data?.data?.products);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const handleCategoryChange = async (catId: number) => {
    if (catId !== selectedCategory) {
      setSelectedCategory(catId);
      setLoading(true);
      const resp = await KapivaCmsApi.post('/get_subCategory', {
        catId,
      });
      // setSubCategories(resp.data.data?.subCategory);
      setProducts(await resp.data.data?.products);
      // setSelectedSubCategory(resp.data.data?.subCategory[0].id);
      setTestimonials(await resp.data.data?.testimonials);
      setBlogs(await resp.data.data?.blog);
      setLoading(false);
    }
  };

  // const handleSubCategoryChange = async (subId: number) => {
  //   if (subId !== selectedSubCategory) {
  //     setLoading(true);
  //     setSelectedSubCategory(subId);
  //     const resp = await KapivaCmsApi.post('/get_products', {
  //       catId: selectedCategory,
  //       subCatId: selectedSubCategory,
  //     });
  //     setProducts(resp.data.data.products);
  //     setLoading(false);
  //   }
  // };

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
        <div className="lg:hidden">
          <link
            rel="preload"
            as="image"
            imageSrcSet={GenerateSrcset(
              data.banner[0].mobile_image,
              [400, 640, 750, 850, 1000],
              true
            )}
            imageSizes="100vw"
          />
        </div>
      </Head>
      <SEO title="Kapiva" description="Kapiva"></SEO>
      <main className="kp-test-home">
        <SiteAnnouncement {...topBannerText} />
        <SiteHeader categories={headerCategories} />
        <HomePageBannerV2 bannerData={data.banner} />
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        {/* <HealthOutcomes {...healthOutcomes} /> */}
        <ChooseYourTherapyContext.Provider
          value={{
            categories,
            // subCategories,
            selectedCategory,
            // selectedSubCategory,
            handleCategoryChange,
            // handleSubCategoryChange,
            products,
            loading,
          }}
        >
          <ChooseYourTherapy />
        </ChooseYourTherapyContext.Provider>
        {/* <GetHelpForCategory /> */}
        <GetHelpForCategoryV2 selectedCategoryInfo={selectedCategoryInfo} />
        {/* <Testimonials testimonials={testimonials} /> */}
        <TestimonialsV3 testimonials={testimonials} />
        {/* <HomeWhyKapivaSection /> */}
        <KapivaBestSeller data={data.bestSeller} />
        <HomeWhyKapivaSectionV2 whyKapivaData={data.whykapiva} />
        <InTheNewsV2 head={newsText} newsItems={data.news} />
        <WhatToExpectFromKapivaV2 data={whatToExpectData} />
        <NewArrivals data={data.newArrivals} />
        {/* <BlogsAndArticles blogs={blogs} /> */}
        <BlogsAndArticlesV2 blogs={blogs} />
        <SubscribeAndMailingListV2 data={unlockDetails} />
        <FooterV2 />
      </main>
    </>
  );
};

export default Index;
