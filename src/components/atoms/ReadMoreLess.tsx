import React, { useState } from 'react';

import IconChevronBottom from './IconChevronBottom';

function ReadMoreLess({ description }: { description: string }) {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      <div
        className={`text-[15px] kp-provide-margin-for-p kp-description-style leading-[1.4] overflow-hidden relative 
                ${showContent ? `h-auto` : `h-[62px]`}`}
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
      <button
        onClick={() => setShowContent((prev) => !prev)}
        className="flex w-full items-center justify-center gap-1 border-t border-t-[rgba(66,127,44,0.75)] text-[length:var(--pdp-text-sm)] font-semibold lg:text-[length:var(--pdp-text-base)]"
      >
        {showContent ? (
          <>
            Read Less <IconChevronBottom className="h-auto w-3 rotate-180 " />
          </>
        ) : (
          <>
            Read More <IconChevronBottom className="h-auto w-3" />
          </>
        )}
      </button>
    </>
  );
}

export default ReadMoreLess;
