import { useMemo } from "react";
import { AVATAR_COLORS } from "../data";

const Avatar = ({ name, color = "purple" }) => {
  const initials = useMemo(
    () => (name?.match(/\b\w/g) || []).slice(0, 2).join(""),
    [name]
  );
  
  return (
    <div className="relative">
      <div
        className={`h-9 w-9 ${
          AVATAR_COLORS[color] || AVATAR_COLORS.purple
        } rounded-full grid place-items-center text-white text-xs font-semibold`}
      >
        {initials}
      </div>
      <span
        className="absolute -bottom-0.5 -right-0.5 h-3 w-3 bg-emerald-400 border-2 border-white rounded-full"
        aria-hidden
      />
    </div>
  );
};

export default Avatar