import React from 'react'
import StepCircle from './StepCircle'

function Step({ step, isLast }) {
    const {id, title, state} = step;
    const isCurrent = state === 'current';
    const isCompleted = state === 'completed';
    const isUpcoming = state === 'upcoming';

  return (
    <li className="flex md:items-center md:flex-1"
      role="listitem"
       aria-current={isCurrent ? "step" : undefined}>

        <div>
            <StepCircle index={id} state={state} />

            <div className='ml-3 hidden md:block'>
                <div
                className={`text-sm font-semibold ${
                    isCurrent 
                    ? "purple"
                    : isUpcoming
                    ? "text-gray-400"
                    : 'text-gray-700'
                    }`}
                >
                    {title}
                </div>
            </div>

            {/* Line connector */}
            {
                !isLast && (
                    <div className="hidden md:block flex-1" aria-hidden="true">
                            <div className={`h-0.5 mx-6 ${
                                isCompleted ? "bg-[#6e39cb]" : "bg-gray-200"}`} />                          
                    </div>
                )}
        </div>

        {/* mobile view */}
        <div className='md:hidden ml-3'>
            <div
                className={`text-lg font-semibold ${
            isCurrent
              ? "text-[#6E39CB]"
              : isUpcoming
              ? "text-gray-400"
              : "text-gray-700"
          }`}
            >
                {title}
            </div>
        </div>
    </li>
  )
}

export default Step
