import React from 'react'
import AvatarStack from '../../../components/AvatarStack'

const KanbanCard = ({title, team,days,attach,message}) => {
  return (
    <div className=''>
      {/* sect 1 */}
      <section className='flex justify-between'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-[16px] text-[#3A3541]'>{title}</h1>
            <p className='text-[12px] text-[#89868D]'>{team} </p>
          </div>

          <div>
            <p className='text-[12px] text-[#89868D]'>{days}</p>
          </div>
      </section>

      {/* sect 2 */}
      <section className='flex justify-between'>
        <div className='flex gap-4'>
          <p>{attach}</p>
          <p>{message}</p>
        </div>
        
        <div>
          <AvatarStack />
        </div>
      </section>
    </div>
  )
}

export default KanbanCard
