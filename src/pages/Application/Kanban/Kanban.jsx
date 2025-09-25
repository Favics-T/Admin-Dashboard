import React from 'react'
import KanbanHeader from './KanbanHeader'
import KanbanBody from '../KanbanComponents/KanbanBody'

const Kanban = () => {
  return (
    <div className='bg-white p-8 w-full h-full rounded-lg shadow-xl flex flex-col gap-4'>
      <KanbanHeader />
      <KanbanBody />
    </div>
  )
}

export default Kanban
