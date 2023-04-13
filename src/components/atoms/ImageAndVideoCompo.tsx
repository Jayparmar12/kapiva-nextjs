import Image from 'next/image';
import { useState } from 'react';

import { DirectLoader } from '@/utils/ImageLoaders';

export function ImageAndVideoCompo(props: {
  img_url: string;
  video_url: string;
  type: string;
  height: number;
  width: number;
  playButtonUrl: string;
}) {
  const [showVideo, setShowVideo] = useState(false);
  const svgPlaceholder =
    'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20400%22%3E%3Crect%20width%3D%22400%22%20height%3D%22400%22%20fill%3D%22%23cccccc%22%3E%3C%2Frect%3E%3C%2Fsvg%3E';
  return (
    <div className={`relative h-full`}>
      <div className="relative">
        <Image
          src={showVideo === true ? svgPlaceholder : props.img_url}
          alt=""
          loading="lazy"
          layout="responsive"
          objectFit="cover"
          objectPosition="center"
          loader={DirectLoader}
          height={props.height}
          width={props.width}
          className={`mx-auto h-auto w-full rounded-md`}
        />
      </div>
      {props.type === 'video' && showVideo === true && (
        <iframe
          className={`absolute inset-0 h-full w-full rounded-md`}
          src={props.video_url || ''}
          allowFullScreen
        ></iframe>
      )}

      {props.type === 'video' && showVideo === false && (
        <button
          className="absolute left-1/2 top-1/2 h-[67px] w-[44px] -translate-y-1/2 -translate-x-1/2 text-[color:var(--cr-primary)]"
          onClick={() => {
            setShowVideo(true);
          }}
        >
          <img src={props.playButtonUrl} className="h-auto max-w-full" alt="" />
        </button>
      )}
    </div>
  );
}
