/* eslint-disable global-require */
import 'glider-js/glider.min.css';

import React from 'react';
import Glider from 'react-glider';

const style = {};

const data = [
  {
    img: 'banner_img.png',
  },
  {
    img: 'banner_img.png',
  },
  {
    img: 'banner_img.png',
  },
];

function ProductMainSlider() {
  const [sliderLoaded, setSliderLoaded] = React.useState(false);

  return (
    <>
      <section style={style} className="md:max-w-md">
        <Glider
          slidesToShow={1}
          slidesToScroll={1}
          draggable
          hasDots
          scrollLock
          onLoad={() => {
            setSliderLoaded(true);
          }}
        >
          {data.map((item, index) => (
            <div
              key={index}
              style={index > 0 && !sliderLoaded ? { display: 'none' } : {}}
            >
              <img
                // eslint-disable-next-line import/no-dynamic-require
                src={require(`../../../public/assets/images/product_main_slider/${item.img}?webp`)}
                alt=""
                height="400"
                width="400"
                loading={index > 0 ? 'lazy' : 'eager'}
                className="w-full object-cover"
              />
            </div>
          ))}
        </Glider>
      </section>
    </>
  );
}

export default ProductMainSlider;
