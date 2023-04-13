/* eslint-disable global-require */
import 'glider-js/glider.min.css';

import React, { useEffect, useRef, useState } from 'react';
import Glider from 'react-glider';
import type { GliderMethods } from 'react-glider/dist/types';

import Badge from '../atoms/Badge';
import IconChevronRight from '../atoms/IconChevronRight';
import CustomImage from './CustomImage';

// returns array containing srcset and srcsize values :OLD
// function modifiedImageUrl(url: string) {
//   const availableViewPorts = [425, 1023];
//   const requiredSizes = [300, 500, 700];
//   const allSrcSetUrls = requiredSizes.map(
//     (size) => `${url.replace('650w', `${size}w`)} ${size}w`
//   );
//   const allSizeSets = availableViewPorts.map((viewportSize, index) => {
//     if (requiredSizes[index] !== undefined) {
//       return `(max-width:${viewportSize}px) ${requiredSizes[index]}px`;
//     }
//     return null;
//   });
//   // const allSrcSetUrls = `imageUrlName sizeW,imageUrlName sizeW,`;
//   // const allSizeSets =`(min-width: ${min-w} ${size}),`
//   return [allSrcSetUrls.toString(), allSizeSets.toString()];
// }

// returns array containing srcset and srcsize values:NEW
export function modifiedImageUrl(url: string) {
  const requiredSizes = [450, 600, 800];
  const allSrcSetUrls = requiredSizes.map(
    (size) =>
      `https://4wdpmdxj.cdn.imgeng.in/${url}?imgeng=/w_${size}/f_webp/cmpr_75/ ${size}w`
  );
  const sizes = '(max-width:1023px) 90vw,(max-width:1200px) 50vw,45vw';
  return [allSrcSetUrls.toString(), sizes];
}

function ProductMainSliderV2({
  images,
  productId,
  discount,
  tags,
}: {
  images: any;
  productId: any;
  discount: any;
  tags: any;
}) {
  // For showing default image in front

  const svgPlaceholder =
    'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20400%22%3E%3Crect%20width%3D%22400%22%20height%3D%22400%22%20fill%3D%22%23cccccc%22%3E%3C%2Frect%3E%3C%2Fsvg%3E';

  const sortedImages = images.reduce((allImages, currImage) => {
    if (currImage.node.isDefault === true) {
      return [currImage, ...allImages];
    }
    return [...allImages, currImage];
  }, []);
  const [sliderLoaded, setSliderLoaded] = React.useState(false);
  const [activeBig, setActiveBig] = useState(0);
  const [activeSmall, setActiveSmall] = useState(0);
  const gliderRefBig = useRef<GliderMethods>(null);
  const gliderRefSmall = useRef<GliderMethods>(null);

  const rightArrowEl = useRef(null);
  const leftArrowEl = useRef(null);
  const [isInitialized, setIsInitialized] = React.useState(false);
  React.useEffect(() => {
    setIsInitialized(Boolean(leftArrowEl.current && rightArrowEl.current));
  }, [leftArrowEl, rightArrowEl]);

  useEffect(() => {
    gliderRefBig?.current?.scrollItem(activeBig);
    // @ts-ignore
    const slide = gliderRefBig?.current?.slide || false;
    if (slide) {
      // @ts-ignore
      const img = gliderRefBig?.current.slides[slide].querySelector('img');
      if (img) {
        if (img.src.includes('data:image')) {
          img.src = img.dataset.src;
        }
      }
    }
  }, [activeBig]);
  useEffect(() => {
    gliderRefSmall?.current?.scrollItem(activeSmall);
  }, [activeSmall]);
  return (
    <>
      <section className="mb-5 lg:mb-0">
        <div>
          <Glider
            slidesToShow={1}
            slidesToScroll={1}
            draggable={true}
            dragVelocity={1}
            onSlideVisible={(ele) => {
              // console.log(ele.detail.slide, 'IS Visible');
              // // currently it's not smooth need to check it's behaviour
              setActiveSmall(ele.detail.slide);
              setActiveBig(ele.detail.slide);
            }}
            hasDots
            ref={gliderRefBig}
            scrollLock
            skipTrack={true}
            className="kp-topGlider"
            onLoad={() => {
              setSliderLoaded(true);
            }}
          >
            <div className="flex flex-row overflow-hidden">
              {sortedImages.map((item, index) => (
                <div
                  // needs to be removed
                  className="max-h-full max-w-full shrink-0"
                  onClick={() => {
                    setActiveBig(index);
                    gliderRefSmall.current.scrollItem(index);
                  }}
                  key={index}
                  style={index > 0 && !sliderLoaded ? { display: 'none' } : {}}
                >
                  <CustomImage isNotFirst={index > 0}>
                    {(imgLoading, setImgLoading) => (
                      <div
                        className={`mb-[5px] lg:mb-5
                          ${
                            imgLoading === true
                              ? `h-full w-full loadingCard`
                              : `relative`
                          }
                        `}
                      >
                        <div className="absolute bottom-2.5 left-2.5 max-w-max rounded-md bg-[rgba(128,160,61,.545098)] px-[5px] lg:hidden lg:bg-transparent lg:px-0">
                          <div
                            className="kp-review-small kp-pdp-preview-badge jdgm-widget jdgm-preview-badge"
                            data-id={productId}
                          ></div>
                        </div>
                        {discount !== '' && (
                          <div className="absolute top-2.5 right-2.5 max-w-max rounded-md bg-[rgba(128,160,61,.545098)] px-[5px] text-[length:var(--pdp-text-sm)] font-semibold lg:text-[length:var(--pdp-text-base)]">
                            {discount}
                          </div>
                        )}

                        {tags.length > 0 && (
                          <div className="absolute left-2.5 top-2.5 lg:hidden">
                            {tags.map((tag) => (
                              <Badge
                                key={tag.id}
                                img_url={tag.image}
                                title={tag.title}
                              />
                            ))}
                          </div>
                        )}

                        <img
                          src={
                            index > 0
                              ? svgPlaceholder
                              : `https://4wdpmdxj.cdn.imgeng.in/${item.node?.url}?imgeng=/w_auto,400/`
                          }
                          data-src={item.node?.urlOriginal}
                          alt=""
                          height="1200"
                          width="1200"
                          srcSet={modifiedImageUrl(item.node?.urlOriginal)[0]}
                          sizes={modifiedImageUrl(item.node?.urlOriginal)[1]}
                          onLoad={() => {
                            setImgLoading(false);
                          }}
                          loading={index > 0 ? 'lazy' : 'eager'}
                          className="max-w-full rounded-md object-cover"
                        />
                      </div>
                    )}
                  </CustomImage>
                </div>
              ))}
            </div>
          </Glider>
        </div>
        <div className="relative m-auto hidden max-w-[85%] lg:block">
          {isInitialized && (
            <Glider
              slidesToShow={5}
              slidesToScroll={1}
              draggable
              dragVelocity={1.25}
              ref={gliderRefSmall}
              arrows={{
                prev: leftArrowEl.current,
                next: rightArrowEl.current,
              }}
              hasArrows
              scrollLock
              skipTrack={true}
              className="kp-bottomGlider"
              onLoad={() => {
                setSliderLoaded(true);
              }}
            >
              <div className="glider-track flex gap-2">
                {sortedImages.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveBig(index)}
                    className="!min-w-[64px] px-[5px]"
                    style={
                      index > 0 && !sliderLoaded ? { display: 'none' } : {}
                    }
                  >
                    <img
                      src={`https://4wdpmdxj.cdn.imgeng.in/${item.node?.url}?imgeng=/w_100/f_webp/`}
                      alt=""
                      height="64"
                      width="64"
                      loading={index > 0 ? 'lazy' : 'eager'}
                      className={`w-full rounded-md object-cover 
                    ${activeBig === index ? `border  border-[#a5ab9a]` : ``}
                    `}
                    />
                  </div>
                ))}
              </div>
            </Glider>
          )}
          <div className="absolute top-1/2 w-full">
            <button
              ref={leftArrowEl}
              type="button"
              className="glider-prev !absolute !-left-0 w-[20px] -translate-y-1/2 !-translate-x-full !py-5 lg:!-left-0 lg:!w-[56px]"
              aria-label="Previous"
            >
              <IconChevronRight className="m-auto h-4 w-2 rotate-180 lg:h-7 lg:w-14" />
            </button>
            <button
              ref={rightArrowEl}
              type="button"
              className="glider-next !absolute !-right-0 w-[20px] -translate-y-1/2 translate-x-full !py-5 lg:!w-[56px] lg:!translate-x-full"
              aria-label="Next"
            >
              <IconChevronRight className="m-auto h-4 w-2 lg:h-7 lg:w-14" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductMainSliderV2;
