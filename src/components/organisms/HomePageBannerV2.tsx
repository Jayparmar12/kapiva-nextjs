import 'glider-js/glider.min.css';

import React from 'react';
import Glider from 'react-glider';

import { GenerateSrcset } from '@/utils/helperFunctions';
import type { Banner } from '@/utils/types/types';

function HomePageBanner(props: { bannerData: Banner[] }) {
  // const [sliderLoaded, setSliderLoaded] = React.useState(false);
  return (
    <div className="kp-banner relative m-auto mb-5 w-[100%] overflow-hidden lg:mb-8">
      <Glider
        draggable
        slidesToShow={1}
        slidesToScroll={1}
        resizeLock
        hasDots={true}
        // onLoad={() => {
        //   setSliderLoaded(true);
        // }}
        scrollLock
        className=""
        skipTrack={true}
      >
        <div className={`flex overflow-hidden `}>
          {props.bannerData.map((banner, id) => (
            <div
              key={banner.id}
              className="banner-bg-gradient relative w-full max-w-full shrink-0"
            >
              <a href={banner.banner_url}>
                <div className="lg:hidden">
                  <img
                    src={`${banner.mobile_image}?imgeng=/w_425/f_webp/`}
                    height={250}
                    width={400}
                    srcSet={GenerateSrcset(
                      banner.mobile_image,
                      [400, 640, 750, 850, 1000],
                      true
                    )}
                    loading={id > 0 ? 'lazy' : 'eager'}
                    sizes="100vw"
                    className="aspect-[400/250] w-full object-cover"
                    alt=""
                  />
                </div>
                <div className="hidden lg:block">
                  <img
                    src={`${banner.image}?imgeng=/w_1500/f_webp/`}
                    height={600}
                    width={1920}
                    srcSet={GenerateSrcset(
                      banner.image,
                      [1300, 1700, 2200],
                      true
                    )}
                    loading="lazy"
                    sizes="100vw"
                    className="hidden aspect-[1920/600] w-full object-cover lg:block"
                    alt=""
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </Glider>
    </div>
  );
}

export default HomePageBanner;
