import React from 'react'
import { tokens } from './data';
import { motion } from "framer-motion";
import {
    Plus,
  } from "lucide-react";


function Column({ title, count, children, accent = tokens.primary }) {
  return (
    <section
      className="w-[280px] sm:w-[320px] md:w-[360px] lg:w-[380px] flex-shrink-0"
      aria-label={title}
    >
      <header
        className="flex items-center justify-between rounded-t-xl border-b bg-white px-4 py-3"
        style={{ borderColor: tokens.border }}
      >
        <div className="flex items-center gap-2">
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{ backgroundColor: accent }}
            aria-hidden="true"
          />
          <h2 className="text-sm font-semibold text-gray-900">{title}</h2>
          <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
            {count}
          </span>
        </div>
        <button
          className="inline-flex items-center gap-1 rounded-full border px-2 py-1 text-xs text-gray-600 hover:bg-gray-50"
          style={{ borderColor: tokens.border }}
          aria-label={`Add task in ${title}`}
        >
          <Plus className="h-4 w-4" /> Add
        </button>
      </header>

      <div className="space-y-3 p-4">
        {children}
        <div
          className="rounded-2xl border-2 border-dashed py-5 text-center text-sm text-gray-400"
          style={{ borderColor: tokens.border }}
          aria-hidden="true"
        >
          Drop here
        </div>
      </div>
    </section>
  );
}

export default Column
