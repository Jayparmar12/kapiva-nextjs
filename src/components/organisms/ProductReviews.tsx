import React from 'react';

const customerReviews = [
  {
    img_url: '/assets/images/reviews/review1.png',
    name: 'Divya G, Bangalore',
    comment:
      'Skin needs nourishment like an organ. I knew this but only realised it when I started nourishing it with the help of experts at Kapiva. I just dont have better skin, I understand my skin better',
    is_video: true,
  },
  {
    img_url: '/assets/images/reviews/review1.png',
    name: 'Alpana Roy, Kolkata',
    comment: 'Wow, this is amazing. Thank you so much Kapiva!',
    is_video: false,
  },
  {
    img_url: '/assets/images/reviews/review1.png',
    name: 'Divya G, Bangalore',
    comment:
      'Skin needs nourishment like an organ. I knew this but only realised it when I started nourishing it with the help of experts at Kapiva. I just dont have better skin, I understand my skin better',
    is_video: true,
  },
  {
    img_url: '/assets/images/reviews/review1.png',
    name: 'Alpana Roy, Kolkata',
    comment: 'Wow, this is amazing. Thank you so much Kapiva!',
    is_video: false,
  },
];

function ProductReviews() {
  return (
    <section className="flex flex-col items-center  justify-center break-words font-jost">
      <div className="mb-[28px] flex max-w-[400px] flex-row flex-wrap items-start justify-center gap-x-4 gap-y-8 ">
        {customerReviews.map((review, id) => (
          <div key={id} className="relative flex w-[150px] flex-col gap-1">
            <img
              src={review.img_url}
              alt=""
              height="169"
              width="150"
              loading="lazy"
              className="mb-2 aspect-auto rounded-sm"
            />
            <div className="text-xs font-extrabold tracking-[-0.19px] text-[#606060]">
              {review.name}
            </div>
            <div className="h-[1px] w-[17px] bg-black"></div>
            <div className="text-xs font-normal">
              &ldquo; {review.comment} &rdquo;
            </div>

            {review.is_video && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19.643"
                className="absolute left-[68px]  top-[71px] z-10 text-white opacity-[0.86]"
                height="30.286"
                viewBox="0 0 5.643 11.286"
              >
                <path
                  id="next_arrow"
                  d="M235.929,529.035,240.965,524l-5.035-5.035Z"
                  transform="translate(-235.678 -518.357)"
                  fill="white"
                  stroke="#333"
                  strokeWidth="0.504"
                />
              </svg>
            )}
          </div>
        ))}
      </div>
      <button className=" border-[1px] border-[#364D2E] px-5  py-1 text-[13px] font-bold text-[#364D2E]">
        VIEW ALL REVIEWS
      </button>
    </section>
  );
}

export default ProductReviews;
