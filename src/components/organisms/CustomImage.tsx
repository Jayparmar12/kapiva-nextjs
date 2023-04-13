import React, { useState } from 'react';

function CustomImage({
  children,
  isNotFirst = true,
}: {
  children: (
    imgLoading: boolean,
    setImgLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => React.ReactNode;
  isNotFirst?: boolean;
}) {
  const [imgLoading, setImgLoading] = useState(isNotFirst);
  return <div className="relative">{children(imgLoading, setImgLoading)}</div>;
}

export default CustomImage;
