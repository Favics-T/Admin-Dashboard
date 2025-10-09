import React from 'react'

const cn = (...classes) => classes.filter(Boolean).join(" ");

function Tag({ tone = "ok", children }) {
  const tones = {
    ok: {
      bg: "bg-green-50",
      text: "text-green-700",
      dot: "bg-green-500",
    },
    warn: {
      bg: "bg-amber-50",
      text: "text-amber-700",
      dot: "bg-amber-500",
    },
    high: {
      bg: "bg-rose-50",
      text: "text-rose-700",
      dot: "bg-rose-500",
    },
  };
  const t = tones[tone] || tones.ok;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium",
        t.bg,
        t.text
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", t.dot)} aria-hidden="true" />
      {children}
    </span>
  );
}


export default Tag
