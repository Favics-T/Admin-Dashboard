import { Kanban } from 'lucide-react'
import React from 'react'
import { kanbanData } from '../data'
import KanbanComponent from './KanbanComponent'
import ToDoTask from './ToDoTask'
import InProgress1 from './InProgress1'
import InProgress2 from './InProgress2'
import CardBody from './CardBody'

const KanbanBody = () => {

  return (
    <div>
      <div className='border p-6 grid grid-cols-3 gap-2   border-gray-200  rounded-lg'>
     {
      kanbanData.map(({type})=>(
        <CardBody type={type}>
          
        </CardBody>
      ))
     }
      
      </div>
    </div>
  )
}

export default KanbanBody
