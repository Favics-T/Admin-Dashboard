import { Kanban } from 'lucide-react'
import React from 'react'
import { kanbanData } from '../Kanban/data'
import KanbanComponent from './KanbanComponent'
import ToDoTask from './ToDoTask'
import InProgress1 from './InProgress1'
import InProgress2 from './InProgress2'

const KanbanBody = () => {

  return (
    <div>
      <div className='border grid grid-cols-3   border-gray-200 p-1 rounded-lg'>
      <ToDoTask />
      <InProgress1 />
      <InProgress2 />
      
      </div>
    </div>
  )
}

export default KanbanBody
