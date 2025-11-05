import React from "react";


export default function Avatar({ src, alt, size = 40 }) {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      loading="lazy"
      className="rounded-full w-[40px] h-[40px] object-cover border border-white shadow-sm flex-shrink-0"
    />
  );
}
