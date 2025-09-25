import React from 'react'
import AvatarStack from '../../../components/AvatarStack'

const KanbanComponent = ({title, team,days,attach,message}) => {
  return (
    <div className=''>
        {/* top div */}
        <div className='flex justify-between w-full'>
            {/* left div */}
            <div>
                <h1 className=''>{title}</h1>
                <p>{team}</p>
            </div>

            {/* right div */}
            <div>
                <h1>Icon</h1>
              <p>{days}</p>
            </div>
        </div>

        {/* bottom div */}
        <div className='flex justify-between'>
            <div>
                <p>{attach}</p>
                <p>{message}</p>
            </div>

                
            <AvatarStack />
        </div>

    </div>
  )
}

export default KanbanComponent
