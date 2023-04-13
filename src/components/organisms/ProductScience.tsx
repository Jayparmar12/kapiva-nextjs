import React from 'react';

import { GenerateSrcset } from '@/utils/helperFunctions';

function ProductScience(props: { scienceBehind: string }) {
  return (
    <div className="relative">
      <section className="sciencebehindsection">
        <div dangerouslySetInnerHTML={{ __html: props.scienceBehind }}></div>
      </section>
      <div className="absolute bottom-[-20%] right-0 hidden w-[100px] lg:block xl:w-[175px]">
        <img
          src="https://4wdpmdxj.cdn.imgeng.in/s-5h8rqg02f8/content/images/pdppageimage/sciencebehindflowernew.png"
          alt="science behind flower bottom image"
          loading="lazy"
          className="h-auto max-w-full"
        />
      </div>
      <div className="absolute top-[-12%] left-0 hidden w-[100px] lg:block xl:w-[150px]">
        <img
          src="https://4wdpmdxj.cdn.imgeng.in/s-5h8rqg02f8/content/images/pdppageimage/sciencebehindtopimageflower.png/?imgeng=/w_auto,150/"
          alt="science behind flower top image"
          loading="lazy"
          className="h-auto max-w-full"
          srcSet={GenerateSrcset(
            'https://4wdpmdxj.cdn.imgeng.in/s-5h8rqg02f8/content/images/pdppageimage/sciencebehindtopimageflower.png',
            [100, 150, 200],
            true
          )}
          width="608"
          height="1273"
          sizes="(max-width:1023px) 100px,(max-width:1200px) 200px"
        />
      </div>
    </div>
  );
}

export default ProductScience;
