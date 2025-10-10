import React, { useState } from 'react'
import WizardHeader from './WizardComponets/WizardHeader'
import Stepper from './WizardComponets/WizardHeader';

const Wizard = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className='flex items-center justify-center h-full w-full'>
      <Stepper  />
        
    </div>
  )
}

export default Wizard
