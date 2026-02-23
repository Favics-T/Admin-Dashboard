import React from 'react'
import { members } from './data';
import Avatar from './Avatar';


const cn = (...classes) => classes.filter(Boolean).join(" ");

function AvatarGroup({ ids, limit = 4, className = "" }) {
  const list = ids.slice(0, limit);
  const overflow = ids.length - list.length;
  return (
    <div className={cn("flex -space-x-2", className)} aria-label="assignees">
      {list.map((id) => {
        const m = members.find((x) => x.id === id);
        return (
          <Avatar
            key={id}
            name={m?.name || id}
            className="ring-2 ring-white shadow-sm"
          />
        );
      })}
      {overflow > 0 && (
        <div
          className="inline-flex h-7 w-7 items-center justify-center rounded-full border bg-gray-50 text-[11px] font-semibold ring-2 ring-white"
          aria-label={`+${overflow} more`}
        >
          +{overflow}
        </div>
      )}
    </div>
  );
}


export default AvatarGroup
