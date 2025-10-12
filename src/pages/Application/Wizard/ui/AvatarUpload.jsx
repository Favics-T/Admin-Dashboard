import React, { useRef } from "react";
import Avatar from '../../../../assets/asset/Image1.png'

export default function AvatarUploader({ name = "Profile name", subtitle = "Upload a photo", avatar, onChange }) {
  const fileRef = useRef();

  function handleFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      onChange && onChange(reader.result); 
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className="flex items-center gap-4">
      <div className="flex-shrink-0">
        <div className="relative">
          <img
            src={avatar || `${Avatar}`}
            alt={`${name} avatar`}
            className="w-20 h-20 rounded-full object-cover shadow-sm border border-gray-100"
          />
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            aria-label="Upload profile photo"
            className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-xs shadow-sm"
          >
            ✎
          </button>
        </div>
      </div>

      <div>
        <div className="text-sm font-semibold text-gray-900">{name}</div>
        <div className="text-xs text-gray-500">{subtitle}</div>
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFile}
        />
      </div>
    </div>
  );
}
