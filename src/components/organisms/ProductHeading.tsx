import React from 'react';

import ReadMoreLess from '../atoms/ReadMoreLess';

function ProductHeading(props: { title: string; description: string }) {
  const { title, description } = props;
  return (
    <>
      <section className="mt-1 mb-3.5 flex flex-col justify-evenly gap-1 font-jost leading-none">
        <div className="text-[32px]">{title}</div>
        <ReadMoreLess description={description} />
      </section>
    </>
  );
}

export default ProductHeading;
