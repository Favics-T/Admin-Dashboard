import React from 'react'
import Avatar from './Avatar'
import Toolbar from './Toolbar'
import Column from './Column'
import TaskCard from './TaskCard'
import { members, tasks, tokens } from './data'

const Kanban = () => {
  return (
    <div style={{ background: tokens.bg }} className="min-h-screen">
      {/* Header */}
      <header className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-4 px-4 pb-4 pt-6 sm:grid-cols-3">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Overview</h1>
          <p className="mt-0.5 text-sm text-gray-500">
            Edit or modify all cards as you want
          </p>
        </div>
        <div className="sm:col-span-2 flex items-center justify-end">
          <div className="text-sm text-gray-500">Teams Members:</div>
          <div className="ml-3 flex -space-x-2">
            {members.slice(0, 6).map((m) => (
              <Avatar key={m.id} name={m.name} className="ring-2 ring-white" />
            ))}
          </div>
        </div>
      </header>

      {/* Toolbar */}
      <main className="mx-auto max-w-7xl px-4 pb-12">
        <Toolbar />

        {/* Kanban Columns */}
        <div className="mt-6 overflow-x-auto pb-2">
          <div className="flex gap-4">
            <Column title="To Do task" count={tasks.todo.length} accent="#A78BFA">
              {tasks.todo.map((t) => (
                <TaskCard key={t.id} task={t} />
              ))}
            </Column>

            <Column
              title="In Progress A"
              count={tasks.progressA.length}
              accent="#6C5CE7"
            >
              {tasks.progressA.map((t) => (
                <TaskCard key={t.id} task={t} />
              ))}
            </Column>

            <Column
              title="In Progress B"
              count={tasks.progressB.length}
              accent="#6C5CE7"
            >
              {tasks.progressB.map((t) => (
                <TaskCard key={t.id} task={t} />
              ))}
            </Column>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="mt-6 flex justify-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
          <span
            className="h-1.5 w-6 rounded-full"
            style={{ background: tokens.primary }}
          />
          <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
        </div>
      </main>
    </div>
  )
}

export default Kanban
