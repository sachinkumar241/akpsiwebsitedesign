"use client";
import { useState } from "react";
import Image from "next/image";

interface PolaroidPhotoProps {
  src: string;
  alt: string;
  rotationDeg?: number;
}

export default function PolaroidPhoto({ src, alt, rotationDeg = 3 }: PolaroidPhotoProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="bg-white shadow-xl p-3 pb-10 inline-block flex-shrink-0"
      style={{ transform: `rotate(${rotationDeg}deg)` }}
    >
      <div className="relative w-52 h-52 overflow-hidden bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700">
        {!imgError && (
          <Image
            src={src}
            fill
            sizes="208px"
            className="object-cover"
            alt={alt}
            onError={() => setImgError(true)}
          />
        )}
        {imgError && (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-white text-xs font-medium text-center px-4 leading-relaxed">
              Add your photo to<br />/public/polaroid.jpg
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
