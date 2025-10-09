import React from 'react'
import { members, tokens } from './data';
import {
  Search,
  Calendar,
  Filter,
  MoreHorizontal,
  MessageSquare,
  Paperclip,
  Clock,
  Plus,
  ChevronDown,
} from "lucide-react";
import Avatar from './Avatar';

function Toolbar() {
  return (
    <div
      className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border bg-white px-4 py-3"
      style={{ borderColor: tokens.border }}
      role="region"
      aria-label="Dashboard toolbar"
    >
      <div className="flex flex-1 items-center gap-3 min-w-[240px]">
        <div className="relative flex-1 max-w-[360px]">
          <Search className="pointer-events-none absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <input
            type="search"
            placeholder="Search projects"
            className="w-full rounded-xl border pl-10 pr-3 py-2 text-sm outline-none placeholder:text-gray-400 focus:ring-2"
            style={{ borderColor: tokens.border }}
            aria-label="Search projects"
          />
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <button
            className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
            style={{ borderColor: tokens.border }}
            aria-label="Select date"
          >
            <Calendar className="h-4 w-4" />
            12 Apr, 2021
            <ChevronDown className="h-4 w-4" />
          </button>
          <button
            className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
            style={{ borderColor: tokens.border }}
            aria-label="Apply filter"
          >
            <Filter className="h-4 w-4" />
            Apply Filter
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex -space-x-2">
          {members.slice(0, 6).map((m) => (
            <Avatar key={m.id} name={m.name} className="ring-2 ring-white" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Toolbar
