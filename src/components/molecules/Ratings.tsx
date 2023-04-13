import React from 'react';

import IconStarEmpty from '../atoms/IconStarEmpty';
import IconStarFull from '../atoms/IconStarFull';
import IconStarHalf from '../atoms/IconStarHalf';

function Ratings({
  rating,
  className,
}: {
  rating: number;
  className?: string;
}) {
  const getStars = () => {
    const StarArray = [];
    const scaled = rating * 2;
    if (scaled < 0 || scaled > 10) {
      StarArray.push(<> Error: Out of bounds</>);
      return StarArray;
    }
    let key = 0;
    for (let i = 1; i <= scaled; i += 1) {
      if (i % 2 === 0) {
        StarArray.push(<IconStarFull key={key} />);
      } else if (i === scaled) {
        StarArray.push(<IconStarHalf key={key} />);
        break;
      }
      key += 1;
    }

    const emptystars = Math.floor((10 - scaled) / 2);
    for (let i = 0; i < emptystars; i += 1) {
      key += 1;
      StarArray.push(<IconStarEmpty key={key} />);
    }
    return StarArray;
  };

  return <div className={`flex  ${className}`}>{getStars()}</div>;
}

export default Ratings;
