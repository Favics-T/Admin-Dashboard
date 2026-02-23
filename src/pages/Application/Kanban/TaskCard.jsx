import React from 'react'
import { motion as Motion } from "framer-motion";
import { tokens } from './data';
import Tag from './Tag.jsx'
import {
    MoreHorizontal,
  MessageSquare,
  Paperclip,
  Clock,
  } from "lucide-react";
  import IconStat from './IconStat';
  import AvatarGroup from './AvatarGroup';

function TaskCard({ task }) {
  return (
    <Motion.article
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group rounded-2xl border bg-white p-4 shadow-sm hover:shadow-md focus-within:ring-2"
      style={{ borderColor: tokens.border }}
      role="article"
      aria-label={task.title}
      tabIndex={0}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-[15px] font-semibold leading-6 text-gray-900">
            {task.title}
          </h3>
          <p className="mt-0.5 text-sm text-gray-500">{task.team}</p>
        </div>
        <button
          className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus-visible:ring-2"
          aria-label="More actions"
        >
          <MoreHorizontal className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      {task.tag && (
        <div className="mt-3">
          <Tag tone={task.tag.tone}>{task.tag.label}</Tag>
        </div>
      )}

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <IconStat icon={MessageSquare} value={task.comments} label="Comments" />
          <IconStat icon={Paperclip} value={task.attachments} label="Attachments" />
        </div>
        <div className="inline-flex items-center gap-1 rounded-full bg-gray-50 px-2 py-1 text-xs text-gray-600">
          <Clock className="h-4 w-4" aria-hidden="true" />
          <span>{task.date} Apr, 2021</span>
        </div>
      </div>

      <div className="mt-4">
        <AvatarGroup ids={task.members} />
      </div>
    </Motion.article>
  );
}

export default TaskCard
