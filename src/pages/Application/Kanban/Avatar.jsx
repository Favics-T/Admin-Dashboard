import React from 'react'
import { tokens } from './data';
const cn = (...classes) => classes.filter(Boolean).join(" ");


function Avatar({ name, size = 28, className = "" }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-full border text-[11px] font-semibold",
        className
      )}
      style={{
        width: size,
        height: size,
        borderColor: tokens.border,
        background: "#F5F3FF",
        color: tokens.primary,
      }}
      aria-label={name}
      role="img"
    >
      {initials}
    </div>
  );
}

export default Avatar
