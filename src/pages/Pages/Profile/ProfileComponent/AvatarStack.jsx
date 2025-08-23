import React from "react";
import { images } from "./assets/images";

const AvatarStack = ({ size = 8 }) => {
  return (
    <div className={`flex -space-x-3`}>
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Avatar ${idx}`}
          className={`h-${size} w-${size} rounded-full border-2 border-white`}
        />
      ))}
    </div>
  );
};

export default AvatarStack;
