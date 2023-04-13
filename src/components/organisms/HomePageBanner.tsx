import 'glider-js/glider.min.css';

import React from 'react';
import Glider from 'react-glider';

import type { Banner } from '@/utils/types/types';

// const bannerImages = [
//   {
//     img_url:
//       'https://4wdpmdxj.cdn.imgeng.in/https://dashboard.kapiva.in/kapiva/static/65782skin_npds_hp_banner_jpg.jpg',
//     redirect_url:
//       'https://kapiva.in/solution/skin-care/kumkumadi-glow-face-oil/',
//   },
//   {
//     img_url:
//       'https://4wdpmdxj.cdn.imgeng.in/https://dashboard.kapiva.in/kapiva/static/55053home_page_4b_jpg.jpg',
//     redirect_url:
//       'https://kapiva.in/solution/skin-care/kumkumadi-glow-face-oil/',
//   },
//   {
//     img_url:
//       'https://4wdpmdxj.cdn.imgeng.in/https://dashboard.kapiva.in/kapiva/static/20622monthly_sale_hp_banner1_jpg.jpg',
//     redirect_url:
//       'https://kapiva.in/solution/skin-care/kumkumadi-glow-face-oil/',
//   },
// ];

function HomePageBanner(props: { bannerData: Banner[] }) {
  const [sliderLoaded, setSliderLoaded] = React.useState(false);
  return (
    <div className="kp-banner m-auto mb-5 w-[100%] overflow-hidden lg:mb-8">
      <Glider
        draggable
        slidesToShow={1}
        slidesToScroll={1}
        resizeLock
        hasDots={true}
        onLoad={() => {
          setSliderLoaded(true);
        }}
        scrollLock
        className=""
      >
        {props.bannerData.map((banner, id) => (
          <div key={banner.id} className="">
            <a href={banner.banner_url}>
              <div className="hidden lg:block">
                <img
                  height={600}
                  width={1920}
                  loading={id > 0 && !sliderLoaded ? 'lazy' : 'eager'}
                  src={banner.image}
                  className="h-auto w-full"
                  alt=""
                />
              </div>
              <div className="lg:hidden">
                <img
                  loading={id > 0 && !sliderLoaded ? 'lazy' : 'eager'}
                  src={banner.mobile_image}
                  height={300}
                  width={400}
                  className=" h-auto w-full"
                  alt=""
                />
              </div>
            </a>
          </div>
        ))}
      </Glider>
    </div>
  );
}

export default HomePageBanner;
